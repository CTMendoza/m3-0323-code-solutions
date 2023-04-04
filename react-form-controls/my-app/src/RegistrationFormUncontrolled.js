export default function UncontrolledForm () {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
}
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:<input name='username'/></label>
      <label>Password:<input name='password' type='password'/></label>
      <button type="submit">Sign Up</button>
    </form>
  )
}
