"use strict";

document.getElementById("text-field").addEventListener("focus", function () {
  document.getElementById("box").style.display = "block";
});
document.getElementById("text-field").addEventListener("blur", function () {
  document.getElementById("box").style.display = "none";
});
