import { ORANGE } from "../../helpers/colors"

const SearchContact = () => {

    return (
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: ORANGE }}>
                <i class='bx bx-search'></i>
            </span>
            <input type="text"
                className="form-control"
                placeholder="Contact Search"
                aria-label="search"
                aria-describedby="basic-addon1" />
        </div>
    )
}

export default SearchContact