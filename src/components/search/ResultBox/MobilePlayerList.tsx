import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ComponentProps } from "react";
import { GameData } from "../interface";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "@/styles/tokens";
import { getPortrait } from "@/libs/getRes";
import { useNavigate } from "react-router-dom";

interface Props {
  my: Array<GameData>;
  enemy: Array<GameData>;
  win: boolean;
}

const MobilePlayerList = ({ my, enemy, win }: Props) => {
  const options: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel(options);
  const myStyle = win ? winStyle : loseStyle;
  const enemyStyle = win ? loseStyle : winStyle;

  const moveToOne = (name: string) => {
    navigate(`/search/${name}`);
  };

  return (
    <Sandbox>
      <Carousel>
        <Embla>
          <Viewport ref={emblaRef}>
            <Container>
              {my.map((item, idx) => (
                <OneItem
                  onClick={() => moveToOne(item.summonerName)}
                  css={css`
                    ${myStyle};
                    ${idx === 0 ? leftStyle : ""};
                  `}
                  key={item.championName}
                >
                  <Icon
                    src={getPortrait(item.championName)}
                    alt={item.summonerName}
                  />
                </OneItem>
              ))}
              {enemy.map((item, idx) => (
                <OneItem
                  onClick={() => moveToOne(item.summonerName)}
                  css={css`
                    ${enemyStyle};
                    ${idx === 4 ? rightStyle : ""};
                  `}
                  key={item.championName}
                >
                  <Icon
                    src={getPortrait(item.championName)}
                    alt={item.summonerName}
                  />
                </OneItem>
              ))}
            </Container>
          </Viewport>
        </Embla>
      </Carousel>
    </Sandbox>
  );
};

const SlideSpacing = "1rem";
const SlideSize = "50%";
const SlideHeight = "19rem";

const Sandbox = styled.main`
  width: 100vw;
`;

const Carousel = styled.section`
  position: relative;
  background-color: var(--background-code);

  @media (max-width: 749px) {
    border-top: 0.1rem solid var(--detail-low-contrast);
    border-bottom: 0.1rem solid var(--detail-low-contrast);
  }

  @media (min-width: 750px) {
    border-radius: 0.4rem;
    border: 0.1rem solid var(--detail-low-contrast);
  }
`;

const Embla = styled.div`
  --slide-spacing: ${SlideSpacing};
  --slide-size: ${SlideSize};
  --slide-height: ${SlideHeight};
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  flex-direction: row;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const OneItem = styled.div`
  height: 6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  margin-left: 1rem;
  flex: 0 0 6rem;
  position: relative;
`;

const winStyle = css`
  border: 1px solid ${colors.primary};
  background: ${colors.primary10};
`;

const loseStyle = css`
  border: 1px solid ${colors.negative};
  background: ${colors.negative10};
`;

const Icon = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
`;

const leftStyle = css`
  margin-left: 4rem;
`;

const rightStyle = css`
  margin-right: 4rem;
`;

export default MobilePlayerList;
