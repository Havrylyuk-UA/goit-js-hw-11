import{i as d,S as m}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),f=document.querySelector('input[type="text"]'),u=document.querySelector(".gallery"),i=document.querySelector(".loader");let l="";const p="40876862-5828b09b8a35d05d7759eed0a";f.addEventListener("input",o=>{o.preventDefault(),l=o.target.value});const y={icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topRight",close:!1},g="https://pixabay.com/api/?key=";c.addEventListener("submit",o=>{o.preventDefault(),i.style.display="inline-block",fetch(`${g}${p}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(u.textContent="",t.hits.length===0)return i.style.display="none",d.show(y);const n=t.hits.map(s=>`
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
                  `);u.insertAdjacentHTML("afterbegin",n.join("")),i.style.display="none",b.refresh(),l="",c.reset()}).catch(t=>{console.error("Error:",t)})});const b=new m(".gallery a",{overlayOpacity:0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
