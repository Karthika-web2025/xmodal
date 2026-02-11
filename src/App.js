import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setmessage] = useState("");

  const handleModal = () => {
    setShowModal(true);
    setmessage("");
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // 1️⃣ Email validation
  if (email && !email.includes("@")) {
    alert("Invalid email. Please check your email address.");
    return;
  }

  // 2️⃣ Phone validation
  if (phone && phone.length !== 10) {
    alert("Invalid phone number. Please enter a 10-digit phone number.");
    return;
  }

  // 3️⃣ DOB validation (future date)
  if (dob) {
    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert("Invalid date of birth.");
      return;
    }
  }

  // 4️⃣ Empty fields check
  if (name === "" || email === "" || phone === "" || dob === "") {
    setmessage("Please fill out all fields");
    return;
  }

  // 5️⃣ ✅ Success: reset form to initial state
  setname("");
  setemail("");
  setphone("");
  setdob("");
  setmessage("");
};



  return (
    <div>
      <h1>User Details Modal</h1>
     <button onClick={handleModal}>Open Form</button>

{showModal && (
  <div className="modal" onClick={() => setShowModal(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <label>Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <label>Phone:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />

        <label>DOB:</label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  </div>
)}


      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
