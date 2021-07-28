class Component{
    comp_Name = "Class Component"
    render(){
        console.log("Component Class Render Method")
    }
}
class App extends Component{
    render(){
        console.log("App Class - Render Method")
    }

}
let app = new App()
console.log(app)
app.render()
console.log(app.comp_Name)