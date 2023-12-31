import { initList } from "./JS/controllers/init/initList.js";
import { initModal } from "./JS/controllers/init/initModal.js";
import { initScreenSize } from "./JS/controllers/init/initScreenSize.js";
import { initMenu } from "./JS/controllers/init/initMenu.js";

(function () {
  initScreenSize();
  initMenu();
  initList();
  initModal();
})();
