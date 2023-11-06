function getValues() {
  const hexValues = "0123456789ABCDEF";
  const randomValues = Math.floor(Math.random(hexValues) * 16);
  return hexValues[randomValues];
}

function generateHexColor(hexLength) {
  let hexaValue = "";
  for (let i = 0; i < hexLength; i++) {
    hexaValue += getValues();
  }
  return hexaValue;
}

const hexLength = 6;
console.log(`#${generateHexColor(hexLength)}`);

const colorButton = document.querySelector(".color-generator");
const colorDisplay = document.querySelector("#color-box");

colorButton.addEventListener("click", () => {
  const newColor = generateHexColor(hexLength);
  document.body.style.backgroundColor = `#${newColor}`;
  colorDisplay.textContent = `#${newColor}`;
});

// colorDisplay.addEventListener("click", () => {
//   const newColor = generateHexColor(hexLength);
//   colorDisplay.style.backgroundColor = `#${newColor}`;
//   colorDisplay.textContent = `#${newColor}`;
// });

document.body.style.backgroundColor = `#${generateHexColor(hexLength)}`;
