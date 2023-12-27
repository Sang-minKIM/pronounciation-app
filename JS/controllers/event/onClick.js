import { addItemHandler } from "../handlers/addItemHandler.js";
import { deleteItemHandler } from "../handlers/deleteItemHandler.js";
import { closeDialog } from "../handlers/modalHandler.js";
import { openItemHandler } from "../handlers/openItemHandler.js";
import { changeSpeedHandler, readItemHandler } from "../handlers/readHandler.js";
import { updateItemHandler } from "../handlers/updateItemHandler.js";

const clickHandlerMap = {
    item__text: openItemHandler,
    "add-item": addItemHandler,
    "delete-item": deleteItemHandler,
    "update-item": updateItemHandler,
    "read-item": readItemHandler,
    "menu__speed--low": changeSpeedHandler,
    "menu__speed--high": changeSpeedHandler,
};

export const onMenuClick = (event) => {
    const { target } = event;
    const executeHandler = clickHandlerMap[target.classList[0]];
    if (executeHandler) {
        executeHandler(target);
    }
};

export const onListClick = (event) => {
    const { target } = event;
    const executeHandler = clickHandlerMap[target.classList[0]];

    if (executeHandler) {
        executeHandler(target);
    }
};

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
