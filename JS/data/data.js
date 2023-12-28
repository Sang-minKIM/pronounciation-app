const storageListData = localStorage.getItem("listData");
const storageItemData = localStorage.getItem("itemData");

export const listData = storageListData
  ? JSON.parse(storageListData)
  : {
      todo: ["item1"],
      /*will update
        done:[]
    */
    };
export const itemData = storageItemData
  ? JSON.parse(storageItemData)
  : {
      item1: {
        text: "간장공장 공장장은 강공장장이고, 된장공장 공장장은 공 공장장이다.",
        id: "item1",
      },
    };
