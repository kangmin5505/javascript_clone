const images = Array.apply(null, Array(50)).map(function (_, i) {
  return `img/${i}.jpg`;
});

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);
