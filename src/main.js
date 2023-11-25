import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

const form = document.querySelector('.form'),
      searchInp = document.querySelector('input[type="text"]'),
      errorDiv = document.querySelector('.error-con');

      // key — твій унікальний ключ доступу до API.
      // q — слово для пошуку. Те, що буде вводити користувач.
      // image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
      // orientation — орієнтація фотографії. Постав значення horizontal.
      // safesearch — фільтр за віком. Постав значення true.

      const postToAdd = {
        title: "CRUD",
        body: "CRUD is awesome!",
      };

      const options = {
        method: "POST",
        body: JSON.stringify(postToAdd),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };