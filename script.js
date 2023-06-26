const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const containerItems = document.getElementById('container-items')

previousBtn.addEventListener("click", slidePrevious);
nextBtn.addEventListener("click", slideNext);

function slidePrevious() {
    containerItems.appendChild(containerItems.firstElementChild);
}

function slideNext() {
    containerItems.appendChild(containerItems.firstElementChild);
}

