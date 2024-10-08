import './HeaderDashboard.css'

function HeaderDashboard() {
    return (
      <header className="headerDashboard">
        <a href="/userProfile"><img src="/icons/user-svgrepo-com.png" alt="" style={{height:'5vh'}}/></a>
        <img src="/icons/logoDarmLabs.jpg" alt="Logo Darm Labs" style={{height:'5vh'}} />
        <img src="/icons/menu-svgrepo-com.png" alt="Menu Lateral" style={{height:'5vh'}}/>
      </header>
    );
  }
  
  export default HeaderDashboard;