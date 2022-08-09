async function solution(request, targetUrl) {
  const response = await request(targetUrl);
  return response;
}
