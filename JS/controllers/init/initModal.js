import { modalProps } from "../../data/props.js";
import { ModalView } from "../../views/ModalView.js";
import { onModalClick } from "../event/onClick.js";

const dialog = document.querySelector("dialog");

const initEventListener = () => {
    dialog.addEventListener("click", onModalClick);
};

export const initModal = () => {
    const modalHTML = ModalView(modalProps);
    dialog.innerHTML = modalHTML;
    initEventListener();
};
