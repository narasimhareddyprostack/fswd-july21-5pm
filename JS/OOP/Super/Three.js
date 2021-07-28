class One{
	single(){ console.log("Single")}
}
class Two extends One {
	double(){
	console.log("double")
	}
}
class Three extends Two{
	tripple(){
	console.log("thriple")}
}
let a = new Three() ;
a.single();
a.double()
a.tripple()