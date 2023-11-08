


function Header() {
  let userLogin = true ;
  const ifPoint = 4;
  const userLogged = {
    name : "Mako",
    lastName :"RINGO",
    job : "web dev",
  };
    return (
      <header>
        <h1>Header</h1>
        {userLogin ? (<p>Hello {userLogged.name} {userLogged.lastName} - {userLogged.job}</p> ):( <button>Please Login</button>)}
        <p>header is here</p>
       
        {ifPoint > 0 ? (<p>User Point is : {ifPoint}</p>) : (<p>0^0</p>) }
      
      <br></br>
        <span>_______________</span>
      
      </header>
    );
  }
  
  export default Header;