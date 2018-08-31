vip_url = {
  'jenkins-jenkins': 'http://ci.ops.com/',
  'testEnv-测试环境': 'http://futuredomain.qafc.ops.com/a',
  'jira-jira': 'http://jira.ops.com/'
};

function openNewTab(url) {

  chrome.tabs.create({
    index: 0,
    url: url
  }, function (c) { });

}


chrome.runtime.onInstalled.addListener(function () {

  var i = 0;
  for (x in vip_url) {
    var idTitle = x.split('-');
    chrome.contextMenus.create({
      id: idTitle[0],
      type: 'normal',
      title: idTitle[1],
      contexts: ['page']
    });
  }

});

// 监听菜单的点击
chrome.contextMenus.onClicked.addListener(function (menuItem) {

  var prefix = menuItem.pageUrl;
  for (x in vip_url) {
    if (x.indexOf(menuItem.menuItemId) != -1) {
      prefix = vip_url[x];
    }
  }

  chrome.tabs.create({
    index: 0,
    url: prefix
  }, function (c) { });
});

