import React from 'react'
import Layout from '../../components/layout/Layout'
import './About.css'

const About = () => {
  return (
    <Layout>
      <div className='about-box'>
        <div className='about-img'>
          <img src='https://static.vecteezy.com/system/resources/previews/007/931/696/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg' />
        </div>
        <div className='about-info'>
          <h1>About Us</h1>
          <h6>

            About Company:
            Mission and Vision:
            Our mission at E Commerce is to revolutionize the way people shop online by providing a user-friendly and efficient platform that caters to their every need. We envision a future where online shopping is not only convenient, but also enjoyable and personalized for each customer.

            Core Values:

            Customer Satisfaction: We prioritize customer satisfaction above all else and strive to exceed their expectations with every interaction.

            Innovation: We are committed to staying ahead of the curve by constantly innovating and improving our platform to better serve our customers.

            Integrity: We conduct business with the highest level of integrity, honesty, and transparency in all our dealings.

            Teamwork: We believe in the power of collaboration and teamwork, working together to achieve our common goals and objectives.

          </h6>

        </div>
      </div>
    </Layout>
  )
}

export default About