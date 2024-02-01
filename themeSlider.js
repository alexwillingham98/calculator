const themeSlider = document.getElementById("themeSlider");
const gridElement = document.querySelector(".grid-container");
const button1Element = document.querySelector(
  ".grid-container button:nth-child(-n+16):not(.item4)"
);
const item4Element = document.querySelector(".item4");
const item17Element = document.querySelector(".item17");
const screenElement = document.querySelector(".screen");
const item18Element = document.querySelector(".item18");
const themeSlidercolor = document.querySelector('.slider');
const themeSlidercolor2 = document.querySelector('.input[type="range"]::-webkit-slider-runnable-track');
const themeSlidercolor3 = document.querySelector('input[type="range"]::-webkit-slider-thumb');
const labelcontainer = document.querySelector('.labelcontainer');
const slidecontainer = document.querySelector('.slidecontainer')



themeSlider.addEventListener("input", function () {
  const selectedValue = parseInt(themeSlider.value);

  // Reset to default theme
  document.body.className = "";
  screenElement.className = "screen";
  gridElement.className = "grid-container";
  button1Element.className = "button";
  item4Element.className = "item4";
  item17Element.className = "item17";
  item18Element.className = "item18";
  themeSlidercolor.className = "input";
  labelcontainer.className = "labelcontainer";
  slidecontainer.className = "slidecontainer";

  // Apply alternate themes based on the selected value
  if (selectedValue === 2) {
    document.body.classList.add("alt-theme1");
    screenElement.classList.add("alt-theme1");
    gridElement.classList.add("alt-theme1");
    button1Element.classList.add("alt-theme1");
    item4Element.classList.add("alt-theme1");
    item17Element.classList.add("alt-theme1");
    item18Element.classList.add("alt-theme1");
    themeSlidercolor.classList.add("alt-theme1");
    labelcontainer.classList.add('alt-theme1');
    slidecontainer.classList.add('alt-theme1');
  } else if (selectedValue === 3) {
    document.body.classList.add("alt-theme2");
    screenElement.classList.add("alt-theme2");
    gridElement.classList.add("alt-theme2");
    button1Element.classList.add("alt-theme2");
    item4Element.classList.add("alt-theme2");
    item17Element.classList.add("alt-theme2");
    item18Element.classList.add("alt-theme2");
    themeSlidercolor.classList.add("alt-theme2");
    labelcontainer.classList.add('alt-theme2');
    slidecontainer.classList.add('alt-theme2');

  }
});
