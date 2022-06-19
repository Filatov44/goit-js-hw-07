import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const renderListGalleryEl = renderListGallery(galleryItems);

// Создаем разметку из массива объектов

// function renderListGallery(items) {
//   return items.reduce(
//     (acc, { preview, original, description }) =>
//       acc +
//       `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`,
//     ""
//   );
// }

function renderListGallery(items) {
  const result = items
    .map(
      ({ preview, original, description }) => `<li class="gallery__list">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
  return result;
}

// Вставляем разметку на экран

galleryEl.insertAdjacentHTML("beforeend", renderListGalleryEl);

//Активируем библиотеку с задержкой alt

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
