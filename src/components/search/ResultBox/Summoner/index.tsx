import { GameData } from "../../interface";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Container, Win, basic, lose, win } from "./style";
import PortraitSection from "./PortraitSection";
import SpellSection from "./SpellSection";
import InfoSection from "./InfoSection";
import ItemSection from "./ItemSection";
import WardSection from "./WardSection";

interface Props extends React.ComponentProps<"div"> {
  endTime?: number;
  info: GameData;
  type?: Win;
}

/**
 * 검색된 플레이어 본인에 대한 박스
 */
const Summoner = ({ info, endTime, type, ...props }: Props) => {
  const [styleType, setStyleType] = useState(css``);

  useEffect(() => {
    if (type) {
      switch (type) {
        case "win":
          setStyleType(win);
          break;
        case "lose":
          setStyleType(lose);
          break;
        case "basic":
          setStyleType(basic);
          break;
      }
    } else setStyleType(css``);
  }, []);

  return (
    <Container css={styleType} win={type} {...props}>
      <PortraitSection info={info} />
      <SpellSection info={info} />
      <InfoSection info={info} endTime={endTime} />
      <ItemSection info={info} />
      <WardSection info={info} />
    </Container>
  );
};

export default Summoner;
