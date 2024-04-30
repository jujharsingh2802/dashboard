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
  const faqs = [
    {
      question: "What is DAAN?",
      answer: "DAAN is a free platform similar to OLX, where users can post ads for items they want to give away for free."
    },
    {
      question: "How can I post an ad on DAAN?",
      answer: "To post an ad on DAAN, simply download the app, create an account, and follow the prompts to create your ad."
    },
    {
      question: "Is there a fee for posting ads on DAAN?",
      answer: "No, posting ads on DAAN is completely free of charge."
    },
    {
      question: "Can I sell items on DAAN?",
      answer: "No, DAAN is specifically for giving away items for free. Selling items is not allowed on the platform."
    },
    {
      question: "Is my contact information secure on DAAN?",
      answer: "Yes, DAAN takes privacy and security seriously. Your contact information is not shared publicly."
    },
    {
      question: "How can I contact DAAN for support?",
      answer: "For support, you can contact DAAN through the app or visit our website for more information."
    }
  ];
  
  const { themeMode } = useTheme();
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqs.map((faq, index) => (
  <Accordion
    key={index}
    sx={{
      backgroundColor: themeMode === 'dark' ? 'rgb(30, 41, 59)' : '',
      borderRadius: '5px',
      color: themeMode === 'dark' ? 'white' : '',
      boxShadow: '4px 4px rgba(255, 255, 255, 0.1)',
      '&:hover': {
        boxShadow: 'none',
      },
    }}
    defaultExpanded
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color="#4cceac" variant="h5">
        {faq.question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{faq.answer}</Typography>
    </AccordionDetails>
  </Accordion>
))}

      
      </Box>
  );
}

export default FAQ;
