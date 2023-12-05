import React from 'react';
import '../CSS/Main.css'; // 전역 스타일 파일
import '../CSS/Resume.css';
function Introduction() {
  return (
    <div className="main-container">  
	<div className= "resume">
	    <em>1.기초 자료</em>
	    <table>
		    <tr>
			    <td  rowspan="6" >사 진</td>
			    <td  bgcolor="#e3fcff">성 명</td>
			    <td>신준호</td>
  			  <td  bgcolor="#e3fcff">한 문</td>
	  		  <td></td>
	  	  </tr>
		    <tr>
  			  <td bgcolor="#e3fcff">주민등록번호</td>
	  		  <td colspan="3">010820-3xxxxxx</td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">E-mail</td>
	  		  <td colspan="3">sin010820@naver.com</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">전화번호</td>
	  		  <td>041-571-7369</td>
	  		  <td bgcolor="#e3fcff">휴대폰</td>
	  		  <td>010-9402-7368</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">우편번호</td>
	  	  	<td>31173</td>	
	  	  	<td bgcolor="#e3fcff">비상연락처</td>
	  	  	<td>010-4455-8755</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">주소</td>
	  	  	<td colspan="3">천안시 쌍용동</td>
	  	  </tr>	
	    </table>

      <em>2.학력사항</em>
      <table>
      <tr>
	      <th bgcolor="#e3fcff">기간</th>
	      <th bgcolor="#e3fcff">상세내용</th>
	      <th bgcolor="#e3fcff">비고</th>
      </tr>
	    <tr>
	  	  <td>초등학교</td> <td>쌍용 초등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>중학교</td> <td>계광 중학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>고등학교</td>	<td>월봉 고등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>대학교 </td> <td>가천대학교</td> <td>재학중</td>
	    </tr>
    </table>

    <em>3. 경력사항</em>
    <table>
      <tr>
        <th bgcolor="#e3fcff">기간</th>
		    <th bgcolor="#e3fcff">관련</th>
      </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
    </table>

    <em>4. 개인능력 및 장단점</em>
    <table>
	    <tr height="30">
	  	  <td rowspan="2" bgcolor="#e3fcff">자격증 및 포상</td>
	  	  <td colspan="3">정보처리기사</td>
	  	  <td colspan="1">한국산업인력공단</td>
	    </tr>
	    <tr height="30"> 
        <td colspan="3">운전면허증</td>
        <td colspan="1">경찰청</td>
  	  </tr>
  	  <tr height="30"> 
        <td rowspan="2" bgcolor="#e3fcff">컴퓨터능력</td>
  		  <td colspan="2"></td>
        <td bgcolor="#e3fcff">상/중/하</td>
      </tr>
	    <tr height="30" > 
		    <td colspan="2"></td>
        <td bgcolor="#e3fcff">상/중/하</td>
	  	  <td></td>
      </tr>
	    <tr height="30"> 
		    <td rowspan="2" bgcolor="#e3fcff">취미</td>	
		    <td colspan="2">드럼</td>
        <td bgcolor="#e3fcff">특기</td>
		    <td>없음</td>
      </tr>
    </table>

		<div id="pledge">
			<br/>위의 사실이 틀림이 없음을 서약합니다.<br/>
      작성일 2023년 10월 25일<br/>
    	작성자 (인) 
		</div>
  </div>

    </div>
  );
}

export default Introduction;