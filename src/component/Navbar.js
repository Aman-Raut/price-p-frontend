import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory to navigate

function Navbar() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Check if the user is logged in by checking localStorage
  const isLoggedIn =
    localStorage.getItem("token") && localStorage.getItem("userID");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail !== email) {
      setEmail(storedEmail || "");
    }
  }, [email]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("email");
    navigate("/signin");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student Accomodation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navi">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
             
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/list">
                    List of Properties
                  </a> */}
                  <a className="nav-link" href="/hostel-list">
                   Hostel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {email}
                  </a>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item">
                    <button class="btn btn-primary" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">
                      Sign in
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
