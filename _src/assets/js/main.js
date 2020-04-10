"use strict";
const cursor = document.querySelector(".cursor");
cursor.addEventListener("mousemove", (ev) => {
  cursor.setAttribute("style", `top: ${ev.page} px; left: ${ev.pageX}`);
});
