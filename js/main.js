const headerMain =
document.querySelector(".header-main");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    headerMain.classList.add("hide");
  }else{
    headerMain.classList.remove("hide");
  }

});

const submitBtn = document.querySelector(".enquire-submit-text");
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

enquiryForm.addEventListener("submit", function(e){

  e.preventDefault();

   submitBtn.classList.add("active");
  setTimeout(() => {
    submitBtn.classList.remove("active");
  }, 2000);

  const name = document.getElementById("parentName").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const grade = document.getElementById("grade").value.trim();

  if(name === ""){
    formMessage.textContent = "Please enter parent name";
    return;
  }

  if(!/^[0-9]{10}$/.test(phone)){
    formMessage.textContent = "Please enter valid 10 digit phone number";
    return;
  }

  if(grade === ""){
    formMessage.textContent = "Please enter grade";
    return;
  }

  formMessage.textContent =
    "Thank you! Your enquiry has been submitted successfully.";

  enquiryForm.reset();

});

document
  .querySelectorAll(".btn-register-main, .sticky-btn")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      const formCard =
        document.querySelector(".enquire-card");

      formCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      setTimeout(() => {

        formCard.classList.add("highlight");

        setTimeout(() => {
          formCard.classList.remove("highlight");
        }, 1200);

      }, 600);

    });

  });

  const list = document.getElementById("highlightsList");
const cards = [...list.querySelectorAll(".highlight-card")];

let currentIndex = 0;

document.getElementById("hlNext").addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    cards[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  }
});

document.getElementById("hlPrev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    cards[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
});