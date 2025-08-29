import { NavLink } from "react-router-dom";


const Search = () => {
    return (
        <div className="search-page">
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="cross-option">
                <button> <NavLink className="no-underline link-nav" to="/"> <i class="fa fa-times" aria-hidden="true"></i>  </NavLink> </button>
            </div>

        </div>





    )
}
export default Search;