export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-dots"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About Launch<span className="text-primary">.</span></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <div className="social-links justify-content-start">
                <a href="#" aria-label="Instagram"><span className="icon-instagram"></span></a>
                <a href="#" aria-label="Twitter"><span className="icon-twitter"></span></a>
                <a href="#" aria-label="Facebook"><span className="icon-facebook"></span></a>
                <a href="#" aria-label="LinkedIn"><span className="icon-linkedin"></span></a>
                <a href="#" aria-label="Pinterest"><span className="icon-pinterest"></span></a>
                <a href="#" aria-label="Dribbble"><span className="icon-dribbble"></span></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 ms-auto">
            <div className="widget">
              <h3>Projects</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">La Lega Stadium</a></li>
                <li><a href="#">France Building</a></li>
                <li><a href="#">22 New Homes</a></li>
                <li><a href="#">Manage Center</a></li>
                <li><a href="#">Sports Hall</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="widget">
              <h3>Services</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">Architect</a></li>
                <li><a href="#">Interior Design</a></li>
                <li><a href="#">Landscape Design</a></li>
                <li><a href="#">Consultancy</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel:+11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel:+11234567890">+1(123)-456-7890</a></li>
                <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <i className="icon-heart text-danger" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com/" target="_blank" rel="noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
