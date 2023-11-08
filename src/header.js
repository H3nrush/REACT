

function Header() {
  const userLogin = true ;
  const ifPoint = 4;
    return (
      <header>
        <h1>Header</h1>
        {userLogin ? (<a href="">Enjoy</a>):( <button>Please Login</button>)}
  
        <p>header is here</p>
       
        {ifPoint > 0 ? (<p>User Point is : {ifPoint}</p>) : (<p>0^0</p>) }
      <br></br>
        <span>_______________</span>
      </header>
    );
  }
  
  export default Header;
