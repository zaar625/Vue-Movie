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