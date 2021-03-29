import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = (isSignedIn) => {
    if(isSignedIn) {
        return (
            <>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    {/* <Link to="/">Welcome, Gareth</Link> */}
                                </li>
                                <li>
                                    {/* <Link to="/tips">Tips</Link> */}
                                </li>
                                <li>
                                    {/* <Link 
                                        to="/comp" 
                                        // onClick={() => onRouteChange('Comp')}
                                        >
                                        Comp
                                    </Link> */}
                                </li>
                                <li>
                                    {/* <Link 
                                        to="/settings" 
                                        // onClick={() => onRouteChange('Settings')}
                                        >
                                        Settings
                                    </Link> */}
                                </li>
                                <li>
                                    {/* <Link 
                                        to="/" 
                                        // onClick={() => onRouteChange('Signout')}
                                        >
                                        Sign Out
                                    </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
 
            </>
        )

    } else {
        return (
            <div>
                Signed In
            </div>
        )
    }
}
