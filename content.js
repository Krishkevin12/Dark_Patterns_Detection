chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'checkRegistrationForm') {
    const hasRegistrationForm = checkForRegistrationForm();
    sendResponse({ hasRegistrationForm });
  } else {
    sendResponse({ error: 'Unknown action' });
  }

  return true;
});

function checkForRegistrationForm() {
  try {
        const registrationForm = document.querySelector('form[id*="register"]');
    return registrationForm !== null;
  } catch (error) {
    throw new Error('Error checking registration form: ' + error.message);
  }
}
