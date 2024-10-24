const handleClick = (event) => {
  const target = event.target.closest('pre');
  if (target) {
    addClickShadow(target);
    copyCodeToClipboard(target);
    showCopiedMessage();
    fadeOutShadow(target);
    removeShadowClasses(target);
  }
};

const addClickShadow = (element) => {
  element.classList.add('click-shadow');
};

const copyCodeToClipboard = (element) => {
  const codeElement = element.querySelector('code');
  if (codeElement) {
    navigator.clipboard.writeText(codeElement.textContent);
  }
};

const showCopiedMessage = () => {
  const messageElement = document.createElement('div');
  messageElement.textContent = 'Copied!';
  messageElement.classList.add('copied-message');
  styleMessageElement(messageElement);
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 1000);
};

const styleMessageElement = (element) => {
  element.style.position = 'fixed';
  element.style.top = '50%';
  element.style.left = '50%';
  element.style.transform = 'translate(-50%, -50%)';
  element.style.width = '15vw';
};

const fadeOutShadow = (element) => {
  setTimeout(() => {
    element.classList.add('click-shadow-fade-out');
  }, 800);
};

const removeShadowClasses = (element) => {
  setTimeout(() => {
    element.classList.remove('click-shadow');
    element.classList.remove('click-shadow-fade-out');
  }, 1100);
};

// Attach the event listener
document.addEventListener('click', handleClick);
