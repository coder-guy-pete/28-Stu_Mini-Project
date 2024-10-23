document.addEventListener('click', (event) => {
  const target = event.target.closest('pre');
  if (target) {
    target.classList.add('click-shadow');

    // Store the clicked pre element
    const clickedPre = target;

    // Copy the text from the <code> element within the <pre>
    const codeElement = target.querySelector('code');
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent);

      // Create the message element
      const messageElement = document.createElement('div');
      messageElement.textContent = 'Copied!';
      messageElement.classList.add('copied-message');

      // Calculate the position for the message element
      const preRect = clickedPre.getBoundingClientRect();
      const messageTop = preRect.bottom + 5; // Place it 5px below the pre
      const messageLeft = preRect.left + 5; // Place it 5px to the right of the pre

      // Style the message element with absolute positioning
      messageElement.style.position = 'absolute';
      messageElement.style.top = `${messageTop}px`;
      messageElement.style.left = `${messageLeft}px`;

      // Optionally, adjust the width of the message element
      messageElement.style.width = `100px`;

      document.body.appendChild(messageElement); // Append to body for global positioning

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