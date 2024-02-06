function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
function saveFile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const dropdown = document.getElementById("dropdown").value;
  const message = document.getElementById("message").value;

  let data = "Name: " + name + "\n" +
             "Email: " + email + "\n" +
             "Contact: " + contact + "\n" +
             "Service: " + dropdown + "\n" +
             "Message: " + message;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const filename = "formData.txt";

  let newLink = document.createElement("a");
  newLink.download = filename;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click();

  if (window.URL != null) {
      document.body.removeChild(newLink);
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);