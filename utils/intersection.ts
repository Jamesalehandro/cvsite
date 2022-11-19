export const callBackFunction = (e: IntersectionObserverEntry[]) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
};
