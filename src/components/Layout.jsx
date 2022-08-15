import React from "react";
import Header from "./Header";  
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
 
// Create theme configurations in here
const theme = createTheme();

// App Layout component
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="lg" sx={{ mb: 12 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};
  
export default Layout;