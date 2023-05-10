function onPageLoad() {
  let ulElement = document.createElement("ul");
  flavors = ["chocolate", "cookies and cream", "mint chocolate chip"];
  for (let index = 0; index < flavors.length; index++) {
    let liElement = document.createElement("li");
    liElement.append(flavors[index]);
    ulElement.append(liElement);
  };
  document.querySelector("body").append(ulElement);
}

window.addEventListener("load", onPageLoad)