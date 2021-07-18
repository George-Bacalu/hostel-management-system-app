import React from "react";
import "./Dashboard.css";
import HostelCard from "../components/dashboard-components/HostelCard";
import hostelCards from "../components/dashboard-components/hostel-cards-data";

function Dashboard() {
  function accessStudentsData(id) {
    console.log("button #", id);
  }

  return (
    <section className="dashboard-container">
      <h1 className="dashboard-header">Select a hostel of your choice:</h1>
      <div className="card-section">
        {Array(hostelCards.length)
          .fill()
          .map((_, row) => (
            <div className="row">
              {hostelCards[row].map((hostel, index) => {
                const cardIndex = row * hostelCards.length + index + 1;
                return (
                  <HostelCard
                    key={cardIndex}
                    id={cardIndex}
                    title={hostel.title}
                    admin={hostel.admin}
                    description={hostel.description}
                    address={hostel.address}
                    tel={hostel.tel}
                    onChooseHostel={accessStudentsData}
                  />
                );
              })}
            </div>
          ))}
      </div>
    </section>
  );
}

export default Dashboard;
