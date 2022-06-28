/*
You have been given a list of products which is having property productName, quantity and description.

*/
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

/*
PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

*/
function getUniqueProductCount(listOfProducts){

// -- using map
  let myMap = new Map();
  
  for(let v of listOfProducts){
  if(myMap.has(v.productName)){
      var s = Number(myMap.get(v.productName))
   myMap.set(v.productName,s+1)
  }else{
   myMap.set(v.productName,1)
  }
  
  }
 //map
  for(let s of myMap){
    console.log(s)
  }
  
//array  
  /* const arr = Array.from(myMap, ([key, value]) => {
  return {[key]: value};
   }); */
 
 //object
    /* console.log(arr) 
      const obj = Object.fromEntries(myMap);
     console.log(obj)  */
    
 } 

getUniqueProductCount(listOfProducts);

/*



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/


function getUniquePrducts(listOfProducts){
  let n = listOfProducts.length
  let arr = []
  for(let i=0;i<n;i++){
  var s=0;
  var indexj = 0
     for(let j=0;j<arr.length;j++){
        if(listOfProducts[i].productName == arr[j].productName){
             s=1;
             indexj=j;
        }
     }
     if(s==1){
               arr[indexj].quantity += listOfProducts[i].quantity;
        }else{
         arr.push( listOfProducts[i])
       }
  
  }
  console.log(arr)
}

getUniquePrducts(listOfProducts)





