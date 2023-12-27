import { listData } from "../data/data.js";
import { ReadListView } from "./ReadListView.js";

export const renderList = (listId) => {
    const readListContainer = document.querySelector(".read-list");
    readListContainer.innerHTML = ReadListView(listData[listId]);
};
