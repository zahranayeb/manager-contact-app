import { CURRENTLINE, CYAN, RED, YELLOW } from "../../helpers/colors"

const Contact = () => {
    return (
        <div className="col-md-6">
            <div style={{ backgroundColor: CURRENTLINE }} className="card">
                Test
            </div>
            <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img src="https://placehold.co/200" alt="" style={{ border: `1px solid ${CURRENTLINE}` }}
                                className="img-fluid rounded" />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    FullName: {" "}
                                    <span className="fw-bold">
                                        Zahra Nayebloo
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    PhoneNumber: {" "}
                                    <span className="fw-bold">
                                        09301573435
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Email: {" "}
                                    <span className="fw-bold">
                                        Nayebloo@yahoo.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1" style={{ backgroundColor: YELLOW }}>
                                <i class='bx bx-show'></i>
                            </button>

                            <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                                <i class='bx bx-pencil'></i>
                            </button>

                            <button className="btn my-1" style={{ backgroundColor: RED }}>
                                <i class='bx bx-trash'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact