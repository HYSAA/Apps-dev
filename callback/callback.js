let btn= document.getElementById("button")
let show = document.getElementById("screen")




btn.addEventListener("click",function(){
    show.innerHTML="A"


})


const call = () =>{



}

console.log("I")
console.log("eat")

setTimeout(() =>{


console.log("ice cre")

},4000)


console.log("with a")
console.log("spoon")


const one= (call) =>{
    call();
console.log("step 1")

}
const two = () =>{
    console.log("step 2")

}
one(two)






//SAMPLE CODES

//callbacks
function fetchData(callback) {
    setTimeout(() => {
      const data = 'This is some data';
      callback(data);
    }, 1000);
  }
  
  function processData(data) {
    console.log('Data received: ' + data);
  }
  
  fetchData(processData);

  //promises magamit ra nimo ang .then if naa promise

  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'This is some data';
        resolve(data);
      }, 1000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data received: ' + data);
    })
    .catch(error => {
      console.error('Error: ' + error);
    });

    
    //async/await
    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = 'This is some data';
            resolve(data);
          }, 1000);
        });
      }
      
      async function processData() {
        try {
          const data = await fetchData();
          console.log('Data received: ' + data);
        } catch (error) {
          console.error('Error: ' + error);
        }
      }
      
      processData();
      