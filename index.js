// let btn=document.querySelectorAll("input")
// let res= document.getElementById("result")
// let delbtn=document.getElementById("delete")


// const add= () =>{


// }

// const del= () =>{


// }


// btn.addEventListener("click",function(){


// })



// delbtn.addEventListener("click",function(){

//     res.textContent=""


// })// Select elements by ID
const studentForm = document.getElementById("studentForm");
const result = document.getElementById("result");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

// Add event listener for the "Add data" button
addButton.addEventListener("click", function () {
    // Retrieve input values
    const studentNumber = document.getElementById("studentNumber").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const program = document.getElementById("program").value;
    const year = document.getElementById("year").value;

    // Construct the data string and display it
    const dataString = `Student Number: ${studentNumber}, First Name: ${firstName}, Last Name: ${lastName}, Program: ${program}, Year: ${year}`;
    result.textContent = dataString;
});

// Add event listener for the "Delete" button
deleteButton.addEventListener("click", function () {
    // Clear the result text
    result.textContent = "";
});
