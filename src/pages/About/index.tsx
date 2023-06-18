import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";
import Seo from "@/components/common/Seo";

const About = () => {
  const [response, setResponse] = useState({});

  const settingRes = () => {
    const NOTION_PAGE_ID = import.meta.env.VITE_NOTION_KEY;
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  };

  useEffect(() => {
    settingRes();
  }, []);
  return (
    <>
      <Seo
        title="About DE:BOOST"
        description="DE:BOOST가 대리 플레이어를 탐지하는 방법이 궁금하다면?"
      />
      {Object.keys(response).length && (
        <NotionRenderer blockMap={response} fullPage={true} />
      )}
    </>
  );
};

export default About;
