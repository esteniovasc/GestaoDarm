import ButtonNavigationBar from '../ButtonNavigationBar/ButtonNavigationBar';
import './NavigationBar.css'

function NavigationBar(){
    return(
        <div className="navigationBar">
            <ButtonNavigationBar srcIcon="/icons/icons8-planner-96.png" alt="Calendário"/>
            <ButtonNavigationBar srcIcon="/icons/icons8-todo-list-96.png"/>
            <ButtonNavigationBar srcIcon="/icons/icons8-home-192.png"/>
            <ButtonNavigationBar srcIcon="/icons/icons8-project-90.png"/>
            <ButtonNavigationBar srcIcon="/icons/icons8-team-90.png"/>
        </div>
    )
}

export default NavigationBar;