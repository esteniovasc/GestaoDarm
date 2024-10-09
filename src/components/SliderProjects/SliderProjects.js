import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react'
import projectsData from '../../data/projectsData.json'
import './SliderProjects.css'

function SliderProjects() {

    const projects = projectsData;

    return (
      <div className='slider'>
          <Swiper
              slidesPerView={1}
              pagination={{clickable: true}}
          >
              {projects.map((projects)=> (
                  <SwiperSlide key={projects.id}>
                    <Link to={`/projectview/${projects.id}`}>
                      <img src={projects.image} alt="a" className='slide-item'/>
                    </Link>  
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
    );
  }
  
export default SliderProjects;