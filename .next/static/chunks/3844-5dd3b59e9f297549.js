"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3844],{153:function(e,s){s.Z=function(e){var s=[];if(!e.parentNode)return s;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&s.push(n),n=n.nextSibling;return s}},8525:function(e,s){s.Z=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach(function(e){e.innerHTML=e.innerHTML.replace(" / ","")})}},3040:function(e,s,n){n.r(s),n.d(s,{default:function(){return c}});var l=n(2265),a=function(){Pace.on("start",function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")}),Pace.on("done",function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")}),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")})},i=n(7437),c=function(){return(0,l.useEffect)(function(){setTimeout(function(){"undefined"!=typeof Pace&&a()},1e3)}),(0,i.jsxs)("div",{className:"hideX",children:[(0,i.jsxs)("div",{className:"loading",children:[(0,i.jsx)("span",{children:"L"}),(0,i.jsx)("span",{children:"o"}),(0,i.jsx)("span",{children:"a"}),(0,i.jsx)("span",{children:"d"}),(0,i.jsx)("span",{children:"i"}),(0,i.jsx)("span",{children:"n"}),(0,i.jsx)("span",{children:"g"})]}),(0,i.jsx)("div",{id:"preloader"})]})}},1442:function(e,s,n){n.r(s),n.d(s,{default:function(){return t}});var l=n(2265),a=n(1694),i=n(153),c=function(e,s){e.style.left=s},d=function(e,s){setTimeout(function(){},e)},r=function(){function e(){window.scrollTo(0,0)}var s=!1,n=document.querySelector(".topnav.dark"),l=document.querySelector(".topnav.dark .logo img"),r=document.querySelector(".topnav .menu-icon");r&&(r.addEventListener("click",function(){s=!s,document.querySelector(".hamenu").classList.toggle("open"),s?(c(document.querySelector(".hamenu"),"0px"),document.querySelector(".topnav .menu-icon .text ").classList.add("open"),n&&n.classList.add("navlit"),l&&l.setAttribute("src",a.E8),window.addEventListener("scroll",e)):(d(300,c(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon .text").classList.remove("open"),n&&n.classList.remove("navlit"),l&&l.setAttribute("src",a.Q1),window.removeEventListener("scroll",e))}),document.querySelectorAll(".main-menu a").forEach(function(s){s.addEventListener("click",function(){d(300,c(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon .text").classList.remove("open"),n&&n.classList.remove("navlit"),l&&l.setAttribute("src",a.Q1),window.removeEventListener("scroll",e)})})),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(function(e){e.addEventListener("mouseenter",function(){this.style.opacity="1",(0,i.Z)(this).forEach(function(e){e.style.opacity=".5"})}),e.addEventListener("mouseleave",function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(function(e){e.style.opacity="1"})})}),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".main-menu").classList.add("gosub"),(0,i.Z)(this.parentNode.parentNode).forEach(function(e){e.childNodes[1]&&e.childNodes[1].classList.remove("sub-open")}),this.parentNode.parentNode.childNodes[1].classList.add("sub-open")})}),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")})})},o=n(7437),t=function(e){var s=e.theme;return(0,l.useEffect)(function(){r()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{id:"navi",className:"topnav ".concat(s&&"light"===s?"light":""),children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)("a",{href:"#0",children:"light"===s?(0,o.jsx)("img",{src:"/img/logo-dark.png",alt:"logo"}):(0,o.jsx)("img",{src:"/img/logo-light.png",alt:"logo"})})}),(0,o.jsxs)("div",{className:"menu-icon",children:[(0,o.jsxs)("span",{className:"icon",children:[(0,o.jsx)("i",{}),(0,o.jsx)("i",{})]}),(0,o.jsx)("span",{className:"text","data-splitting":!0,children:(0,o.jsx)("span",{className:"menu-text",children:"Menu"})})]})]})}),(0,o.jsx)("div",{className:"hamenu",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-9 col-md-8",children:(0,o.jsx)("div",{className:"menu-links",children:(0,o.jsxs)("ul",{className:"main-menu",children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"link dmenu",children:[(0,o.jsx)("span",{className:"nm",children:"01."}),"Home",(0,o.jsx)("i",{className:"fas fa-angle-right"})]})}),(0,o.jsx)("div",{className:"sub-menu",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"sub-link back",children:[(0,o.jsx)("i",{className:"pe-7s-angle-left"})," Go Back"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home1-dark",children:[(0,o.jsx)("span",{className:"nm",children:"01."}),"Main Home"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home2-dark",children:[(0,o.jsx)("span",{className:"nm",children:"02."}),"Creative Agency"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home5-dark",children:[(0,o.jsx)("span",{className:"nm",children:"03."}),"Digital Agency"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home4-dark",children:[(0,o.jsx)("span",{className:"nm",children:"04."}),"Business One Page"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home3-dark",children:[(0,o.jsx)("span",{className:"nm",children:"05."}),"Corporate"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home6-dark",children:[(0,o.jsx)("span",{className:"nm",children:"06."}),"Modern Agency"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home7-dark",children:[(0,o.jsx)("span",{className:"nm",children:"07."}),"Freelancer"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/homepage/home8-dark",children:[(0,o.jsx)("span",{className:"nm",children:"08."}),"Architecture"]})})})]})})]}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"link",href:"/about/about-dark",children:[(0,o.jsx)("span",{className:"nm",children:"02."}),"About Us"]})})}),(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"link dmenu",children:[(0,o.jsx)("span",{className:"nm",children:"03."}),"Works",(0,o.jsx)("i",{className:"fas fa-angle-right"})]})}),(0,o.jsx)("div",{className:"sub-menu",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"sub-link back",children:[(0,o.jsx)("i",{className:"pe-7s-angle-left"})," Go Back"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/showcase/showcase-dark",children:[(0,o.jsx)("span",{className:"nm",children:"01."}),"ShowCase Parallax"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/showcase3/showcase3-dark",children:[(0,o.jsx)("span",{className:"nm",children:"02."}),"ShowCase Carousel"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/showcase2/showcase2-dark",children:[(0,o.jsx)("span",{className:"nm",children:"03."}),"ShowCase Circle"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/works/works-dark",children:[(0,o.jsx)("span",{className:"nm",children:"04."}),"Portfolio Masonry"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/works2/works2-dark",children:[(0,o.jsx)("span",{className:"nm",children:"05."}),"Portfolio Filtering"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/works3/works3-dark",children:[(0,o.jsx)("span",{className:"nm",children:"06."}),"Portfolio Gallery"]})})})]})})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"link dmenu",children:[(0,o.jsx)("span",{className:"nm",children:"04."}),"Blogs",(0,o.jsx)("i",{className:"fas fa-angle-right"})]})}),(0,o.jsx)("div",{className:"sub-menu",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("span",{className:"sub-link back",children:[(0,o.jsx)("i",{className:"pe-7s-angle-left"})," Go Back"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/blog/blog-dark",children:[(0,o.jsx)("span",{className:"nm",children:"01."}),"Blog Standerd"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/blog-list/blog-list-dark",children:[(0,o.jsx)("span",{className:"nm",children:"02."}),"Blog List"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/blog-grid/blog-grid-dark",children:[(0,o.jsx)("span",{className:"nm",children:"03."}),"Blog Grid"]})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"sub-link",href:"/blog-details/blog-details-dark",children:[(0,o.jsx)("span",{className:"nm",children:"04."}),"Blog Details"]})})})]})})]}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"o-hidden",children:(0,o.jsxs)("a",{className:"link",href:"/contact/contact-dark",children:[(0,o.jsx)("span",{className:"nm",children:"05."}),"Contact"]})})})]})})}),(0,o.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,o.jsxs)("div",{className:"cont-info",children:[(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("h6",{children:"Phone :"}),(0,o.jsx)("p",{children:"+03 762-2367-723"})]}),(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("h6",{children:"Address :"}),(0,o.jsx)("p",{children:"541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io"})]}),(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("h6",{children:"Email :"}),(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"#0",children:"Vie_website@gmail.com"})})]})]})})]})})})]})}},1694:function(e){e.exports=JSON.parse('{"E8":"/img/logo-dark.jpg","Q1":"/img/logo-dark.jpg"}')}}]);