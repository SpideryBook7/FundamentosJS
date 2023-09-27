const container = document.querySelector('.container');
const img = document.querySelector('#image');

function setImage(e){
    const imageSrc = e.target.src;
    img.src = imageSrc;
}

container.addEventListener('click', setImage);