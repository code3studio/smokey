import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import HowToBuy from "./components/how-to-buy";
import MainSection from "./components/main";
import Tokenomics from "./components/tokenomics";
import { theme } from "./styles/theme";
import Footer from "./components/footer";
import Fire from "./components/fire";
import { useEffect, useState } from "react";

function App() {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [fires, setFires] = useState<any>([]);

  useEffect(() => {
    const updateHeight = () => {
      const height = document.body.scrollHeight;
      setDocumentHeight(height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const generateRandomPositions = () => {
      const numOfFires = Math.floor(Math.random() * 4) + 7; 
      const newFires = [];

      for (let i = 0; i < numOfFires; i++) {
        const top = Math.random() * 0.9; 
        const right = Math.random(); 
        newFires.push({ top, right });
      }

      setFires(newFires);
    };

    generateRandomPositions();
  }, [documentHeight]);

  console.log(documentHeight)

  return (
    <div style={{position:"relative"}}>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSection />
        {/* <Info/> */}
        <Tokenomics />
        <HowToBuy />
        <Footer />
        {fires.map((fire:any, index:number) => (
          <Fire 
            key={index} 
            top={documentHeight * fire.top} 
            right={window.innerWidth * fire.right} 
            width="100px"
          />
        ))}
      </ThemeProvider>
    </div>
  );
}

export default App;
