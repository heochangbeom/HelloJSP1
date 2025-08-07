package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class TotalCntControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		// 1. 요청에서 boardNo 파라미터 받기
		int boardNo = Integer.parseInt(req.getParameter("bno"));

		// 2. 서비스 객체로 댓글 개수 조회
		ReplyService service = new ReplyServiceImpl();
		int count = service.replyCount(boardNo);

		// 3. JSON 형태로 응답 만들기
		String json = "{\"totalCnt\": " + count + "}";

		// 4. 응답 보내기
		resp.getWriter().print(json);
	}
}