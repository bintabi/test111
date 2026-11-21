const body = $response.body;

if (!body) {
  $done({});
} else {
  let newBody = body;
  newBody = newBody.replace(/30tb\.ai\.pro\.m/g, "30tb.m");
  newBody = newBody.replace(/20tb\.m\.v2/g, "20tb.m");
  $done({ body: newBody });
}
