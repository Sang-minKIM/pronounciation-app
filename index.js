import { initList } from "./JS/controllers/init/initList.js";
import { initModal } from "./JS/controllers/init/initModal.js";
import { initMenu } from "./JS/menu.js";

function setScreenSize() {
  //먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 단위 값을 얻습니다.
  let vh = window.innerHeight * 0.01;
  //그런 다음 --vh 사용자 정의 속성의 값을 문서의 루트로 설정합니다.
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", setScreenSize);

(function () {
  setScreenSize();
  initMenu();
  initList();
  initModal();
})();
