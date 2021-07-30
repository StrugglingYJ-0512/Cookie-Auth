var http = require("http");
http
  .createServer(function (request, response) {
    // 2개의 쿠키값을 전송한다.
    response.writeHead(200, {
      //   // 응답하는 메시지를 전송.
      //   // 200;  성공했다.
      //   // 2번째 인자로는 객체가 들어오기로 약속됨. 이 안에 key value의 형식으로 넣어줌.
      "Set-Cookie": ["yummy_cookie = choco", "tasty_cookie = strawberry"],
    });
    response.end("Cookie!!");
  })
  .listen(3030);
