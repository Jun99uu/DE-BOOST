import Bookmark from "./Bookmark";
import Section from "./Section";
import { dummyBookmarks } from "./dummy";

const BookmarkSection = () => {
  return (
    <Section
      title="관심 소환사"
      subtitle="총 10명의 소환사까지, 최근 전적을 통합하여 분석할 수 있어요."
    >
      <Bookmark datas={dummyBookmarks} />
    </Section>
  );
};

export default BookmarkSection;
