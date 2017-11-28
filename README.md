# Getting started 'Mithril.js'
- Author : [SeolHun](https://github.com/SeolHun)
- Date : 15.11.2017
---
### Requirement
- Node

---
### How to run this porject
1. npm install
- npm install 

2. Dev run
- npm run dev

3. Prod build
- npm run build
  1. dist directory 안에 빌드된 결과가 나옵니다.
  2. dist 안에 있는 static과 index.html을 배포합니다.

---
### Building Mithril on vue-cli without vue
- 배경
  1. Mithril의 빌드 및 개발방법 관련한 정보를 확장하고 싶었습니다.
  2. Vue에 익숙하여 Vue-Cli에 잘 적용된 Webpack 설정을 가져오면 어렵지 않게 Mithril 개발의 환경을 비슷하게 적용할 수 있지 않을까란 생각을 하였습니다.
  
- 결과
  - 실행에 옮겨 이와 같은 프로젝트 결과를 얻을 수 있었습니다.
  - 개발서버 및 빌드까지 완료하였습니다.
  - S3간단히 배포하여봤습니다.[AWS - S3 테스트](https://s3.ap-northeast-2.amazonaws.com/hi-cord/index.html#!/)
  - summary 폴더에 간단한 것을 정리했습니다. 작업양을 늘리다보니, 필요한 문서화를 더 못한 것이 아쉽습니다

- BootStrap을 CDN으로 사용하였고, NavBar로 인해 JQuery를 CDN으로 넣었기만 하고 사용하지는 않았습니다
---
### 프로젝트 결과물
- 주제
  - UserForm 만들기
- 사항
  - 필수사항
    - 한개 이상의 서브 컴포넌트를 사용해주세요. - 적용(Header, Detail, Agreement...)
  - 선택사항
    - TypeScript 사용 - 적용
    - CSS class를 local scope로 정의 - 적용
    - 모델 데이터(속성)에 Mithril stream을 적용 - 미적용
- 개요
  - JSX와 TypeScript 활용
  - Router 사용
  - Header, Detail을 Sub Component로 UserForm과 함께 구성 
  - LocalStorage를 통한 프론트 구성 (검색, 리스트, 저장, 삭제 가능)
  
- 문제점(개인적인 의견과 사실)
  - TypeScript의 Interface 활용을 통한 초기값의 undefined 문제
  - ** 해결책 Example**
    ```typescript
    interface User {
      id : string;
      name: string;
    }

    class Client implements User {
      id : string;
      name: string;
      list: User[]
      constructor(name, list) {
        this.name = name || "SeolHun"
        this.list = list || [] as User[]
      }
    }
    ```
  - m.withAttr의 한정적인 요소로 인해 스크립트와 태그 사용의 애매함으로 인한 어려움.
  - m.withAttr을 사용하지 않고, 해당 스크립트를 바로 선언하면 라우터 이동 간 해당 태그가 생성되면서 메소드가 호출되는 문제가 발생되었었습니다.
  
- 느낀점
  - TypeScript의 속성은 기존 Java와 비슷하지만 또 조금 다른 차이를 느낄 수 있었습니다.
  - mount의 라이프사이클을 따로 두고 있지않아, onupdate에서 이벤트 주는 부분에 어려움이 있었습니다.
  - JSX와 TypeScript에 익숙해지면 TypeScript(JavaScript)를 통한 팀원 간의 코드의 통일을 이루기 쉬울 것으로 생각합니다.
  - TypeScript > ES5~6 > Babel > WebPack의 순환구조를 깊게 이해할 필요를 느꼈습니다. 
