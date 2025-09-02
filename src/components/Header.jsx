export default function Header() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div className="container">
            <a className="navbar-brand mr-4" href="/">Flask Blog</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
              aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav mr-auto">
                <a className="nav-item nav-link" href="/home">Home</a>
                <a className="nav-item nav-link" href="/about">About</a>
              </div>
              {/* <!-- Navbar Right Side --> */}
              <div className="navbar-nav">

                <a className="nav-item nav-link" href="/login">Login</a>
                <a className="nav-item nav-link" href="/register">Register</a>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}