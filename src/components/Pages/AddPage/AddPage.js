import { useContext } from 'react';
import './AddPage.css'
import { CrossIcon } from '../../Icons';
import { MeetupContext } from '../../../contexts/MeetupContext';

const AddPage = (props) => {
    const {eventId} = props;
    const { newReview, setNewReview, addNewReview, initReviewState, setShowModal } = useContext(MeetupContext);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addNewReview(eventId);
    } 

    const modalClickHandler = () => {
        setShowModal(false);
        setNewReview(initReviewState);
    }


    return <>
        <div className='add-layout'>
            <h2 className='add-layout-heading'>Complete your RSVP</h2>
            <p>Fill in your personal information</p>
            <form onSubmit={formSubmitHandler}>
                <div className='add-layout-item'>
                    <label htmlFor='name' className='add-name'>Name:</label>
                    <input type='text' id='name' placeholder='Enter Name' value={newReview.name} className="add-name-input" onChange={(event)=>setNewReview(prevState => ({...prevState, name: event.target.value}))} required/>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='email' className='add-name'>Email:</label>
                    <input type='email' id='email' placeholder='Enter email' value={newReview.email} className="add-name-input" onChange={(event)=>setNewReview(prevState => ({...prevState, email: event.target.value}))} required/>
                </div>
                <p>*You have to make payment at the venue</p>
                <div className='add-btn-div'><button className='add-btn' type='submit'>Submit</button></div>
                <div className='add-modal-close-div'><CrossIcon onClick={modalClickHandler} className="add-modal-close"/></div>
            </form>
        </div>
        <div className='add-modal' onClick={modalClickHandler}></div>
    </>
}

export default AddPage;