import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { IconArrowLeft, IconArrowRight } from './Icons.jsx'

const TESTIMONIALS = [
  { name: 'James Anderson', role: 'Facebook, Product Lead', img: 'https://preview.colorlib.com/theme/launch/images/person_1.jpg' },
  { name: 'James Anderson', role: 'Facebook, Product Lead', img: 'https://preview.colorlib.com/theme/launch/images/person_2.jpg' },
  { name: 'James Anderson', role: 'Facebook, Product Lead', img: 'https://preview.colorlib.com/theme/launch/images/person_3.jpg' },
]

export default function TestimonialsSlider() {
  const swiperRef = useRef(null)

  return (
    <div className="untree_co-section" id="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 text-center text-lg-start mb-lg-0" data-aos="fade-up" data-aos-delay="0">
            <div className="mb-4">
              <span className="caption">Testimonials</span>
              <h2 className="heading">Our Customers Feedbck</h2>
            </div>
            <div>
              <a href="#" className="cusotm-slider-nav custom-prev" onClick={(e) => { e.preventDefault(); swiperRef.current?.slidePrev() }}>
                <span><IconArrowLeft /></span>
              </a>
              <a href="#" className="cusotm-slider-nav custom-next" onClick={(e) => { e.preventDefault(); swiperRef.current?.slideNext() }}>
                <span><IconArrowRight /></span>
              </a>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade" data-aos-delay="200">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true, el: '.testimonials-pagination' }}
              onSwiper={(swiper) => { swiperRef.current = swiper }}
              loop
              className="testimonials-slider"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i}>
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
                          <img src={t.img} alt="Team member" className="img-fluid" loading="lazy" />
                        </div>
                        <div>
                          <strong className="d-block">{t.name}</strong>
                          <span className="d-block">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination testimonials-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
