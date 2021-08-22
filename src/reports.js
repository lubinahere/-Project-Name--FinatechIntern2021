import React, { useEffect, useState } from 'react';
import { PUNCH_TYPES } from './constant';

const Reports = () => {

    const [punchList, setPunchList] = useState([]);

    useEffect(() => {
        const savedPunches = JSON.parse(localStorage.getItem("punch_list") || "[]");
        console.log(savedPunches);
        setPunchList(savedPunches);
    }, [])

    return (
        <div className="col">
            <table className="table">
                <thead>
                    <th>Sl. No</th>
                    <th>Employee Name</th>
                    <th>Punch Type</th>
                    <th>Date</th>
                    <th> Salary</th>
                </thead>
                <tbody>
                    {
                        punchList.map((punch, idx) => {
                            return (<React.Fragment>
                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{punch.firstname + ' ' + punch.lastname}</td>
                                    <td>{punch.type === PUNCH_TYPES.in ? "In" : "Out"}</td>
                                    <td>{new Date(punch.date).toLocaleString()}</td>
                                    <td> Salary </td>
                                </tr>
                            </React.Fragment>)
                        })
                    }
                </tbody>
            </table>
        </div>)
}

export default Reports;