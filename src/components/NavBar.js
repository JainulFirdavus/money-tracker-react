import React, { useContext } from "react"
import { useTheme, useThemeUpdate } from './ThemeContext'


function NavBar() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themesStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: '1rem',
        // margin:'2rem'
    }
    return (
        <>

            <div className="NavBar" style={themesStyles} >
                <div className="search">
                    <h1 > NAV </h1>
                </div>
                <div className="profile ">






                    <div class="background"></div>
                    <button onClick={toggleTheme}>update</button>
                </div>
            </div>
        </>
    )
}
export default NavBar