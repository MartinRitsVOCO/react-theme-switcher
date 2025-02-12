import Header from "./Header"
import { useThemeContext } from "../context/ThemeContext";

const Page = () => {
    const { theme } = useThemeContext();

  return (
    <div id="app" className={theme.class}>
        <Header />

        <article>
            <h2>
                React Course
            </h2>
            <p>
                A course that teaches you React.
            </p>
        </article>
    </div>
  )
}
export default Page