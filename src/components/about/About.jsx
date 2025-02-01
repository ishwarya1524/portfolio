
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import pro from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme}/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={pro} alt=''/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am ishwarya, A computer science and engineering student at chennai insitute of technology, currently pursuing 2nd year</p>
                <p>I am passionate about technology and focused on building my skills in programming and problem-solving. With a strong interest in innovation, I am committed to staying updated with the latest trends in the tech world.</p>
            </div>
            <div className='about-skills'>
              <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
              <div className='about-skill'><p>React Js</p><hr style={{width:"50%"}}/></div>
              <div className='about-skill'><p>Javascript</p><hr style={{width:"70%"}}/></div>
              <div className='about-skill'><p>Python</p><hr style={{width:"90%"}}/></div>
              <div className='about-skill'><p>C++</p><hr style={{width:"70%"}}/></div>
              <div className='about-skill'><p>Java</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievment'>
        <a href='https://leetcode.com/u/Ishwaryaice/' target='_blank' rel='noopener'>
          <h1>700+</h1>
          <p>Leetcode problems</p>
        </a>
        </div>
        <hr/>
        <div className='about-achievment'>
        <a href='https://www.codechef.com/users/ishwaryap1524' target='_blank' rel='noopener'>
          <h1>200+</h1>
          <p>Codechef problems</p>
          </a>
        </div>
        <hr/>
        <div className='about-achievment'>
        <a href='#services'>
          <h1>2+</h1>
          <p>Projects</p>
        </a>
        </div>
      </div>
    </div>
  )
}

export default About
