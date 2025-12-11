function startTasks() {
  document.getElementById("cookStatus").textContent = "Cooking started...";
  document.getElementById("cleanStatus").textContent = "Cleaning started...";

  // Cooking takes 3 seconds to finish
  setTimeout(() => {
    document.getElementById("cookStatus").textContent = "Cooking finished!";
  }, 3000);

  // Cleaning runs immediately (does not wait for cooking)
  document.getElementById("cleanStatus").textContent = "Cleaning completed!";
}

