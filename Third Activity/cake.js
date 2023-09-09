let btn= document.getElementById("btn")
let choco= document.getElementById("cake1")
let mango= document.getElementById("cake2")
let menu=document.getElementById("menu")

const Menu= () =>{

let cakes =[
    {
        //first cake
        name:"choco",
        price:100,
        //second cake
        secondname:"mango",
        price:200,
    }
];
menu=cakes.value;
console.log(cakes[0]["name"]);   
console.log(cakes[0]["price"]); 
}
btn.addEventListener("click",function(){
    Menu();
})