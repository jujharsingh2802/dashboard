import React from 'react'
import { Box } from "@mui/material";
    
function ProgressCircle({ progress = "0.75", size = "40" }) {
      const dynoGreen = '#4cceac'
      const dynoBlue = "#6870fa"
      const dynop = "#f2f0f0"

      const angle = progress * 360;
      return (
        <Box
          sx={{
            background: `radial-gradient(${dynop} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${dynoBlue} ${angle}deg 360deg),
                ${dynoGreen}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      );
    };
    
    export default ProgressCircle;