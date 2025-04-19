import SearchContact from "./contact/SearchContact"
import { Purple, Background, Foreground } from "../helpers/colors"

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ backgroundColor: Background }}>
            <div className="container">
                <div className="row w-100 d-flex justify-content-center align-items-center">
                    <i className="fas fa-id-badge" />
                    {/* <div className="navbar-brand"> */}
                        <div className="col" style={{ color: Foreground }}>
                            وب اپلیکیشن مدیریت {" "}
                            <span style={{ color: Purple }}>مخاطبین</span>
                            <span style={{ color: Foreground }} className='bx bxs-user'></span>
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