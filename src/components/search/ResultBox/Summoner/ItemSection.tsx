import { getItem } from "@/libs/getRes";
import { GameData } from "../../interface";
import { EmptyBox, ItemWrapper, ResIcon } from "./style";

interface Props {
  info: GameData;
}

/**아이템 부분(와드 제외) */
const ItemSection = ({ info }: Props) => {
  const items = [
    getItem(info.item0),
    getItem(info.item1),
    getItem(info.item2),
    getItem(info.item3),
    getItem(info.item4),
    getItem(info.item5),
  ];
  return (
    <ItemWrapper>
      {items.map((item) =>
        item ? <ResIcon src={item} key={item} /> : <EmptyBox />
      )}
    </ItemWrapper>
  );
};

export default ItemSection;
