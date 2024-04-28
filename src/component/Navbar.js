import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory to navigate
import './Navbar.css';

function Navbar() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Check if the user is logged in by checking localStorage
  const isLoggedIn = localStorage.getItem('token') && localStorage.getItem('userID');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (!storedEmail !== email) {
      setEmail(storedEmail || '');
    }
  }, [email]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    navigate('/signin');
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Cheap&Better Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="navi">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/list">List of Properties</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">{email}</a>
                </li>
                {isLoggedIn ? ( // Render Logout button if user is logged in
                  <li class="nav-item">
                    <button class="btn btn-primary" onClick={handleLogout}>Logout</button>
                  </li>
                ) : (
                  <li class="nav-item">
                    <a class="nav-link" href="/signin">Sign in</a>
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
