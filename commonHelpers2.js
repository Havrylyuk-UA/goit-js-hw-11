import{i as u,S as m}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),f=document.querySelector('input[type="text"]'),n=document.querySelector(".gallery"),l=document.querySelector(".loader");let c="";const p="40876862-5828b09b8a35d05d7759eed0a";f.addEventListener("input",s=>{s.preventDefault(),c=s.target.value});const y={icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topRight",close:!1},g="https://pixabay.com/api/?key=";d.addEventListener("submit",s=>{s.preventDefault(),n&&n.parentNode.removeChild(n),l.style.display="inline-block",fetch(`${g}${p}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(n.textContent="",t.hits.length===0)return l.style.display="none",u.show(y);const a=t.hits.map(o=>`
        <li class="gallery-item">
          <a href="${o.largeImageURL}">
            <img class="api-img" src="${o.webformatURL}" alt="${o.tags}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${o.likes}</span>
              <span><b>Views:</b> <br/>${o.views}</span>
              <span><b>Comments:</b> <br/>${o.comments}</span>
              <span><b>Downloads:</b> <br/>${o.downloads}</span>
            </div>
          </a>
        </li>
                  `);n.insertAdjacentHTML("afterbegin",a.join("")),l.style.display="none",b.refresh(),c="",d.reset()}).catch(t=>{console.error("Error:",t)})});const b=new m(".gallery a",{overlayOpacity:0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
