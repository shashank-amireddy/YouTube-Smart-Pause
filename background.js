chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
      if (tab.url.includes("youtube.com")) {
        chrome.tabs.executeScript(tab.id, {file: "content.js"});
      }
    });
  });
  