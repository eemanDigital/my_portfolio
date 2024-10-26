// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [lightTheme, setLightTheme] = useState(true);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       setLightTheme(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     setLightTheme((prevTheme) => {
//       const newTheme = !prevTheme;
//       localStorage.setItem("theme", newTheme ? "light" : "dark");
//       return newTheme;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
