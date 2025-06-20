import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './footer.css'
export default function(){
    return(
        <footer className='footer'>
            Built With 
            <FontAwesomeIcon icon={faHeart} className='footer-icon' aria-hidden="true"/>
            by
            <a href="https://eazybytes.com/" target='_blank' rel='norefer'>EazyBytes</a>
        </footer>
    )
}