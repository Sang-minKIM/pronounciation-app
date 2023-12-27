import { itemData } from "../data/data.js";
import { itemProps } from "../data/props.js";
import { ItemView } from "./ItemView.js";

export const ReadListView = (readList) => {
    return readList
        .map((itemId) => {
            return ItemView(itemData[itemId], itemProps);
        })
        .join(" ");
};
