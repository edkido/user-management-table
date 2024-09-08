import { useEffect, useState } from "react";
import '../styles/ToggleTheme.scss';

export const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.add('light-mode');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className='theme_switcher table__theme'>
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}