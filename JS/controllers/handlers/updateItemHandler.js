import { itemData } from "../../data/data.js";
import { renderList } from "../../views/render.js";
import { showDialog } from "./modalHandler.js";

const dialog = document.querySelector(".modal");

const updateItemData = (updatedItemId, formData) => {
    const text = formData.get("text");

    itemData[updatedItemId] = { ...itemData[updatedItemId], text };
    localStorage.setItem("itemData", JSON.stringify(itemData));
};

const updateItem = (updatedItemId, formData) => {
    // const listId = updateBtn.closest(".read-list").id;
    const listId = "todo";
    updateItemData(updatedItemId, formData);
    renderList(listId);
};

const fillFormWithItemData = (itemId) => {
    dialog.querySelector("#sentence").value = itemData[itemId].text;
};

export const updateItemHandler = (updateBtn) => {
    const itemId = updateBtn.closest(".item").id;

    showDialog();
    fillFormWithItemData(itemId);

    dialog.addEventListener("submit", onUpdateSubmit);

    function onUpdateSubmit(event) {
        const form = event.target;
        const data = new FormData(form);
        updateItem(itemId, data);
        form.reset();
        dialog.removeEventListener("submit", onUpdateSubmit);
    }
};
