function NavBar(){
  return(
    
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a style={{color: "#022D36"}} className="navbar-brand" href="#">Seacott Bank</a>
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
              <a className="nav-link" href="#/contact/">Contact</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      <div style={{background: "#022D36", color: "#FFFFFF", textAlign: "right", fontSize: "20px", padding: "6px", paddingRight: "60px"}}>Welcome, Guest</div>
    </>
  );
}