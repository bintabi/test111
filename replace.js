// Loon http-response 脚本模板
// $response.body 是服务器返回的正文，$done({body}) 是把改后的正文交还给客户端

let body = $response.body;

if (body) {
  // 在这里写你的替换规则，一行一条，/g 表示全局替换
  body = body.replace(/30tb\.ai\.pro\.m/g, "30tb.m");
  body = body.replace(/20tb\.m\.v2/g, "20tb.m");

  $done({ body });
} else {
  // 没有正文就原样放行
  $done({});
}