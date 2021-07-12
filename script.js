  
const text = "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code …";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 150);