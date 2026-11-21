console.log("Google One 脚本已触发");

let body = $response.body;

if (!body) {
  console.log("没有 body");
  $done({});
} else {
  let text = body;

  // 把各种常见套餐编号统一替换成 g1.ios.30tb.m
  text = text.replace(/g1\.ios\.\d+(?:gb|tb)\.m(?:\.v2)?/g, "g1.ios.30tb.m");
  text = text.replace(/g1\.ai\.ultra\.[^"'\s\\]+/g, "g1.ios.30tb.m");
  text = text.replace(/g1\.20tb\.[^"'\s\\]+/g, "g1.ios.30tb.m");
  text = text.replace(/30tb\.ai\.pro\.m/g, "g1.ios.30tb.m");
  text = text.replace(/20tb\.m\.v2/g, "g1.ios.30tb.m");
  text = text.replace(/g1\.ios\.100gb\.m/g, "g1.ios.30tb.m");

  console.log("替换完成");
  $done({ body: text });
}
