package com.yedam.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(int boardNo, int page); // 목록.
	boolean removeReply(int replyNo); //삭제.
	boolean addReply(ReplyVO reply); //등록.
	int replyCount(int boardNo); // 댓글 건수
	
    //목록, 추가, 삭제. -> mapper.xml에 추가.
    List<EventVO> eventList(EventVO event);    // (필터 조회가 필요하면 유지)
    int insertEvent(EventVO event);
    boolean removeEvent(String title);
    boolean addEvent(Map<String, Object> map);
}
