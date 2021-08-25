import { viewMovie } from './viewMovie.js';

export default () => {
  const movieView = '<div class="sheetContainer"></div>';
  const moviePage = document.createElement('div');
  moviePage.innerHTML = movieView;
  const sheetContainer = moviePage.querySelector('.sheetContainer');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      const docUser = firebase.firestore().collection('users').doc(uid);
      docUser.get().then(async (doc) => {
        if (doc.exists) {
          sheetContainer.appendChild(await viewMovie(doc.data().movieView));
        } else {
          alert('Document no exist');
        } 
      }).catch((error) => {
        alert('Error getting document:', error);
      });
    }
  });
  return moviePage;
};
