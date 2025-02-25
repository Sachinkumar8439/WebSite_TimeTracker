let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(({ tabId }) => {
  handleTabChange(tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    handleTabChange(tabId);
  }
});

function handleTabChange(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }

    // Ensure tab and URL are valid
    if (tab && tab.url && !tab.url.startsWith("chrome://")) {
      const currentTime = new Date();
      if (activeTab) {
        const timeSpent = Math.round((currentTime - startTime) / 1000); // in seconds
        sendToBackend({
          url: activeTab.url,
          date: startTime.toISOString().split("T")[0],
          startTime: startTime.toISOString(),
          timeSpent,
        });
      }
      activeTab = tab;
      startTime = currentTime;
    } else {
      console.warn("Tab or URL is undefined or invalid.");
    }
  });
}

function sendToBackend(data) {
  console.log("Sending data to backend:", data); // Debug log
  fetch("http://localhost:3000/api/time-log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.error("Failed to send data to backend:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error sending data to backend:", error);
    });
}
