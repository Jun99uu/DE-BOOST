import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";

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
    Object.keys(response).length && (
      <NotionRenderer blockMap={response} fullPage={true} />
    )
  );
};

export default About;
