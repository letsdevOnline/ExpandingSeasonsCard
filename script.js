const li = document.querySelectorAll("li");

function removeClass() {
   li.forEach((item) => {
      item.classList.remove("active");
   });
}

li.forEach((item) => {
   item.addEventListener("click", () => {
      removeClass();
      item.classList.add("active");
   });
});
