addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  const url = new URL(request.url);
  if (pathname.startsWith("/enc")) {
    url.hostname = "gf.line.naver.jp";
  } else if (pathname.startsWith("/products")) {
    url.hostname = "stickershop.line-scdn.net";
  } else if (pathname.startsWith("/talk")) {
    url.hostname = "obs.line-apps.com";
  } else if (pathname.endsWith("/preview")) {
    url.hostname = "profile.line-scdn.net";
  } else {
    url.hostname = "line-web-client.pages.dev";
  }
  return fetch(url, request);
}
