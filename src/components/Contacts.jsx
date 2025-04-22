import { Fragment } from "react"
import { CURRENTLINE, ORANGE } from "../helpers/colors"
import Contact from "./contact/Contact"
import NotFound from "../assets/no-found.gif"

const Contacts = ({ contacts }) => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2" style={{ backgroundColor: ORANGE }}>
                                    Create New Contact {" "}
                                    <i class='bx bx-plus position-relative' style={{ top: "1px" }}></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {
                        contacts.length > 0 ? contacts.map(c => (
                            <Contact key={c.id} contact={c} />
                        )) :
                            (
                                <div className="text-center py-5" style={{ backgroundColor: CURRENTLINE }}>
                                    <p className="h3" style={{ color: ORANGE }}>
                                    !...Contact Not Found
                                        <img src={NotFound} alt="Not Found" className="w-25" />
                                    </p>
                                </div>
                            )
                    }

                    <div className="col"></div>

                </div>
            </section>
        </>
    )
}

export default Contacts