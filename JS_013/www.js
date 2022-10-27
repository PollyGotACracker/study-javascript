/**
 * express 도구를 intall
 * http 서버를 생성하고
 * GET / 로 요청하면 "반갑습니다"
 * GET /user 로 요청하면 "안녕하세요"
 * 라고 보이도록
 */

import http from "http";
import express from "express";

const host = "127.0.0.1";
const port = 3000;

const app = express();
const server = http.createServer(app);
server.listen(port, host);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // text/html을 사용하면 html 태그를 해석하여 출력
  /**
   * 여러번 text를 보내고 싶을 때는 write 로 보내고
   * 제일 마지막에 end()로 마감한다
   */
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.write("반갑습니다<hr />");
  res.write("오늘은 목요일<hr />")
  res.end("금요일이면 좋겠네<hr />")
});

app.get("/user", (req, res) => {
  // send는 setHeader를 쓰지 않아도 자동으로 UTF-8로 인코딩
  // send는 한번 수행됨
 res.send("안녕하세요")
});


