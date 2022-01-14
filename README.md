# vue-movie-app
<strong>소개서가 아닌 만드는 과정을 기록하는 용도로 사용하고 있습니다.</strong>

## Project setup
```
npm install
```
######22.01.10
<p>
Main slide 구현 완료

- v-slot을 사용하여 class추가 방법(swiper 및 vue 공식문서 확인)
- vue에서 제공하는 트랜지션이 있으나 커스터마이징하는데 기존대로 css가 편했다.
- react는 하나의 파일에서 컴포넌트를 여러개 생성하고 그안에서 컴포넌트를 사용할 수 있는데, 아직 vue로 동일하게 할 수 있는지 못찾았다. 그래서... 하나의 탬플릿에 모든걸 때려 넣었다. 
->구현하고, 정리필요하다. 물론 vuex를 이용하여 로직을 분산시켜야 할듯.
-vue3에서 swiper@7 사용시 에러들이 많이 돌아다니지 않아 어려움이 있었지만, 잘해결해서 뿌듯~
</p>
 
 ######22.01.11
 
 -무비리스트를 받아왔는데, 백그라운드 이미지가 안들어가진다. 메인슬라이드에는 잘 적용 됐던게 왜 안되는 것이냐... ... 
 리액트보다 더 어려운것 같은 이 이상한 느낌적인 느낌은 뭘까.

  ######22.01.12

-백그라운드이미지 넣는건 해결. 산넘어 산.
movielist에 계속 scss가 안먹히는 것이다. 슬라이드 수를 많이 넣어도 1개씩만 나오는거임. 
공식문서대로 scss 참조했는데... 설치된 경로를 따라갔더니 다르더라. 그래서 바꿔줬더니 해결.ㅠ
그리고 쫌 황당한게 slide-per-view 오토를 분명히 넣었는데 안넘어가... 해결은 파라미터 값 표기를 잘못했다.
"auto" x / {auto} x / "'auto'" o
리액트할땐 이런 문제는 전혀 없었는데 새롭긴 하다. 덕분에 두가지 해결하는데 두시간 빠염 ^-ㅠ
오늘 최대한 하는데까지 해보자 부글부글~
-backgroundImage에는 데이터바인딩 x/ url로 지정(css와 동일)

 ######22.01.13

-모달창을 만들어야 하는데, 메소드를 타 컴포넌트에 보내야 한다.
지금 생각으론 vuex를 이용해서 좀 더 편리하게 쓸 방법밖에 떠오르지 않는다. vuex사용법이 아직 미숙하여 나중에 한번에 로직을 옮기려고 했는데... ㅋㅋ

######22.01.14

- 모달창... 모달창... vuex사용해서 데이터 저장하고 불러오기까지 했는데.. 왜 유튜브 예고편이 안나오는 것일까...
누가 이기나 해보자.
난 컴퓨터다. 난 컴퓨터다. 다시 로직을 생각해보자.