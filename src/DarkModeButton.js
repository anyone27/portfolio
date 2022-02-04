import { useState, useEffect } from 'react';

const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
        setDarkMode(true);
        } else {
        setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
        document.body.classList.add("dark-mode");
        } else {
        document.body.classList.remove("dark-mode");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    return ( 
        <button className="dark-mode-button" onClick={() => setDarkMode(!darkMode)}><i className="fas fa-moon"></i> <hr id="toggle-slash"/> <i className="fas fa-sun"></i></button>
     );
}
 
export default DarkModeButton;