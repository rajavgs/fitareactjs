import React, { useState } from "react";

function UserForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <form>
        <label>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default UserForm;
