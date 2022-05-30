import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAsia} from "@fortawesome/free-solid-svg-icons"
export default function NavBar(){
	return (
		<nav>
			<FontAwesomeIcon icon={faEarthAsia}/>
			<p className='nav--p'>Most impressive place in Japan</p>
		</nav>
	)
}