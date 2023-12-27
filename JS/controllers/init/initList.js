import { renderList } from "../../views/render.js";
import { onListClick } from "../event/onClick.js";

const itemList = document.querySelector(".read-list");

const initEventListeners = () => {
    itemList.addEventListener("click", onListClick);
};

export const initList = () => {
    renderList("todo");
    initEventListeners();
};
