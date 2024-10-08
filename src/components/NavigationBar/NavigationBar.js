import { Link, useLocation } from 'react-router-dom';
import ButtonNavigationBar from '../ButtonNavigationBar/ButtonNavigationBar';
import './NavigationBar.css'

function NavigationBar(){

    const location = useLocation();

    return(
        <nav className="navigationBar">

            <Link to="/schedules">
                <ButtonNavigationBar srcIcon="/icons/icons8-planner-96.png" alt="Calendário" class={`buttonNavigationBar ${location.pathname === '/schedules' ? 'active' : ''}`}/>
            </Link>
            
            <Link to="/tasks">
                <ButtonNavigationBar srcIcon="/icons/icons8-todo-list-96.png" class={`buttonNavigationBar ${location.pathname === '/tasks' ? 'active' : ''}`}/>
            </Link>
            
            <Link to="/dashboard">
                <ButtonNavigationBar srcIcon="/icons/icons8-home-192.png" class={`buttonNavigationBar ${location.pathname === '/dashboard' ? 'active' : ''}`}/>
            </Link>
            
            <Link to="/projectslist">
                <ButtonNavigationBar srcIcon="/icons/icons8-project-90.png" class={`buttonNavigationBar ${location.pathname === '/projectslist' ? 'active' : ''}`}/>
            </Link>
            
            <Link to="/teams">
                <ButtonNavigationBar srcIcon="/icons/icons8-team-90.png" class={`buttonNavigationBar ${location.pathname === '/teams' ? 'active' : ''}`}/>
            </Link>
            

        </nav>
    )
}

export default NavigationBar;