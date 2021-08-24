import {addCollection, updateDoc, userActive} from "../models/modelFirebase.js";

//Función que crea una colección con la data de cada película por categoría
export const movieData= async (nameMovie,dataObj)=>{

    await addCollection('postMovie',nameMovie,dataObj);

}

// Función que permite filtrar la data de una película e insertarla en la vista home
export const createSetMovie = (dataMovie, category,section,callback) =>{

  dataMovie.filter(movie => movie.gender === category).forEach(gender=>{
    const genderMatch = document.createElement("div");
    genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}" data-name="${gender.name}">`;
    section.appendChild(genderMatch);
    callback(gender.name,gender);
  });

}

// Función que permite extraer el atributo data-name de la imagen de la película clickeada y modificar el objeto del
// usuario sólo en el elemento movieView, que indica el nombre de la película
export const visitMovie = (e) =>{

  const nameMovie=e.currentTarget.dataset.name;
  const useruid=userActive().uid;
  const obj={
    movieView : nameMovie
  }
  updateDoc('users',useruid,obj)
  .then(() => {
      alert('Document successfully updated!');
    })
  .catch((error) => {
    // The document probably doesn't exist.
      alert('Error updating document: ', error);
    });
    window.location.hash="#movie";

}

