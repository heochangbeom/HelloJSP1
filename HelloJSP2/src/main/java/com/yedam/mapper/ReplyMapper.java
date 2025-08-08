package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	List<ReplyVO> replyList(@Param("boardNo") int boardNo, @Param("page") int page); // 목록 .
	int deleteReply(int replyNo); // 삭제.
	int insertReply(ReplyVO reply); // 등록.
	int selectCount(int boardNo); // 댓글 건수

	// 이벤트
	List<EventVO> eventListAll(); // ★ 전체 조회 (무파라미터)
	List<EventVO> eventList(EventVO vo); // (선택) 필터 조회
	int selectEvent(String title);
	int insertEvent(EventVO vo);
	int deleteEvent(String title);

}
