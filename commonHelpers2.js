import{i as d,S as m}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".form"),f=document.querySelector('input[type="text"]'),i=document.querySelector(".gallery"),l=document.querySelector(".loader");let c="";const p="40876862-5828b09b8a35d05d7759eed0a";f.addEventListener("input",n=>{n.preventDefault(),c=n.target.value});const y={icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topRight",close:!1},g="https://pixabay.com/api/?key=";u.addEventListener("submit",n=>{n.preventDefault(),i.innerHTML="",l.style.display="inline-block",fetch(`${g}${p}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(i.textContent="",t.hits.length===0)return l.style.display="none",d.show(y);const o=t.hits.map(s=>`
        <li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img class="api-img" src="${s.webformatURL}" alt="${s.tags}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${s.likes}</span>
              <span><b>Views:</b> <br/>${s.views}</span>
              <span><b>Comments:</b> <br/>${s.comments}</span>
              <span><b>Downloads:</b> <br/>${s.downloads}</span>
            </div>
          </a>
        </li>
                  `);i.insertAdjacentHTML("afterbegin",o.join("")),l.style.display="none",b.refresh(),c="",u.reset()}).catch(t=>{console.error("Error:",t)})});const b=new m(".gallery a",{overlayOpacity:0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
