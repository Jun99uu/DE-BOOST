import { CircleSquare } from "@/components/common/Loading";
import { NotFound, NotLogined, Profile } from "@/components/search";
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
import NotRegister from "@/components/search/NotRegister";
import dummy from "@assets/dummy.json";
import Contents from "@/components/search/Contents";

/**
 * 검색 결과 페이지
 */
const Search = () => {
  const { name } = useParams();
  const setUserName = useSetRecoilState(userNameState);
  const loginInfo = useRecoilValue(loginState);
  const [data, setData] = useState<SearchResult>(dummy); //TODO 유저 정보 받아오기
  const [loading, setLoading] = useState(true); // TODO 로딩 끝나는 시점 세팅하기

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
    setData(dummy);
    setLoading(false);
  }, []);

  /**로그인하지 않은 경우의 섹션 */
  const IfNotLogined = () => {
    return !loginInfo.isLogined ? <NotLogined /> : <></>;
  };

  /** 검색 결과가 존재하지 않는 경우 */
  const NotFoundSection = () => {
    return !data.searchedBefore && loginInfo.isLogined ? <NotFound /> : <></>; //TODO : 등록 안된 경우와 아예 존재하지 않는 경우 구분 필요
  };

  /** 아직 등록되지 않은 경우 */
  const NotRegisterSection = () => {
    return !data.searchedBefore && loginInfo.isLogined ? (
      <NotRegister />
    ) : (
      <></>
    ); //TODO : 등록 안된 경우와 아예 존재하지 않는 경우 구분 필요
  };

  /** 정보가 있는 경우 */
  const InfoSection = () => {
    return data.searchedBefore && loginInfo.isLogined ? (
      <InfoContainer>
        <Profile data={data} />
        <Contents data={data} />
      </InfoContainer>
    ) : (
      <></>
    );
  };

  return (
    <Container>
      <BackgroundWrapper>
        <Background src={getChampionRandomIllust()} alt="bg" />
        <BackgroundGradient />
      </BackgroundWrapper>
      <IfNotLogined />
      <NotFoundSection />
      <Modal isOpen={loading} onClose={() => null}>
        <CircleSquare />
      </Modal>
      <NotRegisterSection />
      <InfoSection />
    </Container>
  );
};

const Container = styled.div`
  padding: 10rem 0rem 10rem 0rem;
  width: 100%;
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  top: 12rem;

  ${mq[3]} {
    padding: 10rem 0rem 10rem 0rem;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0px;

  ${mq[3]} {
    height: 300px;
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
  background: ${`linear-gradient(to bottom, #00ff0000, #f2f4f6af, #f2f4f6d2,${colors.white})`};
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 2rem;
  z-index: 2;

  ${mq[3]} {
    padding: 0px 10rem;
  }
  ${mq[4]} {
    padding: 0px 30rem;
  }
  ${mq[5]} {
    padding: 0px 38rem;
  }
`;

export default Search;
