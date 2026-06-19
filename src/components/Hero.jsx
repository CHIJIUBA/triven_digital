export default function Hero() {
  return (
    <div className="untree_co-hero" id="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            {/* <div className="dots"></div> */}
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
                  Thrive with Triven Digital
                </h1>
                <div className="excerpt" data-aos="fade-up" data-aos-delay="100">
                  <p>
                  At Triven Digital, we help businesses turn visibility into growth. Whether you're launching a new product or expanding your reach, 
				  our digital marketing solutions from strategic campaigns and social media to content creation and online advertising help your brand stand out and drive real results.
                  Grow your brand. Reach more customers. Achieve measurable success with Triven Digital.
                  </p>
                </div>
                <p data-aos="fade-up" data-aos-delay="200">
                  <a href="#features-section" className="btn btn-primary smoothscroll">See Services</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
