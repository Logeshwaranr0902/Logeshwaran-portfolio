import Middle from "./sections/Middle/Middle";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import { ThemeProvider } from "./sections/Darkmode/ThemeContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Middle />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
