import { closeDialog } from "../handlers/modalhandler.js";

export const onModalClick = (event) => {
    const { target } = event;
    let form = null;
    if (target.nodeName === "DIALOG") {
        form = target.lastChild;
        closeDialog(form);
        return;
    }
    if (target.classList.contains("modal__form--close")) {
        form = target.form;
        closeDialog(form);
        return;
    }
};
