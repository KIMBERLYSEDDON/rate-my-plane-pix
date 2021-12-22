import React from "react";
import PhotoAlbum from "./components/PhotoAlbum";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import photos from "./photos";

function App() {
  return (
    
    <div>
    <Header />
    <PhotoAlbum photos={photos}/>
    </div>
  )
}

export default App;
