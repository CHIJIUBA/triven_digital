import { useEffect, useRef } from 'react'
import GLightbox from 'glightbox'
import { IconPlayFill } from './Icons.jsx'

const dashboardImg = 'https://preview.colorlib.com/theme/launch/images/dashboard.jpg'
const person1 = 'https://preview.colorlib.com/theme/launch/images/person_1.jpg'

export default function FeaturesIntro() {
  const lightboxRef = useRef(null)

  useEffect(() => {
    lightboxRef.current = GLightbox({ selector: '.glightbox' })
    return () => lightboxRef.current?.destroy()
  }, [])

  return (
    <div className="untree_co-section" id="features-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <span className="caption" data-aos="fade-up" data-aos-delay="0">Digital Services</span>
            <h3 className="heading mb-4" data-aos="fade-up" data-aos-delay="100">Selling Digital Services</h3>
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast
              </p>
              <ul className="list-unstyled ul-check primary">
                <li>There live the blind texts</li>
                <li>Far far away behind the word</li>
              </ul>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="untree_co-testimonial d-flex">
                <div className="text">
                  <blockquote>
                    &ldquo;Separated they{' '}
                    <span className="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>,
                    a large language ocean. A small river named Duden flows by their place and supplies it with
                    the necessary regelialia. &rdquo;
                  </blockquote>
                  <div className="author d-flex">
                    <div className="pic me-3">
                      <img src={person1} alt="Team member" className="img-fluid" />
                    </div>
                    <div>
                      <strong className="d-block">James Anderson</strong>
                      <span className="d-block">Facebook, Product Lead</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="400">
            <a href="https://www.youtube.com/watch?v=mwtbEGNABWU&t=9s" className="btn-video glightbox">
              <span className="wrap-icon-play">
                <IconPlayFill />
              </span>
              <img src={dashboardImg} alt="Dashboard preview" className="img-fluid img-shadow" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
