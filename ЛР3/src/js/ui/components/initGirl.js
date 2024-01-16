import girlData from "../../mockData/girlData.js";
import { girlTemplate } from "../templates/girlTemplate.js";

const initGirl = () => {
  const girlNode = document.querySelector(".girl");

  girlNode.insertAdjacentHTML(
    "beforeend",
    girlTemplate(girlData)
  );
};

export default initGirl;