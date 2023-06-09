function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (<>
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  </>) 
}
 
function LoginMsg({setShow}){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => setShow(true)}>Logout</button>
  </>);
}

function LoginForm({setStatus, setShow}){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle({setAccount}){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setStatus('');
            setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            setStatus(text)
            console.log('err:', text);
        }
    });
  }
  
  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-info" onClick={handle}>Login</button>
   
  </>);
}
