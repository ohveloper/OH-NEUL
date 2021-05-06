// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  // participant : 참가자
  // completion : 완주자
  // 참가자에서 한명씩 꺼내서 완주자에 있는지 검사해본다.
  // 속도를 줄이기 위해서 검사중에 완주했다는 사실을 확인하면 다음으로 넘어간다
  // 동명이인이 있을수 있음으로
  //! 두번째 시도, sort 메서드를 사용해서 똑같이 정렬한 후에 만약 없다면 무조건 탈락한거기 때문에 리턴한다.
  const _participant = participant.sort()
  const _completion = completion.sort()
  for (let i = 0 )

  //! 첫번째 시도, 검사해서 없으면 지우려고 했는데 그럼 너무 오래걸리고 제대로된 검사가 어렵다
  //  for (let i = 0; i < participant.length; i++) {
  //   const checkCompletion = participant[i];
  //   const bool = completion.includes(checkCompletion);
  //   if (bool) {
  //     delete completion[checkCompletion];
  //   }
  //   if (!bool) {
  //     return checkCompletion;
  //   }
  // }
}
