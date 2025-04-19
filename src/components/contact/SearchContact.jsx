import { PURPLE } from "../../helpers/colors"

const SearchContact = () => {

    return (
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: PURPLE }}>
                <i class='bx bx-search'></i>
            </span>
            <input type="text"
                dir="rtl"
                className="form-control"
                placeholder="جستجوی مخاطب"
                aria-label="search"
                aria-describedby="basic-addon1" />
        </div>
    )
}

export default SearchContact