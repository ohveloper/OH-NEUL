// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  // participant : 참가자
  // completion : 완주자
  // 참가자에서 한명씩 꺼내서 완주자에 있는지 검사해본다.
  // 속도를 줄이기 위해서 검사중에 완주했다는 사실을 확인하면 다음으로 넘어간다
  // 동명이인이 있을수 있음으로

  const checkedCompletion = [];
  for (let i = 0; i < participant.length; i++) {
    const checkCompletion = participant[i];
    const bool = completion.includes(checkCompletion);
    if (bool) {
      delete completion[checkCompletion];
    }
    if (!bool) {
      return checkCompletion;
    }
  }
}
