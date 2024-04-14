// Slide to Different Pages page 
function slideTo(page, event) {
    event.preventDefault();
  
    document.body.style.transition = 'transform 1s ease-in-out';
    document.body.style.transform = 'translateX(-100%)';
  
    setTimeout(() => {
      window.location.href = page;
    }, 1000);
}


//--------------------------------------Download cv ----------------------------------------

  function downloadCV() {
    const fileUrl = 'path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Your_CV_Name.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


//----------------------------------------------------------------
// Header Reusable 
let headerElement = document.createElement('header');
headerElement.innerHTML = `
  <div class="navbar">
    <a href="#" onclick="slideTo('index.html', event)">Home</a>
    <a href="#" onclick="slideTo('About.html', event)">About</a>
    <a href="#Work">Work</a>
    <p>Ahmed's Portfolio</p>
    <button onclick="slideTo('Contact.html', event)">Let's Talk</button>
  </div>
`;
// Append the header to the body of the document
document.body.appendChild(headerElement);
//------------------------------------------------------------


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="FooterSocials">
          <a href="https://example.com/facebook" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://example.com/twitter" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://example.com/linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>  
        </div>

        <div class="FooterBotom">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Work">Work</a>
        </div>

        <div class="FooterInfo">
          <p class="copyright">© 2024 Ahmed's Portfolio</p>
          <p class="imprint">IMPRINT</p>
        </div>
      `;
    }
  }

  customElements.define('footer-custom', Footer);