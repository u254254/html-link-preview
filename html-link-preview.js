export default function makeLinkPreview(selector = 'a') {
  const aElems = document.querySelectorAll(selector);
  aElems.forEach(elem => {
    elem.addEventListener('click', e => {
    });
  });
}
