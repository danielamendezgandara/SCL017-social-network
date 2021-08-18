import { addInfo } from "../models/modelFirebase.js";

export const movieData=(nameMovie,dataObj)=>{

     addInfo('post',nameMovie,dataObj)
    .then((docRef) => {
        console.log('Document written with ID: ', docRef);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

}
     