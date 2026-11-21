let body = $response.body;

if (!body) {
  $done({});
} else {
  let text = body;

  text = text.replace(/g1\.ios\.\d+gb\.m/g, "g1.20tb.3months_ip_90p.acq");
  text = text.replace(/g1\.ios\.\d+tb\.m\.v2/g, "g1.20tb.3months_ip_90p.acq");
  text = text.replace(/30tb\.ai\.pro\.m/g, "g1.20tb.3months_ip_90p.acq");

  // 30TB 1off
  // "g1.ai.ultra.3months_ip_90p.acq"

  $done({ body: text });
}
