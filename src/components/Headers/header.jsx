import { Link } from "react-router-dom";
import { bicycleTheme } from "/src/Pages/context/bicycleContext";
import { searchTheme } from '../../Pages/context/searchContext';

export default function Header() {
  const { searchText, setSearchText } = bicycleTheme();
  const { searchInput, setSearchInput } = searchTheme();

  
  const onHandleSearch = (e) => {
    const { value } = e.target;
    setSearchText(value);
    if (value.length === 0) {
      setSearchInput("");
    }
  };

  const onSearchClick = () => {
    setSearchInput(searchText);
  };

  return (
    <>
      <div className="fixed top-0 left-0 h-20 right-0 bg-blue-400 z-10 ">
        {/* Amazon Logo */}
        <div className="flex items-center justify-between">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
            alt="Amazon Logo"
            className="h-20 ml-4 -mr-5"
          />

          {/* Search bar */}
          <div className="flex items-center relative">
            <input
              type="search"
              placeholder="Search here"
              className="bg-white border border-transparent rounded-l-xl w-128 h-10 px-4 cursor-pointer"
              onChange={onHandleSearch}
              value={searchText}
            />
            <button
              onClick={onSearchClick}
              className="bg-yellow-400 h-10 px-3 rounded-r-xl"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/search.png"
                alt="search-image"
                className="h-5 w-5"
              />
            </button>
          </div>

          {/* Cart */}
          <div>
            <Link to="/cart" className="flex items-center mr-6 p-2">
              <img
                src="https://img.icons8.com/?size=32&id=15893&format=png"
                alt="cart-icon-image"
              />
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
