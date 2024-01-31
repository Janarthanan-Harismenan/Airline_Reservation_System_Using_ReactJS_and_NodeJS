import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ passengers, flightID, count, email }) => {
  const [totalPayment, setTotalPayment] = useState(0);
  const [paymentUser, setPaymentUser] = useState(null);
  const [guestInfo, setGuestInfo] = useState({ name: "", email: "" });
  const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);

  const users = [
    {
      user_id: "0001",
      email_address: "visitha@gmail.com",
      password: "12345",
      name: "Visitha Wickramasinghe",
      address: "123 Main Street, Cityville",
      birthday: "1990-01-15",
      NIC: "123456789012",
      phone_number: "0786546789",
      passport_number: "AB123456",
      membership_type: "frequent",
      travel_count: 1,
      role: "registered",
    },
    {
      user_id: "0002",
      email_address: "jane@gmail.com",
      password: "strongpassword456",
      name: "Jane Smith",
      address: "456 Elm Street, Townsville",
      birthday: "1985-05-20",
      NIC: "987654321098",
      phone_number: "0987543210",
      passport_number: "CD789012",
      membership_type: "gold",
      travel_count: 15,
      role: "registered",
    },
    {
      user_id: "0003",
      email_address: "guest@gmail.com",
      password: "guestpass123",
      name: "Guest User",
      address: "789 Oak Avenue, Villagetown",
      birthday: "2000-12-03",
      NIC: "456789012345",
      phone_number: "05551234567",
      passport_number: null,
      membership_type: null,
      travel_count: null,
      role: "guest",
    },
  ];

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email_address === email) {
        setPaymentUser(users[i].name);
        break;
      }
    }

    if (email === null) {
      setPaymentUser("Guest");
    }
  }, [email]);

  const handleNameChange = (e) => {
    setGuestInfo({ ...guestInfo, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setGuestInfo({ ...guestInfo, email: e.target.value });
  };

  const handleSubmitDetails = () => {
    // Validate guest details if needed
    setIsDetailsSubmitted(true);
  };

  const handlePayClick = () => {
    // Implement your payment logic here
  };

  const navigate = useNavigate();
  function handlePaymentComplete() {
    navigate("/PaymentStatus");
  }
  return (
    <div className="PaymentPage">
      <div className="PaymentContainer">
        <h1 className="PaymentHeader">Payment Section</h1>
        <h2 className="Greeting">Hello {paymentUser}</h2>

        {email === null && (
          <div className="GuestInfo">
            <p className="GuestState">
              Please fill these before the payment process
            </p>
            <input
              type="text"
              placeholder="Name"
              value={guestInfo.name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Email"
              value={guestInfo.email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSubmitDetails}>Submit Details</button>
          </div>
        )}

        <div className="PaymentArea">
          <h3>Total Payment: {totalPayment}</h3>
          <button
            className="PaymentButton"
            onClick={handlePayClick}
            disabled={!isDetailsSubmitted}
          >
            Pay
          </button>
        </div>
      </div>
      <button onClick={handlePaymentComplete}>Proceed</button>
    </div>
  );
};

export default Payment;
