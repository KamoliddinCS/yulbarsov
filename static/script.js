let animateObjects = document.getElementsByClassName("animate_letters");
let randomString = "1234567890qwertyuiop[]!@#$%^&*()asdfghjkl;'zxcvnm,./>?:";

pageLinkHighlight();

for (let obj of animateObjects) {
    let orgText = obj.textContent;
    obj.addEventListener("mouseover", () => {
        animateLetters(obj);
        setTimeout(() => {
            animateBack(orgText, obj);
        },  12 * 30);
    })
}

let books = document.querySelectorAll(".book-link");
for (let book of books) {
    let img = book.querySelector('.book-image');
    let desc = book.querySelectorAll('.book-desc');
    book.addEventListener("mouseover", () => {
        img.style.bottom = "10px";
        for (let el of desc) {
            el.classList.add("visibe-desc");
        }
    })
    book.addEventListener("mouseout", () => {
        img.style.bottom = "0";
        for (let el of desc) {
            el.classList.remove("visibe-desc");
        }
    })
}

function pageLinkHighlight() {
    let pageRoute = window.location.pathname;
    let element = document.querySelector(`[href="${pageRoute}"]`);
    if (element != null)    {
        element.classList.add("hover-bg");
    }
}

function randomReplacement(text) {
    let len = text.length;
    text = "";
    for (let i = 0; i < len; i++) {
        let temp = randomString[Math.floor(Math.random() * randomString.length)];
        text += temp;
    }
    return text
}

function animateLetters(obj) {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            obj.textContent = randomReplacement(obj.textContent);
        }, i * 30);
    }
}

function animateBack(orgText, obj) {
    let preText = "";
    for (let i = 0; i < orgText.length; i++) {
        let temp = orgText[i];
        setTimeout(() => {
            preText += temp;
            obj.textContent = preText + randomReplacement(obj.textContent.slice(i+1));
        }, i * 40)
    }
}