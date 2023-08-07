import { useState, useReducer, useEffect } from "react";
import "./App.css";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebaseInit";

// components imports
import AlbumsList from "./components/AlbumsList/AlbumsList";
import ImagesList from "./components/ImagesList/ImagesList";
import LogoImage from "../src/images/logo.png";

function App() {
  const [viewAlbum, setViewAlbum] = useState(null);

  const showAlbumImages = (album) => {
    setViewAlbum(album);
  };

  const showAlbumsList = () => {
    setViewAlbum(null);
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">
        <img alt="logo" src={LogoImage} className="logo" />
      </h2>
      <div className="App">
        {viewAlbum ? (
          <ImagesList album={viewAlbum} showAlbumsList={showAlbumsList} />
        ) : (
          <AlbumsList showAlbumImages={showAlbumImages} />
        )}
      </div>
    </>
  );
}

export default App;
