
export const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    return window.history.replaceState({},hash,'/'+`${hash}`);
}
