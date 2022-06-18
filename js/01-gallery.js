import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const renderListGalleryEl = renderListGallery(galleryItems);

// Создаем разметку из массива объектов

function renderListGallery(items) {
  return items.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    ""
  );
}

// Вставляем разметку на экран

galleryEl.insertAdjacentHTML("beforeend", renderListGalleryEl);

// Прослушиваем события на галерее

galleryEl.addEventListener("click", openModalGalleryWindow);

function openModalGalleryWindow(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.getAttribute(
    "alt"
  )}" >
    `);

  instance.show();
}
