import { BookmarkInfo } from "@/components/landing/Bookmark/BookmarkContent";
import { deleteBookmark, getBookmark, postBookmark } from "@/libs/api/apis";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

type Bookmark = {
  list: Array<BookmarkInfo>;
  isBookmark: (name: string) => boolean;
  onBookmark: (name: string) => void;
};

const useBookmark = (): Bookmark => {
  const queryClient = useQueryClient();

  const { data: list = [] } = useQuery<Array<BookmarkInfo>>(["bookmarks"], () =>
    getBookmark().then((res) => res.data)
  );

  const deleteMutation = useMutation(deleteBookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
  });

  const postMutation = useMutation(postBookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
  });

  const isBookmark = (name: string): boolean => {
    if (!list) return false;

    return list.some((item) => item.bookmarkGamerName === name);
  };

  const onBookmark = (name: string) => {
    const isBookmarked = isBookmark(name);

    if (isBookmarked) {
      // 이미 북마크가 되어있었던 경우 -> 북마크 제거
      const bookmarkIds = list
        .filter((item) => item.bookmarkGamerName === name)
        .map((item) => item.bookmarkId);
      bookmarkIds.forEach((id) => deleteMutation.mutate(id));
    } else {
      // 북마크가 되어있지 않았던 경우 -> 북마크
      postMutation.mutate(name);
    }
  };

  return { list, isBookmark, onBookmark };
};

export default useBookmark;
