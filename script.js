"use strict";
const release = window.TTR_RELEASE;
const download = document.getElementById("download-button");
if (release?.published && /^https:\/\/github\.com\/Six-Children-Productions\/turbo-toy-racers\/releases\/download\//i.test(release.downloadUrl)) {
  download.href = release.downloadUrl;
  document.getElementById("release-status").textContent = `Windows 64-bit · ZIP download · ${release.size}`;
}
const dialog = document.getElementById("image-dialog");
let opener;
document.querySelectorAll(".zoom-image").forEach(button => button.addEventListener("click", () => {
  opener = button;
  const source = button.querySelector("img");
  const image = dialog.querySelector("img");
  image.src = source.src;
  image.alt = source.alt;
  dialog.querySelector("p").textContent = source.alt;
  dialog.showModal();
}));
dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => opener?.focus());
