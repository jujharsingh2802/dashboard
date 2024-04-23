import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useTheme from "../Theme.jsx";

function FAQ() {
  const { themeMode } = useTheme();
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion
        sx={{
          backgroundColor: themeMode==='dark'?'rgb(30 ,41 ,59 )':'',
          borderRadius: "5px",        
          color: themeMode==='dark'?"white":'',
          boxShadow: "4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            boxShadow: "none",
          },
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#4cceac" variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          backgroundColor: themeMode==='dark'?'rgb(30 ,41 ,59 )':'',
          borderRadius: "5px",        
          color: themeMode==='dark'?"white":'',
          boxShadow: "4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            boxShadow: "none",
          },
        }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#4cceac" variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          backgroundColor: themeMode==='dark'?'rgb(30 ,41 ,59 )':'',
          borderRadius: "5px",        
          color: themeMode==='dark'?"white":'',
          boxShadow: "4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            boxShadow: "none",
          },
        }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#4cceac" variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          backgroundColor: themeMode==='dark'?'rgb(30 ,41 ,59 )':'',
          borderRadius: "5px",        
          color: themeMode==='dark'?"white":'',
          boxShadow: "4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            boxShadow: "none",
          },
        }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#4cceac" variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          backgroundColor: themeMode==='dark'?'rgb(30 ,41 ,59 )':'',
          borderRadius: "5px",        
          color: themeMode==='dark'?"white":'',
          boxShadow: "4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            boxShadow: "none",
          },
        }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#4cceac" variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
