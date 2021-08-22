import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { PUNCH_TYPES } from './constant'

function AttendanceManagement() {
  const [punch, setPunch] = useState({
    firstname: '',
    lastname: '',
    date: new Date(),
    type: PUNCH_TYPES.in
  })

  const [punchList, setPunchList] = useState([]);

  useEffect(() => {
    const savedPunches = JSON.parse(localStorage.getItem("punch_list") || "[]");
    console.log(savedPunches);
    setPunchList(savedPunches);
  }, []);

  const handleChange = (e) => setPunch({ ...punch, [e.target.name]: e.target.value });

  const savePunch = e => {
    e.preventDefault();
    const newPunch = { ...punch, date: punch.date.toString() };
    const punches = [...punchList, newPunch];
    setPunchList(punches);
    localStorage.setItem("punch_list", JSON.stringify(punches))
  }
  return (
      <form>
      <div className="input-group flex-nowrap">
        <span className="input-group-text">First Name</span>
        <input type="text" className="form-control" name="firstname" placeholder="First Name" aria-label="First Name" onChange={handleChange} aria-describedby="addon-wrapping" />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text">Last Name</span>
      <input type="text" className="form-control" name="lastname" placeholder="Last Name" aria-label="Last Name" onChange={handleChange} aria-describedby="addon-wrapping" />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text">Date</span>
        <DatePicker selected={punch.date} className="form-control" onChange={(date) => setPunch({ ...punch, date })} showTimeSelect dateFormat="Pp" />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value={PUNCH_TYPES.in} checked={punch.type === PUNCH_TYPES.in} name="type" onChange={handleChange} />
        <label className="form-check-label">
          In
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value={PUNCH_TYPES.out} checked={punch.type === PUNCH_TYPES.out} name="type" onChange={handleChange} />
        <label className="form-check-label">
          Out
        </label>
      </div>
      <input className="btn btn-primary" type="submit" value="Submit" onClick={savePunch} />
    </form>


  )
}

export default AttendanceManagement;
