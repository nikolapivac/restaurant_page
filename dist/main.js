(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("img");n.setAttribute("src","../dist/images/banner.jpg"),t.appendChild(n);const d=document.createElement("div");d.classList.add("sub_container");const a=document.createElement("div");a.classList.add("testimony");const c=document.createElement("p");c.textContent="Food Island has some of the best food I've ever tried. Customer service is amazing and they make you feel like home! We even had a beautiful view at the sea. We will come back here!",a.appendChild(c);const o=document.createElement("h4");o.textContent="- Tony",a.appendChild(o),d.appendChild(a);const i=document.createElement("div");i.classList.add("hours");const s=document.createElement("h3");s.textContent="Hours",i.appendChild(s);const l=document.createElement("p");l.textContent="Mon - Fri: 6am - 10pm",i.appendChild(l);const m=document.createElement("p");m.textContent="Sat & Sun: 7am - 11pm",i.appendChild(m),d.appendChild(i);const p=document.createElement("div");p.classList.add("location");const r=document.createElement("h3");r.textContent="Location",p.appendChild(r);const u=document.createElement("h4");u.textContent="123 Island Drive, Savaneta, Aruba",p.appendChild(u),d.appendChild(p),t.appendChild(d),e.appendChild(t)};(()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.classList.add("title"),t.textContent="food island",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu");const d=document.createElement("button");d.classList.add("home_button"),d.textContent="home";const a=document.createElement("button");a.classList.add("menu_button"),a.textContent="menu";const c=document.createElement("button");c.classList.add("contact_button"),c.textContent="contact",n.appendChild(d),n.appendChild(a),n.appendChild(c),e.appendChild(n)})(),e();const t=document.getElementById("content"),n=document.querySelector(".home_button"),d=document.querySelector(".menu_button"),a=document.querySelector(".contact_button");n.addEventListener("click",(()=>{t.removeChild(t.lastChild),e()})),d.addEventListener("click",(()=>{t.removeChild(t.lastChild),(()=>{function e(e,t,n){const d=document.createElement("div");d.classList.add("item");const a=document.createElement("img");a.setAttribute("src",`${e}`),d.appendChild(a);const c=document.createElement("h3");c.textContent=`${t}`,d.appendChild(c);const o=document.createElement("p");return o.textContent=`${n}`,d.appendChild(o),d}const t=document.getElementById("content"),n=document.createElement("div");n.classList.add("menu_container");const d=document.createElement("h1");d.classList.add("menu_title"),d.textContent="menu",n.appendChild(d);const a=document.createElement("div");a.classList.add("bev_container");const c=document.createElement("h2");c.textContent="beverages",a.appendChild(c);const o=e("../dist/images/lemonmezcal.jpg","Lemon Mezcal Margarita","$7");a.appendChild(o);const i=e("../dist/images/caipirinha.jpg","Caipirinha","$8");a.appendChild(i);const s=e("../dist/images/mojito.jpg","Mojito","$8");a.appendChild(s);const l=document.createElement("div");l.classList.add("side_container");const m=document.createElement("h2");m.textContent="side dishes",l.appendChild(m);const p=e("../dist/images/greek.jpg","Greek Salad","$10");l.appendChild(p);const r=e("../dist/images/ceasar.webp","Ceasar Salad","$11");l.appendChild(r);const u=document.createElement("div");u.classList.add("main_container");const h=document.createElement("h2");h.textContent="main dishes",u.appendChild(h);const C=e("../dist/images/coconut.jpg","Coconut Mango Beef Curry","$23");u.appendChild(C);const E=e("../dist/images/kalua.jpg","Kalua Pork","$22");u.appendChild(E);const g=e("../dist/images/carribean.jpg","Carribean Shrimp Bowl","$19");u.appendChild(g);const v=e("../dist/images/jicama.jpg","Jicama Pineapple Guacamole","$29");u.appendChild(v),n.appendChild(a),n.appendChild(l),n.appendChild(u),t.appendChild(n)})()})),a.addEventListener("click",(()=>{t.removeChild(t.lastChild),(()=>{const e=(e,t,n,d)=>{const a=document.createElement("div");a.classList.add("card");const c=document.createElement("h1");c.textContent=`${e}`,a.appendChild(c);const o=document.createElement("p");o.textContent=`${t}`,a.appendChild(o);const i=document.createElement("p");i.textContent=`${n}`,a.appendChild(i);const s=document.createElement("h4");return s.textContent=`${d}`,a.appendChild(s),a},t=document.getElementById("content"),n=document.createElement("div");n.classList.add("contact_container");const d=document.createElement("h1");d.classList.add("contact_title"),d.textContent="contact us",n.appendChild(d);const a=document.createElement("div");a.classList.add("card_container");const c=e("Marco","Manager","555-555-5551","marco@foodisland.com");a.appendChild(c);const o=e("Julia","Chef","555-555-5552","colbert.julia@foodisland.com");a.appendChild(o);const i=e("Rudy","Waitress","555-555-5553","rudy00@foodisland.com");a.appendChild(i);const s=e("Laurence","Waiter","555-555-5554","laurence.winston@foodisland.com");a.appendChild(s);const l=e("Cindy","Hostess","555-555-5555","cindy09@foodisland.com");a.appendChild(l),n.appendChild(a),t.appendChild(n)})()}))})();