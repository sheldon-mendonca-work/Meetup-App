import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SingleEvent from '../Pages/SingleEvent/SingleEvent'

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meetup/:meetId" element={<SingleEvent />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;