---
layout: layout.html
---
# Contact us
<form data-netlify="true" method="post">
  <p>
    <label>Name:
      <input type="text" name="name">
    </label>    
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">    
  </p>
  <p>
    <label for="content">Content:</label>
    <input type="content" id="content" name="content">    
  </p>
  <input type="hidden" name="_next" value="https://sad-mccarthy-a61d59.netlify.app/thanks">
  <input type="submit" value="Send Form">
</form>
