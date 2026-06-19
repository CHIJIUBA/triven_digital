import { useState } from 'react'

const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    monthly: 0,
    yearly: 0,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    features: [
      { text: 'Up to 3 projects', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Community support', included: true },
      { text: 'Custom integrations', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get Started Free',
    ctaClass: 'btn btn-outline-primary btn-pricing',
  },
  {
    key: 'pro',
    name: 'Pro',
    description: 'Best for growing teams and businesses',
    monthly: 29,
    yearly: 23,
    yearlySavings: 'Save $72/year',
    featured: true,
    badge: 'Most Popular',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start Free Trial',
    ctaClass: 'btn btn-primary btn-pricing',
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthly: 99,
    yearly: 79,
    yearlySavings: 'Save $240/year',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited team members', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Custom contracts', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Sales',
    ctaClass: 'btn btn-outline-primary btn-pricing',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="untree_co-section bg-light" id="pricing-section">
      <div className="container">
        <div className="row pricing-title">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <span className="caption">Pricing</span>
            <h2 className="heading">Simple, Transparent Pricing</h2>
            <p className="text-muted mb-4">Choose the plan that fits your needs. Save 20% with yearly billing.</p>

            <div className="pricing-toggle" data-aos="fade-up" data-aos-delay="100">
              <span className="toggle-label" data-period="monthly">Monthly</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  id="pricingToggle"
                  checked={yearly}
                  onChange={(e) => setYearly(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label" data-period="yearly">Yearly</span>
              <span className="toggle-badge">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row g-4">
              {PLANS.map((plan, i) => (
                <div key={plan.key} className="col-lg-4" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                  <div className={`pricing-card${plan.featured ? ' featured' : ''}`}>
                    {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
                    <div className="pricing-header">
                      <span className="pricing-icon">{plan.icon}</span>
                      <h3 className="pricing-plan">{plan.name}</h3>
                      <p className="pricing-description">{plan.description}</p>
                    </div>
                    <div className="pricing-price">
                      <span className="price-currency">$</span>
                      <span className="price-amount">{yearly ? plan.yearly : plan.monthly}</span>
                      <span className="price-period">/<span className="period-text">mo</span></span>
                    </div>
                    {yearly && plan.yearlySavings && (
                      <div className="yearly-savings">{plan.yearlySavings}</div>
                    )}
                    <ul className="pricing-features">
                      {plan.features.map((f) => (
                        <li key={f.text}>
                          <span className={`feature-icon ${f.included ? 'check' : 'cross'}`}></span>
                          {f.text}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className={plan.ctaClass}>{plan.cta}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <p className="text-muted mb-0">All plans include 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
