import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('.form'),
  searchInp = document.querySelector('input[type="text"]'),
  errorDiv = document.querySelector('.error-con'),
  gallery = document.querySelector('.gallery')

  let searchWord = '';

  searchInp.addEventListener('input', e => {
    e.preventDefault();

    searchWord = e.target.value;
  })

    const API_KEY = '40876862-5828b09b8a35d05d7759eed0a';



    form.addEventListener('submit', e => {
      e.preventDefault();
      gallery.innerHTML = ''

      const waitInfo = 'Loading images, please wait...'
      gallery.insertAdjacentHTML("afterbegin", waitInfo)

      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        gallery.textContent = '';
        const dataList = data.hits.map(photo => {
          return `<li><img class="api-img" src="${photo.webformatURL}" alt="${photo.tags}"></li>`;
        }).join("");
        gallery.insertAdjacentHTML("afterbegin", dataList);

      })
      .catch(error => {
        console.error('Error:', error);
        iziToast.show({
          icon: 'icon-false',
          backgroundColor: '#FC5A5A',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          messageSize: '16px',
          position: 'topCenter',
          close: false,
        });
      });
  });
