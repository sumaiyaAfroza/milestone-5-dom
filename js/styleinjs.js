const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid black';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
    section.style.paddingLeft = '7px'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');