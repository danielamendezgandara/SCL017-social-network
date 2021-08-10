export const moviePost = () => {
    window.location.hash='#movie';
    console.log("hola");
 };
export default () =>{
   const movieView= `<div> 
   <button id="sign-out">Cerrar sesión</button>
   </div>`;
   const moviePage=document.createElement('div');
   moviePage.innerHTML=movieView;
   return moviePage;
}











