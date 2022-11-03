var forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
document.getElementById("m1").addEventListener("click", () => {
  document.getElementById("mn2").style.display = "none";
  document.getElementById("mr2").style.display = "none";
  document.getElementById("mn3").style.display = "none";
  document.getElementById("mr3").style.display = "none";
  document.getElementById("mn2").removeAttribute("required");
  document.getElementById("mr2").removeAttribute("required");
  document.getElementById("mn3").removeAttribute("required");
  document.getElementById("mr3").removeAttribute("required");
});

document.getElementById("m2").addEventListener("click", () => {
  document.getElementById("mn2").style.display = "block";
  document.getElementById("mr2").style.display = "block";
  document.getElementById("mn3").style.display = "none";
  document.getElementById("mr3").style.display = "none";
  document.getElementById("mn2").setAttribute("required", "");
  document.getElementById("mr2").setAttribute("required", "");
  document.getElementById("mn3").removeAttribute("required");
  document.getElementById("mr3").removeAttribute("required");
});

document.getElementById("m3").addEventListener("click", () => {
  document.getElementById("mn3").style.display = "block";
  document.getElementById("mr3").style.display = "block";
  document.getElementById("mn2").style.display = "block";
  document.getElementById("mr2").style.display = "block";
  document.getElementById("mn2").setAttribute("required", "");
  document.getElementById("mr2").setAttribute("required", "");
  document.getElementById("mn3").setAttribute("required", "");
  document.getElementById("mr3").setAttribute("required", "");
});
