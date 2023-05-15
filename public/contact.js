function Contact () {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  return (<>
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Contact Us- We love your feedback"
      status={status}
      body={show ? 
        <ContactForm setShow={setShow} setStatus={setStatus}/> :
        <ConactMsg setShow={setShow} setStatus={setStatus}/>}
    />
  </>);
}

function ConactMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Message Again
    </button>
  </>);
} 

function ContactForm(props){
  const [email, setEmail]   = React.useState('');
  const [msg, setMsg] = React.useState('');

  function handle(){
    props.setStatus(msg);
    props.setShow(false);
    console.log(email, msg);
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter your email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Message<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter your message" 
      value={msg} onChange={e => setMsg(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-info" 
      onClick={handle}>Send</button>

  </>);
}

