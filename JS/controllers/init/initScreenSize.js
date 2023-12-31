import { screenSizeHandler } from "../handlers/screenSizeHandler.js";

export const initScreenSize = () => {
  window.addEventListener("resize", screenSizeHandler);
};
