import Page from "./components/Page";
import ThemeProvider from "./context/ThemeProvider";

function App() {

  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App
