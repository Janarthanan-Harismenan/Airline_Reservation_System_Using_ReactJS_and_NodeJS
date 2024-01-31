import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Flight.css";

function Flight({ setFlightID, email, setEmail }) {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const [flights, setFlights] = useState([
    {
      from: "BIA",
      to: "BKK",
      date: "2023-10-07",
      depature_time: "08:00",
      arrival_time: "10:30",
      flightID: "F0001",
    },
    {
      from: "BIA",
      to: "DEL",
      date: "2023-10-08",
      depature_time: "10:00",
      arrival_time: "12:00",
      flightID: "F0002",
    },
    {
      from: "HRI",
      to: "BKK",
      date: "2023-10-08",
      depature_time: "12:00",
      arrival_time: "14:30",
      flightID: "F0003",
    },
    {
      from: "BKK",
      to: "BOM",
      date: "2023-10-09",
      depature_time: "08:00",
      arrival_time: "10:30",
      flightID: "F0004",
    },
    {
      from: "CGK",
      to: "DEL",
      date: "2023-10-10",
      depature_time: "12:00",
      arrival_time: "14:30",
      flightID: "F0005",
    },
  ]);

  const airports = [
    {
      code: "BIA",
      name: "Bandaranaike International Airport, Sri Lanka (BIA)",
    },
    { code: "BKK", name: "Suvarnabhumi International Airport, Thailand (BKK)" },
    {
      code: "BOM",
      name: "Chhatrapati Shivaji Maharaj International Airport, India (BOM)",
    },
    {
      code: "CGK",
      name: "Soekarno-Hatta International Airport, Indonesia (CGK)",
    },
    { code: "DEL", name: "Indira Gandhi International Airport, India (DEL)" },
    { code: "DMK", name: "Don Mueang International Airport, Thailand (DMK)" },
    {
      code: "DPS",
      name: "I Gusti Ngurah Rai International Airport, Indonesia (DPS)",
    },
    {
      code: "HRI",
      name: "Mattala Rajapaksa International Airport, Sri Lanka (HRI)",
    },
    { code: "MAA", name: "Chennai International Airport, India (MAA)" },
    { code: "SIN", name: "Singapore Changi Airport, Singapore (SIN)" },
  ];

  useEffect(() => {
    // When both origin and destination airports are selected,
    // find the corresponding flight and set date, departure, and arrival times
    if (origin && destination) {
      const selectedFlight = flights.find(
        (flight) => flight.from === origin && flight.to === destination
      );
      if (selectedFlight) {
        setDate(selectedFlight.date);
        setDepartureTime(selectedFlight.depature_time);
        setArrivalTime(selectedFlight.arrival_time);
      }
    } else {
      // Reset the date, departure, and arrival times if either origin or destination is cleared
      setDate("");
      setDepartureTime("");
      setArrivalTime("");
    }
  }, [origin, destination, flights]);

  function HandleProceed(e) {
    e.preventDefault();
    if (origin && destination && date && departureTime && arrivalTime) {
      // Find the selected flight based on origin and destination
      const selectedFlight = flights.find(
        (flight) => flight.from === origin && flight.to === destination
      );

      if (selectedFlight) {
        // Pass the selected flightID to the Booking component
        setFlightID(selectedFlight.flightID);
        setEmail(email);
        navigate("/Booking");
      } else {
        alert("Selected flight not found.");
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  return (
    <div className="FlightPage">
      <div className="FlightHeader">
        <h1>Choose Your Flight</h1>
        <div className="FlightHeaderUnderline"></div>
      </div>
      <form>
        <div className="Origin">
          <label>
            <strong>From : </strong>
          </label>
          <select
            className="OriginSelect"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
          >
            <option value="">Select the Origin Airport</option>
            {airports.map((airport) => (
              <option value={airport.code} key={airport.code}>
                {airport.name}
              </option>
            ))}
          </select>
        </div>
        <div className="Destination">
          <label>
            <strong>To : </strong>
          </label>
          <select
            className="DestinationSelect"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          >
            <option value="">Select the Destination Airport</option>
            {flights
              .filter((flight) => flight.from === origin)
              .map((flight) => (
                <option value={flight.to} key={flight.id}>
                  {airports.find((airport) => airport.code === flight.to)?.name}
                </option>
              ))}
          </select>
        </div>
        <div className="DateTag">
          <label>
            <strong>Scheduled Date : </strong>
          </label>
          <input type="date" className="DateInput" value={date} />
        </div>
        <div className="DestinationTime">
          <label>
            <strong> Departure Time : </strong>
          </label>
          <input type="time" className="DepartureInput" value={departureTime} />
        </div>
        <div className="ArrivalTime">
          <label>
            <strong>Arrival Time : </strong>
          </label>
          <input type="time" className="ArrivalInput" value={arrivalTime} />
        </div>
        <button className="ProceedButton" onClick={HandleProceed}>
          Proceed
        </button>
      </form>
    </div>
  );
}

export default Flight;
