let size = [1,2,3,4,5]
//how to iterate? array (JS) iterable object 
/*
    1. for 
    2. while
    3. do while
    4. for of 
    5. Array.map/forEach/reduce
*/

//size.map(()=>{})  -- passing fat arrow function as one arg
let result = size.map((value)=>{ return value *100})
console.log(result)

/*
map() - es6 new array method, it is iteratinig returning new array 
*/