import React from "react";
import "./graph-report.css";
const GraphReport = () => {
  return (
    <div className="graph-report-page">
      <div className="graph-titled">
        <h3 className="graph-titled">Department wise - Total vs Closed</h3>
      </div>
      <div className="graph-container"></div>
    </div>
  );
};

export default GraphReport;
