import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home"; 

import { BrowserRouter } from "react-router";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Home />
            <Footer />
        </BrowserRouter> 

    );
};

export default App;