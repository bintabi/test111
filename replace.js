let body = $response.body;

if (body) {
  // 30TB 规则（默认开启）
  body = body.replace(/30tb\.ai\.pro\.m/g, "30tb.m");
  // 20TB 规则（默认关闭，需要时取消下面这行注释）
  body = body.replace(/20tb\.m\.v2/g, "20tb.m");

  $done({ body });
} else {
  $done({});
}
