import { createContext, useState } from "react";
import { meetups } from "../backend/database";
import { useNavigate } from "react-router-dom";

export const MeetupContext = createContext();

const initMeetupData = meetups;
const initRSVPEvent = initMeetupData.reduce((acc, {id})=>({...acc, [id]: false}), {});

const initReviewState = { name: "", email: ""};

export const MeetupProvider = ({children}) => {
    const navigate = useNavigate();

    const [ meetupData, setMeetupData ] = useState(initMeetupData);
    const [ searchList, setSearchList ] = useState("");
    const [ rsvpEvent, setRsvpEvent ] = useState(initRSVPEvent);
    const [ showModal, setShowModal ] = useState(false); 
    const [ newReview, setNewReview ] = useState(initReviewState);

    const addReviewHandler = (resID) => {
        setNewReview(initReviewState);
        setShowModal(true);
    }

    const addNewReview = (meetupID) => {
        setRsvpEvent(prevState => ({...prevState, [meetupID]: true}));
        setNewReview(initReviewState);
        setShowModal(false);
        navigate(`/meetup/${meetupID}`)
    }

    return <MeetupContext.Provider value={{ meetupData, setMeetupData, searchList, setSearchList, rsvpEvent, setRsvpEvent, showModal, setShowModal, newReview, setNewReview, addReviewHandler, addNewReview }}>
        {children}
    </MeetupContext.Provider>
};