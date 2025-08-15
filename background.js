chrome.contextMenus.create({
  id: "searchOnGitHub",
  title: "Rechercher sur GitHub",
  contexts: ["selection"] // Apparaît seulement quand du texte est sélectionné
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchOnGitHub" && info.selectionText) {
    const searchUrl = `https://github.com/search?q=${encodeURIComponent(info.selectionText)}`;
    chrome.tabs.create({ url: searchUrl });
  }
});