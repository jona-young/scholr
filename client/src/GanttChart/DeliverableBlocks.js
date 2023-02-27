import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeliverableBlocks = ({deliverables}) => {
    console.log(deliverables);
    /*
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
    }
*/
    return (
        <div className="deliverable">
            <h4>{ deliverables.deliverable }</h4>
            <div className="progress-bar"
                 style={{ width: deliverables.completion+"%" }}></div>
            <p>
                { deliverables.description }
                <br /><br />
                { deliverables.members }
            </p>
            {
                deliverables.subdeliverables.map((subdel) => {
                    return (
                        <div className="subdeliverable">
                            <h4>{ subdel.deliverable }</h4>
                            <div className="progress-bar"
                                style={{ width: subdel.completion+"%" }}></div>
                            <p>
                                { subdel.description }
                                <br /><br />
                                { subdel.members }
                            </p>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default DeliverableBlocks;