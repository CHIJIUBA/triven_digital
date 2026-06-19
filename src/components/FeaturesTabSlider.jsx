import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SERVICE_ICONS } from './Icons.jsx'

const dashboardImg = 'https://preview.colorlib.com/theme/launch/images/dashboard.jpg'

const TABS = [
  { title: 'Grow Your Business', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
  { title: 'Build Products', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
  { title: 'Success Every Day', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
  { title: 'Bring Ideas to Life', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
]

export default function FeaturesTabSlider() {
  const [active, setActive] = useState(0)
  const swiperRef = useRef(null)

  return (
    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 order-lg-2 js-custom-dots">
            {TABS.map((tab, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <a
                  key={tab.title}
                  href="#"
                  className={`service link horizontal d-flex${active === i ? ' active' : ''}`}
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(i)
                    swiperRef.current?.slideToLoop(i)
                  }}
                >
                  <div className={`service-icon color-${i + 1} mb-4`}>
                    <Icon />
                  </div>
                  <div className="service-contents">
                    <h3>{tab.title}</h3>
                    <p>{tab.text}</p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="col-lg-7">
            <div className="img-shadow">
              <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                onSlideChange={(swiper) => setActive(swiper.realIndex)}
                loop
                className="features-slider"
              >
                {TABS.map((tab, i) => (
                  <SwiperSlide key={tab.title}>
                    <span className="number">{i + 1}/{TABS.length}</span>
                    <img src={dashboardImg} alt="Dashboard preview" className="img-fluid" loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
