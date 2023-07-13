import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

export default function ProductCard(props){
    const { item } = props;
    const { id, title, eventStartTime, eventThumbnail, eventType } = item;
    const navigate = useNavigate();
    const url = '/meetup/'+id;
    const eventStart = new Date(eventStartTime);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const eventStartDateString = eventStart.toLocaleDateString('en-IN', dateOptions);
    const eventStartTimeString = eventStart.toLocaleTimeString('en-IN').toUpperCase();

    return <div className="productcard-card" onClick={()=>navigate(url)}>
        <div className="productcard-img">
            <img src={eventThumbnail} alt={title} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <div>{eventStartDateString}.{eventStartTimeString} IST</div>
            <h4 className="productcard-card-name">{title}</h4>
        </div>
        <div>{eventType} Event</div>
    </div>
}