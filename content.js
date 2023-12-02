chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleReadability") {
    // Your readability enhancement logic here
    // For example, you can change font styles, increase text size, etc.
    document.body.style.fontFamily = "Arial, sans-serif";
  }
});
