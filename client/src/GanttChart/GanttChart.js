import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/button.js'; 
import { fetchPOST } from '../API/APIUtils.js';
import DeliverableBlocks from './DeliverableBlocks.js';

const GanttChart = ({ data }) => {
    // useState for chat responses
    // under the assumption we only receive new messages to the client as an array
    const [ deliverables, setDeliverables ] = useState([])

    // update state function of form
    const updateState = (e) => {
        const value = e.target.value;
        //setUserReply(value)
    }

    /*
    DELETE AFTER API IMPLEMENTATION
    */
    useEffect(() => {
        setDeliverables([
            {
                deliverable: "Example Deliverable #1",
                completion: 66,
                description: "Complete research proposal and interviews",
                members: "Jonathan",
                subdeliverables: [{
                    deliverable: "sub Deliverable #1",
                    completion: 100,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },
                {
                    deliverable: "sub Deliverable #2",
                    completion: 75,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },
                {
                    deliverable: "sub Deliverable #3",
                    completion: 25,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },],
            },
            {
                deliverable: "Example Deliverable #2",
                completion: 33,
                description: "Complete research proposal and interviews",
                members: "Jonathan",
                subdeliverables: [{
                    deliverable: "sub Deliverable #1",
                    completion: 0,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },
                {
                    deliverable: "sub Deliverable #2",
                    completion: 0,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },
                {
                    deliverable: "sub Deliverable #3",
                    completion: 100,
                    description: "Complete research proposal and interviews",
                    members: "Jonathan",
                },],
            }
        ])
    },[])


    // Visualize Deliverable sets, how to differentiate with ListDeliverables
    // and ListDeliverablesTable

    return(
        <div id="deliverables-container">
            {
                deliverables.map((block) => {
                    return <DeliverableBlocks deliverables={block} />
                })
            }
        </div>
    )
}

export default GanttChart;