const listColors = document.querySelector("#list-colors");

function addItem(item) {
  const colorCard = document.createElement("section");
  colorCard.className = "card w-100";
  listColors.append(colorCard);

  const colorCardBody = document.createElement("article");
  colorCardBody.className = "card-body";
  colorCard.append(colorCardBody);

  const colorCardTitle = document.createElement("h5");
  colorCardTitle.className = "card-title";
  colorCardTitle.innerText = item.name;
  colorCardBody.append(colorCardTitle);

  const colorCardText = document.createElement("p");
  colorCardText.className = "card-text";
  colorCardText.innerText = item.pantone_value;
  colorCardBody.append(colorCardText);

  const colorCardColor = document.createElement("figure");
  colorCardColor.style = "background-color: " + item.color + ";";
  colorCardColor.innerText = item.color;
  colorCardBody.append(colorCardColor);

  const colorCardBreak = document.createElement("br");
  listColors.append(colorCardBreak);
}

// Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

async function fetchColorsList() {

  // method A: using a fetch request (with methods to address promises, e.g. resolve or reject)
  // ---------------------------------------------------------------------------------------------

  // let allColors = null

  // fetch('https://reqres.in/api/unknown')
  // .then(response => response.json())
  // .then(response => {                             // promise.resolve returned
  //         console.log(response);                  // log all the response's results
  //         allColors = response.data;           // log only the response's results with the name: data
  //         console.log(allColors);
  // })
  // .catch(error => console.error('Error:', error)); // catch a promise.reject

  // method B: Using a fetch request (WITHOUT addressing promises returned from the api)
  // --------------------------------------------------------------------------------------

  // Using fetch, call for the 1st page of Data from the given url
  const response = await fetch("https://reqres.in/api/unknown");
  const resp = await response.json();


  // Fetch the subsequent page(s) of Data (using a For Loop)
let allColors = resp.data;
let page = resp.page + 1;
let totalPages = resp.total_pages;

for (let currentPage = page; currentPage <= totalPages; currentPage++) {
  const response = await fetch("https://reqres.in/api/unknown?page=" + currentPage);
  const resp = await response.json();
  allColors = [...allColors, ...resp.data];
}

  // Clear listColors first
  listColors.innerHTML = "";

  // Create an array to store the color list to localStorage
  const arrColors = new Array();

  // Loop through each array index to be passed to addItem(item) function for display
  // Also, convert each JSON object item into a string for storage into arrColors
  allColors.forEach(item => {
    addItem(item);
    arrColors.push(item);
  })

  // Store the array data arrColors into the browser window's localStorage (stringify it to make it readable in local storage)
  window.localStorage.setItem("list-colors", JSON.stringify(arrColors));
}

// 2.  Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage. 
//     Open the developer tools and verify that the data is stored in the local storage.

function loadColorsFromStorage() {

  // Retrieve the values stored in list-colors from localstorage
const arrColors = window.localStorage.getItem("list-colors");
//console.log(arrColors);          //this value is a string as it was stringified

  // parse the values into Objects (JSON.parse())
const parsedColors = JSON.parse(arrColors);   //convert stringified data back to readable data for JS

  // iterate and populate the HTML page by calling addItem()
parsedColors.forEach(item => {
  addItem(item);
})
}

document.addEventListener("DOMContentLoaded", () => {
  fetchColorsList();
  // loadColorsFromStorage();
})
