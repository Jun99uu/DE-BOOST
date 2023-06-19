import Bookmark from "./Bookmark";
import Section from "./Section";
import EmptyComponent from "./Bookmark/Empty";
import useLoginState from "@/hooks/useLogined";
import useBookmark from "@/hooks/useBookmark";
import { useEffect, useState } from "react";
import { getBookmark } from "@/libs/api/apis";

const BookmarkSection = () => {
  const { loginState } = useLoginState();
  const { list } = useBookmark(loginState.isLogined);
  const [bookmarkLists, setBookmarkLists] = useState(list);

  const initalSettingBookmarks = () => {
    if (loginState.isLogined)
      getBookmark().then((res) => setBookmarkLists(res.data));
  };

  useEffect(() => {
    if (bookmarkLists.length === 0 && loginState.isLogined)
      setBookmarkLists(list);
  }, [list]);

  useEffect(() => {
    initalSettingBookmarks();
  }, [loginState.isLogined]);

  return (
    <Section
      title="관심 소환사"
      subtitle="관심 있는 소환사를 북마크하고, 쉽게 확인해보세요!"
    >
      {bookmarkLists && bookmarkLists.length > 0 ? (
        <Bookmark datas={bookmarkLists} />
      ) : (
        <EmptyComponent isLogined={loginState.isLogined} />
      )}
    </Section>
  );
};

export default BookmarkSection;
