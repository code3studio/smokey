import {
  Container,
  Dialog,
  Slide,
  SlideProps,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import Header from "./components/header";
import HowToBuy from "./components/how-to-buy";
import MainSection from "./components/main";
import Tokenomics from "./components/tokenomics";
import { theme } from "./styles/theme";
import Footer from "./components/footer";
import Fire from "./components/fire";
import { useEffect, useState } from "react";
import ThanksDialog from "./components/thanks-dialog";
import WelcomePopup from "./components/welcome-popup";
import MemeSection from "./components/meme";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
let temp = 0;
function App() {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [fires, setFires] = useState<any>([]);
  const [count, setCount] = useState<number>(1);
  const [open,setOpen] = useState<boolean>(true);

  useEffect(() => {
    const updateHeight = () => {
      const height = document.body.scrollHeight;
      setDocumentHeight(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const generateRandomPositions = () => {
      const numOfFires = Math.floor(Math.random() * 4) + 7;
      setCount(numOfFires);
      const newFires = [];

      for (let i = 0; i < numOfFires; i++) {
        const top = Math.random() * 0.9;
        const min = 0.15;
        const max = 0.85;
        const right = Math.random() * (max - min) + min;
        
        let random = Math.random()
        const width = random *100 >80 ? 80 : random*100 + 50
        newFires.push({ top, right,width });
      }
      
      setFires(newFires);
      temp +=1
    };
    if(temp === 0) {

      generateRandomPositions();
    }
  }, [documentHeight]);

  // console.log(documentHeight);

  const putOut = () => {
    setCount((count) => count - 1);
  };

  return (
    <div style={{ position: "relative" }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{px:'0px !important'}}>
          
        <Header />
        <MainSection />
        {/* <Info/> */}
        <Tokenomics />
        <HowToBuy />
        <MemeSection/>
        <Footer />
        {fires.map((fire: any, index: number) => (
          <Fire
            putOut={putOut}
            key={index}
            top={documentHeight * fire.top}
            right={window.innerWidth * fire.right}
            width={`${fire.width}px`}
          />
        ))}
        <Snackbar
          open={count === 0}
          onClose={() => setCount(1)}
          message={<ThanksDialog />}
          TransitionComponent={SlideTransition}
          autoHideDuration={4000}
          anchorOrigin={{vertical:'bottom',horizontal:'right'}}
        />
        </Container>
        <Dialog open={open} onClose={() => setOpen(false)} onClick={() => setOpen(false)} PaperProps={{sx:{bgcolor:"#251e19",borderRadius:6,overflow:'hidden'}}} maxWidth="md">
          <WelcomePopup/>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default App;
