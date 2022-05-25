# Dynamic Routing

동적 라우팅을 직접 구현해보는 과제입니다.

## 1. 프로젝트 구조

### 1-1. src/Router.js

프로젝트의 Routing을 관리하는 컴포넌트 입니다. 현재 프로젝트에는 두개의 Route가 구현되어 있습니다.

1. `"/"` : Monsters 컴포넌트가 렌더링 됩니다.
2. `"/detail/"` : Monster 컴포넌트가 렌더링됩니다.(동적 라우팅이 아직 구현되어 있지 않습니다.)

### 1-2. src/pages/Monsters

Monsters 컴포넌트가 위치하고 있습니다. 이 컴포넌트에서는 monster의 리스트를 응답하는 API를 호출하고,
응답값을 이용해서 몬스터들의 리스트를 렌더링 합니다.

### 1-3. src/pages/Monster

Monster 컴포넌트가 위치하고 있습니다. 이 컴포넌트의 목적은 하나의 monster에 대한 정보를 응답하는 API를 호출하고,
응답값을 이용해서 몬스터의 정보를 보여주는 것입니다(아직 구현되어 있지 않습니다.)

## 2. 구현 목표

1. Monsters 컴포넌트에서 몬스터를 클릭했을 때 `/detail/[몬스터의 ID]`로 이동할 수 있게 해주세요  
   e.g., id가 1인 몬스터를 클릭하면 `/detail/1`로 이동, id가 2인 몬스터를 클릭하면 `/detail/2`로 이동

2. Monster 컴포넌트에서 URL에 있는 몬스터의 ID에 해당하는 몬스터의 정보가 나오도록 해주세요  
   e.g., `/detail/1`에서는 ID가 1인 몬스터에 대한 정보 표시, `/detail/2`에서는 ID가 2인 몬스터에 대한 정보 표시

3. Monster 컴포넌트에서 Back to Monster List 버튼을 누르면 `"/"` 경로로 돌아가도록 해주세요

4. Monster 컴포넌트에서 Previous, Next 버튼을 누르면 각각 이전 몬스터, 다음 몬스터에 대한 정보가 보이도록 해주세요

## 3. API 명세서

백엔드 API 명세서는 아래와 같습니다.

- BASEURL: `https://jsonplaceholder.typicode.com`
- End Point:
  1. `/users` : 전체 몬스터에 대한 데이터
  2. `/users/[몬스터의 ID]` : ID에 해당하는 몬스터에 대한 데이터

## 4. 힌트

- 컴포넌트에서 path parameter를 활용하기 위해서는 Router에서 Route의 path를 설정해줘야 합니다.
- Previous, Next 버튼을 구현하기 위해서는 path parameter가 변할 때 마다 새롭게 API 호출을 하고 state를 변경해줘야 합니다.
  (useEffect hook을 활용해보세요)

## 5. 구현데모

https://user-images.githubusercontent.com/54208214/170172717-68895f44-a2b6-457a-9ce4-259ae071d997.mov
