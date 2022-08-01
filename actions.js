const form = document.querySelector("form");
const dataDisplay = document.getElementById("dataDiv");

let baseURL = "https://www.thecolorapi.com/scheme?";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  colorData();
});
const colorData = () => {
  let colorPicker = document
    .getElementById("colorPicker")
    .value.replace("#", "")
    .toUpperCase();
  let colorDropDown = document.getElementById("colorDropDown").value;
  const fullURL = `${baseURL}hex=${colorPicker}&mode=${colorDropDown}&count=6`;
  fetch(fullURL)
    .then((res) => res.json())
    .then((data) => {
      colorDisplay(data);
    });
};

const colorDisplay = (data) => {
  let colorsDataHTML = "";
  data.colors.map((color) => {
    colorsDataHTML += `
                <li style="background: ${color.rgb.value}";>
                <span>${color.rgb.value}</span>
                </li>
                
                `;
    dataDisplay.innerHTML = colorsDataHTML;
  });
};
