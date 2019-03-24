redirectUrl();

// Redirects the original URL to the updated wiki URL
function redirectUrl() {
  window.location.href = getUpdatedHref();
}

function getUpdatedHref() {
  let redirectPath,
      redirectHref;

  const ORIGINAL_PARTIAL_PATH = 'wiki',
      UPDATED_PARTIAL_PATH = 'w',
      UPDATED_ORIGIN = 'https://runescape.wiki';

  redirectPath = window.location.pathname.replace('wiki', 'w');
  redirectHref = UPDATED_ORIGIN + redirectPath;

  return redirectHref;
}
