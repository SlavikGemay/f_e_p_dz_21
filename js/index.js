"use strict";

const div = document.createElement('div');
const h1 = document.createElement('h1');
const button = document.createElement('button');

h1.innerHTML = 'Hello, Maria =)';

button.textContent = 'click';

div.prepend(h1);

div.append(button);

button.addEventListener('click', () => {
    if (h1.style.color === 'black') {
        h1.style.color = 'blue';
    }
    else {
        h1.style.color = 'black';
    }
});

document.body.append(div);