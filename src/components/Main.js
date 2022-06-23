import '../styles/Main.css'
import List from "./List";
import Register from "./Register";


const Main = () => {
    return (
        <>
            <div className="Container-Main">
                <div className="Container-Register-Main"> <Register/> </div>
                <div className="Container-List-Main"> <List/> </div>
            </div>

        </>
    )
}

export default Main;