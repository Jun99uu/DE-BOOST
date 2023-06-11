import { useEffect, useState } from "react";
import Bookmark from "./Bookmark";
import Section from "./Section";
import EmptyComponent from "./Bookmark/Empty";
import useLoginState from "@/hooks/useLogined";
import { customApi } from "@/libs/api";

const BookmarkSection = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const { loginState } = useLoginState();

  const getBookmarkList = (token: string) => {
    customApi
      .get("/bookmark", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBookmarks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("at");
    if (token) getBookmarkList(token);
  }, [loginState.isLogined]);

  return (
    <Section
      title="관심 소환사"
      subtitle="총 10명의 소환사까지, 최근 전적을 통합하여 분석할 수 있어요."
    >
      {bookmarks.length > 0 ? (
        <Bookmark datas={bookmarks} />
      ) : (
        <EmptyComponent isLogined={loginState.isLogined} />
      )}
    </Section>
  );
};

export default BookmarkSection;
