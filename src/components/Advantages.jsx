import { SERVICE_ICONS } from './Icons.jsx'

const ADVANTAGES = [
  { title: 'Grow Your Business' },
  { title: 'Build Products' },
  { title: 'Success Every Day' },
  { title: 'Bring Ideas to Life' },
]

export default function Advantages() {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="heading">Advantage of using our products</h2>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row">
          {ADVANTAGES.map((item, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <div key={item.title} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="service horizontal d-flex">
                  <div className={`service-icon color-${i + 1} mb-4`}>
                    <Icon />
                  </div>
                  <div className="service-contents">
                    <h3>{item.title}</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#" className="read-more">Learn More</a></p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
