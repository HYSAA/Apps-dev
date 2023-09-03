let addButton=document.getElementById("add")
let delButton= document.getElementById("delete")
let forms=document.getElementById("forms")
let res= document.getElementById("result")

const add = () =>{
    studentNum= document.getElementById("StudentNum").value
    firstname=document.getElementById("fname").value
    lastname=document.getElementById("lname").value



    let result=`${studentNum}`;
    res.textContent=result;

}

const del = () =>{

    res.textContent=""
}



addButton.addEventListener("click",function(){
add()
})
delButton.addEventListener("click",function(){
del()
})


