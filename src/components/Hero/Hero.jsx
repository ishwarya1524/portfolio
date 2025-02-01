
import profile_img from '../../assets/profile_img.svg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id ='home' className='hero'>
      <img src={profile_img} alt=''></img>
      <h1><span> I am Ishwarya,</span>  college student from chennai</h1>
      <p>Aspiring Software Developer | Computer Science and Engineering Student</p>
      
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
        <a className="hero-resume" href="https://drive.google.com/file/d/1myyTlSujYWT6iNCoLqQBGeo825zmb25H/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  My resume
</a>

      </div>
    </div>
  )
}

export default Hero
