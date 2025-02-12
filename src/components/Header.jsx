import { useThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { theme, dispatch } = useThemeContext();

  return (
    <header>
        <h1>Demo Website</h1>
        <button onClick={() => dispatch({ type: "toggle" })}>Toggle Theme</button>
    </header>
  )
}
export default Header