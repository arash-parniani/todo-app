import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dracula') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dracula');
    } else {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  function clickHandler() {
    if (isDark === false) {
      document.documentElement.setAttribute('data-theme', 'dracula');
      localStorage.setItem('theme', 'dracula'); 
      setIsDark(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); 
      setIsDark(false);
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-sm p-5">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TODO</a>
      </div>
      <div className="flex mr-4">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          onClick={clickHandler}
          checked={isDark} 
        />
      </div>
    </div>
  );
}
