import "./src/styles/global.css"
import React from "react";

export const onClientEntry = () => {
  const script = document.createElement("script");
  script.src = "https://cloud.umami.is/script.js";
  script.defer = true;
  script.dataset.websiteId = "3f1f92a1-0041-42ce-add6-c03b50a193ca";
  document.head.appendChild(script);
};
