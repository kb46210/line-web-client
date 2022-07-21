const PROXY_LISTS = [
  {
    domain: "gf.line.naver.jp",
    path: "/enc",
  },
  {
    domain: "stickershop.line-scdn.net",
    path: "/products",
  },
  {
    domain: "obs.line-apps.com",
    path: "/talk",
  },
  {
    domain: "line-web-client.pages.dev",
    path: "/",
  },
];

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  for (let i = 0; i < PROXY_LISTS.length; i++) {
    if (url.pathname.startsWith(PROXY_LISTS[i]["path"])) {
      url.hostname = PROXY_LISTS[i]["domain"];
      const data = await fetch(url, request);
      return data;
    }
  }
}
