import React, { useState } from "react";
import AppContainer from "./components/AppContainer";
import LoginSection from "./components/LoginSection";
import EmployeeSection from "./components/EmployeeSection";
import HRSection from "./components/HRSection";
import MessageModal from "./components/MessageModal";

export default function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AppContainer>
      {!user && <LoginSection onLogin={setUser} showMessage={showMessage} />}
      {user?.role === "employee" && (
        <EmployeeSection user={user} showMessage={showMessage} />
      )}
      {user?.role === "hr" && <HRSection showMessage={showMessage} />}
      {message && <MessageModal message={message} />}
    </AppContainer>
  );
}