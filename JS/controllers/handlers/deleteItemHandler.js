import { itemData, listData } from "../../data/data";
import { renderList } from "../../views/render";

const deleteItemData = (deletedItemId, listId) => {
    const newItemList = [...listData[listId]].filter((itemId) => itemId != deletedItemId);
    delete itemData[deletedItemId];
    listData[listId] = newItemList;
    localStorage.setItem("listData", JSON.stringify(listData));
};

const deleteItem = (target) => {
    const deletedItemId = target.closest(".item").id;
    const listId = target.closest(".read-list").id;
    deleteItemData(deletedItemId, listId);
    renderList(listId);
};

export const deleteItemHandler = (target) => {
    const confirmDelete = confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
        deleteItem(target);
    }
};
