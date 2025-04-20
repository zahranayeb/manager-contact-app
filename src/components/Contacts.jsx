import { Fragment } from "react"
import { YELLOW } from "../helpers/colors"

const Contacts = () => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2" style={{ backgroundColor: YELLOW }}>
                                    Create New Contact {" "}
                                    <i class='bx bx-plus position-relative' style={{ top: "1px" }}></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts