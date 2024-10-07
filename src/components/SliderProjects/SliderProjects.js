import './SliderProjects.css'

function SliderProjects() {
    return (
      <div className='sliderProjects'>

        <div className='slides'>

            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>

            <div className='slideFirst'>
                <img src="/projects/maestro.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="/projects/eyon.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="/projects/sandbox.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="/projects/smile.jpg" alt="" />
            </div>

            <div className='navigation-auto'>
                <div className='auto-btn1'></div>
                <div className='auto-btn2'></div>
                <div className='auto-btn3'></div>
                <div className='auto-btn4'></div>
            </div>

        </div>

        <div className="manual-navigation">
            <label for="radio1" className='manual-btn'></label>
            <label for="radio2" className='manual-btn'></label>
            <label for="radio3" className='manual-btn'></label>
            <label for="radio4" className='manual-btn'></label>
        </div>

      </div>
    );
  }
  
export default SliderProjects;