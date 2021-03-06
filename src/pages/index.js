import React from 'react'

import Layout from '../components/layout'
import TestimonialSlider from '../components/homepage-carousel'
import FeatureViewer from '../components/feature-viewer'

import bannerPhones from '../images/banner-phones.svg'
import bannerPhonesMobile from '../images/banner-phones-mobile.png'
import introImage from '../images/CTA-image.png'
import introImageMobile from '../images/introduction-mobile.png'
import taxIconMobile from '../images/tax-icon-mobile.png'
import shopIconMobile from '../images/shop-icon-mobile.png'
import paperworkIconMobile from '../images/paperwork-icon-mobile.png'

const IndexPage = () => {
  return (
    <Layout>
      <div className="section section--banner">
        <div className="section__inner">
          <div className="section__half section__half--left">
            <h1>Tax Free Shopping on your mobile</h1>
            <a href="#footer-links" className="button">Get the App</a>
          </div>
          <div className="section__half section__half--right">
            <img className="image--desktop" src={bannerPhones} alt="Airvat Phone Demo" />
            <img className="image--mobile" src={bannerPhonesMobile} alt="Airvat Phone Demo" />
          </div>
        </div>
      </div>
      <div className="section section--introduction">
        <div className="section__inner">
          <div className="section__half introduction--left">
            <img className="image--desktop" src={introImage} alt="Easy to use" />
            <img className="image--mobile" src={introImageMobile} alt="Easy to use" />
          </div>
          <div className="section__half introduction--right">
            <div className="introduction__content">
              <h2 className="gradient-bg">Cheaper and easier tax free shopping in the UK!</h2>
              <div className="introduction__point">
                <img src={taxIconMobile} alt="Tax" className="mobile-icon" />
                <h3>GET MORE VAT REFUND BACK</h3>
                <p className="large">In-store tax refund companies charge you up to 50% in commissions, fees, and exchange rates. We charge you much less, so your tax free shopping is even cheaper!</p>
              </div>
              <div className="introduction__point">
                <img src={shopIconMobile} alt="Tax" className="mobile-icon" />
                <h3>SHOP TAX FREE IN ANY STORE</h3>
                <p className="large">Use our VAT refund app for any shop in the UK. Enjoy the same tax free service whether you are in a luxury department store or a small souvenir shop!</p>
              </div>
              <div className="introduction__point">
                <img src={paperworkIconMobile} alt="Tax" className="mobile-icon" />
                <h3>WE DO THE BORING VAT REFUND PAPERWORK FOR YOU</h3>
                <p className="large">Forget manually filling in multiple tax free forms from different stores. We put all your receipts together into one tax free form.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--features">
        <div className="section__inner">
          <FeatureViewer></FeatureViewer>
        </div>
      </div>
      <div className="section section--testimonials">
        <div className="section__inner">
          <h2 className="gradient-bg">What our users say</h2>
          <TestimonialSlider></TestimonialSlider>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage