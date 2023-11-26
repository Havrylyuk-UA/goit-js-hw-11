import{i as d,S as m}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=document.querySelector(".form"),f=document.querySelector('input[type="text"]'),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let i="";const p="40876862-5828b09b8a35d05d7759eed0a";f.addEventListener("input",s=>{s.preventDefault(),i=s.target.value});const y={icon:"icon-false",backgroundColor:"#FC5A5A",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",position:"topRight",close:!1};l.addEventListener("submit",s=>{s.preventDefault(),u.style.display="inline-block",fetch(`https://pixabay.com/api/?key=${p}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(c.textContent="",t.hits.length===0)return d.show(y);const n=t.hits.map(o=>`
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
                  `);c.insertAdjacentHTML("afterbegin",n.join("")),u.style.display="none",g.refresh(),i="",l.reset()}).catch(t=>{console.error("Error:",t)})});const g=new m(".gallery a",{overlayOpacity:0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
