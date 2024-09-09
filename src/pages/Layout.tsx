import { Link, Outlet  } from 'react-router-dom'


export const Layout = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-md w-100'>
            <a className='navbar-brand'>
                <h1>Squiz App</h1>
            </a>
            <button className='navbar-toggler' 
            data-target="#nav-elements"
            data-toggle="collapse"
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='navbar-collapse collapse' id="nav-elements">
                <ul className='navbar-nav'>
                    <Link to="/" className='navbar-item'>Home</Link>
                    <Link to="/about" className='navbar-item'>About</Link>
                </ul>
            </div>
        
        </nav>
        <div className='container-fluid'>
            {<Outlet />}
        </div>
    </div>
  )
}
