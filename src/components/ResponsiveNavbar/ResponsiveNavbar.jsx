import { Link } from "react-router-dom";
import { useNavbar } from "../../contexts/index";
import "./ResponsiveNavbar.css";
export function ResponsiveNavbarForMobile() {
  const { showResponsiveNavbarForMobile, setShowResponsiveNavbarForMobile } =
    useNavbar();
  return showResponsiveNavbarForMobile ? (
    <div className="responsive-navbar flex-column">
      <button
        onClick={() => setShowResponsiveNavbarForMobile(false)}
        class="btn-close-nav align-end"
      >
        <i class="fa fa-close header-icon"></i>
      </button>
      <ul class="flex-column responsive-nav-list">
        <Link to="/">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Home
          </li>
        </Link>
        <Link to="/products">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Products
          </li>
        </Link>
        <Link to="/auth">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Sign in
          </li>
        </Link>
        <Link to="/wishlist">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Wishlist
          </li>
        </Link>
      </ul>
    </div>
  ) : null;
}
export function ResponsiveNavbarForTablet() {
  return (
    <ul className="nav-list-for-tablets flex-row">
      <li>
        <i class="fa fa-search header-icon align-center"></i>
      </li>
      <Link to="/products">
        <li>
          <span class="material-icons header-icon products-icon align-center">
            inventory
          </span>
        </li>
      </Link>
      <Link to="/cart">
        <li>
          <div class="badge">
            <i class="fa fa-shopping-cart header-icon header-badge-icon"></i>
            <span class="badge-counter badge-round badge-counter-right">2</span>
          </div>
        </li>
      </Link>
      <Link to="/wishlist">
        <li>
          <div class="badge">
            <i class="fa fa-heart header-icon header-badge-icon"></i>
            <span class="badge-counter badge-round badge-counter-right">4</span>
          </div>
        </li>
      </Link>
      <Link to="/auth">
        <li>
          <i class="fa fa-user header-icon header-badge-icon align-end"></i>
        </li>
      </Link>
    </ul>
  );
}
