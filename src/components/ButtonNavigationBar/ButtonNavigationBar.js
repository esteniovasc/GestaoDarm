import './ButtonNavigationBar.css'

function ButtonNavigationBar(props){
    
    return(
        <div>
            <button className={props.class}><img src={props.srcIcon} alt={props.alt} /></button>
        </div>
    )
}

export default ButtonNavigationBar;