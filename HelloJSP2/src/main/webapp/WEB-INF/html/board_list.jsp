<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<jsp:include page="includes.header.jsp" />

<% // 강제형변환(casting)
List<BoardVO> list = (List<BoardVO>) request.getAttribute("board_list");
PageDTO paging = (PageDTO) request.getAttribute("paging");
%>
<p><%=paging %></p>
<h3>게시글 목록</h3>
<table class='table table-striped'>
	<thead>
		<tr>
			<th>글번호</th>
			<th>제 목</th>
			<th>작성자</th>
			<th>조회수</th>
		<tr>
	<tbody>
		<% for <BoardVO board : list) { %>
		<tr>
			<td><%=board.getBoardNo()%></td>
			<td><a href='board.do?bno=<%=board.getBoardNo()%>'><%=board.getTitle()%></a></td>
			<td><%=board.getWriter()%></td>
			<td><%=board.getViewCnt()%></td>
		</tr>
	</tbody>
	
	<nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
  <li class="page-item disabled">
    <a class="page-link">Previous</a>
  </li>
  <% for(int p = paging.getStrart(); p <= paging.getEnd(); p++) {%>
  <li class="page-item"><a class="page-link" href="boardList.do?page=<%=p %>"><%=p %></a></li>
  <%} %>
  <li class="page-item"><a class="page-link" href="boardList.do?page=2">2</a></li>
  <li class="page-item"><a class="page-link" href="boardList.do?page=3">3</a></li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
</nav>

	<jsp:include page="includes.footer.jsp" />