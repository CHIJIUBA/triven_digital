import Counter from './Counter.jsx'

export default function About() {
  return (
    <div className="untree_co-section" id="about-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://preview.colorlib.com/theme/launch/images/about.svg"
              alt="About us illustration"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-lg-4">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="0">
              <span className="caption">About</span>
              <h2 className="heading">About Us</h2>
            </div>
            <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
              </p>
              <p>
                Separated they{' '}
                <span className="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>,
                a large language ocean. A small river named Duden flows by their place and supplies it with
                the necessary regelialia.
              </p>
            </div>

            <ul className="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
              <li>There live the blind texts</li>
              <li>Far far away behind the word</li>
              <li>Their place and supplies</li>
            </ul>

            <div className="row count-numbers">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                <span className="counter d-block">
                  <Counter target={59} suffix="M" />
                </span>
                <span className="caption-2">Members</span>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <span className="counter d-block">
                  <Counter target={14} />
                </span>
                <span className="caption-2">Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
