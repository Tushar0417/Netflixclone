let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function validateEmail() {
    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');
    const email = emailInput.value;
    
    // Simple email regex pattern
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(email)) {
        message.style.color = 'green';
        message.textContent = 'Valid email address!';
        window.location.href = 'netflix.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid email address!';
    }
}