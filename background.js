
function disableAppjustoAdminTabsAutoDiscard() {
  console.log('Appjusto extension called!');
  let queryOptions = { url: 'https://admin.appjusto.com.br/*'};
  chrome.tabs.query(queryOptions, function(tabs) {
    tabs.forEach(function(tab) {
      console.log('found tab:', tab);
      chrome.tabs.update(tab.id, {autoDiscardable: false});
    });
  });
}  

chrome.runtime.onInstalled.addListener(function(details) {
  disableAppjustoAdminTabsAutoDiscard();
});

const filter = {
  url: [
    {
      urlMatches: 'https://admin.appjusto.com.br/*',
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  disableAppjustoAdminTabsAutoDiscard();
}, filter);