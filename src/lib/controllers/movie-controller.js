import {addCollection, updateDoc, userActive} from "../models/modelFirebase.js";
import pelicula from "../../data/pelicula.js";

export const movieData= async (nameMovie,dataObj)=>{

    await addCollection('post',nameMovie,dataObj);
}

export const visitMovie = (e) =>{
  const nameMovie=e.currentTarget.dataset.name;
  console.log(nameMovie);
  const dataMovie = pelicula.pelicula;
  const dataFilterMovie= dataMovie.filter(movie => movie.name === nameMovie);
  console.log(dataFilterMovie[0]["name"]);
  const useruid=userActive().uid;
  console.log(userActive().uid);
  const obj={
    movieView : nameMovie
  }
  updateDoc('users',useruid,obj)
  .then(() => {
      console.log('Document successfully updated!');
    })
  .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
    window.location.hash="#movie";
}

