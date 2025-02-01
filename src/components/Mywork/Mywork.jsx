
import './Mywork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
import { useState } from 'react'

const Mywork = () => {
    const[modal,setModal]=useState(false);
    const[currentImage,setCurrentImage]=useState('')
    const[visible,setVisibleCount]=useState(6)
    const[expanded,setExpanded]=useState(false);

    const openModal=(img)=>{
      setCurrentImage(img);
      setModal(true);
    };

    const closeModal=()=>{                    
      setModal(false);
      setCurrentImage('');
    }

    const togglecerti = () => {
      if (expanded){
        setVisibleCount(6);
      }
      else {
        setVisibleCount(mywork_data.length);
      }
      setExpanded(!expanded);
    };
    
  return (
    <div id ='work' className='mywork'>
    <div className='mywork-title'>
        <h1>My Certifications</h1>
        <img src={theme}/>
    </div>
      <div className='mywork-container'>
        {mywork_data.slice(0,visible).map((work,index)=>{
            return <img key={index} src={work.w_img}
              alt={`Certificate ${index+1}`}
              onClick={()=>openModal(work.w_img)}
            />
        })}
      </div>
      {mywork_data.length>6 && ( // Only show the button if there are more certificates
        <div className="mywork-showmore" onClick={togglecerti}>
          <p>{expanded?"Show Less":"Show More"}</p>
          <img src={arrow} alt="Arrow" />
        </div>
      )}
      
      {modal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Certification" />
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mywork
