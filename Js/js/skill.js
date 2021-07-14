 function addSkills() {
      var ul = document.getElementById("dynamic-list");
      var candidate = document.getElementById("candidate");
      var li = document.createElement("li");
      li.setAttribute('id', candidate.value);
      li.appendChild(document.createTextNode(candidate.value));
      ul.appendChild(li);
  }
  
  
  function removeSkills() {
      var ul = document.getElementById("dynamic-list");
      var candidate = document.getElementById("candidate");
      var item = document.getElementById(candidate.value);
      ul.removeChild(item);
  }