import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import PrivacyTemplate from '../../components/templates/PrivacyTemplate';
import withHeader from '../../lib/HoC/withHeader';
import { PathParams } from '../../types';

interface PrivacyPageProps extends RouteComponentProps<PathParams> {}
interface PrivacyPageState {}

const __html = {
    travellogger: `<strong>1. 개인정보의 처리 목적</strong>
    <br />
    <br />
    TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
    ‘TravelLogger 웹사이트’) 은(는) 다음의 목적을 위하여 개인정보를
    처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
    <br />
    - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인
    식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액
    결제, 물품 또는 서비스의 공급.배송 등
    <br />
    <br />
    <br />
    <strong>2. 개인정보의 처리 및 보유 기간</strong>
    <br />
    <br />
    ① TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
    ‘TravelLogger 웹사이트’) 은(는) 정보주체로부터 개인정보를 수집할
    때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보
    보유․이용기간 내에서 개인정보를 처리․보유합니다.
    <br />
    <br />
    ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
    <br />☞ 아래 예시를 참고하여 개인정보 처리업무와 개인정보
    처리업무에 대한 보유기간 및 관련 법령, 근거 등을 기재합니다.
    <br />
    (예시)- 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입
    해지시까지, 다만 채권․채무관계 잔존시에는 해당 채권․채무관계
    정산시까지
    <br />- 전자상거래에서의 계약․청약철회, 대금결제, 재화 등
    공급기록 : 5년
    <br />
    <br />
    <br />
    <br />
    <br />
    <p className="lh6 bs4">
        <strong>3. 개인정보의 제3자 제공에 관한 사항</strong>
        <br />
        <br />①{' '}
        <em className="emphasis">
            TravelLogger('http://quarrelsome-loss.surge.sh'이하
            'TravelLogger 웹사이트')
        </em>
        은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보
        보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를
        제3자에게 제공합니다.
    </p>
    ②{' '}
    <em className="emphasis">
        TravelLogger('http://quarrelsome-loss.surge.sh')
    </em>
    은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
    <br />
    <br />
    <p className="ls2">
        <br />
        1. TravelLogger
        <br />- 개인정보를 제공받는 자 : TravelLogger
        <br />- 제공받는 자의 개인정보 이용목적 : 이메일
        <br />- 제공받는 자의 보유.이용기간: 준영구
    </p>
    <br />
    <br />
    <p className="lh6 bs4">
        <strong>4. 개인정보처리 위탁</strong>
        <br />
        <br />①{' '}
        <em className="emphasis">
            TravelLogger('TravelLogger 웹사이트')
        </em>
        은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이
        개인정보 처리업무를 위탁하고 있습니다.
    </p>
    <p className="ls2">
        1. <br />- 위탁받는 자 (수탁자) : <br />- 위탁하는 업무의
        내용 : <br />- 위탁기간 : <br />
        <br />②{' '}
        <em className="emphasis">
            TravelLogger('http://quarrelsome-loss.surge.sh'이하
            'TravelLogger 웹사이트')
        </em>
        은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라
        위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적
        보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등
        책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가
        개인정보를 안전하게 처리하는지를 감독하고 있습니다.
        <br />
        <br />
        ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
        개인정보 처리방침을 통하여 공개하도록 하겠습니다.
        <br />
    </p>
    <p className="lh6 bs4">
        <strong>
            5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법
            이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수
            있습니다.
        </strong>
    </p>
    <p className="ls2">
        ① 정보주체는
        TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
        ‘TravelLogger 웹사이트) 에 대해 언제든지 다음 각 호의
        개인정보 보호 관련 권리를 행사할 수 있습니다.
        <br />
        1. 개인정보 열람요구
        <br /> 2. 오류 등이 있을 경우 정정 요구
        <br /> 3. 삭제요구
        <br /> 4. 처리정지 요구
    </p>
    <br />
    <br />
    <p className="lh6 bs4">
        <strong>6. 처리하는 개인정보의 항목 작성 </strong>
        <br />
        <br /> ①{' '}
        <em className="emphasis">
            TravelLogger('http://quarrelsome-loss.surge.sh'이하
            'TravelLogger 웹사이트')
        </em>
        은(는) 다음의 개인정보 항목을 처리하고 있습니다.
    </p>
    <p className="ls2">
        1로그인 및 회원가입
        <br />- 필수항목 : 이메일
        <br />- 선택항목 :{' '}
    </p>
    <br />
    <br />
    <br />
    <p className="lh6 bs4">
        <strong>
            7. 개인정보의 파기
            <br />
            <em className="emphasis">
                TravelLogger('TravelLogger 웹사이트')
            </em>
            은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는
            지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한
            및 방법은 다음과 같습니다.
        </strong>
    </p>
    <p className="ls2">
        -파기절차
        <br />
        이용자가 입력한 정보는 목적 달성 후 별도의 DB에
        옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련
        법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때,
        DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른
        목적으로 이용되지 않습니다.
        <br />
        <br />
        -파기기한
        <br />
        이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
        보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적
        달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가
        불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로
        인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
    </p>
    <p className="ls2"></p>
    <br />
    <br />
    <p className="lh6 bs4">
        <strong>
            8. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한
            사항
        </strong>
    </p>
    <p className="ls2">
        TravelLogger 은 정보주체의 이용정보를 저장하고 수시로
        불러오는 ‘쿠키’를 사용하지 않습니다.
        <br />
        <br />
        <p className="lh6 bs4">
            <strong>9. 개인정보 보호책임자 작성 </strong>
        </p>
        <br /> ① TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
        ‘TravelLogger 웹사이트) 은(는) 개인정보 처리에 관한 업무를
        총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
        불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
        보호책임자를 지정하고 있습니다.
        <p className="ls2">
            <br />▶ 개인정보 보호책임자 <br />
            성명 :최동호
            <br />
            직책 :개발자
            <br />
            직급 :개발자
            <br />
            연락처 :+821094614321, killi8n@gmail.com, <br />※
            개인정보 보호 담당부서로 연결됩니다.
            <br /> <br />▶ 개인정보 보호 담당부서
            <br />
            부서명 :<br />
            담당자 :<br />
            연락처 :, , <br />② 정보주체께서는
            TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
            ‘TravelLogger 웹사이트) 의 서비스(또는 사업)을
            이용하시면서 발생한 모든 개인정보 보호 관련 문의,
            불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자
            및 담당부서로 문의하실 수 있습니다.
            TravelLogger(‘http://quarrelsome-loss.surge.sh’이하
            ‘TravelLogger 웹사이트) 은(는) 정보주체의 문의에 대해
            지체 없이 답변 및 처리해드릴 것입니다.
        </p>
        <br />
        <br />
        <p className="lh6 bs4">
            <strong>10. 개인정보 처리방침 변경 </strong>
        </p>
        <p>
            ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및
            방침에 따른 변경내용의 추가, 삭제 및 정정이 있는
            경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
            고지할 것입니다.
        </p>
        <br />
        <br />
        <p className="lh6 bs4">
            <strong>
                11. 개인정보의 안전성 확보 조치 <br />
                <em className="emphasis">
                    TravelLogger('TravelLogger 웹사이트')
                </em>
                은(는) 개인정보보호법 제29조에 따라 다음과 같이
                안전성 확보에 필요한 기술적/관리적 및 물리적 조치를
                하고 있습니다.
            </strong>
        </p>
        <p className="ls2">
            1. 정기적인 자체 감사 실시
            <br /> 개인정보 취급 관련 안정성 확보를 위해 정기적(분기
            1회)으로 자체 감사를 실시하고 있습니다.
            <br />
            <br />
            2. 개인정보의 암호화
            <br /> 이용자의 개인정보는 비밀번호는 암호화 되어 저장
            및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는
            파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을
            사용하는 등의 별도 보안기능을 사용하고 있습니다.
            <br />
            <br />
            3. 문서보안을 위한 잠금장치 사용
            <br /> 개인정보가 포함된 서류, 보조저장매체 등을
            잠금장치가 있는 안전한 장소에 보관하고 있습니다.
            <br />
            <br />
        </p>
    </p>`
        .split('\n')
        .join(''),
    scheduler: `<p><p class="ls2 lh6 bs5 ts4"><em class="emphasis"><너와 나의 스케줄러>('http://squeamish-brain.surge.sh'이하  '너와 나의 스케줄러')</em>은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.</p><p class="ls2 lh6 bs5 ts4"><em class="emphasis"><너와 나의 스케줄러>('너와 나의 스케줄러')</em> 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p><p class="ls2">○ 본 방침은부터 <em class="emphasis">2020</em>년 <em class="emphasis">11</em>월 <em class="emphasis">23</em>일부터 시행됩니다.</p></br><p class='lh6 bs4'><strong>1. 개인정보의 처리 목적 <em class="emphasis"><너와 나의 스케줄러>('http://squeamish-brain.surge.sh'이하  '너와 나의 스케줄러')</em>은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</strong></p><ul class="list_indent2 mgt10"><p class="ls2">가. 민원사무 처리</p><p class="ls2">민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</p></br></ul><p class='sub_p mgt30'><strong>2. 개인정보 파일 현황</br></strong></p><ul class='list_indent2 mgt10'><li class='tt'><b>1. 개인정보 파일명 : 너와_나의_스케줄러_개인정보</b></li><li>개인정보 항목 : 휴대전화번호, 이름</li><li>수집방법 : 분쟁시 개인적인 연락으로</li><li>보유근거 : 분쟁 증거 자료</li><li>보유기간 : 분쟁 해결시 지체없이 파기</li><li>관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li></ul></br></br><p class='lh6 bs4'><strong>3. 개인정보의 처리 및 보유 기간</strong></br></br>① <em class="emphasis"><너와 나의 스케줄러>('너와 나의 스케줄러')</em>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.</br></br>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>1.<민원사무 처리></li><li class='tt'><민원사무 처리>와 관련한 개인정보는 수집.이용에 관한 동의일로부터<분쟁 해결시 지체없이 파기>까지 위 이용목적을 위하여 보유.이용됩니다.</li><li>보유근거 : 분쟁 증거 자료</li><li>관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li><li>예외사유 : 없음</li></ul></br></br><p class='lh6 bs4'><strong>4. 개인정보의 제3자 제공에 관한 사항</strong></br></br> ① <em class="emphasis"><너와 나의 스케줄러>('http://squeamish-brain.surge.sh'이하 '너와 나의 스케줄러')</em>은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p><p class="sub_p mgt10">②  <span class="colorLightBlue"><너와 나의 스케줄러>('http://squeamish-brain.surge.sh')</span>은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</p><ul class="list_indent2 mgt10"><li class="tt">1. <최동호></li><li>개인정보를 제공받는 자 : 최동호</li><li>제공받는 자의 개인정보 이용목적 : 휴대전화번호, 이름</li><li>제공받는 자의 보유.이용기간: 분쟁 해결시 지체없이 파기</li></ul></br></br><p class='lh6 bs4'><strong>5. 개인정보처리 위탁</strong></br></br> ① <em class="emphasis"><너와 나의 스케줄러>('너와 나의 스케줄러')</em>은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>1. <최동호></li><li>위탁받는 자 (수탁자) : 최동호</li><li>위탁하는 업무의 내용 : 분쟁 해결용</li><li>위탁기간 : 분쟁 해결시 지체없이 파기</li></ul><p class='sub_p mgt10'>②  <span class='colorLightBlue'><너와 나의 스케줄러>('http://squeamish-brain.surge.sh'이하 '너와 나의 스케줄러')</span>은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p><p class='sub_p mgt10'>③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>

<p class="lh6 bs4"><strong>6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</strong></p><p class="ls2">① 정보주체는 너와 나의 스케줄러에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.</p><p class='sub_p'>② 제1항에 따른 권리 행사는너와 나의 스케줄러에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 너와 나의 스케줄러은(는) 이에 대해 지체 없이 조치하겠습니다.</p><p class='sub_p'>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p><p class='sub_p'>④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p><p class='sub_p'>⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p><p class='sub_p'>⑥ 너와 나의 스케줄러은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p></br></br><p class='lh6 bs4'><strong>7. 처리하는 개인정보의 항목 작성 </strong></br></br> ① <em class="emphasis"><너와 나의 스케줄러>('http://squeamish-brain.surge.sh'이하  '너와 나의 스케줄러')</em>은(는) 다음의 개인정보 항목을 처리하고 있습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>1<민원사무 처리></li><li>필수항목 : 휴대전화번호, 이름</li><li>- 선택항목 : 이름</li></ul></br></br><p class='lh6 bs4'><strong>8. 개인정보의 파기<em class="emphasis"><너와 나의 스케줄러>('너와 나의 스케줄러')</em>은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</strong></p><p class='ls2'>-파기절차</br>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.</br></br>-파기기한</br>이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.</p><p class='sub_p mgt10'>-파기방법</p><p class='sub_p'>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다</p></br></br><p class="lh6 bs4"><strong>9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</strong></p><p class="ls2">너와 나의 스케줄러 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를 사용하지 않습니다.<p class='sub_p mgt30'><strong>10. 개인정보 보호책임자 작성 </strong></p><p class='sub_p mgt10'> ①  <span class='colorLightBlue'>너와 나의 스케줄러(‘http://squeamish-brain.surge.sh’이하 ‘너와 나의 스케줄러)</span> 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>▶ 개인정보 보호책임자 </li><li>성명 :최동호</li><li>직책 :개발자</li><li>직급 :개발자</li><li>연락처 :01094614321, killi8n@gmail.com, 없음</li></ul><p class='sub_p'>※ 개인정보 보호 담당부서로 연결됩니다.<p/> <ul class='list_indent2 mgt10'><li class='tt'>▶ 개인정보 보호 담당부서</li><li>부서명 :</li><li>담당자 :</li><li>연락처 :, , </li></ul><p class='sub_p'>② 정보주체께서는 너와 나의 스케줄러(‘http://squeamish-brain.surge.sh’이하 ‘너와 나의 스케줄러) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 너와 나의 스케줄러(‘http://squeamish-brain.surge.sh’이하 ‘너와 나의 스케줄러) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p><p class='sub_p mgt30'><strong>11. 개인정보 처리방침 변경 </strong></p><p class='sub_p mgt10'>①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p></br></br><p class='lh6 bs4'><strong>12. 개인정보의 안전성 확보 조치 <em class="emphasis"><너와 나의 스케줄러>('너와 나의 스케줄러')</em>은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</strong></p><p class='sub_p mgt10'>1. 정기적인 자체 감사 실시</br> 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.</br></br>2. 개인정보에 대한 접근 제한</br> 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</br></br>3. 문서보안을 위한 잠금장치 사용</br> 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</br></br>4. 비인가자에 대한 출입 통제</br> 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</br></br></p></p>`
        .split('\n')
        .join(''),
};

class PrivacyPage extends Component<PrivacyPageProps, PrivacyPageState> {
    render() {
        const html =
            this.props.match.params.appName === 'travellogger'
                ? __html.travellogger
                : __html.scheduler;
        return <PrivacyTemplate __html={html} />;
    }
}

export default withHeader()(withRouter(PrivacyPage));
