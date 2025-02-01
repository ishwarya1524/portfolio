
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import Projects from '../../assets/dummy'
import arrow from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
        <h1>My Projects</h1>
        <img src={theme}/>
    </div>
      <div className='services-container'>
        {Projects.map((service,index)=>{
            return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h3>{service.s_name}</h3>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
                <a
                    href={service.url} // Dynamically passed URL
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practices
                    className="read-more-link"
                  >
                  <p>Read More</p>
                  <img id ='arrow_button' src={arrow} alt="Arrow Icon" />
                </a>

            </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
