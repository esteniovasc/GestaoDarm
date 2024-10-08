import './SliderProjects.css'

import {Swiper, SwiperSlide} from 'swiper/react'

function SliderProjects() {

    const projects = [
        { id: '1', image: '/projects/maestro.jpg'},
        { id: '2', image: '/projects/eyon.jpg'},
        { id: '3', image: '/projects/sandbox.jpg'},
        { id: '4', image: '/projects/smile.jpg'}
    ]

    return (
      <div className='slider'>
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true}}
        >
            {projects.map((projects)=> (
                <SwiperSlide key={projects.id}>
                    <img src={projects.image} alt="a" className='slide-item'/>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
  
export default SliderProjects;