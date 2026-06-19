export default function Hero() {
  return (
    <div className="untree_co-hero" id="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="dots"></div>
            <div className="row align-items-center">
              <div className="col-lg-7 ms-auto order-lg-2" data-aos="fade-right" data-aos-delay="400">
                <img
                  src="https://preview.colorlib.com/theme/launch/images/market-launch-pana.svg"
                  alt="Product launch illustration"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="heading" data-aos="fade-up" data-aos-delay="0">
                  Promote Your Products by Colorlib
                </h1>
                <div className="excerpt" data-aos="fade-up" data-aos-delay="100">
                  <p>
                    Another cool free html css template by{' '}
                    <a href="#" target="_blank" rel="noreferrer" className="highlight">Colorlib</a>{' '}
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                  </p>
                </div>
                <p data-aos="fade-up" data-aos-delay="200">
                  <a href="#features-section" className="btn btn-primary smoothscroll">See Features</a>
                  <a href="#pricing-section" className="btn btn-outline-primary smoothscroll">Pricing</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
