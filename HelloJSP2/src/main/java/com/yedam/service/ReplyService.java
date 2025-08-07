package com.yedam.service;

import java.util.List;

import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(int boardNo, int page); // 목록.
	boolean removeReply(int replyNo); //삭제.
	boolean addReply(ReplyVO reply); //등록.
	int replyCount(int boardNo); // 댓글 건수
    //목록, 추가, 삭제. -> mapper.xml에 추가.
	List<EventVO> eventList(String title); // 목록.
    int selectEvent(String title);
    int insertEvent(EventVO event);
    int deleteEvent(int EventNo);
}
