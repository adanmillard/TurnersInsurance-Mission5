import React from "react";

export const QuotePersonalDetailsOne = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="QPD-main-container">
      <form onSubmit={handleSubmit}>
        <div className="QPD-progress-bar">
          <p>I am the progress</p>
        </div>
        <div>
          <h1>Personal Details</h1>
          <div>
            <div>
              <label>First Name</label>
              <input type="text" />
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label>D.O.B</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="license-type">
                What type of driving license do you have?
              </label>
              <select name="license-type" required>
                <option value="full">NZ Full</option>
                <option value="restricted">NZ Restricted</option>
                <option value="Overseas">Overseas License</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div>
            <h1>Contact Information</h1>

            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Address</label>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div>
          <button> &lt; Back </button>
          <button type="submit"> Next </button>
        </div>
      </form>
    </div>
  );
};
