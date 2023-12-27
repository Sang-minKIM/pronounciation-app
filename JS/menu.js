import { onMenuClick } from "./controllers/event/onClick.js";
import { menuProps } from "./data/props.js";

const menu = document.querySelector(".menu");

export const MenuView = ({ add, low, high, speedText }) => {
    return ` <button class="add-item">${add}</button>
    <article class="menu__speed">
        <button class="menu__speed--low">${low}</button>
        <span class="menu__speed__text">${speedText}</span>
        <button class="menu__speed--high">${high}</button>
    </article>`;
};

const initEventListener = () => {
    menu.addEventListener("click", onMenuClick);
};

export const initMenu = () => {
    const menuHTML = MenuView(menuProps);
    menu.innerHTML = menuHTML;
    initEventListener();
};
