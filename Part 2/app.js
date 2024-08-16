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

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Part 1 menu links
// let menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

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


const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
//hides sub-menu
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEl.querySelectorAll("nav a");
// console.log(topMenuLinks);

// topMenuEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagname !== "a") return;
// }
// );

topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  console.log(event.target.textContent);
  }
);

