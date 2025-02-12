import React from 'react';
import ThemeContext from './ThemeContext';

const initialTheme = { class: "light" };

function themeReducer(state, action) {
    switch (action.type) {
        case "toggle":
            return { class: state.class === "light" ? "dark" : "light" };
        default:
            throw new Error("Unhandled action " + action.type);
    }
}

const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = React.useReducer(themeReducer, initialTheme);

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;