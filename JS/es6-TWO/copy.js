const myArray = ['Sam', 'Alice', 'Nick', 'Matt'];

// Appends text to each element of the array
const newArray = myArray.forEach(name => {
	return 'My name is ' + name; 
});
console.log(newArray); // ['My name is Sam', 'My Name is Alice', ...]