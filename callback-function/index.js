
const perf =(data,callback)=>{
    setTimeout(() => {
        
        callback(data*4)
    }, 2000);
}
const hand =(res)=>{
    console.log( res)
}

perf(4,hand)

function exampleConst() {
    const z = 30;
    // z = 40; // TypeError: Assignment to constant variable.
  
    const obj = { prop: "value" };
   return obj.prop = "new value"; // Valid, mutating the object's property.
  }
//   console.log(obj)
  
  console.log(exampleConst());
  