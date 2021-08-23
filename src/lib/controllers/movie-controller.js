import {addCollection, updateDoc, userActive} from "../models/modelFirebase.js";
import { filterStatusLike } from "./comment-controller.js";

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

export const rankMovie=(e)=>{
  const idStar=e.target.id;
  const starValue=parseInt(e.target.value);
  console.log(typeof(parseInt(starValue)));
  const nameMovie=e.target.parentElement.dataset.name;
  console.log(nameMovie);
  const useremail=userActive().email;
  console.log(useremail);
  const obj={
    email : useremail,
    star : idStar,
    starValue : starValue 
  }
  
  firebase.firestore().collection('postMovie').doc(nameMovie)
  .get().then((doc) => {
    if (doc.exists) {
      console.log(doc.data().emailuser);
      if(!doc.data().emailuser.includes(useremail)){
        const objStarUser={
          countStars : firebase.firestore.FieldValue.increment(starValue),
          emailuser : firebase.firestore.FieldValue.arrayUnion(useremail),
          starchecked : firebase.firestore.FieldValue.arrayUnion(obj),
        }
        updataDoc(nameMovie,objStarUser)
          .then(() => {
            console.log('Document successfully updated!'); 
          })
          .catch((error) => {
          // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
      }else{
         console.log("Document data:", doc.data());
          const objEmailUser =filterStatusLike(doc.data().starchecked,useremail);
          console.log(objEmailUser[0].starValue);
          const objS={
            countStars :  firebase.firestore.FieldValue.increment(-objEmailUser[0].starValue),
            starchecked : firebase.firestore.FieldValue.arrayRemove(objEmailUser[0])
          }
          updataDoc(nameMovie,objS)
          .then(() => {
            console.log('Document successfully updated!'); 
            const objStarUserNew ={
              countStars : firebase.firestore.FieldValue.increment(starValue),
              starchecked : firebase.firestore.FieldValue.arrayUnion(obj),
            }
            updataDoc(nameMovie,objStarUserNew)
          .then(() => {
            console.log('Document successfully updated!'); 
          })
          .catch((error) => {
          // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
          })
          .catch((error) => {
          // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
      }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}