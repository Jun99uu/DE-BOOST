import { Helmet } from "react-helmet-async";
import OG from "@assets/og.png";

interface Props {
  title?: string;
  description?: string;
  keywords?: Array<string>;
  ogImage?: string;
}

const defaultData = {
  title: "DE:BOOST",
  description:
    "최신 트랜스포머 모델을 기반의 DE:BOOST 솔루션으로, 리그오브레전드의 대리 플레이어를 손쉽게 탐지해보세요.",
  keywords: [
    "리그오브레전드",
    "League of Legends",
    "대리",
    "롤 대리",
    "부스팅",
    "elo부스팅",
    "ELO",
    "ELO Boosting",
    "대리신고",
    "대리 신고",
    "롤 대리 신고",
    "롤 신고",
    "게임 대리",
    "대리충",
    "LOL",
    "ELO 부스팅",
    "Free",
    "Gamer",
    "인공지능",
    "AI",
    "AI대리플레이",
    "AI신고",
    "AI탐지",
    "AI탐지봇",
    "DE:BOOST",
    "DEBOOST",
    "디부스트",
  ],
  ogImage: OG,
};

const Seo = ({
  title = defaultData.title,
  description = defaultData.description,
  keywords = defaultData.keywords,
  ogImage = defaultData.ogImage,
}: Props) => {
  const domain = "https://deboost.site"; //대표 도메인

  return (
    <Helmet>
      <title>{`${title} | DE:BOOST, 세상에 없던 AI 대리 탐지 솔루션 디부스트`}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={domain} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={domain} />
    </Helmet>
  );
};

export default Seo;
