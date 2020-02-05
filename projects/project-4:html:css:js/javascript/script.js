function size_font() {
    let optionSize = document.getElementById("size_options");
    text = document.getElementById("text");
    text.style.fontSize = optionSize.value + 'px';
}

function change_font() {
    let optionFont = document.getElementById("font_options");
    text = document.getElementById("text");
    text.style.fontFamily = optionFont.value;
}

function color_background() {
    let optionColor = document.getElementById("color_options");
    body = document.getElementsByTagName("body");
    body[0].style.background = optionColor.value;
}