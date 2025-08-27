document.addEventListener('DOMContentLoaded', function () {
  const detectRegistrationButton = document.getElementById('detectRegistration');
  const statusElement = document.getElementById('status');

  detectRegistrationButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'checkRegistrationForm' }, function (response) {
        if (response && response.hasRegistrationForm) {
          showStatusMessage('Unwanted registration form found!');
        } else {
          showStatusMessage('No unwanted registration form detected.');
        }
      });
    });
  });

  function showStatusMessage(message) {
    statusElement.innerText = 'Status: ' + message;
  }
});
