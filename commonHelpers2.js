import{i as l}from"./assets/vendor-dac47bfa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),d=document.querySelector('input[type="text"]');document.querySelector(".error-con");const s=document.querySelector(".gallery");let c="";d.addEventListener("input",o=>{o.preventDefault(),c=o.target.value});const f="40876862-5828b09b8a35d05d7759eed0a";u.addEventListener("submit",o=>{o.preventDefault(),s.innerHTML="";const n="Loading images, please wait...";s.insertAdjacentHTML("afterbegin",n),fetch(`https://pixabay.com/api/?key=${f}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{s.textContent="";const i=r.hits.map(e=>`<li><img class="api-img" src="${e.webformatURL}" alt="${e.tags}"></li>`).join("");s.insertAdjacentHTML("afterbegin",i)}).catch(r=>{console.error("Error:",r),l.show({icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1})})});
//# sourceMappingURL=commonHelpers2.js.map