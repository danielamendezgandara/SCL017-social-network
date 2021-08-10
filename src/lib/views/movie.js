export const moviePost = (movieResult) => {
    window.location.hash='#movie';
    const sheetContainer = document.createElement('div');
    sheetContainer.id = "sheetContainerId";    
    sheetContainer.innerHTML=  `<div class="nameContainer">
    <p class="movieSheetName">#${movieResult.name}</p>
    <div class="imgContainer">
    <img class="movieImg" src="${movieResult.imgPortada}">
    
    
    `;

    
 };
export default () =>{
   const movieView= `<div id="movie"></div>`;
   const moviePage=document.createElement('div');
   moviePage.innerHTML=movieView;
   return moviePage;
}











