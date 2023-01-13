import React from 'react'

export default function me() {
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${style.nav} ${style.active}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link  className={`nav-link ${style.nav}`} href="#about"> About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${style.nav}`} href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  IT Solutions
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${style.nav}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Case Studies
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${style.nav}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  News
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${style.nav}`} aria-current="page" href="#" > Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${style.nav}`} aria-current="page" href="#">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
            </ul>
    </div>
  )
}



