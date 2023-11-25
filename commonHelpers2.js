import{i as m,S as g}from"./assets/vendor-18365dff.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),y=document.querySelector('input[type="text"]');document.querySelector(".error-con");const i=document.querySelector(".gallery");let l="";y.addEventListener("input",o=>{o.preventDefault(),l=o.target.value});const h="40876862-5828b09b8a35d05d7759eed0a";c.addEventListener("submit",o=>{o.preventDefault(),i.innerHTML="";const n="Loading images, please wait...";i.insertAdjacentHTML("afterbegin",n),fetch(`https://pixabay.com/api/?key=${h}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(i.textContent="",r.hits.length===0)return m.show({icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1});const a=r.hits.map(({largeImageURL:e,webformatURL:t,tags:s,likes:u,views:d,comments:f,downloads:p})=>`
          <li class="gallery-item">
          <a href="${e}">
          <img class="api-img" src="${t}" alt="${s}">
          </a>
          <div class="img-desc">
          <span><b>Likes:</b> <br/>${u}</span>
          <span><b>Views:</b> <br/>${d}</span>
          <span><b>Comments:</b> <br/>${f}</span>
          <span><b>Downloads:</b> <br/>${p}</span>
          </div>
          </li>
          `).join("");i.insertAdjacentHTML("afterbegin",a),b.refresh(),l="",c.reset()}).catch(r=>{console.error("Error:",r)})});const b=new g(".gallery a",{overlayOpacity:0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
