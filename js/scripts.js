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
    const fileUrl = 'CV/cv.pdf';
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
    <a class="navlink" href="#" onclick="slideTo('index.html', event)">Home</a>
    <a class="navlink" href="#" onclick="slideTo('About.html', event)">About</a>
    <a class="navlink" href="#" onclick="slideTo('Works.html', event)">Work</a>
    <p onclick="slideTo('index.html', event)">Ahmed's Portfolio</p>
    <button onclick="slideTo('Contact.html', event)">Let's Talk</button>
    <i class="fa fa-bars" onclick="toggleActive()"></i>
    
  </div>
`;
// Append the header to the body of the document
document.body.appendChild(headerElement);
//------------------------------------------------------------


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="FooterSocials">
          <a href="https://www.facebook.com/ahmed.nasif.shahriar/" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/?lang=en-gb" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/ahmed-nasif-8015b6124/" target="_blank"><i class="fab fa-linkedin"></i></a>  
        </div>

        <div class="FooterBotom">
          <a  href="index.html">Home</a>
          <a href="About.html">About</a>
          <a href="Works.html">Work</a>
        </div>

        <div class="FooterInfo">
          <p class="copyright">© 2024 Ahmed's Portfolio</p>
          <p class="imprint">IMPRINT</p>
        </div>
      `;
    }
  }

  customElements.define('footer-custom', Footer);


  function toggleActive() {
    var activeDiv = document.getElementById("activeDiv");
    if (activeDiv.style.display === "none") {
      activeDiv.style.display = "block";
    } else {
      activeDiv.style.display = "none";
    }
  }