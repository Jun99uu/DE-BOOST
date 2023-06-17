import Bookmark from "./Bookmark";
import Section from "./Section";
import EmptyComponent from "./Bookmark/Empty";
import useLoginState from "@/hooks/useLogined";
import useBookmark from "@/hooks/useBookmark";
import { useEffect, useState } from "react";

const BookmarkSection = () => {
  const { loginState } = useLoginState();
  const { list } = useBookmark();
  const [bookmarkLists, setBookmarkLists] = useState(list);

  useEffect(() => {
    if (bookmarkLists.length === 0) setBookmarkLists(list);
  }, [list]);

  return (
    <Section
      title="관심 소환사"
      subtitle="총 10명의 소환사까지, 최근 전적을 통합하여 분석할 수 있어요."
    >
      {bookmarkLists.length > 0 ? (
        <Bookmark datas={bookmarkLists} />
      ) : (
        <EmptyComponent isLogined={loginState.isLogined} />
      )}
    </Section>
  );
};

export default BookmarkSection;
