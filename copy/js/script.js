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

 function runtypingeffect()  {
    const text = 'I am Shahil Sharma.'
    const typingelemnt = document.getElementById('typing-text');
    const typedelay = 100;
    typetext(text,typingelemnt,typedelay)
 }

 function typetext(text,typingelemnt,delay){
    for (let i = 0; i < text.length; i++) {
        setTimeout(( )=>{
            typingelemnt.textcontent += text.charAt(i);
        }, delay=i)
        
    }
 }

 document.addEventListener('DOMContentLoaded',runtypingeffect)