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
import { useRecoilValue, useSetRecoilState } from "recoil";
import NotRegister from "@/components/search/NotRegister";
import Contents from "@/components/search/Contents";
import { useParams } from "react-router-dom";
import { getSearchNextCursor, getSearchResult } from "@/libs/api/apis";
import Seo from "@/components/common/Seo";

/**
 * 검색 결과 페이지
 */
const Search = () => {
  const { name } = useParams();
  const setUserName = useSetRecoilState(userNameState);
  const loginInfo = useRecoilValue(loginState);
  const [data, setData] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState(1);
  const [end, setEnd] = useState(false); //무한 스크롤이 끝났는가
  const [goUpdate, setGoUpdate] = useState(false);

  const getSearchData = () => {
    getSearchResult(name!)
      .then((res) => {
        settingData(res.data);
        settingSummonerName(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setData(null);
        setLoading(false);
      });
  };

  const getNextPage = () => {
    if (data && !loading && !end) {
      setLoading(true);
      getSearchNextCursor(name!, cursor)
        .then((res) => {
          console.log(res);
          setData({
            ...data,
            gameInfos: [...data.gameInfos, ...res.data.gameInfos],
          });
          setCursor((prev) => prev + 1);
          setLoading(false);
          if (res.data.gameInfos.length < 10) setEnd(true);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const update = () => {
    if (data && !loading && !data.updated) {
      setGoUpdate(true);
    }
  };

  const onLoading = (state: boolean) => {
    setLoading(state);
  };

  const settingData = (data: SearchResult | null) => {
    setData(data);
    setGoUpdate(false);
  };

  const settingSummonerName = (data: SearchResult) => {
    setUserName({
      name: data.summonerInfo.summonerName,
      tier: data.summonerInfo.tier,
      rank: data.summonerInfo.rank,
    });
  };

  useEffect(() => {
    setLoading(true);
    getSearchData();
  }, [name]);

  useEffect(() => {
    if (data) settingSummonerName(data);
  }, [data]);

  /**로그인하지 않은 경우의 섹션 */
  const IfNotLogined = () => {
    return !loginInfo.isLogined ? <NotLogined /> : <></>;
  };

  /** 검색 결과가 존재하지 않는 경우 */
  const NotFoundSection = () => {
    return !data && loginInfo.isLogined && !loading ? <NotFound /> : <></>;
  };

  /** 아직 등록되지 않은 경우, 최신화 안된 경우 */
  const NotRegisterSection = () => {
    return data &&
      (!data.searchedBefore || !data.updated || goUpdate) &&
      loginInfo.isLogined ? (
      <NotRegister settingData={settingData} onLoading={onLoading} />
    ) : (
      <></>
    );
  };

  /** 정보가 있는 경우 */
  const InfoSection = () => {
    return data && data.searchedBefore && loginInfo.isLogined ? (
      <InfoContainer>
        <Profile data={data} update={update} />
        <Contents data={data} loadMore={getNextPage} end={end} />
      </InfoContainer>
    ) : (
      <></>
    );
  };

  return (
    <Container>
      <Seo title={`${name}`} />
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
    height: 350px;
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
  background: ${`linear-gradient(to bottom, #00ff0000,  #f2f4f6d2,${colors.white})`};
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
