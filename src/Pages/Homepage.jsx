import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Counter from "../Components/Counter"

export default function Homepage() {
        const name ="John Doe"
        const age =18
        const address ="Bhuj"
        console.log(name)
    return(


        <div>
            <Navbar />
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam!</p>
            <Footer />
            <Counter />
        </div>
    )
}