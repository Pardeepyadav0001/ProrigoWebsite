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
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const dropdown = document.getElementById("dropdown").value;
  const message = document.getElementById("message").value;

  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  // Enable the submit button if all fields are filled
  const submitBtn = document.getElementById("bt");
  if (name && email && contact && dropdown && message) {
      submitBtn.disabled = false;
  } else {
      submitBtn.disabled = true;
  }
}

function validateEmail(email) {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function saveFile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const dropdown = document.getElementById("dropdown").value;
  const message = document.getElementById("message").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
}
  const formData = {
      Name: name,
      Email: email,
      "Contact No": contact,
      Service: dropdown,
      Message: message
  };

  const format = prompt("Please enter the format you want (text, csv, xml, json):");
  
  let data, mimeType, extension;
  if (format === "csv") {
      data = convertToCSV(formData);
      mimeType = "text/csv";
      extension = "csv";
  } else if (format === "xml") {
      data = convertToXML(formData);
      mimeType = "text/xml";
      extension = "xml";
  } else if (format === "json") {
      data = JSON.stringify(formData, null, 2);
      mimeType = "application/json";
      extension = "json";
  } else {
      data = formatFormData(formData);
      mimeType = "text/plain";
      extension = "txt";
  }

  const filename = `formData.${extension}`;
  const blob = new Blob([data], { type: mimeType });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function formatFormData(formData) {
  let formattedData = "";
  for (const [key, value] of Object.entries(formData)) {
      formattedData += `${key}: ${value}\n`;
  }
  return formattedData;
}

function convertToCSV(formData) {
  const headers = Object.keys(formData);
  const values = Object.values(formData);
  const csvContent = headers.join(",") + "\n" + values.join(",");
  return csvContent;
}

function convertToXML(formData) {
  let xmlContent = "<formData>\n";
  for (const [key, value] of Object.entries(formData)) {
      xmlContent += `<${key}>${value}</${key}>\n`;
  }
  xmlContent += "</formData>";
  return xmlContent;
}


