import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Schedules() {
    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>estes são os horários atuais</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default Schedules;