import { modalProps } from "../../data/props.js";
import { ModalView } from "../../views/ModalView.js";

const dialog = document.querySelector("dialog");

export const initModal = () => {
    const modalHTML = ModalView(modalProps);
    dialog.innerHTML = modalHTML;
};
