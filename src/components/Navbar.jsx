import SearchContact from "./contact/SearchContact"
import { PURPLE, BACKGROUND, FOREGROUND } from "../helpers/colors"

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ backgroundColor: BACKGROUND }}>
            <div className="container">
                <div className="row w-100 d-flex justify-content-center align-items-center">
                    {/* <div className="navbar-brand"> */}
                    <div className="col" style={{ color: FOREGROUND }}>
                        <span style={{ color: FOREGROUND }} className='bx bxs-user'></span>{" "}
                        وب اپلیکیشن مدیریت {" "}
                        <span style={{ color: PURPLE }}>مخاطبین</span>
                        {" "}
                    </div>
                    {/* </div> */}
                    <div className="col">
                        <SearchContact />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar