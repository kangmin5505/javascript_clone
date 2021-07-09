// 사진 경로를 저장하는 array를 만드는 code
const images = Array.apply(null, Array(50)).map(function (_, i) {
  return `img/${i}.jpg`;
});

const chosenImage = images[Math.floor(Math.random() * images.length)];

// javascript로 element 생성하는 code
const bgImage = document.createElement("img");

bgImage.src = chosenImage;
bgImage.id = "background";

// element에 child element를 넣는 code
document.body.appendChild(bgImage);
