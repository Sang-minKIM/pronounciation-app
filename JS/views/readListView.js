import { itemData } from "../data/data.js";
import { itemProps } from "../data/props.js";
import { ItemView } from "./itemView.js";

export const readListView = (readList) => {
    return readList
        .map((itemId) => {
            return ItemView(itemData[itemId], itemProps);
        })
        .join(" ");
};
