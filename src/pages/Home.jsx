import React from "react";

import Navbar   from "../components/Navbar/Navbar"
import Hero   from "../components/Hero/Hero"
import About   from "../components/About/About"
import Works   from "../components/Works/Works"
import Contact   from "../components/Contact/Contact"
import Footer   from "../components/Footer/Footer"
import { Box } from "@mui/material";
import VerticalLine from "../components/BackgroundLine/VerticalLine";

const Home = () => {

    return(
        <Box 
            sx={{ 
                position: "relative",
                minHeight: "100vh",
                overflow: "hidden",
            }}
        >
      
        <VerticalLine left="29%" />

        <Box sx={{ position: "relative", zIndex: 2 }}>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Contact />
            <Footer />
        </Box>
        </Box>
    )
}
export default Home;