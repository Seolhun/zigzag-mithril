import m from 'mithril'

export default {
  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-12'}>
            <h1>ZIGZAG Backend Developer Junior Coding Test</h1>
            <p>안녕하세요. ZIGZAG에 지원한 설훈입니다.</p>
            <p>
              이번 과제 내용은
              <a href='https://github.com/Seolhun/vue-example/tree/master/cli/ch5' target='_blank'>
                Vue로 작성된 해당 페이지
              </a>
              를 Mithril Js 프레임워크로 변환하는 것입니다.
              <ul>
                <li>
                  <h4>필수사항</h4>
                </li>
                <ol>
                  <li>
                    한개 이상의 서브 컴포넌트를 사용해주세요.
                  </li>
                </ol>
              </ul>

              <ul>
                <li>
                  <h4>선택사항</h4>
                </li>
                <ol>
                  <li>
                    1. 모델 데이터(속성)에 Mithril stream을 적용
                  </li>
                  <li>
                    2. TypeScript 사용
                  </li>
                  <li>
                    3. CSS class를 local scope로 정의
                  </li>
                </ol>
              </ul>
            </p>
          </div>
        </div>
      </div>
    )
  }
} as m.Component<{}, {}>
