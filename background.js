(function(chrome) {
  chrome.webRequest.onBeforeRequest.addListener(
    handleRedirect,
    {urls: ["*://runescape.fandom.com/wiki/*"]},
    ['blocking']
  );

  function handleRedirect(details) {
    const ORIGINAL_ORIGIN = 'runescape.fandom.com/wiki',
          UPDATED_ORIGIN = 'runescape.wiki/w';

    const updatedUrl = details.url.replace(ORIGINAL_ORIGIN, UPDATED_ORIGIN);

    return {
      redirectUrl: updatedUrl
    };
  }
})(chrome);