import { useState } from "react";
import Bookmark from "./Bookmark";
import Section from "./Section";
import { dummyBookmarks } from "./dummy";
import EmptyComponent from "./Bookmark/Empty";

const BookmarkSection = () => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <Section
      title="관심 소환사"
      subtitle="총 10명의 소환사까지, 최근 전적을 통합하여 분석할 수 있어요."
    >
      {bookmarks.length > 0 ? (
        <Bookmark datas={bookmarks} />
      ) : (
        <EmptyComponent isLogined={false} />
      )}
    </Section>
  );
};

export default BookmarkSection;
