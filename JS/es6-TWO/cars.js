let cars = [{car_Name:"i20" , brand:"Hyndai", color:'white'},
            {car_Name:"Figo" , brand:"Ford",   color:'red'},
            {car_Name:"Thar" , brand:"Mahindra", color:'white'},
            {car_Name:"Safari" , brand:"Tata", color:'black'}
        ]
let new_Car = cars.forEach((car)=>{
    if(car.color == 'white'){
        return car
    }
       
})
console.log(new_Car)