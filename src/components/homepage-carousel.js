import React, { Component } from 'react'
import Slider from 'react-slick'

import testimonial1 from '../images/testimonial-1.png'
import testimonial2 from '../images/testimonial-2.png'
import testimonial3 from '../images/testimonial-3.png'
import testimonial4 from '../images/testimonial-4.png'
import testimonial5 from '../images/testimonial-5.png'
import testimonial6 from '../images/testimonial-6.png'
import testimonial7 from '../images/testimonial-7.png'

class HomepageSlider extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    this.setState({
      render: true
    });
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {

    const { render } = this.state;
    const settings = {
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 5,
      arrows: false,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 750,
        settings: {
          slidesToShow: 1
        }
      }]
    };

    if (render) {
      return (
        <div className="testimonials__slider">
          <div className="slider__button slider__button--prev" onClick={this.previous}></div>
          <Slider {...settings} className="js-testimonials-slider" ref={c => (this.slider = c)}>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial1} alt="Testimonial 1" />
                <h3 className="testimonial__name">Fang H. <span className="flag flag-ch"></span></h3>
                <p className="testimonial__quote">I received over £200 extra refund and Airvat did all the paperwork! ⭐️⭐️⭐️⭐️⭐️</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial2} alt="Testimonial 2" />
                <h3 className="testimonial__name">Wang W. <span className="flag flag-ch"></span></h3>
                <p className="testimonial__quote">Finally I was able to get vat refund on my phone without manually filling long forms from all the shops. Great service!</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial3} alt="Testimonial 3" />
                <h3 className="testimonial__name">Fernanda F. <span className="flag flag-br"></span></h3>
                <p className="testimonial__quote">Fantastic tax free service - I found the app very straightforward and easy to use.</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial4} alt="Testimonial 4" />
                <h3 className="testimonial__name">Fatima A. <span className="flag flag-uae"></span></h3>
                <p className="testimonial__quote">Fast and efficient. I love that I can manage all of my tax-free shopping from my phone!</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial5} alt="Testimonial 5" />
                <h3 className="testimonial__name">Olivia S. <span className="flag flag-us"></span></h3>
                <p className="testimonial__quote">This works in every shop! I’ll never look back - this app has made VAT refund so easy.</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial6} alt="Testimonial 6" />
                <h3 className="testimonial__name">Grace Y. <span className="flag flag-can"></span></h3>
                <p className="testimonial__quote">This app has changed tax free shopping. Everything in one place on my phone.</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial7} alt="Testimonial 7" />
                <h3 className="testimonial__name">Yulia B. <span className="flag flag-rus"></span></h3>
                <p className="testimonial__quote">This is great! Simple process, works in all shops!</p>
              </div>
            </div>
          </Slider>
          <div className="slider__button slider__button--next" onClick={this.next}></div>
        </div>
      );
    }
    return null;
  }
}

export default HomepageSlider