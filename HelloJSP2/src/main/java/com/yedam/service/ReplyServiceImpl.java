package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public class ReplyServiceImpl implements ReplyService {

	SqlSession sqlSession = DBUtil.getInstance().openSession();
	ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);

	@Override
	public List<ReplyVO> replyList(int boardNo, int page) {
		return mapper.replyList(boardNo, page);
	}

	@Override
	public boolean removeReply(int replyNo) {
		int r = mapper.deleteReply(replyNo);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}

	@Override
	public boolean addReply(ReplyVO reply) {
		int r = mapper.insertReply(reply);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}

	@Override
	public int replyCount(int boardNo) {
		int r = mapper.selectCount(boardNo); // 댓글 수
		return r;
	}

	// ====== 이벤트 관련 ======
	// (A) 전체 목록: 무파라미터 오버로드 추가
	@Override
	public List<EventVO> eventList() {
		return mapper.eventListAll(); // ★ 신규 매퍼 메서드 사용
	}

	// (B) 필터 목록: 기존 방식 유지 (필요시)
	@Override
	public List<EventVO> eventList(EventVO event) {
		return mapper.eventList(event);
	}

	@Override
	public int selectEvent(String title) {
		return mapper.selectEvent(title);
	}

	@Override
	public int insertEvent(EventVO event) {
		int r = mapper.insertEvent(event);
		if (r > 0) {
			sqlSession.commit();
		}
		return r;
	}

	@Override
	public boolean removeEvent(String title) {
		int r = mapper.deleteEvent(title);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}

	@Override
	public boolean addEvent(Map<String, Object> map) {
		// TODO: 여기서 실제로 DAO/Mapper 호출해서 DB 저장하면 됨
		// return replyMapper.insertEvent(map) == 1;
		return true; // 일단 컴파일/동작 확인용
	}

}
