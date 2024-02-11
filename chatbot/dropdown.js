function toggleDropdown2() {
    var dropdownMenu = document.getElementById("documentation-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}
function toggleDropdown3() {
    var dropdownMenu = document.getElementById("license-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

 const loginButton = document.getElementById("login-btn");             
 loginButton.addEventListener("click", () => {
   window.location.href = "login.html";
 });

 const loginButton1 = document.getElementById("login-btn1");              
 loginButton1.addEventListener("click", () => {
   window.location.href = "register.html";
 });

 function toggleDropdown1() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  }

  const maritimeButton1 = document.getElementById('portsButton');
  maritimeButton1.addEventListener('click', function() {
    window.location.href = 'https://www.maritime-database.com/ports/';
  });
 
  const maritimeButton2 = document.getElementById('AreasButton');
  maritimeButton2.addEventListener('click', function() {
  window.location.href = 'https://www.maritime-database.com/areas/';
  });


  const maritimeButton3 = document.getElementById('MariButton');
  maritimeButton3.addEventListener('click', function() {
  window.location.href = 'https://www.maritime-database.com/'
  });
  
  const maritimeButton4 = document.getElementById('FreightButton');
  maritimeButton4.addEventListener('click', function() {
    window.location.href = 'https://shipmin.gov.in/sites/default/files/MIV%202030%20Presentation_compressed_0.pdf'
  });         
        
    // Get references to the button and dropdown menu
    const button = document.querySelector(".login-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
    
    // Hide the dropdown menu initially
    dropdownMenu.style.display = "none";
    
    // Toggle the display of the dropdown menu when the button is clicked
    function toggleDropdown1() {
      if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
      }
    }
    
    // Prevent the dropdown menu from showing on hover
    button.addEventListener("mouseover", function() {
      dropdownMenu.style.display = "none";
    });

    function toggleDropdown() {
      var dropdown = document.getElementById("dropdownMenu");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    }