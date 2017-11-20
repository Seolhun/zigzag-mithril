import m from 'mithril'
import 'assets/scss/agree/serviceAgree.scss'
import {userModel} from 'models/user/UserModel'

const serviceAgreement = {
  isAllAgree: false,
  isSubmit: false,

  oninit() {
    serviceAgreement.isAllAgree = false
    serviceAgreement.isSubmit = false
  },

  oncreate() {
    if (m.route.get().includes('registration')) {
      document.getElementById('sign-agreement').style.display = 'block'
    } else {
      document.getElementById('sign-agreement').style.display = 'none'
    }
  },

  onupdate() {
    serviceAgreement.isAllAgree = !!(userModel.current.privateAgree && userModel.current.serviceAgree)
  },

  submitAgree() {
    if (!userModel.current.serviceAgree) {
      alert('지그재그 서비스 제공 이용약관 (쇼핑몰 사업자용)에 동의해야 가입하실 수 있습니다.')
      document.getElementById('serviceAgree').focus()
      return
    } else if (!userModel.current.privateAgree) {
      alert('개인정보처리방침에 동의해야 가입하실 수 있습니다.')
      document.getElementById('privateAgree').focus()
      return
    }
    serviceAgreement.isSubmit = true
  },

  view() {
    return (
      <section class="content" id={'sign-agreement'}>
        <h5>지그재그 서비스 제공 이용약관 (쇼핑몰 사업자용)</h5>
        <div id="agreement">
          <p>
            <strong>제 1장 총칙</strong></p><p><strong>제 1 조 [목적]</strong></p><p>본 이용약관은 크로키닷컴 주식회사(이하 "<u>회사</u>"라 합니다)와 회사가
          운영하는 “지그재그(ZIGZAG)” 모바일 앱(이하 "<u>지그재그</u>"라 합니다)을 이용하여 자신의 상품, 재화 등을 광고하고 광고비용을 지급하는 자(이하 “<u>쇼핑몰</u> <u>사업자</u>”라 합니다) 사이에 회사와
          쇼핑몰 사업자 간의 권리, 의무, 기타 필요한 사항을 정함으로써 상호 이익을 도모하는 것을 그 목적으로 합니다.</p><p>&nbsp;</p><p><strong>제 2 조 [용어의 정의]</strong></p><p>본 이용약관에서
          사용하는 용어의 정의는 다음과 같습니다.</p>
          <ol>
            <li>“<u>서비스</u>”는 회사가 지그재그를 통하여 쇼핑몰 사업자가 판매하는 상품의 이미지, 상품명, 가격정보 등을 지그재그를 설치한 이용자들에게 정렬하여 보여 주고 관련 광고를 노출시키는 등 쇼핑몰 사업자의 상품에 대한
              판매촉진과 관련된 제반 사항을 제공하는 것을 의미합니다.
            </li>
            <li>“<u>쇼핑몰</u> <u>사업자</u>”라 함은 서비스를 이용하기 위해 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 이용고객을 의미합니다.</li>
            <li>“<u>쇼핑몰</u>”은 쇼핑몰 사업자가 운영하는 인터넷웹사이트 또는 모바일 앱을 의미합니다.</li>
            <li>“<u>이용계약</u>”은 쇼핑몰 사업자가 본 이용약관을 통하여 회사가 제공하는 서비스를 이용하기 위하여 가입을 신청하고 이를 수락하는 계약을 의미합니다.</li>
            <li>“<u>지그재그</u>”는 쇼핑몰 사업자의 쇼핑몰에 게시된 상품정보를 취합하여 이용자들에게 보여주고, 이용자들로 하여금 구매를 촉진시키거나 쇼핑을 편리하게 하는 기능을 제공하는 모바일 앱 형태의 광고매체를 의미합니다.
            </li>
            <li>“<u>마케팅센터</u>”는 쇼핑몰 사업자가 광고 소재 등록 및 광고비용 충전, 광고 집행 등을 할 수 있는 인터넷 웹사이트입니다.</li>
            <li>“<u>상품정보</u>”는 쇼핑몰 사업자가 자신이 판매하는 상품에 관해 쇼핑몰에 기재한 상품의 이미지, 상품명, 가격정보, 링크정보 등을 의미합니다.</li>
            <li>“<u>입점 서비스</u>”는 지그재그 상에 쇼핑몰 사업자가 쇼핑몰을 등록하여 상품정보를 이용자들에게 보여줄 수 있는 서비스를 의미합니다.</li>
            <li>“<u>이용자</u>”는 지그재그를 자신의 스마트폰, 태블릿PC 등 단말기에 설치함으로써 지그재그를 통하여 쇼핑몰 사업자의 상품 등을 구경하고 구매를 실현하는 일반 소비자를 의미합니다.</li>
            <li>“<u>광고</u>”는 회사가 정한 방식에 따라 광고주가 신청한 광고를 광고 매체 이용자에게 보여주는 방식의 인터넷 광고를 의미합니다</li>
            <li>“<u>광고 서비스</u>”는 “회사”가 제공하는 "광고" 게시 및 "광고" 에 부수되는 제반 서비스를 의미하며 해당 서비스는 “광고계약” 체결로 개시됩니다.</li>
            <li>“<u>광고주</u>”는 비용을 지불하고 회사가 제공하는 광고 서비스를 선택하여 이용하는 쇼핑몰 사업자를 의미합니다.</li>
            <li>“광고소재”는 광고주가 게재 신청하여 지그재그에 게재되는 키워드, 제목, 설명문구, 부가 정보, 이미지 등 광고 내용을 의미합니다.</li>
            <li>“<u>Z코인</u>”은 광고 서비스를 이용하기 위해 사용할 수 있는 충전금으로 광고 서비스의 이용대금 은 Z코인을 통해서만 지불 가능합니다. Z코인은 환불이 가능한 유상Z코인과 환불이 불가능 한 무상Z코인으로 구분됩니다.
            </li>
            <li>"<u>Z쿠폰</u>"은 광고 서비스를 이용할 수 있도록 회사가 발행하는 이용쿠폰을 의미합니다. Z쿠폰은 유상Z코인으로 전환이 가능한 유상Z쿠폰과 무상Z코인으로 전환이 가능한 무상Z쿠폰으로 구분됩니다.</li>
          </ol>
          <p>&nbsp;</p><p><strong>제 3 조 [약관의 효력 범위와 개정]</strong></p><p>① 회사가 쇼핑몰 사업자에게 가입완료 사실을 마케팅센터 또는 지그재그를 통하여 통지함으로써 이용계약이 성립하며, 그에 따라
          해당 쇼핑몰 사업자는 회사가 제공하는 서비스를 이용할 수 있으며 약관 규정의 적용을 받습니다.</p><p>② 본 이용약관에 의한 이용계약은 쇼핑몰 사업자가 제4조 제1항과 같이 가입을 승낙한 시점부터 효력이 발생합니다.</p>
          <p>③ 본 이용약관은 수시로 개정될 수 있으며 약관을 개정할 경우 회사는 개정된 약관을 적용하는 날(이하 “효력 발생일“)로부터 7일 이전에 약관이 개정된다는 사실과 개정된 내용 등을 마케팅센터 또는 전자메일로 고지하여 드립니다.
            단, 쇼핑몰 사업자에게 불리한 내용으로 변경하는 경우에는 최소 30일 이전에 고지합니다.</p><p>④ 제3항에 따라 공지된 적용일자 이전에 쇼핑몰 사업자가 명시적으로 거부의사를 표명하지 않을 경우에는 개정된 약관에 동의하는
          것으로 봅니다.</p><p>&nbsp;</p><p><strong>제 2장 이용계약의 체결</strong></p><p><strong>제 4 조 [서비스 가입신청 및 승낙]</strong></p><p>① 서비스에 대한 쇼핑몰 사업자와
          회사간의 이용계약은 쇼핑몰 사업자가 마케팅센터의 가입 페이지를 통하여 본 이용약관에 대해 동의하고, 가입 페이지의 신청서 양식에 다음 각 호의 제반 정보를 현재의 사실과 일치하도록 기재하여 서비스 가입신청을 한 후, 회사가 이러한
          신청에 대하여 가입을 승낙함으로써 체결됩니다.</p>
          <ol>
            <li>아이디 및 비밀번호</li>
            <li>쇼핑몰명</li>
            <li>쇼핑몰 URL</li>
            <li>상호(개인사업자인 경우) 또는 법인명(법인사업자인 경우)</li>
            <li>대표자명</li>
            <li>사업자등록번호</li>
            <li>사업장 주소</li>
            <li>법인등록번호(법인사업자인 경우)</li>
            <li>통신판매 번호</li>
            <li>계좌번호</li>
            <li>업태(사업자등록증에 기재되어 있는 업태 내용)</li>
            <li>업종(사업자등록증에 있는 업종 내용)</li>
            <li>취급 품목(여성 쇼핑몰, 보세, 자체제작 상품 등)</li>
            <li>취급 상품의 가격 상한가</li>
            <li>담당자의 이름, 전자메일, 휴대폰 번호</li>
            <li>기타 회사가 필요하다고 인정하는 사항</li>
          </ol>
          <p>② 쇼핑몰 사업자는 제1항의 서비스 가입신청 시 마케팅센터의 가입 페이지에 다음 각 호의 서류를 첨부하여 회사에 제출하여야 합니다.</p>
          <ol>
            <li>사업자 등록증</li>
            <li>통신판매업 신고증</li>
            <li>전자상거래 등에서의 소비자보호에 관한 법률 제13조 제10호에 의한 결제대금예치제도의 이용 또는 소비자피해보상보험계약의 체결 등에 대한 증명 서류</li>
            <li>기타 회사가 필요하다고 인정하는 서류</li>
          </ol>
          <p>③ 쇼핑몰 사업자는 서비스 가입신청을 하기 전에 서비스의 내용, 거래 조건, 기타 본 이용약관의 내용을 숙지하여야 하며, 이를 숙지하지 못해 생기는 불이익은 쇼핑몰 사업자에게 있습니다.</p><p>④ 회사는 쇼핑몰 사업자가
          제1항의 서비스 가입신청을 하는 경우 원칙적으로 이를 승낙합니다. 다만, 회사는 다음 각 호의 경우 신청의 승낙을 거절 또는 유보할 수 있으며, 사후적으로 쇼핑몰 사업자에게 다음 각 호의 사유가 존재함을 안 경우에는 그 쇼핑몰
          사업자와의 이용계약을 해지할 수 있습니다.</p>
          <ol>
            <li>제1항 각 호의 사항에 허위 또는 부정확한 정보를 기재한 경우</li>
            <li>제2항 각 호의 서류를 허위 또는 부정한 방법으로 제출하는 경우</li>
            <li>쇼핑몰 사업자가 본 이용약관 규정 위반 등으로 인하여 서비스 이용 자격을 과거에 상실하였던 자인 경우(다만, 서비스 이용 자격을 상실한 날로부터 1년이 경과한 자로서 회사의 서비스 재가입 승낙을 얻은 경우에는 예외로
              합니다)
            </li>
            <li>쇼핑몰 사업자가 사회의 안녕질서 또는 미풍양속을 저해하거나, 저해할 목적으로 서비스 가입신청을 한 경우</li>
            <li>회사의 신용, 이미지 또는 명예를 훼손하였거나 훼손할 우려가 있는 경우</li>
            <li>제1항 제13호에 기재한 사항에 변경이 있는 경우(다만, 회사에 사전 고지하고 승낙을 받은 경우는 예외로 합니다)</li>
            <li>제1항 제14호에 기재한 사항에 변경이 있는 경우(다만, 회사에 사전 고지하고 승낙을 받은 경우는 예외로 합니다)</li>
            <li>회사의 업무상, 기술상의 사정으로 서비스 제공이 불가능한 경우</li>
            <li>휴업, 폐업 또는 채무자 회생 및 파산에 관한 법률에 따른 파산 또는 회생 절차의 개시 신청을 하는 등 정상적인 영업활동이 곤란한 경우</li>
            <li>기타 제반 규정 위반 등 쇼핑몰 사업자의 귀책사유로 인하여 회사가 서비스 가입신청의 승낙을 거절할 만한 객관적인 사유가 존재하는 경우</li>
          </ol>
          <p>⑤ 본 조에 따라서 회사가 쇼핑몰 사업자의 서비스 가입신청의 승낙을 거절하거나 유보하는 경우, 회사는 원칙적으로 그 사실을 쇼핑몰 사업자에게 통지하여야 합니다.</p><p><strong>&nbsp;</strong></p><p>
          <strong>제 5 조 [쇼핑몰 사업자 정보의 변경]</strong></p><p>① 쇼핑몰 사업자는 회사에 요청해 언제든지 본인의 쇼핑몰 정보를 열람하고 수정할 수 있습니다. 다만, 쇼핑몰 사업자는 회사의 서비스 관리를 위하여
          필요한 쇼핑몰 사업자의 상호명, 법인명 및 아이디를 회사의 사전 동의 없이 수정할 수 없습니다.</p><p>② 쇼핑몰 사업자는 가입신청 시에 기재하였던 사항이 변경된 경우 지체 없이 제1항의 방법으로 쇼핑몰 사업자정보를
          수정하거나, 그 변경사항을 전자우편 기타 회사가 정한 방법을 통하여 회사에 고지하여야 합니다.</p><p>③ 쇼핑몰 사업자가 쇼핑몰 사업자정보 변경사항을 회사에 고지하지 않음에 따라, 회사로부터의 통지를 수령하지 못하는 등의
          불이익이 발생하더라도 회사는 그에 대한 책임을 부담하지 않습니다.</p><p>④ 쇼핑몰 사업자는 수정사항이 발생하였음에도 불구하고 수정을 하지 아니한 경우 그로 인하여 발생하는 불이익은 쇼핑몰 사업자에게 있습니다.</p>
          <p>&nbsp;</p><p><strong>제 3장 일반사항</strong></p><p><strong>제 6 조 [회사의 의무]</strong></p><p>① 회사는 쇼핑몰 사업자에 대한 서비스 제공과 관련하여 관련 법령 및 본
          이용약관, 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적인 서비스 제공을 위하여 최선을 다합니다.</p><p>② 회사는 쇼핑몰 사업자가 안전하게 서비스를 이용할 수 있도록 쇼핑몰 사업자의 개인정보(신용정보 포함) 및
          영업정보를 보호하기 위하여 최선을 다하며, 개인정보처리방침을 공시하고 준수합니다.</p><p>③ 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 통신비밀보호법 기타 관련 법령을 준수합니다.</p><p>④ 회사는 서비스
          이용과 관련하여 쇼핑몰 사업자가 정당한 의견 또는 불만을 제기하는 경우, 이를 처리하고 마케팅센터 또는 전자메일 등을 통하여 쇼핑몰 사업자에게 그 처리과정 및 결과를 전달합니다.</p><p>
          <strong>&nbsp;</strong></p><p><strong>제 7 조 [쇼핑몰 사업자의 의무]</strong></p><p>① 쇼핑몰 사업자는 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 아니 됩니다.</p>
          <ol>
            <li>서비스 가입신청 또는 정보 변경 시 허위의 내용을 등록하는 행위</li>
            <li>타인의 정보, 아이디와 비밀번호 등 서비스 이용 정보, 금융정보 등을 도용하는 행위</li>
            <li>타인(회사의 직원 등을 포함합니다)을 가장하거나 사칭하여 또는 타인의 명의를 도용하여 서비스를 이용하거나 전자메일을 발송하는 행위</li>
            <li>회사의 사전 승낙 없이 회사가 제공한 정보를 쇼핑몰 사업자의 개인적 이용 이외의 목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위</li>
            <li>회사 및 기타 제3자의 저작권 등 지적재산권을 침해하는 행위</li>
            <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>허위의 상품을 게재하는 등의 방법으로 이용자에게 손해를 가하거나 이용자로부터 불만ㆍ항의를 받을 수 있는 행위</li>
            <li>외설ㆍ폭력ㆍ수치심ㆍ혐오감 등을 유발하거나 기타 공서양속에 반하는 메시지ㆍ이미지 등의 정보를 쇼핑몰에 게재하는 행위</li>
            <li>서비스 정보통신망에 장애를 유발시킬 수 있는 내용의 정보, 문장, 도형 등을 쇼핑몰에 게재하여 회사가 관리·운영하는 정보통신망에 피해를 주는 행위</li>
            <li>비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는 행위</li>
            <li>다른 쇼핑몰 사업자의 영업행위를 방해하는 행위</li>
            <li>서비스 운영을 고의로 방해하거나 서비스의 안정적 운영을 방해할 수 있는 정보를 전송하는 행위</li>
            <li>기타 법령 또는 약관에 위배되거나 회사의 업무를 방해하는 부당한 행위</li>
          </ol>
          <p>② 쇼핑몰 사업자는 서비스의 이용과 관련하여 관계법령, 약관, 세부이용지침, 서비스 이용안내 및 회사가 통지한 공지사항 등을 준수하여야 하며, 이를 수시로 확인하여야 합니다.</p><p>③ 쇼핑몰 사업자는 부당하게 서비스, 광고
          또는 광고매체에 위해가 되는 제3자의 행위를 인지하는 경우 즉시 해당 사실을 회사에 알리고 만약 해당 제3자와의 거래 관계가 있는 경우에는 이를 즉시 중단하여야 합니다.&nbsp;</p><p>④ 쇼핑몰 사업자는 자신의 귀책사유로
          회사와 제3자 간에 분쟁이 발생하는 경우, 즉시 회사를 면책하고 자신의 비용과 책임으로 이를 해결하여야 합니다.&nbsp;</p><p><strong>&nbsp;</strong></p><p><strong>제 8 조 [쇼핑몰 사업자의
          아이디 및 비밀번호 관리에 대한 의무]</strong></p><p>① 쇼핑몰 사업자의 아이디와 비밀번호에 관한 관리책임은 쇼핑몰 사업자 자신에게 있으며, 쇼핑몰 사업자는 자신의 아이디 및 비밀번호를 제3자가 이용하도록 하여서는
          안됩니다.</p><p>② 쇼핑몰 사업자는 제3자가 자신의 아이디 또는 비밀번호 등 개인정보를 이용하고 있음을 인지한 경우 즉시 비밀번호 등을 변경하고, 회사에 이러한 사실을 통지하며 이후 회사의 안내에 따라야 합니다.</p><p>
          ③ 제2항의 경우에 해당 쇼핑몰 사업자가 회사에게 제3자의 개인정보 이용 사실 등을 통지하지 않거나, 회사의 안내에 따르지 않음에 따라 발생한 불이익에 대하여, 회사는 어떠한 책임도 부담하지 않습니다.</p><p>
          <strong>&nbsp;</strong></p><p><strong>제 9 조 [서비스의 내용]</strong></p><p>① 회사는 쇼핑몰 사업자에게 아래와 같은 서비스를 제공합니다.</p>
          <ol>
            <li>쇼핑몰 사업자의 쇼핑몰에 게재된 상품 및 상품 정보를 지그재그에 노출합니다.</li>
            <li>이용자가 지그재그에 노출된 상품 및 상품 정보를 클릭하면 바로 쇼핑몰 사업자의 쇼핑몰로 이동할 수 있도록 링크 정보를 제공합니다.</li>
            <li>쇼핑몰 사업자 중 회사와 광고 계약을 체결한 쇼핑몰 사업자에 대한 광고나 해당 쇼핑몰 사업자가 판매하는 상품 등의 광고를 게시합니다.</li>
            <li>지그재그와의 결제사업 제휴를 마친 쇼핑몰 사업자가 판매하는 상품 등에 대한 결제 서비스</li>
            <li>향후 지그재그의 개선 또는 회사의 발전적인 마케팅 정책에 따라 추가적인 서비스가 제공될 수 있습니다.</li>
          </ol>
          <p>② 회사는 쇼핑몰 사업자의 상품 또는 상품정보, 쇼핑몰 정보를 지그재그에 노출하거나 광고 서비스를 제공할 뿐이고 해당 상품의 판매를 대행하거나 보조하지 않으며, 상품의 구매는 쇼핑몰 사업자의 쇼핑몰에서 이루어집니다. 다만, 결제
            제휴가 이루어진 쇼핑몰의 경우 결제 기능에 한하여 회사가 결제 서비스를 제공합니다.</p><p>③ 회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 쇼핑몰 사업자에게 제1항의 서비스를 제공합니다. 다만
          회사는 정기 점검 등의 필요가 있는 경우 일정 기간 동안 서비스의 제공을 제한할 수 있으며, 또한 회사의 호스팅 서비스 업체 등 제휴사의 운영시간 등의 사유로 인하여 서비스의 제공을 제한할 수 있습니다.</p>
          <p>&nbsp;</p><p><strong>제 10 조 [서비스의 변경 및 중단]</strong></p><p>① 회사는 다음 각 호의 경우 쇼핑몰 사업자에 대하여 제공하는 서비스의 전부 또는 일부를 일시적으로 변경하거나 중단할 수
          있습니다.</p>
          <ol>
            <li>이용계약이 계약기간의 만료, 해지 등의 사유로 인하여 종료되는 경우</li>
            <li>천재지변 또는 이에 준하는 불가항력으로 인하여 회사 서비스를 제공할 수 없는 경우</li>
            <li>설비의 보수점검, 교체 등 공사로 인하여 부득이한 경우</li>
            <li>쇼핑몰 사업자가 의도적으로 회사의 정상적 영업 및 서비스 제공 활동을 방해하는 경우</li>
            <li>정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</li>
            <li>쇼핑몰 사업자가 약관을 위반한 경우</li>
            <li>쇼핑몰 사업자의 쇼핑몰에서 판매하는 상품에 대하여 3회 이상 이용자의 항의가 접수가 되고 항의 내용이 서비스를 중단할 중대한 사유가 있다고 인정되는 경우</li>
            <li>쇼핑몰 사업자가 채무자 회생 및 파산에 관한 법률에 따른 파산 또는 회생 절차의 개시 신청을 하는 등 정상적인 영업 활동이 곤란하다고 판단되는 경우</li>
            <li>국가기관 또는 정부조직(방송통신위원회, 한국정보보호진흥원 등), 수사기관, 법원 등의 행정 또는 사법적 처분 등에 따라 법률상 서비스의 제공을 제한 또는 중단하여야 하는 경우</li>
            <li>기타 회사의 운영상, 기술상 필요 등 상당한 이유가 있는 경우</li>
          </ol>
          <p>② 제1항의 경우, 회사는 사전에 다음 각 호의 사항을 마케팅센터 또는 전자메일을 통하여 쇼핑몰 사업자에게 통지하여야 합니다. 다만, 사전에 통지할 수 없는 부득이한 사유가 있는 경우 회사는 서비스의 제공을 변경 또는 중단하고
            나서 사후적으로 쇼핑몰 사업자에 대한 통지를 할 수 있습니다.</p>
          <ol>
            <li>서비스 변경 또는 중단 사유</li>
            <li>서비스 변경일 또는 중단일</li>
          </ol>
          <p><strong>제 11 조 [이용계약의 기간]</strong></p><p>본 이용약관에 의한 서비스 이용 계약의 계약기간의 시기는 제4조에 의한 쇼핑몰 사업자의 가입신청에 대하여 회사가 가입 승낙의 의사를 통지한 날이며,
          계약기간의 종기는 쇼핑몰 사업자가 회사에게 가입철회를 요청하거나, 회사가 제12조 1항과 같은 사유로 이용계약 해지 및 퇴점 조치를 한 날입니다.</p><p>&nbsp;</p><p><strong>제 12 조 [이용계약의 효력과
          해지]</strong></p><p>① 당사자는 다음 각 호의 사유가 존재하는 경우 사전 통지 후 이용계약을 해지할 수 있습니다.</p>
          <ol>
            <li>본 이용약관에 규정된 당사자의 의무를 이행하지 아니하거나 위반하는 경우</li>
            <li>회사가 정당한 이유 없이 서비스의 제공을 하지 아니하는 경우</li>
            <li>제4조 제4항의 승낙거부사유가 있음이 확인된 경우</li>
          </ol>
          <p>② 당사자가 이용계약을 해지 하는 경우 상대방에게 내용증명, 전자메일 등의 방법을 통하여 해지사유를 밝혀 해지의사를 통지하여야 합니다.</p><p>③ 이용계약이 해지되더라도, 해지 이전에 이미 체결된 이용계약의 완결과 관련해서는
          본 이용약관이 계속 적용됩니다.</p><p>④ 본 조에 의하여 이용계약이 해지되는 경우 서비스가 종료되며, 회사는 서비스 종료와 관련한 제반 조치를 취할 수 있습니다.</p><p>⑤ 제1항의 규정에도 불구하고 당사자가 현행법 위반
          및 고의 또는 중대한 과실로 상대방에게 손해를 입힌 경우, 당사자는 사전 통지 없이 이용계약을 해지할 수 있습니다.</p><p>⑥ 본 조에 의한 이용계약의 해지의 효력은 제2항의 의사표시가 상대방에게 도달한 때부터
          소멸합니다.</p><p>⑦ 본 조의 해지는 손해배상에 영향을 미치지 않습니다.</p><p>&nbsp;</p><p><strong>제 4장 입점 서비스</strong></p><p>&nbsp;</p><p><strong>제 13 조
          [상품의 판매 및 상품정보의 게재]</strong></p><p>① 쇼핑몰 사업자는 공공질서, 미풍양속, 기타 관련 법령에 위배되거나 품질 기준에 어긋나는 상품을 판매하여서는 아니 되며, 이와 관련한 상품정보를 게재할 수 없습니다.
          이를 위반하여 발생하는 모든 문제에 대한 책임은 쇼핑몰 사업자에게 귀속됩니다.</p><p>② 쇼핑몰 사업자는 허위 또는 과장된 상품 정보를 게재해서는 아니 되며 정확한 정보를 제공하여야 합니다.</p><p>③ 광고에 표시된 상품의
          소재, 가격, 재고, 사양, 내용 등 모든 정보와 품질보증, 하자보수 등은 쇼핑몰 사업자의 책임으로 철저히 관리하거나 제공하여야 하며 변경 사항이 발생한 경우에는 즉시 이를 갱신하여야 합니다.</p><p>④ 회사는 다음 각 호의
          경우 임의로 상품정보의 수정ㆍ위치 변경ㆍ삭제 등의 조치를 취할 수 있습니다. 단, 제3호의 경우 회사는 7영업일 이전에 마케팅센터 또는 전자메일을 통하여 사전에 공지하여야 합니다.</p>
          <ol>
            <li>본 이용약관에서 정하는 내용을 위반한 상품 또는 상품정보인 경우</li>
            <li>상품 구매자로부터 상품에 대한 항의가 3회 이상 제기된 상품인 경우</li>
            <li>서비스의 변경으로 인하여 부득이한 경우</li>
          </ol>
          <p>⑤ 쇼핑몰 사업자는 제4항에 의한 회사의 조치가 부당하다고 판단될 경우 그 이유를 명시하여 이의를 제기할 수 있습니다.</p><p><strong>&nbsp;</strong></p><p><strong>제 14 조
          [배송]</strong></p><p>① 쇼핑몰 사업자는 이용자가 주문한 재화를 신속, 정확, 안전하게 배송하여야 합니다.</p><p>② 이용자가 쇼핑몰 사업자의 상품을 구매한 경우, 쇼핑몰 사업자는 이용자가 구매한 재화를 지정된
          인수인과 장소에 정확히 배송할 책임이 있으며, 회사는 회사의 귀책사유가 없는 한 어떠한 책임을 지지 아니합니다.</p><p>③ 쇼핑몰 사업자는 배송 지연으로 인하여 이용자로부터 불만 사항을 접수한 경우 이를 즉시 수리하며
          조치하여야 합니다.</p><p>④ 쇼핑몰 사업자는 재고 부족, 교통 두절, 사고 발생 등 배송에 문제가 발생한 경우 즉시 이용자에게 통지하여야 합니다.</p><p><strong>&nbsp;</strong></p><p>
          <strong>제 15 조 [환불, 교환 등]</strong></p><p>쇼핑몰 사업자는 이용자가 환불, 교환, 반품 또는 구매 취소를 요청하는 경우 전자상거래등에서의 소비자보호에 관한 법률, 할부거래에 관한 법률 등 관련 법령을
          준수하여 처리합니다.</p><p><strong>제 16 조 [고지의무]</strong></p><p>① 쇼핑몰 사업자는 전자상거래법 등 관련 법령에서 규정하고 있는 소정의 표시 사항을 이용자가 쉽게 알 수 있도록 게시하여야
          합니다.</p><p>② 쇼핑몰 사업자는 상품을 판매함에 있어 관련 법령을 철저히 준수하여야 하며, 법령에서 정한 사항을 반드시 이용자에게 고지하여야 합니다.</p><p><strong>&nbsp;</strong></p><p>
          <strong>제 17 조 [상품 등의 보증 책임]</strong></p><p>회사는 쇼핑몰 사업자가 판매하는 상품의 존재, 안전성, 적법성 등 일체의 정보에 대하여 보증하지 아니하며 이에 대한 책임은 쇼핑몰 사업자에게
          있습니다.</p><p>&nbsp;</p><p><strong>제 18 조 [상품 정보의 관리]</strong></p><p>회사는 쇼핑몰 사업자의 상품 정보가 다음 각 호에 해당하는 경우, 사전 통보 없이 지그재그 내에서 삭제하거나,
          이용자의 열람을 제한하는 등의 조치를 취할 수 있습니다.</p>
          <ol>
            <li>타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 경우</li>
            <li>범죄행위와 관련되거나, 공공질서 및 미풍양속에 위반되는 내용일 경우</li>
            <li>회사 또는 제3자의 지적재산권 등 기타 권리를 침해하는 내용인 경우</li>
            <li>불법물, 음란물 또는 청소년 유해매체물의 게시, 광고, 사이트를 링크하는 경우</li>
            <li>회사가 제공하는 제품 및 서비스와 관련 없는 내용일 경우</li>
            <li>허위의 상품 정보인 경우</li>
            <li>쇼핑몰 사업자와의 이용계약이 해지된 경우</li>
            <li>기타 본 이용약관 또는 관련법령에 위반하는 경우</li>
          </ol>
          <p>&nbsp;</p><p><strong>제 5장 광고 서비스</strong></p><p>&nbsp;</p><p><strong>제19조 [광고주의 의무]</strong></p><p>① 광고주는 광고의 집행과 관련하여 이를 신의에
          따라 성실하게 관리해야 할 의무가 있으며, 광고주의 영업 활동이 관련 법령 및 본 약관 또는 별도로 고지하는 운영정책 기타 회사가 정하고 있는 기준에 위반되지 않도록 관리하여야 하며, 회사의 업무에 방해되는 행위를 하여서는
          안됩니다.&nbsp;</p><p>② 광고주는 광고 및 이에 연결되는 쇼핑몰의 상품 정보에 대하여 회사의 사전 검수를 반드시 받아야 하며, 검수가 완료되지 아니한 웹페이지로 광고를 연결하여서는 아니됩니다.</p><p>③ 광고주는
          회사가 노출을 금지하는 상품 정보를 광고 및 이에 연결되는 쇼핑몰에 노출하지 않아야 합니다.&nbsp;</p><p>④ 광고주는 상품 배송, 결제, 교환, 반품 등 쇼핑몰에서의 상품 판매와 관련한 일체의 업무를 처리하며, 이로 인해
          발생하는 모든 책임과 의무를 부담합니다.&nbsp;</p><p>⑤ 광고주는 광고 및 이에 연결되는 쇼핑몰에서 허위 또는 과장광고를 해서는 안 되며 정확한 상품 정보를 제공해야 합니다.&nbsp;</p><p>⑥ 광고주는 본 약관에
          따른 제반 등록절차를 성실히 이행하고 개별 광고계약에 따라 광고비를 적기에 회사에 지급하여야 하는 의무가 있습니다.</p><p>⑦ 광고주는 타인의 명의를 도용하거나 타인을 대신하여 서비스를 이용하거나 광고를 집행할 수 없으며 만약
          이를 위반하는 경우 회사는 광고주에 대하여 서비스 이용 중단 및 광고 집행 중단 조치를 할 수 있습니다.&nbsp; 또한 광고주는 자신의 서비스 이용권한을 타인에게 양도하여서도 아니됩니다.</p><p>⑧ 광고주는 전 항 위반에
          따른 모든 문제에 대한 책임을 부담하며 회사 및 제3자에게 발생된 손해를 배상하여야 합니다.&nbsp;</p><p>⑨ 광고주는 회사가 허용하는 범위를 넘어 서비스를 이용할 수 없으며, 회사로부터 제공 받은 서비스의 내용 및 광고
          집행 관련 내용을 제3자에게 유출할 수 없습니다.&nbsp;</p><p>⑩ 광고주가 광고에 대한 정보를 게재하지 않거나 광고 및 광고주에 대하여 허위의 내용을 기재하여 광고집행이 이루어지지 않은 경우 회사는 책임을 부담하지
          않습니다.</p><p>⑪ 광고주는 서비스 제공 또는 본 조 위반여부를 확인하기 위해 회사가 자료 또는 접근권한의 제공 및 관련사실에 대한 소명을 요청하는 경우에는 이에 성실히 임하여야 합니다.</p><p>&nbsp;</p><p>
          <strong>제20조 [광고 계약의 체결]</strong></p><p>① 쇼핑몰사업자가 회사가 제공하는 모바일 앱 형태의 광고매체인 지그재그에 광고를 신청하기 위해서는 회사와 개별 계약인 광고 계약을 체결해야 합니다.</p>
          <p>② 회사는 광고매체, 광고 상품 등의 구체적인 내용을 광고 계약의 내용으로 정하며 이에 대해 쇼핑몰 사업자가 동의함으로써 광고계약이 체결되며 계약기간 동안 쇼핑몰 사업자는 광고주의 지위를 득합니다.</p><p>③ 광고주가 되고자
          하는 쇼핑몰 사업자는 회사가 별도로 공지한 광고계약 체결에 대한 절차 등을 확인하고 광고계약을 체결합니다.&nbsp;</p><p>④ 본 조에 따른 광고계약의 체결이 본 약관 및 회사가 별도로 고지하는 운영정책 및 회사가 정하고
          있는 기준에 적합함을 보증하는 것은 아니며, 광고주의 위반사항이 확인되는 경우에는 별도의 협의 없이 회사가 광고계약을 해지할 수 있습니다.</p><p><strong>&nbsp;</strong></p><p><strong>제21조
          [광고 서비스 구성]</strong></p><p>① 회사는 광고의 종류 및 세부 유형, 광고매체의 노출영역 및 UI(User Interface), 노출비율 및 노출순서 등(이하 “광고 구성”이라 합니다)을 마케팅센터를 통해
          광고주에게 공지하며 광고주는 광고의 신청 전에 이를 신중히 확인하여야 합니다.&nbsp;</p><p>② 회사는 광고 구성에 대한 결정권한을 가지며, 변경 또는 추가, 삭제할 수 있습니다.&nbsp;</p><p>③ 광고 계약 후
          광고 구성에 변경이 있는 경우 회사는 그 변경 전에 마케팅센터나 지그재그를 통해 공지하며, 광고주는 변경 내용에 동의 하지 않을 경우 광고 신청을 취소하거나 집행 중인 광고의 중단을 요청할 수 있습니다. 단, 부득이한 사유가 있는
          경우 회사는 사후에 통지할 수 있습니다.&nbsp;</p><p><strong>&nbsp;</strong></p><p><strong>제22조 [광고 서비스 품질 관리]</strong></p><p>① 회사는 광고의 품질 향상 및 효과
          증대 등을 위해 일부 트래픽을 대상으로 하는 테스트를 광고주에 대한 별도의 공지 없이 진행할 수 있습니다.&nbsp;</p><p>② 광고는 종류 및 세부 유형에 따라 회사가 정한 로직에 따라 노출되어 광고의 노출 등이 보장되지
          않을 수 있습니다. 회사는 관련 내용을 마케팅센터 또는 전자메일을 통해 공지합니다.</p><p>&nbsp;</p><p><strong>제23조 [광고 소재 등록 및 검수]</strong></p><p>① 광고주는 마케팅센터에 접속하여
          직접 광고에 관한 정보를 게재하며 회사의 검수를 받아야 광고를 집행할 수 있습니다.&nbsp;</p><p>② 광고 검수기준은 회사가 마케팅센터 상 또는 별도로 고지하는 운영정책 및 기타 가이드에 따르는 것을 원칙으로
          합니다.&nbsp;</p><p>③ 회사는 광고주가 신청한 광고의 내용이 관련 법령 및 회사의 검수 기준에 위반하거나 위반될 가능성이 있는 경우, 해당 광고의 집행을 중단하거나 광고 내용을 변경할 수 있습니다.&nbsp;</p>
          <p>④ 전 항에 따른 광고 집행 중단이나 내용 변경 시, 회사는 이를 즉시 광고주에게 통지하며, 광고주는 회사의 조치가 부당하다고 판단되면 그 이유를 명시하여 이의를 제기할 수 있습니다.&nbsp;</p><p>⑤ 전 항에 따라
          발생되는 광고 집행의 중단이나 집행 지연 시 회사는 광고주에 대해 책임을 부담하지 않습니다.</p><p>&nbsp;</p><p><strong>제 24 조 [광고 서비스 이용료 등] </strong></p><p>① 광고의 서비스
          이용료는 노출 당 과금방식인 CPM 모델, 클릭 당 과금방식인 CPC 모델, 기간별 정액제 모델 또는 기타 회사가 별도로 공지하는 방식에 따릅니다.</p><p>② CPM 모델을 따를 경우 광고주는 광고 서비스 이용료를 광고의 게재
          전에 Z코인으로 충전하여야 하며, 광고 1회 노출 당 Z코인이 광고계약 시 합의한 금액만큼 차감되는 방식으로 이용료가 지급됩니다.</p><p>③ CPC 모델을 따를 경우 광고주는 광고 서비스 이용료를 광고의 게재 전에 Z코인으로
          충전하여야 하며, 광고 1회 클릭 당 Z코인이 광고계약 시 합의한 금액만큼 차감되는 방식으로 이용료가 지급됩니다.</p><p>④ 기간별 정액제 모델에 따를 경우 광고주는 정해진 기간 동안의 광고 서비스 사용료를 해당 기간이
          시작되기 전에 Z코인로 지급하여야 합니다.</p><p>⑤ 광고주가 회사가 정한 절차에 따라 회사가 광고주를 대신하여 제3자에 게 서비스 이용료 등 서비스 이용과 관련한 금원을 세금계산서 발행 등의 방식으로 청구할 것을 요청 할
          경우 회사는 이에 대하여 동의할 수 있습니다. 단, 회사는 광고주의 요청을 거절할 수 있습니다.</p><p>⑥ 광고주가 지정한 제3자는 회사가 지정한 절차를 준수하여야 하며, 광고주가 지정한 제3자가 서비스 이용료 등 서비스와
          관련한 금원을 적기에 회사에 납부하지 않을 경우 또는 회사가 발행 한 세금계산서의 수령을 거절할 경우 회사는 광고주에게 세금계산서를 발행하고 해당 금원을 청구 할 수 있으며, 광고주는 즉시 회사에 납부하여야 합니다. 광고주가
          지정한 제3자의 세금계산서 수령 거절 등의 사유로 회사에 손해가 발생할 경우 해당 손해에 대해서는 광고주가 모든 책임을 부담합니다.</p><p>&nbsp;</p><p><strong>제 25 조 [Z코인의 충전, 환불, 소멸
          등]</strong></p><p>① Z코인은 신용카드와 현금(이하 "현금 등"이라고 합니다)을 통해 충전이 가능합니다. Z코인과 현금 등의 교환비율은 일대일(1:1)입니다.</p><p>② 광고주는 결제수단을 통해 Z코인을 직접
          충전할 수 있으며 계정잔액이 광고주가 설정한 금액 이하로 내려갈 경우 미리 등록한 신용카드로 사전에 설정한 금액만큼 자동으로 충전되는 서비스인 “자동충전 서비스”를 선택하여 이용할 수 있습니다. “자동충전 서비스”에 대한 자세한
          사항은 별도의 이용약관에 따릅니다.</p><p>③ 회사는 광고주가 사용하지 않은 잔여 Z코인을 환불하여 드리며 이 때 환불이라 함은 광고주가 충전한 수단에 따라 카드 결제 취소 또는 현금으로 해당 금액을 돌려주는 것을 의미합니다.
          단, 카드 결제 취소의 경우 기 사용한 서비스 이용료를 결제한 후에 카드 결제 취소가 가능합니다. Z코인 환불에 대한 자세한 사항은 회사가 마케팅센터나 지그재그 상에 고지하는 별도의 이용약관에 따릅니다.</p><p>④ 회사는
          광고주가 서비스 이용 중단 등을 이유로 Z코인의 환불을 요청하는 경우 유상으로 구입한 Z코인에 한하여 환불 절차가 진행됩니다.</p><p>⑤ Z코인은 마지막으로 충전 또는 이용된 날로부터 5년이 경과하도록 다시 충전 또는 이용되지
          않을 경우 상법 상의 상사소멸시효에 의해 광고운영정책에서 정하는 바에 따라 소멸될 수 있습니다</p><p>⑥ 회사는 Z코인으로 전환할 수 있는 Z쿠폰을 광고주에게 발행할 수 있습니다. 광고주는 Z쿠폰에 명시된 기간 및 조건에
          따라서만 이를 사용할 수 있으며, 기간 내 미사용 시 해당 Z쿠폰은 소멸됩니다.</p><p>&nbsp;</p><p><strong>제 26 조 [광고계약의 기간 등]</strong></p><p>회사와 광고주 간의 광고 계약의 기간은
          광고 계약이 체결된 당시 계약내용을 기준으로 하는 것을 원칙으로 합니다. 그러나 광고주가 충전한 Z코인이 모두 소진된 경우에는 해당 일시부터 광고 서비스가 중지됩니다.</p><p>&nbsp;</p><p><strong>제 27 조
          [광고 서비스 이용제한 및 해지]</strong></p><p>① 회사는 광고주가 관련 법령 및 약관 또는 광고운영정책에 따른 의무를 위반하는 경우 그 위반 횟수와 경중을 고려하여 광고 게재 신청 제한, 광고 게재 제한, 서비스
          이용 정지, 광고계약 해지 등을 할 수 있습니다.</p><p>② 회사가 전 항에 따라 이용제한 및 해지를 하는 경우 제34조의 방법을 통해 통지합니다.</p><p>③ 회사는 본 조에 따른 이용제한 및 해지를 하기 전에 상당한
          기간을 정하여 광고주에게 이의신청의 기회를 부여하며, 다만 광고운영정책에서 정하는 사유가 있는 경우엔 별도의 이의 신청 기간을 부여하지 않을 수 있습니다.</p><p>④ 회사는 전 항의 광고주의 이의가 정당하다고 인정할 경우 즉시
          이용제한 및 해지 조치를 취소합니다.</p><p>⑤ 광고주는 다음 각 호의 사유가 존재하는 경우 사전 통지 후 광고계약을 해지할 수 있습니다.</p>
          <ol>
            <li>본 이용약관에 규정된 회사의 의무를 이행하지 아니하거나 위반하는 경우</li>
            <li>회사가 정당한 이유 없이 서비스의 제공을 하지 아니하는 경우</li>
          </ol>
          <p>⑥ 광고주가 전 항에서 규정한 바에 따라 광고계약을 해지하는 경우 마케팅센터의 광고계약 해지 절차를 통해 해지사유를 밝혀 해지의사를 통지하여야 합니다.</p><p>⑦ 광고계약이 해지되더라도 본 계약 이용약관에 의한 쇼핑몰
          사업자로서의 지위와 해지 이전에 이미 체결된 광고계약의 완결과 관련해서는 본 이용약관이 계속 적용됩니다.</p><p>⑧ 본 조에 의하여 광고계약이 해지되는 경우 광고서비스가 종료되며, 회사는 광고서비스 종료와 관련한 제반 조치를
          취할 수 있습니다.</p><p>⑨ 광고계약 제한 및 해지와 관련하여 규정되지 않은 이외의 사항은 본 이용약관 제12조가 준용됩니다.</p><p>&nbsp;</p><p><strong>제 6장 지적재산권 및
          개인정보보호</strong></p><p><strong>제 28 조 [지적재산권]</strong></p><p>① 쇼핑몰 사업자가 쇼핑몰에 게재한 상품 정보의 지적재산권은 쇼핑몰 사업자에게 있습니다.</p><p>② 회사는 쇼핑몰
          사업자가 작성한 상품정보에 대한 지적재산권을 서비스의 제공범위 내에서 무상으로 이용할 권리가 있으며, 필요한 범위 내에서 상품정보의 일부를 수정, 복제, 편집할 수 있습니다. 회사는 지그재그 앱 스크린샷을 비롯하여 스크린샷에
          포함된 상품 또는 모델 이미지를 앱 외부 마케팅을 위하여 사용할 수 있는 권리가 있습니다.</p><p>③ 회사가 작성한 저작물, 기타 서비스의 제공과 관련하여 발생한 콘텐츠 등 일체의 산출물에 대한 저작권 등 지적재산권은 회사에게
          귀속됩니다.</p><p>④ 쇼핑몰 사업자가 작성한 상품정보가 타인의 지적재산권을 침해하는 경우 그에 대한 모든 책임은 쇼핑몰 사업자가 부담합니다.</p><p>⑤ 쇼핑몰 사업자가 타인의 지적재산권을 침해하는 것으로 확인되거나 분쟁이
          발생하는 경우, 회사는 해당 쇼핑몰 사업자에게 관련 자료의 요청 및 삭제 요청을 할 수 있습니다.</p><p>⑥ 만약 쇼핑몰 사업자의 지적재산권 등 침해로 인하여 회사가 제3자로부터 손해배상청구 등 이의 제기를 받은 경우 쇼핑몰
          사업자는 스스로의 비용으로 회사를 면책하고 방어하여야 하며, 회사에 발생한 모든 손해를 부담하여야 합니다.</p><p>&nbsp;</p><p><strong>제 7장 기타</strong></p><p><strong>제 29 조
          [손해배상]</strong></p><p>당사자 일방이 본 계약상 의무를 위반함으로 인하여 상대방에게 손해가 발생한 경우, 귀책사유 있는 당사자는 상대방이 입은 손해를 배상합니다.</p><p>
          <strong>&nbsp;</strong></p><p><strong>제 30 조 [양도의 제한]</strong></p><p>당사자는 약관 및 이용계약에 따라 가지는 권리 및 계약상 지위를 제3자에게 양도, 판매, 담보제공 등
          처분할 수 없습니다.</p><p><strong>&nbsp;</strong></p><p><strong>제 31 조 [비밀유지]</strong></p><p>① 당사자는 서비스를 이용하는 과정에서 알게 된 상대방의 정보 또는 이용자의
          정보를 제3자에게 누설, 공개하지 아니합니다.</p><p>② 본 조는 이용계약이 해지되거나 서비스 제공이 중단된 이후에도 유효합니다.</p><p><strong>&nbsp;</strong></p><p><strong>제 32 조
          [완전합의]</strong></p><p>① 본 이용약관에 명시되지 않은 사항은 관련 법령의 규정과 일반 상관례에 의합니다.</p><p>② 본 이용약관에 명시된 한 개 또는 수개의 조항이 법령에 따라 무효, 위법 또는 집행불능으로
          되더라도 본 이용약관에 명시된 나머지 조항의 효력, 적법성 및 집행가능성은 그로 인하여 아무런 영향을 받지 아니합니다.</p><p><strong>&nbsp;</strong></p><p><strong>제 33조 [분쟁의
          해결]</strong></p><p>본 이용약관 및 이용계약은 대한민국법을 준거법으로 하며, 당사자간의 합의로 분쟁을 해결할 수 없는 경우 그 분쟁은 서울중앙지방법원을 관할법원으로 하여 해결합니다.</p><p>
          <strong>&nbsp;</strong></p><p><strong>제 34조 [통지]</strong></p><p>본 이용약관에 특별한 규정이 없는 경우 회사는 쇼핑몰 사업자에게 마케팅센터 또는 전자메일을 통하여 통지할 수
          있습니다.</p><p><strong>&nbsp;</strong></p><p><strong>제 35조 [면책]</strong></p><p>쇼핑몰 사업자는 본 이용약관 동의 이전에 회사의 지적재산권 침해, 개인정보의 수집 등 여하한
          위법행위도 존재하지 아니함을 확인하며, 설사 이러한 위법행위가 존재한다고 하더라도 본 이용약관에 동의함으로써 면책하고, 이에 대해 회사에 대하여 향후 여하한 민ㆍ형사상의 법적 책임도 추궁하지 아니할 것을 확약합니다</p><p>
        </p><p>부칙</p><p>이 약관은 2017년 11월 10일부터 적용됩니다.</p></div>
        <div class={'text-right'}>
          <label class={'checkbox-inline agree text-right'}>
            <input type="checkbox" id="serviceAgree"
                   onchange={m.withAttr('value', value => {
                     userModel.current.serviceAgree = value
                   })}
                   value={!userModel.current.serviceAgree}
            />
            동의합니다
          </label>
        </div>

        <h5>개인정보처리방침</h5>
        <div id="privacy"><p><strong>개인정보 처리방침</strong></p><p><strong>제 1장 총칙</strong></p><p><strong>제 1 조 [기본 원칙]</strong></p><p>크로키닷컴
          주식회사(이하 "<u>회사</u>"라 합니다)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법, 개인정보보호법 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련
          법령에 의거한 개인정보처리방침을 정하여 쇼핑몰 사업자 권익 보호에 최선을 다하고 있습니다.</p><p>본 개인정보처리방침에서 사용된 용어의 의미는 특별한 규정이 없는 한&nbsp;<strong>지그재그 서비스 제공 이용약관(쇼핑몰
          사업자용)</strong>과 동일합니다.</p><p>&nbsp;</p><p><strong>제 2장 수집하는 개인정보의 항목 및 수집방법</strong></p><p><strong>제 2 조 [최초 서비스 가입신청 시 수집하는
          개인정보]</strong></p><p>회사는 서비스의 제공, 지그재그의 운영, 쇼핑몰 사업자의 원활한 고충처리 등을 위해 쇼핑몰 사업자의 최초 서비스 가입 당시 쇼핑몰 사업자로부터 다음 각 호의 개인정보를 수집하고 있습니다.</p>
          <ol>
            <li>필수항목: 아이디 및 비밀번호, 쇼핑몰명, 쇼핑몰 URL, 상호, 법인명, 대표자명, 사업자등록번호, 사업장 주소, 법인등록번호, 통신판매 번호, 계좌정보, 업태(사업자등록증에 기재되어 있는 업태 내용),
              업종(사업자등록증에 있는 업종 내용), 담당자의 이름ㆍ전자메일ㆍ휴대폰번호
            </li>
          </ol>
          <p><strong>제 3 조 [서비스 이용과정에서 추가 생성되어 수집하는 개인정보]</strong></p><p>회사는 서비스 이용과정에서 추가로 생성되는 다음 각 호의 쇼핑몰 사업자의 정보들을 수집할 수 있습니다.</p>
          <ol>
            <li>기본적으로 수집되는 정보: IP주소, 쿠키, 서비스 이용기록, 방문기록, 불량 이용기록 등</li>
            <li>서비스 이용 시 수집되는 정보: 쇼핑몰 사업자가 자신이 판매하는 상품에 관해 쇼핑몰에 기재한 상품의 이미지, 상품명, 가격정보, 링크정보, 쇼핑몰 사업자의 쇼핑몰 이름, 이용자가 주문한 주문번호, 이용자가 결제한 결제방식,
              이용자의 결제액, 이용자의 쇼핑몰 이용 시간, 이용자가 방문한 링크정보
            </li>
          </ol>
          <ol start="3">
            <li>결제 서비스 이용과정이나 결제 서비스 처리과정에서 추가 정보: 신용카드 번호, 신용카드 유효기간, 성명, 계좌번호, 주민등록번호, 휴대폰번호, 유선전화번호, 접속 IP/MAC Address, 쿠키, e-mail, 서비스
              접속 일시, 서비스 이용기록, 불량 혹은 비정상 이용기록, 결제기록 등
            </li>
          </ol>
          <p><strong>제 4 조 [민감한 개인정보의 수집 금지 등]</strong></p><p>회사는 쇼핑몰 사업자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종, 사상 및 신조, 정치적 성향이나 범죄기록, 의료정보 등)는
            수집하지 않으며, 선택항목의 정보를 입력하지 않은 경우에도 회사가 제공하는 서비스 이용에 제한은 없습니다.</p><p><strong>제 5 조 [개인정보 수집방법]</strong></p><p>회사는 다음 각 호의 방법으로
            개인정보를 수집합니다.</p>
          <ol>
            <li>회사가 제공하는 사용자 홈페이지 또는 지그재그를 실행 또는 사용함으로써 자동으로 수집</li>
            <li>서비스 가입이나 서비스 이용, 이벤트 응모 중 쇼핑몰 사업자의 자발적 제공을 통한 수집</li>
          </ol>
          <p>&nbsp;</p><p><strong>제 3장 개인정보의 수집 및 이용목적</strong></p><p><strong>제 6 조 [개인정보의 수집 및 이용목적]</strong></p><p>회사는 다음 각 호의 목적으로 쇼핑몰
            사업자의 개인정보를 수집 및 이용합니다.</p>
          <ol>
            <li>쇼핑몰 사업자 가입 및 관리: 쇼핑몰 사업자 회원제 서비스 이용에 따른 쇼핑몰 사업자 식별, 가입의사 확인, 서비스 이용계약의 체결, 쇼핑몰 사업자자격 유지ㆍ관리, 서비스 부정이용 방지, 각종 고지 및 통지 등 목적
            </li>
            <li>고충 처리: 쇼핑몰 사업자의 신원 확인, 사고 조사, 민원사항 확인 및 처리, 사실조사를 위한 연락ㆍ통지, 처리결과 통보 등의 목적</li>
            <li>서비스의 제공 및 서비스 제공에 따른 요금 정산: 서비스의 원활한 제공, 서비스의 중단 또는 변경에 대한 판단, 쇼핑몰 사업자가 쇼핑몰에 게재한 상품 정보의 판단, 결제 및 환불업무의 수행, 요금 추심, 계약서 또는
              청구서의 발송 등의 목적
            </li>
            <li>마케팅 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등의 목적</li>
          </ol>
          <p><strong>제 4장 개인정보의 공유 및 제공</strong></p><p><strong>제 7 조 [개인정보 공유 및 제공의 기본 원칙]</strong></p><p>회사는 쇼핑몰 사업자들의 개인정보를 제6조에 고지한 범위
            내에서 사용하며, 쇼핑몰 사업자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 쇼핑몰 사업자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음 각 호의 경우는 예외로 합니다.</p>
          <ol>
            <li>사전에 쇼핑몰 사업자들이 공개에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ol>
          <p><strong>제 8 조 [예외적 개인정보 공유 및 제공]</strong></p><p>제7조에도 불구하고, 회사는 보다 편리하고 쇼핑몰 사업자에게 적합한 서비스의 제공을 위하여 수집한 개인정보를 아래와 같이 제휴사에
            제공합니다.</p>
          <table width="638">
            <tbody>
            <tr>
              <td><p><strong>제휴사</strong></p></td>
              <td><p><strong>주된 사업</strong></p></td>
              <td><p><strong>이용목적</strong></p></td>
              <td><p><strong>제공하는 개인정보항목</strong></p></td>
              <td><p><strong>보유 및 이용기간</strong></p></td>
            </tr>
            <tr>
              <td><p>제휴사 없음</p></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            </tbody>
          </table>
          <p><strong>제 5장 개인정보의 처리위탁</strong></p><p><strong>제 9 조 [개인정보의 처리위탁]</strong></p><p>회사는 서비스 향상 및 원활한 계약사항의 이행 등을 위하여 서비스 제공을 위하여
            필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁 받은 업체가 정보통신망이용촉진 및 정보보호 등에 관한 법률에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리/감독을 하고 있습니다.</p>
          <table width="566">
            <tbody>
            <tr>
              <td><p><strong>수탁업체</strong></p></td>
              <td width="270"><p><strong>위탁업무내용</strong></p></td>
              <td width="161"><p><strong>개인정보의 보유 및 이용기간</strong></p></td>
            </tr>
            <tr>
              <td><p>나이스페이먼츠㈜</p></td>
              <td width="270"><p>결제처리(휴대폰, 무통장 입금, 계좌이체, 신용카드, 지류상품권 및 기타 결제수단, 환불계좌 인증</p></td>
              <td width="161"><p>회원 탈퇴 시 혹은 위탁 계약 종료 시까지</p></td>
            </tr>
            <tr>
              <td><p>대행사</p></td>
              <td width="270"><p>광고영업 및 영업지원</p></td>
              <td width="161"><p>회원 탈퇴 시 혹은 위탁 계약 종료 시까지</p></td>
            </tr>
            </tbody>
          </table>
          <p><strong>제 6장 개인정보의 보유 및 이용기간</strong></p><p><strong>제 10 조 [개인정보 보유 및 이용기간의 기본 원칙]</strong></p><p>원칙적으로 쇼핑몰 사업자의 개인정보는 개인정보의 수집
            및 이용목적이 달성되면 지체 없이 파기됩니다.</p><p><strong>제 11 조 [회사 내부 방침에 의한 개인정보의 보유]</strong></p><p>제10조에도 불구하고, 회사는 거래 관련 분쟁 방지 및 원활한 서비스 제공을
            위하여 회사 내부 방침에 따라 쇼핑몰 사업자의 서비스가입 및 관리에 대한 관련 정보를 다음 각 호의 기간동안 보존합니다.</p>
          <ol>
            <li>원칙: 이용계약 종료 시까지</li>
            <li>광고서비스 이용 시 생성된 정보의 경우 쇼핑몰 사업자와의 계약이 종료되었더라도 새로 계약을 체결할 시 쇼핑몰 사업자에 대한 원활한 서비스 제공을 위해 필요한 경우: 계약이 종료된 후부터 2년까지</li>
            <li>쇼핑몰 사업자에 대하여 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우: 해당 수사·조사 종료 시까지</li>
            <li>회사와 쇼핑몰 사업자 사이에 채권·채무관계가 잔존하는 경우: 해당 채권·채무관계 정산 완료 시까지</li>
          </ol>
          <p><strong>제 12 조 [관련 법령에 의한 개인정보의 보유]</strong></p><p>회사는 상법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법 등 관계법령의 규정에 의하여 다음 각 호에 따라 쇼핑몰
            사업자의 해당 개인정보를 보관하며, 그 목적의 범위 내에서만 이를 이용합니다.</p>
          <ol>
            <li>전기통신일시, 개시·종료시간, 가입자번호, 사용도수, 발신기지국 위치추적자료에 관한 기록: 통신비밀보호법에 따라 1년간 보존</li>
            <li>컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료: 통신비밀보호법에 따라 3개월간 보존</li>
            <li>계약 또는 청약철회 등에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 5년간 보존</li>
            <li>대금결제 및 재화 등의 공급에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 5년간 보존</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 3년간 보존</li>
          </ol>
          <p><strong>제 7장 개인정보의 파기</strong></p><p><strong>제 13 조 [개인정보의 파기 절차 및 방법]</strong></p>
          <ol>
            <li>회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 해당 개인정보를 파기합니다.</li>
            <li>회사는 다음 각 호의 방법으로 개인정보를 파기합니다.</li>
            <ol>
              <li>종이에 기록, 저장된 개인정보 : 분쇄기로 분쇄하거나 소각을 통하여 파기</li>
              <li>전자적 파일 형태로 저장된 개인정보: 기록을 재생할 수 없도록 로우레벨포맷(Low Level Format) 등 기술적 방법을 사용하여 삭제</li>
            </ol>
          </ol>
          <p>&nbsp;</p><p><strong>제 8장 쇼핑몰 사업자의 권리</strong></p><p><strong>제 14 조 [개인정보의 수집, 이용, 제공에 대한 동의 철회]</strong></p><p>쇼핑몰 사업자는 쇼핑몰
            사업자의 서비스 가입 등을 통해 개인정보의 수집, 이용, 제공에 대하여 동의한 내용을 언제든지 철회할 수 있습니다.</p><p><strong>제 15 조 [개인정보의 열람, 증명, 정정 요청]</strong></p>
          <ol>
            <li>쇼핑몰 사업자가 개인정보에 대한 열람증명 또는 정정을 요청하는 경우, 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않으며 쇼핑몰 사업자의 요청에 성실하게 대응하고, 개인정보에 오류가 있거나
              보존기간을 경과한 것이 판명되는 등 정정 또는 삭제할 필요가 있다고 인정되는 경우 지체 없이 그에 따른 조치를 취합니다.
            </li>
          </ol>
          <ol>
            <li>유선 또는 서면을 통하여 쇼핑몰 사업자가 열람, 증명을 요구하는 경우, 회사는 본인 확인을 위한 요청인의 신분증 사본 등의 증표를 제시 받아 해당 요구가 진정한 본인의 의사인지 여부를 확인합니다.</li>
          </ol>
          <p><strong>제 16 조 [법정대리인의 권리]</strong></p>
          <ol>
            <li>회사는 만 14세 미만 아동의 개인정보를 수집하지 않습니다. 다만 향후 회사가 만 14세 미만 아동의 개인정보를 수집하는 상황이 발생하는 경우에는, 법정대리인은 만 14세 미만 아동의 개인정보 수집·이용 또는 제공에 대한
              동의를 철회할 수 있으며, 해당 아동이 제공한 개인정보에 대한 열람 또는 오류의 정정을 요구할 수 있습니다.
            </li>
            <li>유선 또는 서면을 통하여 만 14세 미만 아동인 회원의 법정대리인이 열람, 증명을 요구하는 경우, 회사는 대리관계를 증명하는 위임장 및 인감증명서, 요청인 및 대리인의 신분증 사본 등의 증표를 제시 받아 해당 요구를 하는
              자가 진정한 법정대리인인지 여부를 확인합니다.
            </li>
          </ol>
          <p><strong>제 17 조 [회사의 개인정보 열람 및 이용 제한]</strong></p>
          <ol>
            <li>쇼핑몰 사업자 또는 법정대리인의 요청에 의해 해지 또는 삭제, 정정된 개인정보는 제10조 내지 제12조에 명시된 바에 따라 처리되고, 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</li>
            <li>쇼핑몰 사업자 및 법정대리인은 언제든지 등록되어 있는 자신 혹은 당해 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다.</li>
          </ol>
          <p><strong>제 9장 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</strong></p><p><strong>제 18 조 [개인정보 자동 수집 장치의 설치 및 운영]</strong></p><p>회사는 쇼핑몰
            사업자의 개인정보를 자동으로 수집하는 장치를 설치 및 운영하고 있지 않습니다.</p><p><strong>제 19 조 [쿠키의 운용]</strong></p>
          <ol>
            <li>회사는 쇼핑몰 사업자에게 특화된 맞춤서비스를 제공하기 위해서 쇼핑몰 사업자들의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 웹사이트를 운영하는 데 이용되는 서버가 쇼핑몰 사업자의
              브라우저에 보내는 아주 작은 텍스트 파일로서 쇼핑몰 사업자의 컴퓨터 하드디스크에 저장되기도 합니다.
            </li>
            <li>회사는 쇼핑몰 사업자와 비쇼핑몰 사업자의 접속 빈도나 방문 시간 등을 분석, 쇼핑몰 사업자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 횟수 파악 등을 통한 타깃 마케팅 및 개인 맞춤 서비스
              제공 등의 목적으로 쿠키를 사용합니다.
            </li>
            <li>쇼핑몰 사업자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 쇼핑몰 사업자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할
              수도 있습니다.
            </li>
            <li>제3항에 따라 쿠키 설정을 거부하는 방법으로, 쇼핑몰 사업자는 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 인터넷
              익스플로러의 경우를 예로 들면, 웹 브라우저 상단의 도구 &lt; 인터넷 옵션 &lt; 개인정보 메뉴를 통하여 쿠키 설정의 거부가 가능합니다.
            </li>
            <li>쇼핑몰 사업자가 쿠키 설치를 거부하는 경우 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
          </ol>
          <p><strong>제 10장 개인정보의 기술적/관리적 보호 대책</strong></p><p>&nbsp;</p><p><strong>제 20 조 [개인정보의 안전한 처리를 위한 내부관리계획의 수립·시행]</strong></p><p>
            개인정보의 안전한 처리를 위하여 내부관리계획을 수립·시행하고 있습니다. 사내 개인정보보호 전담기구를 통하여 개인정보 처리방침의 이행 사항 등을 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고
            있습니다.</p><p><strong>제 21 조 [개인정보에 대한 접근 통제 및 접근 권한의 제한 조치]</strong></p><p>회사의 개인정보 관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여
            정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 회사는 개인정보처리방침의 준수를 항상 강조하고 있습니다.</p><p><strong>제 22 조 [개인정보를 안전하게 저장·전송할 수 있는 암호화 기술의 적용 또는 이에
            상응하는 조치]</strong></p><p>고유식별정보, 비밀번호 및 바이오정보 등을 정보통신망을 통하여 송·수신하거나 보조저장매체 등을 통하여 전달하는 경우에는 이를 암호화하고 있습니다. 고유식별정보를 인터넷 구간 및 인터넷
            구간과 내부망의 중간 지점(DMZ : Demilitarized Zone)에 저장하는 경우에는 이를 암호화하고 있으며, 비밀번호 및 바이오정보는 안전한 암호알고리즘으로 암호화(비밀번호는 일방향 암호화)하여 저장합니다.</p><p>
            <strong>제 23 조 [개인정보 침해사고 발생에 대응하기 위한 접속기록의 보관 및 위조·변조 방지를 위한 조치]</strong></p><p>개인정보처리자가 개인정보처리시스템에 접속하여 개인정보를 처리한 경우, 접속일시,
            처리내역 등을 저장하고 위·변조 또는 도난, 분실, 파기되지 않도록 별도로 보관합니다.</p><p><strong>제 24 조 [개인정보에 대한 보안프로그램의 설치 및 갱신]</strong></p><p>회사는 해킹이나 컴퓨터
            바이러스 등에 의해 쇼핑몰 사업자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 쇼핑몰 사업자들의 개인정보나 자료가
            누출되거나 손상되지 않도록 방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로
            보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.</p><p><strong>제 25 조 [개인정보보호전담기구의 운영]</strong></p><p>회사는 사내 개인정보보호전담기구 등을 통하여 개인정보
            처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다. 단, 쇼핑몰 사업자 본인의 부주의나 인터넷상의 문제로 개인 정보가 유출되어 발생한 문제에 대해 회사는
            일체의 책임을 지지 않습니다.</p><p><strong>제 26 조 [개인정보관리 책임자 및 담당자]</strong></p><p>쇼핑몰 사업자는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 다음 각 호의
            개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 쇼핑몰 사업자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
          <ol>
            <li>개인정보 보호ㆍ관리 책임자</li>
          </ol>
          <p>이 름 : 윤상민<br/> 전 화 : 02-6302-7205~6 직 위 : 최고기술책임자<br/> 전자메일 : support@zigzag.kr</p>
          <ol>
            <li>개인정보 보호 담당부서</li>
          </ol>
          <p>부서명 : 개발팀<br/> 담당자 : 윤상민<br/> 전 화 : 02-6302-7205~6<br/> 전자메일 : support@zigzag.kr</p><p><strong>제 27 조 [개인정보 열람 청구]</strong></p>
          <p>
            쇼핑몰 사업자는 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 쇼핑몰 사업자의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p><p>부서명 : 개발팀<br/> 담당자 : 윤상민<br/> 전 화 :
            02-6302-7205~6<br/> 전자메일 : support@zigzag.kr</p><p><strong>제 11장 기타</strong></p><p><strong>제 28 조 [개인정보처리방침의 적용 제외]</strong></p>
          <p>회사는 쇼핑몰 사업자에게 홈페이지를 통하여 다른 당사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대하여 통제권이 없을 뿐만 아니라 이들이 개인정보를 수집하는 행위에 대하여
            회사의 '개인정보처리방침'이 적용되지 않습니다. 따라서, 회사가 포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 이동할 경우에는 새로 방문한 사이트의 개인정보처리방침을 반드시 확인하시기 바랍니다.</p><p><strong>제
            29 조 [권익침해 구제 방법]</strong></p><p>쇼핑몰 사업자는 다음 각 호의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다. 아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인
            개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</p>
          <ol>
            <li>개인정보 침해신고센터 (한국인터넷진흥원 운영)</li>
          </ol>
          <p>소관업무: 개인정보 침해사실 신고, 상담 신청<br/> 홈페이지: privacy.kisa.or.kr<br/> 전 화: (국번없이) 118&nbsp;<br/> 주 소: (58324) 전남 나주시 진흥길 9(빛가람동 301-2)
            3층
            개인정보침해 신고센터</p>
          <ol>
            <li>개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)</li>
          </ol>
          <p>소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)&nbsp;<br/> 홈페이지: www.kopico.or.kr<br/> 전 화: 1833-6972<br/> 주 소: 03171 서울특별시 종로구 세종대로 209
            정부서울청사
            4층 개인정보 분쟁조정위원회</p>
          <ol>
            <li>대검찰청 사이버범죄수사단: 02-3480-3571 (cybercid.spo.go.kr)</li>
            <li>경찰청 사이버안전국: 182 (http://cyber.go.kr)</li>
            <li>정보보호마크인증위원회: 02-550-9531~2 (www.eprivacy.or.kr)</li>
          </ol>
          <p>부칙</p><p>이 개인정보처리방침은 2017년 11월 10일부터 적용됩니다.</p></div>
        <div class={'text-right'}>
          <label class={'checkbox-inline agree'}>
            <input
              type="checkbox"
              id="privateAgree"
              onchange={m.withAttr('value', value => {
                userModel.current.privateAgree = value
              })}
              value={!userModel.current.privateAgree}
            />동의합니다
          </label>
        </div>
        <div class={'buttons text-center'}>
          <button
            class="btn btn-primary agree"
            onclick={this.submitAgree}
          >동의
          </button>
        </div>
      </section>
    )
  }
}

export {serviceAgreement}
