import { listData } from "../data/data.js";
import { readListView } from "./readListView.js";

export const renderList = (listId) => {
    const readListContainer = document.querySelector(".read-list");
    readListContainer.innerHTML = readListView(listData[listId]);
};
