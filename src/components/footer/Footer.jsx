
import './Footer.css'
import footer from '../../assets/logo9.png'
const Footer = () => {
  return (
    <div  className='footer'>
    <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer}/>
            <p>this is the footer of the webpage</p>
        </div>
        
    </div>
      <hr/>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>&copy; 2023 Ishwarya , All rights</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
