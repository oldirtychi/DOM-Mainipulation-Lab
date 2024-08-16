const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
console.log(mainEl);
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((obj) => {
  let linkEl = document.createElement("a");
  linkEl.href = obj.href;
  linkEl.textContent = obj.text;
  topMenuEl.appendChild(linkEl);
});

// let link = menuLinks.map((obj) => {
//   let linkEl = document.createElement("a");
//   linkEl.innerHTML = obj.text;
//   linkEl.href = obj.href;
//   return;
// });
