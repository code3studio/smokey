import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import HowToBuy from "./components/how-to-buy";
import MainSection from "./components/main";
import Tokenomics from "./components/tokenomics";
import { theme } from "./styles/theme";
import Footer from "./components/footer";
// import Info from "./components/info";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSection />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* <Info/> */}
          <Tokenomics />
          <HowToBuy />
        </motion.div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
