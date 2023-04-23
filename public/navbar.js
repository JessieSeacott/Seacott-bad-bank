function NavBar(){
  return(
    
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a style={{color: "#022D36"}} className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      
      <div style={{background: "#022D36"}}>
        <h1 style={{color: "#FFFFFF", textAlign: "right", fontSize: "25px", padding: "6px", paddingRight: "60px"}}>Welcome to the Bank!</h1>
      </div>
    </>
  );
}