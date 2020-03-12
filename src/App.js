import React from 'react';
import { FacebookProvider, LoginButton } from "react-facebook";
import axios from 'axios';


const App = () => {

  const handleResponse = async data => {
    const response = await axios.post("http://localhost:3000/api/v1/auth", {
      uid: data.profile.id,
      email: data.profile.email,
      provider: "facebook"
    });
    if (response.status === 200) {
      debugger;
    }
  }

  return (
    <div>
      <h1>Slowfood</h1>
      <FacebookProvider appId="216164319761067">
        <LoginButton scope="email" onCompleted={handleResponse}>
        <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    </div>
  );
}

export default App;
