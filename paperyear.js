const buttons = document.querySelectorAll("#myDIV button");
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    console.log(this);
    this.classList.add("active");
  });
});

