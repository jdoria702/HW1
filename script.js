function redirectToPage() {
  var selector = document.getElementById("pageSelector");
  var selectedValue = selector.options[selector.selectedIndex].value;
  window.location.href = selectedValue;
}

const dialog = document.getElementById("dialog");
const openDialog = document.querySelector(".transcript");
const closeBtn = document.querySelector(".close");
const form = dialog.querySelector("form");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = form.password.value;
  if (password === "frankbutt") {
    window.location.href = "Transcript.html";
  } else {
    form.password.value = "";
    alert("incorrect password");
  }
});
