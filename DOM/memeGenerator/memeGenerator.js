document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.querySelector('#form');
    const memeContainer = document.querySelector('#container');

    memeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const topText = document.querySelector('input[name="topText"]').value;
        const bottomText = document.querySelector('input[name="bottomText"]').value;
        const imageURL = document.querySelector('input[name="url"]').value;

        const newMeme = document.createElement('div');
        newMeme.classList.add('meme');
        newMeme.innerHTML = `
        <p class="topText"> ${topText}</p>
        <img src=${imageURL} alt="Meme Image">
        <p class="bottomText" > ${bottomText}</p>
        `;

        memeContainer.appendChild(newMeme);

        memeForm.reset();

    });
})