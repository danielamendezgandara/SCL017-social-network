import { signOutUser } from '../models/modelFirebase.js';

export const eventSignOut = () => {
  signOutUser()
    .then(() => {
      window.location.pathname = '/';
    });
};

export default () => {
  const profileView = `<div> 
                    <button id="sign-out">Cerrar sesión</button>
                    </div>`;
  const profilePage = document.createElement('article');
  profilePage.innerHTML = profileView;
  const signOut = profilePage.querySelector('#sign-out');
  signOut.addEventListener('click', eventSignOut, false);
  return profilePage;
};
