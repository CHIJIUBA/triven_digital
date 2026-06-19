import { IconArrowRight } from './Icons.jsx'

const NEWS = [
  { author: 'James', img: 'https://preview.colorlib.com/theme/launch/images/person_1.jpg', delay: 0, col: 'col-md-6 mb-4 mb-lg-0 col-lg-4' },
  { author: 'Khan', img: 'https://preview.colorlib.com/theme/launch/images/person_2.jpg', delay: 100, col: 'col-md-6 mb-4 mb-lg-0 col-lg-4' },
  { author: 'Rob', img: 'https://preview.colorlib.com/theme/launch/images/person_3.jpg', delay: 300, col: 'col-md-12 col-lg-4' },
]

export default function News() {
  return (
    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="heading">Our News</h2>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row">
          {NEWS.map((item) => (
            <div key={item.author} className={item.col} data-aos="fade-up" data-aos-delay={item.delay}>
              <div className="news-item">
                <div className="vcard d-flex align-items-center mb-4">
                  <div className="img-wrap">
                    <img src={item.img} alt="Team member" className="img-fluid" loading="lazy" />
                  </div>
                  <div className="post-meta">
                    <strong>Posted by {item.author}</strong>
                    <span>Mar 8, 2032</span>
                  </div>
                </div>
                <div className="news-contents mb-4">
                  <span className="post-meta-2">Digital Service, 4 min read</span>
                  <h3><a href="#">Far far away behind the word mountains far from the countries</a></h3>
                </div>
                <p className="mb-0">
                  <a href="#" className="read-more-arrow">
                    <IconArrowRight />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
