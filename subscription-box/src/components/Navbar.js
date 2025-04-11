// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const navbarStyles = {
  nav: {
    padding: "16px 32px",
    background: "linear-gradient(to right, rgba(11, 46, 51, 0.9), rgba(79, 124, 130, 0.9))", // Slight opacity
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    borderBottom: "3px solid #4F7C82",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoIcon: {
    fontSize: "28px",
    marginRight: "10px",
    color: "#FFD54F",
  },
  centerLinksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#E0F7FA",
    padding: "10px 16px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  linkHoverBox: {
    backgroundColor: "#81D4FA",
    color: "#0B2E33",
  },
  dropdown: {
    margin: "0 15px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "26px",
    color: "#FFD54F",
  },
  notificationDot: {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    width: "10px",
    height: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
  profileAvatar: {
    fontSize: "26px",
    color: "#FFD54F",
    cursor: "pointer",
  },
};

const Navbar = ({ cartItems }) => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const handleMouseEnter = (linkName) => setHoveredLink(linkName);
  const handleMouseLeave = () => setHoveredLink(null);

  const navItems = ["Dashboard", "About Us", "How It Works", "Contact Us"];

  return (
    <nav style={navbarStyles.nav}>
      <Link to="/" style={navbarStyles.logo}>
        <i className="bx bx-box" style={navbarStyles.logoIcon}></i>
        SUBBOX
      </Link>

      <div style={navbarStyles.centerLinksContainer}>
        {navItems.map((item, index) => {
          const path =
            item === "Dashboard"
              ? "/"
              : `/${item.toLowerCase().replace(/\s/g, "-")}`;
          return (
            <Link
              to={path}
              key={index}
              style={{
                ...navbarStyles.link,
                ...(hoveredLink === item ? navbarStyles.linkHoverBox : {}),
              }}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item}
            </Link>
          );
        })}

        <div className="dropdown" style={navbarStyles.dropdown}>
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="categoriesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
            <li>
              <Link className="dropdown-item" to="/books-entertainment">
                Books & Entertainment
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/beauty-skin-products">
                Beauty & Skin Products
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={navbarStyles.iconContainer}>
        <div style={navbarStyles.cartIconContainer}>
          <Link to="/cart">
            <i className="bx bx-cart" style={navbarStyles.cartIcon}></i>
          </Link>
          {cartItems.length > 0 && (
            <span style={navbarStyles.notificationDot}></span>
          )}
        </div>
        <Link to="/login">
          <i className="bx bx-user-circle" style={navbarStyles.profileAvatar}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
