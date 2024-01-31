import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = ({
  count,
  setCount,
  passengers,
  setPassengers,
  flightID,
  email,
  setEmail,
}) => {
  const [checkDisabled, setCheckDisabled] = useState(true);
  const [availableSeats, setAvailableSeats] = useState([]);
  const [flightModel, setFlightModel] = useState("");

  const FlightsDetails = [
    {
      flight_id: "F0001",
      model: "Airbus A380",
      Economy_seat_count: 420,
      Business_seat_count: 95,
      Platinum_seat_count: 10,
    },
    {
      flight_id: "F0002",
      model: "Boeing 757-200",
      Economy_seat_count: 170,
      Business_seat_count: 22,
      Platinum_seat_count: 8,
    },
    {
      flight_id: "F0003",
      model: "Boeing 737-150",
      Economy_seat_count: 130,
      Business_seat_count: 27,
      Platinum_seat_count: 5,
    },
  ];

  useEffect(() => {
    const selectedFlight = FlightsDetails.find(
      (flight) => flight.flight_id === flightID
    );

    if (selectedFlight) {
      const travelClass = "Economy_seat_count";
      const maxSeats = selectedFlight[travelClass];
      const seats = Array.from({ length: maxSeats }, (_, index) => index + 1);
      setAvailableSeats(seats);
    }
  }, [passengers]);

  useEffect(() => {
    const selectedFlight = FlightsDetails.find(
      (flight) => flight.flight_id === flightID
    );

    if (selectedFlight) {
      setFlightModel(selectedFlight.model);
    }
  });

  function HandleDecrease() {
    if (count > 0) {
      setCount(count - 1);
      // Remove the last passenger when decreasing count
      setPassengers(passengers.slice(0, -1));
    }
    // Update checkDisabled here
    setCheckDisabled(count - 1 === 0);
  }

  function handlePassengerDetailsChange(event, index) {
    const { name, value } = event.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;

    // Update the selected traveler class for the specific passenger
    if (name === "travelerClass") {
      updatedPassengers[index].selectedTravelerClass = value;
    }

    setPassengers(updatedPassengers);
  }

  function handleAddPassenger() {
    setCount(count + 1);
    setPassengers([
      ...passengers,
      {
        name: "",
        passportNumber: "",
        dateOfBirth: "",
        gender: "",
        contactNumber: "",
        travelerClass: "Economy",
        seatNumber: 1, // Default seat number
      },
    ]);
    // Update checkDisabled here
    setCheckDisabled(false);
  }

  const navigate = useNavigate();
  function handleBookingProcess(e) {
    e.preventDefault();
    // Use the flightID as needed, e.g., pass it as a query parameter to the payment page
    navigate("/Payment", { state: { flightID, passengers, email } });
  }

  return (
    <div className="BookingPage">
      <h1 className="BookingState">Booking Section</h1>
      <div className="CountSection">
        <p className="Bookingp">
          <strong>Number of Passengers : </strong>
          {count}
          <button className="BookingButton" onClick={handleAddPassenger}>
            +
          </button>
          <button className="BookingButton" onClick={HandleDecrease}>
            -
          </button>
          <p>
            <strong>Aircraft :- {flightModel}</strong>
          </p>
        </p>
      </div>
      <div className="PassengerDetailsContainer">
        {passengers.map((passenger, index) => (
          <div key={index} className="PassengerDetails">
            <h2>Passenger {index + 1} Details</h2>
            <div className="NamePassportInput">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={passenger.name}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              />
              <label>Passport Number:</label>
              <input
                type="text"
                name="passportNumber"
                value={passenger.passportNumber}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              />
            </div>
            <div className="BirthGenderInput">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={passenger.dateOfBirth}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              />

              <label>Gender:</label>
              <select
                name="gender"
                value={passenger.gender}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="ContactClassInput">
              <label>Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                value={passenger.contactNumber}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              />
              <label>Traveler Class:</label>
              <select
                name="travelerClass"
                value={passenger.travelerClass}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="Platinum">Platinum</option>
              </select>
              <label>Seat Number:</label>
              <select
                name="seatNumber"
                value={passenger.seatNumber}
                onChange={(e) => handlePassengerDetailsChange(e, index)}
              >
                {availableSeats.map((seat) => (
                  <option key={seat} value={seat}>
                    {seat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div>
          {count === 0 ? (
            <button className="ProceedtoPayment" disabled={true}>
              Proceed to Payment
            </button>
          ) : (
            <button
              className="ProceedtoPayment"
              onClick={handleBookingProcess}
              disabled={checkDisabled}
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
