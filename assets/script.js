document.addEventListener('click', (event) => {
    const target = event.target.closest('pre');
    if (target) {
      target.classList.add('click-shadow');
  
      // Copy the text from the <code> element within the <pre>
      const codeElement = target.querySelector('code');
      if (codeElement) {
        navigator.clipboard.writeText(codeElement.textContent);
  
        // Show a temporary message indicating successful copying
        const messageElement = document.createElement('div');
        messageElement.textContent = 'Copied!';
        messageElement.classList.add('copied-message');
        target.appendChild(messageElement);
  
        // Remove the message after 1 second
        setTimeout(() => {
          messageElement.remove();
        }, 1000);
      }
  
      // Fade out the box shadow after 0.8 seconds
      setTimeout(() => {
        target.classList.add('click-shadow-fade-out');
      }, 800);
  
      // Remove both classes after 1.1 seconds
      setTimeout(() => {
        target.classList.remove('click-shadow');
        target.classList.remove('click-shadow-fade-out');
      }, 1100);
    }
  });