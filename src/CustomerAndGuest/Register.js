import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [NIC, setNIC] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [status, setStatus] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  function AccountHandler(e) {
    e.preventDefault();
    if (
      !(
        name === "" ||
        address === "" ||
        email === "" ||
        password === "" ||
        birthday === "" ||
        NIC === "" ||
        phoneNumber === "" ||
        passport === ""
      )
    ) {
      setStatus("Account Created Successfully");
      setIsDisable(false);
    }
  }

  const navigate = useNavigate();
  function redirectLogin() {
    navigate("/Logincustadmin");
  }

  return (
    <div className="Registerbody">
      <div className="Registercontainer">
        <div className="Registerheader">
          <div className="Registertext">
            <h1 className="RegisterState">
              <strong>Create an Account</strong>
            </h1>
          </div>

          <div className="Registerunderline"></div>
        </div>

        <form>
          <div className="Registerinput">
            <label> Name : </label>
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>Address : </label>
            <input
              type="text"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>E-mail : </label>
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>Password : </label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>Birthday : </label>
            <input
              type="date"
              placeholder="Birthday"
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>NIC : </label>
            <input
              type="text"
              placeholder="NIC"
              required
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>Phone Number : </label>
            <input
              type="text"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="Registerinput">
            <label>Passport Number : </label>
            <input
              type="text"
              placeholder="Passport Number"
              required
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </div>

          <div className="Registersubmit-container">
            <button onClick={(e) => AccountHandler(e)}>Create Account</button>
          </div>
        </form>
        <button
          className="RegisterNewLogin"
          disabled={isDisable}
          onClick={redirectLogin}
        >
          Login
        </button>
        <div className="RegisterStatus">
          <strong>{status}</strong>
        </div>
      </div>
    </div>
  );
};

export default Register;
