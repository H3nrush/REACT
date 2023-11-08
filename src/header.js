
function Header() {
  let userLogin = true ;
    return (
      <header>
        <h1>Header</h1>
        <p>header is here</p>
        {userLogin ? (
                            <a href="">enjoy</a>
                            ):( <button>Please Login</button>
                        )}
      <br></br>
        <span>_______________</span>
      </header>
    );
  }
  
  export default Header;
