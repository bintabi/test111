let body = $response.body;

if (!body) {
  $done({});
} else {
  let text = body;


  text = text.replace(/g1\.ios\.\d+(?:gb|tb)\.m(?:\.v2)?/g, "g1.ios.30tb.m");
  text = text.replace(/g1\.ai\.ultra\.[^"'\s]+/g, "g1.ios.30tb.m");
  text = text.replace(/g1\.20tb\.[^"'\s]+/g, "g1.ios.30tb.m");
  text = text.replace(/30tb\.ai\.pro\.m/g, "g1.ios.30tb.m");
  text = text.replace(/20tb\.m\.v2/g, "g1.ios.30tb.m");

  $done({ body: text });
}
