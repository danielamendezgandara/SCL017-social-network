
export const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    const hashpath='/'+hash;
    console.log(hashpath);
    return window.history.replaceState({},hash,hashpath);
}
