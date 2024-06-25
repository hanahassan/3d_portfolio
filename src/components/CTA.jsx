import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Let's Chat. <br className="sm:block hidden"/> 
        If you have any questions, or just want to talk, please reach out!</p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
    </section>
  )
}

export default CTA