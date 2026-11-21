console.log("脚本开始执行");

let body = $response.body;
console.log("body 类型: " + typeof body);
console.log("body 长度: " + (body ? body.length : 0));

if (body) {
  let newBody = body;
  newBody = newBody.replace(/30tb\.ai\.pro\.m/g, "30tb.m");
  newBody = newBody.replace(/20tb\.m\.v2/g, "20tb.m");
  
  console.log("替换完成");
  $done({ body: newBody });
} else {
  console.log("没有 body");
  $done({});
}
