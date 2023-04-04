import { useState } from "react";

export default function ControlledForm () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`State: username: ${userName} password: ${password}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:<input value={userName} name='username' onChange={e => setUserName(e.target.value)}/></label>
      <label>Password:<input value={password} name='password' type='password' onChange={e => setPassword(e.target.value)}/></label>
      <button type="submit">Sign Up</button>
    </form>
  )
}
