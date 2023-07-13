import { useContext, useState } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { MeetupContext } from "../../../contexts/MeetupContext";

const HomePage = () => {
    const { meetupData, searchList } = useContext(MeetupContext);
    const [ selectChange, setSelectChange ] = useState('both');

    const selectChangeHandler = (event) => {
        setSelectChange(event.target.value);
    }

    const getData = () => {
        let tempData = meetupData;

        if(searchList.trim().length > 0){
           
            tempData = tempData.filter(({title, eventTags})=>(title.toLowerCase().indexOf(searchList.trim().toLowerCase()) !== -1 || eventTags.join(' ').toLowerCase().indexOf(searchList.trim().toLowerCase()) !== -1));
        }
        
        if(selectChange !== 'both'){
            return tempData.filter(({eventType})=>(eventType === selectChange));
        }else return tempData;
    }

    return <Layout>
        <div>
            <div>
                <h2>Meetup Events</h2>
                <select onChange={selectChangeHandler} value={selectChange}>
                    <option disabled={true}>Select Event Type</option>
                    <option value={'both'}>Both</option>
                    <option value={'Online'}>Online</option>
                    <option value={'Offline'}>Offline</option>
                </select>
            </div>
            <ProductListCard data={getData()}/>
        </div>
    </Layout>
}

export default HomePage;