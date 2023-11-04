function checkNumber() {
  let apartments = [
{ building: "B", numebrBuilding:  1, surface: 33.56, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 2, surface: 45.85, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 3, surface: 62.59, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 4, surface: 50.48, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 5, surface: 32.68, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 6, surface: 62.74, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 7, surface: 50.33, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 8, surface: 61.81, floors: 0,link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 9, surface: 32.8, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 10,surface: 33.56, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 11,surface: 45.85, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 12, surface: 62.47, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 13, surface: 50.48, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 14, surface: 32.68, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 15, surface: 62.51, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 16, surface: 50.33, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 17, surface: 62.1, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 18, surface: 53.71, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 19,  surface: 33.56, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 20, surface: 46, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 21, surface: 62.47, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 22, surface: 50.34 , floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 23, surface: 32.68, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 24,  surface: 62.62, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 25, surface: 50.33, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 26,  surface: 62.14, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 27, surface: 53.56, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 28,  surface: 33.56, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 29, surface: 46.22, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 30, surface: 62.47, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 31, surface: 50.34, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 32, surface: 32.68, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 33, surface: 61.51, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 34, surface: 50.33, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 35,  surface: 61.94, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 36, surface: 53.71, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 37,  surface: 72.50, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 38, surface: 62.54, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 39, surface: 50.31, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 40, surface: 44.42, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 41, surface: 51.6, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 42,  surface: 50.48, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 43, surface: 55.48, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "B", numebrBuilding: 44,surface: 53.45, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 1, surface: 49.51, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 2, surface: 48.42, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 3, surface: 56.01, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 4, surface: 30.73, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 5, surface: 48.05, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 6, surface: 46.58 , floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 7, surface: 32.68, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 8, surface: 62.72, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 9, surface: 50.39, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 10, surface: 50.63, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 11, surface: 62.85, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 12, surface: 32.8, floors: 0, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 13, surface: 49.51, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 14, surface: 48.56, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 15, surface: 56.01, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 16, surface: 30.73, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 17, surface: 48.19, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 18, surface: 46.58, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 19, surface: 32.68, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 20, surface: 62.72 , floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 21, surface: 50.54, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 22, surface: 50.52, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 23, surface: 63, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 24, surface: 53.71, floors: 1, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 25, surface: 49.51, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 26, surface: 48.42, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 27, surface: 56.01, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 28, surface: 30.73, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 29, surface: 48.19, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 30, surface: 46.58, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 31, surface: 32.68, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 32,  surface: 62.72, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 33, surface: 50.39, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 34, surface: 50.65, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 35, surface: 63.14, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 36, surface: 53.56, floors: 2, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 37, surface: 49.51, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 38, surface: 48.56, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 39, surface: 56.01, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 40, surface: 30.73, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 41, surface: 48.19, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 42, surface: 46.58, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 43, surface: 32.68, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 44, surface: 62.72, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 45, surface: 50.54, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 46, surface: 50.51, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 47, surface: 63, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 48, surface: 53.56, floors: 3, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 49, surface: 49.36, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 50, surface: 48.42, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 51, surface: 56.01, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 52, surface: 79.42, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 53, surface: 48.35, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 54, surface: 32.68, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 55, surface: 62.72, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 56, surface: 50.51, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 57, surface: 50.65, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 58, surface: 54.04, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"},
{ building: "C", numebrBuilding: 59, surface: 53.55, floors: 4, link: "https://parkpaderewskiego.pl/wp-content/uploads/2023/08/B-B-p1-11.pdf"} 
];
// Get the user input value
let calculateRateReturnAndApartmentShow = parseFloat(document.getElementById("calculateRateReturnAndApartmentShow").value);

// Get HTML elements where results will be displayed
let result = document.getElementById("result");
let proposedApartments = document.getElementById("proposedApartments");
let monthsRent = document.getElementById("monthsRent");
let inputValue = calculateRateReturnAndApartmentShow;

// Filter apartments based on the entered square footage
const foundItems = apartments.filter(item => item.surface === inputValue);

// Display found apartments as links or a message
if (foundItems.length > 0) {
  let links = foundItems.map(item => `<a href="${item.link}" target="_blank"> Building ${item.building} | Apartment ${item.numebrBuilding} | Floor ${item.floors} </a><br> `).join(' ');
  proposedApartments.innerHTML = links;
} else {
  proposedApartments.innerHTML = `No apartments found with this square footage, please contact the sales office. Tel +48 786 337 302`;
}

// Calculate rent, price per square meter, and calculated value
const rent = (calculateRateReturnAndApartmentShow * 54).toFixed(2);
const pricePerMeter = calculateRateReturnAndApartmentShow * 8500;
const calculatedValue = ((calculateRateReturnAndApartmentShow + 50 * 648) / pricePerMeter * 100).toFixed(2) + "%";
result.innerHTML = calculatedValue;
monthsRent.innerHTML = rent + " PLN";

// Error handling for invalid or zero input
if (isNaN(inputValue)) {
  result.innerHTML = "Enter a value in the input field";
  monthsRent.innerHTML = "Enter a value in the input field";
  proposedApartments.innerHTML = "Enter a value in the input field";
}

if (inputValue === 0) {
  result.innerHTML = "The square footage value cannot be zero";
  monthsRent.innerHTML = "The square footage value cannot be zero";
  proposedApartments.innerHTML = "The square footage value cannot be zero";
}

// Assign the function to handle the "Calculate" button
let calculate = document.getElementById("calculate");
calculate.addEventListener("click", checkNumber);
