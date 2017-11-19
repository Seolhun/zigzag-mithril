# To use TypeScript in mithril js.  
Author : [SeolHun](Https://github.com/SeolHun)
---

## 1. TypeScript
#### - 타입스크립트 특징
1. Type annotations

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

2. Interfaces
  - TypeScript는 여러 필드가있는 객체를 설명하는 인터페이스를 사용할 수 있다.

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

3. Classes
  - TypeScript는 클래스 기반 객체 지향 프로그래밍과 같은 JavaScript의 새로운 기능을 지원합니다.

```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

#### - TypeScript 설정방법
> ZIGZAG은 Node를 사용하므로 Node와 관련한 기본 정보를 보겠습니다. - <a href="https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter" target="_blank">Node-TypeScript 깃허브 보러 가기</a>
1. Configuring TypeScript compilation
    - <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank">공식 문서 사이트</a>
    1. 프로젝트의 컴파일 옵션을 설정하기 위해 `tsconfig.json`을 만든다.
    2. 간단한 `tsconfig.json`의 설정을 알아보겠습니다.
    - `tsconfig.json`
        ```json
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "noImplicitAny": true,
            "moduleResolution": "node",
            "sourceMap": true,
            "outDir": "dist",
            "baseUrl": ".",
            "paths": {
                "*": [
                    "node_modules/*",
                    "src/types/*"
                ]
            }
        },
        ```
- **compilerOptions Description**
    - 기본 설정 정보
        - "module": "commonjs"
            - 출력 모듈 유형이며, 노드는 commonjs를 공통적으로 사용합니다.
        - "target": "es6"
            - target은 결과물의 언어설정입니다. Node는 ES6를 지원하기에 이를 사용하였습니다.
        - "noImplicitAny": true
            - 무언가가 디폴트 값을 가질 때 오류를 던지는보다 엄격한 설정을 가능하게합니다
        - "moduleResolution": "node"
            - TypeScript는 노드의 모듈 분석 전략을 모방합니다. - [더 보기](https://www.typescriptlang.org/docs/handbook/module-resolution.html#node)
        - "sourceMap": true
            - 우리는 자바 스크립트와 함께 소스 맵을 출력하기를 원합니다. - [디버깅](https://github.com/Microsoft/TypeScript-Node-Starter#debugging)
        - "outDir": "dist"
            - 컴파일 이후 .js 결과물 위치
        - "baseUrl": "."
            - 각각의 모듈을 인식하는 Base 경로. - [더보기](https://github.com/Microsoft/TypeScript-Node-Starter#installing-dts-files-from-definitelytyped)
        - paths: {...}
            - 각각의 모듈을 인식하는 경로. - [더보기](https://github.com/Microsoft/TypeScript-Node-Starter#installing-dts-files-from-definitelytyped)

    - 추가 설정 정보
        - lib가 지정되지 않은 경우, librares의 기본 목록이 삽입됩니다. 주입되는 기본 라이브러리는 다음과 같습니다.
        ► 대상 - 대상 ES5 : DOM, ES5, ScriptHost
        ► 대상 - 대상 ES6 : DOM, ES6, DOM.Iterable, ScriptHost
