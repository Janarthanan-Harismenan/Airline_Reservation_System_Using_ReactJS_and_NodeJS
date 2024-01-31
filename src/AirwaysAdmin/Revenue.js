import React, { useState } from "react";
import "./Revenue.css";

const Revenue = () => {
  const [revenue, setRevenue] = useState([
    { aircraft_id: "A380-001", model: "Airbus A380", revenue: "1,000,000" },
    { aircraft_id: "B737-001", model: "Boeing 737-150", revenue: "2,000,000" },
    { aircraft_id: "B737-002", model: "Boeing 737-150", revenue: "2,500,000" },
    { aircraft_id: "B757-001", model: "Boeing 757-200", revenue: "3,000,000" },
    { aircraft_id: "B757-002", model: "Boeing 757-200", revenue: "3,250,000" },
  ]);
  return (
    <div className="RevenueContainer">
      <div className="RevenueDiv">
        <h1 className="RevenueHeader">Aircraft Revenue</h1>
        <table className="RevenueTable">
          <thead className="RevenueThead">
            <tr>
              <th>Aircraft ID</th>
              <th>Model</th>
              <th>Revenue (USD)</th>
            </tr>
          </thead>
          <tbody className="RevenueTbody">
            {revenue.map((revenue) => (
              <tr key={revenue.aircraft_id}>
                <td>{revenue.aircraft_id}</td>
                <td>{revenue.model}</td>
                <td>{revenue.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Revenue;
