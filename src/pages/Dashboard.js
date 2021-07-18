import React from "react";
import "./Dashboard.css";
import HostelCard from "../components/dashboard-components/HostelCard";

function DashboardContent() {
  const firstRowCards = [
    {
      title: "Musina Hostel",
      admin: "Administrator: admin1",
      description: "Single-room type hostel, mixt, 3 seats/room, level of confort I, bathroom in room",
      address: "2774 Hillcrest Circle",
      tel: "Tel: +5652786952",
    },
    {
      title: "Riverside Hostel",
      admin: "Administrator: admin2",
      description: "Single-room type hostel, mixt, 4 seats/room, level of confort II, bathroom/kitchen in room",
      address: "2762 Kincheloe Road",
      tel: "Tel: +1912694416",
    },
    {
      title: "Oakwood Hostel",
      admin: "Administrator: admin3",
      description: "Single-room type hostel, female, 4 seats/room, level of confort II, bathroom/kitchen in room ",
      address: "378 Copperhead Road",
      tel: "Tel: +7008616202",
    },
  ];

  const secondRowCards = [
    {
      title: "East Shores Hostel",
      admin: "Administrator: admin4",
      description: "Single-room type hostel, male, 5 seats/room, level of confort I, bathroom/kitchen in room ",
      address: "1541 Freedom Lane",
      tel: "Tel: +7169962764",
    },
    {
      title: "Northride Hostel",
      admin: "Administrator: admin5",
      description: "Single-room type hostel, mixt, 4 seats/room, level of confort III, bathroom/kitchen in room ",
      address: "2630 Prudence Street",
      tel: "Tel: +8827489343",
    },
    {
      title: "Rutherford Hostel",
      admin: "Administrator: admin6",
      description: "Single-room type hostel, male, 3 seats/room, level of confort II, bathroom in room ",
      address: "1653 Simpson Street",
      tel: "Tel: +6806024247",
    },
  ];

  const thirdRowCards = [
    {
      title: "Ridge View Hostel",
      admin: "Administrator: admin7",
      description: "Single-room type hostel, mixt, 2 seats/room level of confort I",
      address: "1717 Liberty Street",
      tel: "Tel: +5488171475",
    },
    {
      title: "Summit Hostel",
      admin: "Administrator: admin8",
      description: "Single-room type hostel, female, 3 seats/room, level of confort II, bathroom in room ",
      address: "1695 New York Avenue",
      tel: "Tel: +9671858734",
    },
    {
      title: "Hilltop Hostel",
      admin: "Administrator: admin9",
      description: "Single-room type hostel, mixt, 6 seats/room, level of confort I, bathroom/kitchen in room ",
      address: "3164 Filbert Street",
      tel: "Tel: +1661158737",
    },
  ];

  function accessStudentsData(event, id) {
    console.log("button #", id);
  }

  return (
    <section className="dashboard-container">
      <h1 className="dashboard-header">Select a hostel of your choice:</h1>
      <div className="card-section">
        <div className="row">
          {firstRowCards.map((hostel, index) => {
            return (
              <HostelCard
                key={index}
                id={index}
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
        <div className="row">
          {secondRowCards.map((hostel, index) => {
            return (
              <HostelCard
                key={index}
                id={index}
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
        <div className="row">
          {thirdRowCards.map((hostel, index) => {
            return (
              <HostelCard
                key={index}
                id={index}
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
      </div>
    </section>
  );
}

export default DashboardContent;
