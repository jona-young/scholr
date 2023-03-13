import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeliverableBlocks = ({deliverables}) => {
    return (
        <div className="deliverable">
            <h4>{ deliverables.deliverable }</h4>
            <div className="progress-bar"
                    style={{ width: (deliverables.completion)+"%" }}>{deliverables.completion}%</div>
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
                                style={{ width: (subdel.completion)+"%" }}>{subdel.completion}%</div>
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
    )}

export default DeliverableBlocks;