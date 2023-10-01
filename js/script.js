function loadContent() {
    setTimeout(function() {
        // Hide preloader
        document.getElementById('preloader').style.display = 'none';
        
        // Show content
        document.getElementById('content').style.display = 'block';
    }, 3000); // Change the timeout value to suit your needs
}

 // Initialize Prism
 Prism.highlightAll();

 // Initialize Clipboard.js
 new ClipboardJS('.copy-button');



 function runTypingEffect() {
    const text = 'I am Shahil Sharma.';
    const typingElement = document.getElementById('typingtext');
    const typingDelay = 100;
  
    typeText(text, typingElement, typingDelay);
  }
  
  function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingElement.textContent += text.charAt(i);
      }, delay * i);
    }
  }
  
  document.addEventListener('DOMContentLoaded', runTypingEffect);
  