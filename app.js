"use strict";
const $ = document;
const slide = $.querySelector('.slide');
const right = $.querySelector('.left');
const left = $.querySelector('.right');
let index = 0;
const imageData = [
    "./images/background-1.png",
    "./images/background-2.png",
    "./images/background-3.png",
    "./images/background-4.png",
];

const toLeft = function () {
    index++;
    if (index > 3) index = 0;
    slide.setAttribute('src', `${imageData[index]}`);
};

const toRight = function () {
    index--
    if (index < -3) index = 0;
    slide.setAttribute('src', `${imageData[Math.abs(index)]}`);
};
right.addEventListener('click', toLeft);
left.addEventListener('click', toRight);

// Add Double Arrow 
right.addEventListener('mouseover', () => {
    right.classList.toggle('fa-angle-right');
    right.classList.toggle('fa-angle-double-right');
});
right.addEventListener('mouseout', () => {
    right.classList.toggle('fa-angle-right');
    right.classList.toggle('fa-angle-double-right');
});

left.addEventListener('mouseover', () => {
    left.classList.toggle('fa-angle-left');
    left.classList.toggle('fa-angle-double-left');
});
left.addEventListener('mouseout', () => {
    left.classList.toggle('fa-angle-left');
    left.classList.toggle('fa-angle-double-left');
});