function toggleDashboards() {
    const dashboards = document.getElementsByClassName("dashboard");
    for (let i = 0; i < dashboards.length; i++) {
        dashboards[i].style.display = (dashboards[i].style.display === "none") ? "block" : "none";
    }
}
const dashboardButton = document.getElementById("dashboardButton");
dashboardButton.addEventListener("click", function () {
});


  
  