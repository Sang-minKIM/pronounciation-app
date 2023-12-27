import { itemData, listData } from "../../data/data.js";
import { renderList } from "../../views/render.js";
import { showDialog } from "./modalHandler.js";

const dialog = document.querySelector(".modal");

let listId = "todo";

const addItemData = (newItem) => {
    listData[listId].push(newItem.id);
    itemData[newItem.id] = newItem;
};

const addItem = (itemFormData) => {
    let newItem = Object.fromEntries(itemFormData);
    addItemData(newItem);
    renderList(listId);
};

const setFormData = (form) => {
    const newFormData = new FormData(form);
    let uuid = self.crypto.randomUUID();
    newFormData.append("id", uuid);
    return newFormData;
};

const onAddSubmit = (event) => {
    const form = event.target;
    const newFormData = setFormData(form);

    addItem(newFormData);

    form.reset();
    dialog.removeEventListener("submit", onAddSubmit);
};

export const addItemHandler = (event) => {
    showDialog();
    dialog.addEventListener("submit", onAddSubmit);
};
