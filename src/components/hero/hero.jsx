import './hero.css'

import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {

  return (

    <div className="hero container">

        <div className="hero-text">

            <h1>Better Eduaction For Better World</h1>

            <p>Techsity University empowers students with cutting-edge tech education. Our programs blend innovative learning with practical skills, preparing the next generation of tech leaders to transform the digital landscape.</p>

            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

        </div>

    </div>

  )

}



export default Hero