// let addButton=document.getElementById("add")
// let delButton= document.getElementById("delete")
// let forms=document.getElementById("forms")
// let res= document.getElementById("result")

// const add = () =>{
//     studentNum= document.getElementById("StudentNum").value
//     firstname=document.getElementById("fname").value
//     lastname=document.getElementById("lname").value
//     program= document.getElementById("program").value
//     year=document.getElementById("year").value



//     let result=`${studentNum},${firstname},${lastname},${program},${year}`;
//     res.textContent=result;


// }

// const del = () =>{

//     res.textContent=""
// }

// addButton.addEventListener("click",function(){
// add()
// console.log(add())
// })
// delButton.addEventListener("click",function(){
// del()
// })
let addButton=document.getElementById("add")
let delButton= document.getElementById("delete")
let forms=document.getElementById("forms")
let res= document.getElementById("result")


addButton.addEventListener("",function(){
    add()
    console.log(add())
    })


    
const add = () =>{
    studentNum= document.getElementById("StudentNum").value
    firstname=document.getElementById("fname").value
    lastname=document.getElementById("lname").value
    program= document.getElementById("program").value
    year=document.getElementById("year").value


    let currentResult = res.textContent;

    // Create a new student entry
    let newStudent = `${studentNum},${firstname},${lastname},${program},${year}`;

    // Append the new student entry to the current content
    currentResult += newStudent;

    // Update the result element with the updated content
    res.textContent = currentResult;
    // let result=`${studentNum},${firstname},${lastname},${program},${year}`;
    // res.textContent=result;
    // console.log(result)
}

// const del = () =>{

//     res.textContent=""
// }


