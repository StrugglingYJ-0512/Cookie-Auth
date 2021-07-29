var http = require("http");
http
  .createServer(function (request, response) {
    // 2개의 쿠키값을 전송한다.
    // response.writeHead(200, {
    //   // 응답하는 메시지를 전송.
    //   // 200;  성공했다.
    //   // 2번째는 key value로
    //   "Set-Cookie": ["yummy_cookie = choco", "tasty_cookie = strawberry"],
    // });
    response.end("Cookie!!");
  })
  .listen(3030);
