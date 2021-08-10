
export const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    console.log(window.history);
    return window.history.replaceState({},hash,'/'+`${hash}`);
}
