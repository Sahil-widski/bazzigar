"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3395],{487:function(e,s){s.Z=function(){var e=document.getElementsByClassName("thumparallax-down");e&&new simpleParallax(e,{orientation:"down",delay:1,scale:1.1})}},1100:function(e,s,a){a.d(s,{Z:function(){return n}});var i=0,t=function(e,s){setInterval(void((i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(i+=1,e.style.opacity=i):clearInterval(0)),s)},l=function(e,s){setInterval(void((i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(i=0,e.style.opacity=i):clearInterval(0)),s)},n=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var s=document.createElement("div");s.classList.add("div-tooltip-sub"),document.body.appendChild(s),document.querySelectorAll("[data-tooltip-tit]").forEach(function(s){e=document.querySelector(".div-tooltip-tit"),s.addEventListener("mouseover",function(){e.innerText=s.getAttribute("data-tooltip-tit")}),s.addEventListener("mousemove",function(s){t(e,800),e.style.top=s.pageY+10+"px",e.style.left=s.pageX+20+"px",e.style.padding="0px 10px"}),s.addEventListener("mouseleave",function(){l(e,800),e.style.padding=0})}),document.querySelectorAll("[data-tooltip-sub]").forEach(function(e){s=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",function(){s.innerText=e.getAttribute("data-tooltip-sub")}),e.addEventListener("mousemove",function(e){t(s,800),s.style.top=e.pageY-15+"px",s.style.left=e.pageX+30+"px",s.style.padding="5px 10px"}),e.addEventListener("mouseleave",function(){l(s,800),s.style.padding=0})})}},1487:function(e,s,a){a.r(s);var i=a(7022),t=a(2265),l=a(1396),n=a.n(l),r=a(2145),c=a(2022),d=a(8525),o=a(487),m=a(7437);function p(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,i)}return a}function h(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?p(Object(a),!0).forEach(function(s){(0,i.Z)(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}var u={modules:[c.tl,c.W_,c.VS,c.xW],speed:800,effect:"fade",spaceBetween:0,loop:!0,parallax:!0,slidesPerView:1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"},onSwiper:function(e){for(var s=0;s<e.slides.length;s++)e.slides[s].childNodes[0].childNodes[0].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width)}},x={modules:[c.tl,c.W_],speed:800,slidesPerView:1,spaceBetween:0,loop:!0,navigation:{prevEl:".controls .swiper-button-prev",nextEl:".controls .swiper-button-next"},pagination:{type:"fraction",clickable:!0,el:".controls .swiper-pagination"}};s.default=function(){return(0,t.useEffect)(function(){(0,d.Z)(),(0,o.Z)()},[]),(0,m.jsx)("section",{className:"blog-crv sub-bg",children:(0,m.jsx)("div",{className:"stories",children:(0,m.jsxs)("div",{className:"container-fluid",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-6 no-padding",children:(0,m.jsxs)(r.tq,h(h({className:"swiper-wrapper swiper-container swiper-img"},u),{},{children:[(0,m.jsx)(r.o5,{className:"SwiperSlide",children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".3s",children:(0,m.jsx)("div",{className:"img",children:(0,m.jsx)("img",{className:"thumparallax",src:"/img/blog/1.jpg",alt:""})})})}),(0,m.jsx)(r.o5,{className:"SwiperSlide",children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".3s",children:(0,m.jsx)("div",{className:"img",children:(0,m.jsx)("img",{className:"thumparallax",src:"/img/blog/2.jpg",alt:""})})})}),(0,m.jsx)(r.o5,{className:"SwiperSlide",children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".3s",children:(0,m.jsx)("div",{className:"img",children:(0,m.jsx)("img",{className:"thumparallax",src:"/img/blog/3.jpg",alt:""})})})})]}))}),(0,m.jsx)("div",{className:"col-lg-6 no-padding valign",children:(0,m.jsxs)(r.tq,h(h({className:"swiper-wrapper swiper-container swiper-content"},x),{},{children:[(0,m.jsx)(r.o5,{className:"SwiperSlide",children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".6s",children:(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("div",{className:"tags",children:(0,m.jsx)("a",{href:"#0",children:"Trending"})}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsxs)("a",{href:"#0",children:[(0,m.jsx)("i",{className:"far fa-clock"}),"06 Aug 2023"]}),(0,m.jsx)("a",{href:"#0",children:"by Alex Morgan"})]}),(0,m.jsx)("div",{className:"title",children:(0,m.jsx)("h4",{children:(0,m.jsx)("a",{href:"#0",children:"Create The Lifestyle You Really Desire This World"})})}),(0,m.jsx)("div",{className:"text",children:(0,m.jsx)("p",{children:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."})}),(0,m.jsx)("div",{className:"more",children:(0,m.jsx)(n(),{href:"/blog-details/blog-details-dark",children:"Read More"})})]})})}),(0,m.jsx)(r.o5,{children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".6s",children:(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("div",{className:"tags",children:(0,m.jsx)("a",{href:"#0",children:"Trending"})}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsxs)("a",{href:"#0",children:[(0,m.jsx)("i",{className:"far fa-clock"}),"06 Aug 2023"]}),(0,m.jsx)("a",{href:"#0",children:"by Alex Morgan"})]}),(0,m.jsx)("div",{className:"title",children:(0,m.jsx)("h4",{children:(0,m.jsx)("a",{href:"#0",children:"List of The Best Investment Projects"})})}),(0,m.jsx)("div",{className:"text",children:(0,m.jsx)("p",{children:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."})}),(0,m.jsx)("div",{className:"more",children:(0,m.jsx)(n(),{href:"/blog-details/blog-details-dark",children:"Read More"})})]})})}),(0,m.jsx)(r.o5,{children:(0,m.jsx)("div",{className:"item wow fadeIn","data-wow-delay":".6s",children:(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("div",{className:"tags",children:(0,m.jsx)("a",{href:"#0",children:"Trending"})}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsxs)("a",{href:"#0",children:[(0,m.jsx)("i",{className:"far fa-clock"}),"06 Aug 2023"]}),(0,m.jsx)("a",{href:"#0",children:"by Alex Morgan"})]}),(0,m.jsx)("div",{className:"title",children:(0,m.jsx)("h4",{children:(0,m.jsx)("a",{href:"#0",children:"World Best Business Website Company"})})}),(0,m.jsx)("div",{className:"text",children:(0,m.jsx)("p",{children:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."})}),(0,m.jsx)("div",{className:"more",children:(0,m.jsx)(n(),{href:"/blog-details/blog-details-dark",children:"Read More"})})]})})})]}))})]}),(0,m.jsxs)("div",{className:"controls",children:[(0,m.jsx)("div",{className:"swiper-button-next swiper-nav-ctrl next-ctrl",children:(0,m.jsx)("i",{className:"fas fa-caret-up"})}),(0,m.jsx)("div",{className:"swiper-button-prev swiper-nav-ctrl prev-ctrl",children:(0,m.jsx)("i",{className:"fas fa-caret-down"})}),(0,m.jsx)("div",{className:"swiper-pagination"})]})]})})})}},6833:function(e,s,a){a.r(s),a.d(s,{default:function(){return c}});var i=a(2265),t=function(){var e=document.querySelector(".team-crv");e&&window.addEventListener("scroll",function(){document.querySelectorAll(".skill-progress .progres").forEach(function(s){var a=s.getAttribute("data-value");window.pageYOffset>e.offsetTop-200&&(s.style.width=a)})})},l=a(1100),n=JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}'),r=a(7437),c=function(){return(0,i.useEffect)(function(){t(),setTimeout(function(){(0,l.Z)()},500)},[]),(0,r.jsx)("div",{className:"team-crv section-padding",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-5 valign",children:(0,r.jsxs)("div",{className:"content wow fadeInUp md-mb30","data-wow-delay":".5s",children:[(0,r.jsxs)("div",{className:"sub-title",children:[(0,r.jsx)("h6",{children:"Our Staff"}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]}),(0,r.jsx)("h3",{className:"co-tit mb-15",children:"We help to create visual strategies."}),(0,r.jsx)("p",{children:"We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."}),(0,r.jsx)("div",{className:"skills-box mt-40",children:n.n.map(function(e){return(0,r.jsxs)("div",{className:"skill-item",children:[(0,r.jsx)("h6",{className:"custom-font",children:e.text}),(0,r.jsx)("div",{className:"skill-progress",children:(0,r.jsx)("div",{className:"progres","data-value":e.value})})]},e.id)})})]})}),(0,r.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,r.jsx)("div",{className:"img-box",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6 toright",children:(0,r.jsx)("div",{className:"full-width",children:n.f.slice(0,2).map(function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"img sizxl ".concat(s+1!=n.f.slice(0,2).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub,children:(0,r.jsx)("img",{src:e.image,alt:"",className:"imago wow"})})},e.id)})})}),(0,r.jsx)("div",{className:"col-sm-6 toleft valign",children:(0,r.jsx)("div",{className:"full-width text-left",children:n.f.slice(2,4).map(function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"img sizxl ".concat(s+1!=n.f.slice(2,4).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub,children:(0,r.jsx)("img",{src:e.image,alt:"",className:"imago wow"})})},e.id)})})})]})})})]})})})}}}]);