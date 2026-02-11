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

    if (name === "" || email === "" || phone === "" || dob === "") {
      setmessage("Please fill out all fields");
      return;
    }

     if (!email.includes("@")) {
      setmessage("Invalid email. Please check your email address.");
      return;
    }

     if (phone.length !== 10) {
    alert("Invalid phone number. Please enter a 10-digit phone number.**");
    return;
  }

   const today = new Date();
  const selectedDate = new Date(dob);

  if (selectedDate > today) {
    alert("Invalid date of birth");
    return;
  }

    
   setname("");
setemail("");
setphone("");
setdob("");
setmessage("");
    
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleModal} className='btn btn-primary'>Open Form</button>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2>Fill Details:</h2>

              <label>Username:</label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setname(e.target.value)}
              />
              <br /><br />

              <label>Email Address:</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <br /><br />

              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                required
                onChange={(e) => setphone(e.target.value)}
              />
              <br /><br />

              <label>Date of Birth:</label>
              <input
                type="date"
                value={dob}
                required
                onChange={(e) => setdob(e.target.value)}
              />
              <br /><br />

              <button className='btn btn-primary' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
