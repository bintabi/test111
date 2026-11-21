console.log("==== Httpbin 脚本已触发 ====");
console.log("URL: " + $request.url);

let body = $response.body || "";
body = "【脚本已修改】\n" + body;

console.log("==== 修改完成 ====");
$done({ body });
