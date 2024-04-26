// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Small", "Medium", "Large");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
// selectDom.options[0] = new Option("Please select an option", "");
//selectDom.options[0].setAttribute("disabled", true);
selectDom.setAttribute("multiple", true);

// Populate the options in selectDom
arrTopics.forEach(topic => {
    selectDom.options.add(new Option(topic, topic)); //(parameter, value to store the data)
})
//Longer version:
// for (let index = 0; index < arrTopics.length; index++) {
//     selectDom.options.add(new Option(arrTopics[index], arrTopics[index]));
// }
for (let index = 0; index < arrTopics.length; index++) {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2");
}

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
selectDom.addEventListener("change", () => {

    const collection = selectDom.selectedOptions;
    //console.log(collection);
    
    const listSelected = document.getElementById("listSelected");


    for (let index = 0; index < collection.length; index++) {
        const itemValue = collection[index].getAttribute("value");

        const listItem = document.createElement
    }
})

// 12. element.addEventListener()
// Adding an event listener to a button

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array


// Challenge Statement:

// 1. Change script.js to allow only 1 selected item
