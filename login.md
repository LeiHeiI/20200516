---
layout: layout.html
---

<form id="login" action="/whatever" method="POST">
Please enter the access code: (demo)
  <input type="text" name="accesscode" id="accesscode">
  <input type="submit">
</form>

<script>
document.getElementById("login").addEventListener("submit", function(event) {
  let accessCode = document.getElementById("accesscode").value;
  fetch('/.netlify/functions/login', {method: "POST", body:"accesscode="+accessCode})
  .then(response => response.text())
  .then(data => location.href=data);
  event.preventDefault();
});

</script>
