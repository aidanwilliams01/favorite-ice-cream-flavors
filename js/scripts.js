function onPageLoad() {
  let ulElement = document.createElement("ul");
  flavors = ["chocolate", "cookies and cream", "mint chocolate chip"];
  flavors.forEach(function(flavor) {
    let liElement = document.createElement("li");
    liElement.append(flavor);
    ulElement.append(liElement);
  });
  document.querySelector("body").append(ulElement);
}

window.addEventListener("load", onPageLoad)