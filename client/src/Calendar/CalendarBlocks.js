import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CalendarBlocks = ({events}) => {
    console.log(events)

    let calBlocks = []
    let counter = -4
    for (var j = 2; j < 7; j++)
    {
        for (var i = 1; i < 8; i++)
        {
            if (counter > 0 && counter < 32)
            {
                if (events[counter])
                {
                    calBlocks.push(
                        <div className={"cal-col-" + i + " cal-row-" + j}>
                            <Link to={"/calendar-events"}>{events[counter].name}</Link>
                        </div>
                    )
                }
                else
                {
                    calBlocks.push(
                        <div className={"cal-col-" + i + " cal-row-" + j}>
                            <h5>{counter}</h5>
                        </div>
                    )
                }
            }
            else
            {
                calBlocks.push(
                    <div className={"cal-col-" + i + " cal-row-" + j}>
                    </div>
                )
            }

            counter++;
        }
    }

    return (
        <>

            {calBlocks}
        </>
    )
}

export default CalendarBlocks;