import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200/60 rounded p-6">
      <nav className="grid grid-flow-col gap-4 text-base-content">
        <Link to="/" className="link link-hover">
        Home
        </Link>
        <Link to="/about" className="link link-hover">
          About
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact Us
        </Link>
        <Link to="/policy" className="link link-hover">
          Policy
        </Link>
      </nav>
      <nav>
        <div className="flex gap-4">
          <Link
            to="#"
            className="link link-animated"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-facebook] size-6"></span>
          </Link>
          <Link to="#" className="link link-animated" aria-label="X Link">
            <span className="icon-[tabler--brand-x] size-6"></span>
          </Link>
          <Link
            to="#"
            className="link link-animated"
            aria-label="Linkedin Link"
          >
            <span className="icon-[tabler--brand-linkedin] size-6"></span>
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Cakify</p>
      </aside>
    </footer>
  );
}

export default Footer