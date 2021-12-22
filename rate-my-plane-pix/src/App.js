import React from "react";
import PhotoAlbum from "./components/PhotoAlbum";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Header from "./components/Header";
import photos from "./photos";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    green: {
      main: '#90ee90',
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
    <Header />
    <PhotoAlbum photos={photos}/>
    </div>
    </ThemeProvider>
  )
}

export default App;
