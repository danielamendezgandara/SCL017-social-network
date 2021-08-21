import {addCollection, updateDoc, userActive} from "../models/modelFirebase.js";

//Función que crea una colección con la data de cada película por categoría
export const movieData= async (nameMovie,dataObj)=>{

    await addCollection('postMovie',nameMovie,dataObj);

}

export const addElementsData =(data,callback)=>{
  const elementsList={};
  const objRankMovie={
      usersStar : [],
      likeEmail:[{email:"",starChecked:""}],
      start_count:0
  }
  callback(elementsList,data);
  const newObj=callback(elementsList,objRankMovie);
  return newObj;

}

export const assignElementsObj =(objData,element)=>{
  let newList = Object.assign(objData, element);
  return newList;
}


// Función que permite filtrar la data de una película e insertarla en la vista home
export const createSetMovie = (dataMovie, category,section,callbackNewData,callbackAssignObj,callback) =>{

  dataMovie.filter(movie => movie.gender === category).forEach(gender=>{
    const genderMatch = document.createElement("div");
    genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}" data-name="${gender.name}">`;
    section.appendChild(genderMatch);
    const obj=callbackNewData(gender,callbackAssignObj);
    callback(gender.name,obj);
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
      console.log('Document successfully updated!');
    })
  .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
    window.location.hash="#movie";

}

export const rankMovie =async(e)=>{
  const event=e.target.parentElement;
  const nameMovie=event.dataset.name;
  const idStar=e.target.id;
  console.log(nameMovie);
  console.log(e.target.id);
  const useremail=userActive().email;
  const objRankMovie= {
    email : useremail,
    starChecked : idStar
  }
  const objUser={
    usersStar : firebase.firestore.FieldValue.arrayUnion(useremail),
    likeEmail: firebase.firestore.FieldValue.arrayUnion(objRankMovie)
  }
   await updateDoc('postMovie',nameMovie,objUser);
}
