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

      // Style the message element with absolute positioning
      messageElement.style.position = 'fixed';
      messageElement.style.top = '50%'; // Center vertically
      messageElement.style.left = '50%'; // Center horizontally
      messageElement.style.transform = 'translate(-50%, -50%)'; // Adjust for centering

      // Optionally, adjust the width of the message element
      messageElement.style.width = '15vw';

      // Append the message element to the body
      document.body.appendChild(messageElement);

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