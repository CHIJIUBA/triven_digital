import { SERVICE_ICONS } from './Icons.jsx'

const SERVICES = [
  { title: 'Grow Your Business', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { title: 'Build Products', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { title: 'Success Every Day', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { title: 'Bring Ideas to Life', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
]

export default function ServiceGrid() {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <div key={service.title} className="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="service">
                  <div className={`service-icon color-${i + 1} mb-4`}>
                    <Icon />
                  </div>
                  <div className="service-contents">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
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
