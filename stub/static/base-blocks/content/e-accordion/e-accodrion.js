export default function createAccordions({ block, elemHead, elemBody, modBody }) {
  const convertIntoSelector = elem => `.${elem}`;

  const headElement = `${block}__${elemHead}`;
  const bodyElement = `${block}__${elemBody}`;
  const bodyModifier = `${bodyElement}_${modBody}`;

  const [
    blockSelector,
    headSelector,
    bodySelector
  ] = [block, headElement, bodyElement].map(convertIntoSelector);

  const blockNodes = document.querySelectorAll(blockSelector);
  [...blockNodes].forEach(block => {
    const head = block.querySelector(headSelector);
    const body = block.querySelector(bodySelector);
    if (!head || !body) return;

    console.log(head, body);
    head.addEventListener('click', () => {
      body.classList.toggle(bodyModifier);
    });
  });
}