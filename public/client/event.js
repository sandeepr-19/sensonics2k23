var forms = document.querySelectorAll(".needs-validation");

document.getElementById("m1").addEventListener("click", () => {
  document.getElementById("mn2").style.display = "none";
  document.getElementById("mr2").style.display = "none";
  document.getElementById("mn3").style.display = "none";
  document.getElementById("mr3").style.display = "none";

  document.getElementById("hiden2").removeAttribute("required");
  document.getElementById("hider2").removeAttribute("required");
  document.getElementById("hiden3").removeAttribute("required");
  document.getElementById("hider3").removeAttribute("required");

  document.getElementById("hiden2").value = "";
  document.getElementById("hider2").value = "";
  document.getElementById("hiden3").value = "";
  document.getElementById("hider3").value = "";
});

document.getElementById("m2").addEventListener("click", () => {
  document.getElementById("mn2").style.display = "block";
  document.getElementById("mr2").style.display = "block";
  document.getElementById("mn3").style.display = "none";
  document.getElementById("mr3").style.display = "none";

  document.getElementById("hiden2").setAttribute("required", "");
  document.getElementById("hider2").setAttribute("required", "");
  document.getElementById("hiden3").removeAttribute("required");
  document.getElementById("hider3").removeAttribute("required");

  document.getElementById("hiden3").value = "";
  document.getElementById("hider3").value = "";
});

document.getElementById("m3").addEventListener("click", () => {
  document.getElementById("mn3").style.display = "block";
  document.getElementById("mr3").style.display = "block";
  document.getElementById("mn2").style.display = "block";
  document.getElementById("mr2").style.display = "block";
  document.getElementById("hiden2").setAttribute("required", "");
  document.getElementById("hider2").setAttribute("required", "");
  document.getElementById("hiden3").setAttribute("required", "");
  document.getElementById("hider3").setAttribute("required", "");
});

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
