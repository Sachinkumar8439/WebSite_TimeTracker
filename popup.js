document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/time-log")
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById("data-container");
        container.innerHTML = ""; // Clear loading message
        if (data.length > 0) {
          data.forEach((log) => {
            const logElement = document.createElement("div");
            logElement.className = "log-item";
            logElement.innerHTML = `
              <p><strong>URL:</strong> ${log.url}</p>
              <p><strong>Date:</strong> ${log.date}</p>
              <p><strong>Start Time:</strong> ${new Date(log.startTime).toLocaleTimeString()}</p>
              <p><strong>Time Spent:</strong> ${log.timeSpent} seconds</p>
            `;
            container.appendChild(logElement);
          });
        } else {
          container.innerHTML = "<p>No data recorded yet.</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  