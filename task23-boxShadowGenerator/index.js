function generateCss() {
    let inset = document.querySelector("#inset").checked;
    inset = inset ? " inset" : "";

    let offsetX = document.querySelector("#offsetX").value;
    let offsetY = document.querySelector("#offsetY").value;
    let blur = document.querySelector("#blur").value;
    let stretch = document.querySelector("#stretch").value;
    let color = document.querySelector("#color").value;
    let red = parseInt(color.slice(1, 3), 16);
    let green = parseInt(color.slice(3, 5), 16);
    let blue = parseInt(color.slice(5, 7), 16);
    let opacity = document.querySelector("#opacity").value;
    let result = document.querySelector(".result");
    let textarea = document.querySelector("#cssCode");
    let strColor = ` rgba(${red}, ${green}, ${blue}, ${opacity})`;
    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px ${strColor}`;

    result.style.boxShadow = str;
    result.style.boxShadowColor = strColor;
    textarea.value = `box-shadow: ${str}`;
}

const input = document.querySelectorAll("input");

input.forEach((item) => item.addEventListener("input", generateCss));

generateCss();
