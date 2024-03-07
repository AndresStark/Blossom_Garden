import { Outlet } from "react-router-dom"
import NavBar from "../../components/menu/navBar"

export default function LayoutMenu() {
    return(
        <> 
            <header className="absolute z-10 w-full">
                <NavBar/>
            </header>
           <Outlet/>
        </>
    )
}