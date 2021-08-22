import React, { useState } from 'react';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import AttendanceManagement from './attendaceManagement';
import Reports from './reports';



function App() {

  const [isReports, setIsReports] = useState(false);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={() => setIsReports(!isReports)}>
            {isReports ? "Add Punch" : "Show Reports"}
          </button>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-6">
          {isReports ? <Reports /> : <AttendanceManagement />}
        </div>
      </div>
    </div>


  );
}

export default App;
