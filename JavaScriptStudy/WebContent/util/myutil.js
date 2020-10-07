
// 태어난 년도를 입력받아서 현재 나이를 돌려주는 함수 생성
function func_currentAge(birthYear) {
	
	var now = new Date(); 
	var currentYear = now.getFullYear();
	
	return currentYear - birthYear + 1;
	
}