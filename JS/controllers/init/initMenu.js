import { menuProps } from "../../data/props";
import { MenuView } from "../../views/MenuView";
import { onMenuClick } from "../event/onClick";

const menu = document.querySelector(".menu");

const initEventListener = () => {
  menu.addEventListener("click", onMenuClick);
};

export const initMenu = () => {
  const menuHTML = MenuView(menuProps);
  menu.innerHTML = menuHTML;
  initEventListener();
};
