import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './SingleEvent.css';
import { MeetupContext } from "../../../contexts/MeetupContext";
import { useNavigate, useParams } from "react-router-dom";
import AddPage from "../AddPage/AddPage";

const SingleEvent = () => {
    const { meetId } = useParams();
    const navigate = useNavigate();
    const { meetupData, showModal, setShowModal, rsvpEvent } = useContext(MeetupContext);
    
    const currMeet = meetupData.find(item => item.id === meetId);

    if(!currMeet){
        navigate('/');
    }
    
    const eventStart = new Date(currMeet.eventStartTime);
    const eventEnd = new Date(currMeet.eventEndTime);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const eventStartDateString = eventStart.toLocaleDateString('en-IN', dateOptions);
    const eventStartTimeString = eventStart.toLocaleTimeString('en-IN').toUpperCase();
    const eventEndDateString = eventEnd.toLocaleDateString('en-IN', dateOptions);
    const eventEndTimeString = eventEnd.toLocaleTimeString('en-IN').toUpperCase();

    const eventStarted = eventStart > Date.now();

    const rsvpClickHandler = () => {
        window.scrollTo(0,0);
        setShowModal(true)
    }
    
    return <Layout>
        <div className="singleevent">
            <div>
                <h2>{currMeet.title}</h2>
                <div>
                    <p>Hosted by: </p>
                    <p>{currMeet.hostedBy}</p>
                </div>
                <div>
                    <img src={currMeet.eventThumbnail} alt={currMeet.title} />
                </div>
                <div>
                    <div>Details:</div>
                    <p>{currMeet.eventDescription}</p>
                </div>
                <div>
                    <div>Additional Information:</div>
                    <p><span>Dress Code:</span>{ currMeet.additionalInformation.dressCode}</p>
                    <p><span>Age Restrictions:</span>{ currMeet.additionalInformation.ageRestrictions}</p>
                </div>
                <div>
                    <p>Event Tags:</p>
                    <div>
                    {currMeet.eventTags.map((tag, index) => <span className="singleevent-postTag" key={index}>{tag}</span>)}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <span>Time: </span>
                        <span>{eventStartDateString} at {eventStartTimeString} to {eventEndDateString} at {eventEndTimeString}</span>
                    </div>
                    <div>
                        <span>Location: </span>
                        <span>
                            <span>{currMeet.location}</span>
                            <span>{currMeet.address}</span>
                        </span>
                    </div>
                    {currMeet.isPaid && <div>
                        <span>Price (INR):</span>
                        <span>{currMeet.price}</span>
                    </div>}
                </div>
                <div>
                    <p>Speakers: ({currMeet.speakers.length})</p>
                    <div>
                        {currMeet.speakers.map((speaker) => (
                            <span key={speaker.name}>
                                <img src={speaker.image} alt={speaker.name} />
                                <p>{speaker.name}</p>
                                <p>{speaker.designation}</p>
                            </span>
                        ))}
                    </div>
                </div>
                {eventStarted && !rsvpEvent[currMeet.id] && <button onClick={rsvpClickHandler}>RSVP</button>}
                {eventStarted && rsvpEvent[currMeet.id] && <button>Already RSVPed...</button>}
            </div>
        </div>
        { showModal && <AddPage eventId={currMeet.id}/>}
    </Layout>
}

export default SingleEvent;