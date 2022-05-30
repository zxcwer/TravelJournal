import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function Card(props){
	return (
		<div class="card">
			<img src={props.imageUrl} className="card--image"></img>
			<div className='card--text'>
				<div className="card--location">
					<FontAwesomeIcon icon={faLocationDot} className="card--mark"></FontAwesomeIcon>
					<p>{props.location}</p>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<h1>{props.title}</h1>
				<h3>{props.startDate}-{props.endDate}</h3>
				<p>{props.description}</p>
			</div>
			
		</div>
	)
}