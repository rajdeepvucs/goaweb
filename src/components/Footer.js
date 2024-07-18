import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 3, 
        mt: 5, 
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} VUCS. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
