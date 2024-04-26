// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
// Vulnerability: XSS (Cross-site scripting)
pagetitle.innerHTML = "<a href='https://www.google.com/'>Document Object Model</a>";

// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
pagetitle.innertext = "Document Object Model";

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "2em"
pagetitle.style.color = "#ff0000";

// 4. getElementById
// refer to the example above (line 4)
const spans = document.getElementsByTagName("span")

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here
spans[0].innerText = "Element Updated.";
spans[1].innerText = "Another Element Updated.";

// Additional Example
for(let index = 0; index < spans.length; index++) {
    spans[index].innerText = "Yet another update";
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText

// Implement Code here
const header = document.querySelector("h2");
header.innerText = "New Title";

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
const updateListItems = document.querySelectorAll(".menuItem");
updateListItems[0].innerText = "Eg 1";
updateListItems[1].innerText = "Eg 2";
updateListItems[2].innerText = "Eg 3";

// Challenge statement
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
for (let index = 0; index < updateListItems.length; index++) {
    updateListItems[index].innerText = "Example " + String(index + 1);
}

// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement Code here
const anchor1 = document.createElement("a");
anchor1.href = "https://example.org";
anchor1.innerText = "Example.org";
updateListItems[0].append(anchor1);

const anchor2 = document.createElement("a");
anchor2.href = "https://example2.org";
anchor2.innerText = "Example2.org";
updateListItems[1].append(anchor2);

const anchor3 = document.createElement("a");
anchor3.href = "https://example3.org";
anchor3.innerText = "Example3.org";
updateListItems[2].append(anchor3);

// Challenge statement
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
// with each menuItem added with a newly-created anchor element ("Example1.org", "Example2.org", "Example3.org")



// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here


// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
;