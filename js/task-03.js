const images = [
   {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
   },
   {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
   },
   {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
   },
];

// Start

const galleryRef = images.map(element => {
   return `<li><img src = ${element.url} alt = ${element.alt} width = 200px ></li>`;
});
const galleryRefString = galleryRef.join('');

console.log(galleryRefString);

const galleryNodeRef = document.querySelector('.gallery');

galleryNodeRef.insertAdjacentHTML('afterbegin', galleryRefString);

// galleryNodeRef.children.url
