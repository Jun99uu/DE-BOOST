import { CircleSquare } from "@/components/common/Loading";
import { NotFound, NotLogined } from "@/components/search";
import { SearchResult } from "@/components/search/interface";
import { getChampionRandomIllust } from "@/libs/champions";
import { loginState } from "@/store/loginAtom";
import { userNameState } from "@/store/usernameAtom";
import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import styled from "@emotion/styled";
import { Modal } from "@qve-ui/qds";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

/**
 * 검색 결과 페이지
 */
const Search = () => {
  const { name } = useParams();
  const setUserName = useSetRecoilState(userNameState);
  const loginInfo = useRecoilValue(loginState);
  const [data, setData] = useState<SearchResult>(); //TODO 유저 정보 받아오기
  const [loading, setLoading] = useState(true);

  const settingSummonerName = () => {
    if (name && data) {
      setUserName({
        name: name,
        tier: data.summonerInfo.tier,
      });
    }
  };

  useEffect(() => {
    settingSummonerName();
  }, []);

  /**로그인하지 않은 경우의 섹션 */
  const IfNotLogined = () => {
    return !loginInfo.isLogined ? <NotLogined /> : <></>;
  };

  /** 검색 결과가 존재하지 않는 경우 */
  const NotFoundSection = () => {
    return !data && loginInfo.isLogined ? <NotFound /> : <></>;
  };

  return (
    <Container>
      <BackgroundWrapper>
        <Background src={getChampionRandomIllust()} alt="bg" />
        <BackgroundGradient />
      </BackgroundWrapper>
      <IfNotLogined />
      <NotFoundSection />
      {/* <Modal isOpen={loading} onClose={() => null}>
        <CircleSquare />
      </Modal> */}
    </Container>
  );
};

const Container = styled.div`
  padding: 10rem 0rem 10rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  top: 12rem;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0px;
  left: 0px;

  ${mq[3]} {
    height: 550px;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: ${`linear-gradient(to bottom, #00ff0000, #f2f4f6bb,${colors.white})`};
`;

export default Search;
