export const changeRoute = (route) => {
  const hash = route.replace(/#/g, '');
  const ref = ['/', hash].join('');
  window.history.replaceState({}, hash, ref);
};
