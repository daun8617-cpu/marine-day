import type { ReactNode } from 'react'
import statusRight from '../assets/marine-day/status-right.svg'
import arrowLeft from '../assets/marine-day/arrow-left.svg'
import alertCircle from '../assets/marine-day/alert-circle.svg'

function RequiredBadge() {
  return (
    <div className="rounded-[4px] bg-[#96dde6]/20 px-[6px] py-[2px]">
      <p className="text-[10px] font-bold text-[#0b192c]">필수</p>
    </div>
  )
}

function PolicySection({
  number,
  title,
  required,
  children,
}: {
  number: number
  title: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-[10px] rounded-[12px] border p-[16px] ${
        required ? 'border-[#96dde6] bg-white' : 'border-[#e2e8f0] bg-white'
      }`}
    >
      <div className="flex w-full items-center gap-[8px]">
        <p className="flex-1 text-[15px] font-bold text-[#0f2b48]">
          {number}. {title}
        </p>
        {required && <RequiredBadge />}
      </div>
      <div className="flex w-full flex-col items-start text-[13px] leading-[1.6] text-[#475569]">
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPolicy({
  onBack,
  onAgree,
}: {
  onBack: () => void
  onAgree: () => void
}) {
  return (
    <div className="flex min-h-screen justify-center bg-[#f8fafc]">
      <div className="flex min-h-screen w-[393px] flex-col items-start">
        {/* Status Bar */}
        <div className="flex h-[44px] w-full items-center justify-between bg-[#071329] px-[18px]">
          <p className="text-[15px] font-semibold tracking-[-0.5px] text-white">9:41</p>
          <img src={statusRight} alt="" className="h-[11.336px] w-[66px]" />
        </div>

        {/* Header */}
        <button
          type="button"
          onClick={onBack}
          className="flex h-[56px] w-full items-center justify-between bg-[#071329] px-[16px]"
        >
          <span className="flex size-[40px] items-center justify-center rounded-[20px]">
            <img src={arrowLeft} alt="" className="size-[20px]" />
          </span>
          <p className="text-[20px] font-semibold tracking-[-0.5px] text-white">
            개인정보 수집·이용 동의
          </p>
          <span className="size-[40px]" />
        </button>

        {/* Sub Header */}
        <div className="flex w-full flex-col items-start gap-[8px] bg-[#0f2b48] px-[24px] pb-[16px] pt-[24px]">
          <div className="rounded-[4px] bg-[#1f75fe] px-[8px] py-[4px]">
            <p className="text-[10px] font-bold tracking-[0.5px] text-white">TERMS & CONDITIONS</p>
          </div>
          <p className="w-full text-[18px] font-bold text-white">마린데이 2026 수집 및 이용약관</p>
          <p className="w-full text-[13px] leading-[1.4] text-[#94a3b8]">
            안전하고 유익한 컨퍼런스 제공을 위해 아래 약관에 동의가 필요합니다. 내용을 상세히
            확인해 주시기 바랍니다.
          </p>
        </div>

        {/* Policy Content */}
        <div className="flex w-full flex-col items-start gap-[16px] px-[20px] pb-[40px] pt-[20px]">
          <PolicySection number={1} title="개인정보 수집 및 이용 항목" required>
            <p>• 필수항목: 이름, 연락처(휴대폰 번호), 이메일</p>
            <p>• 선택항목: 소속 기관 및 회사</p>
          </PolicySection>

          <PolicySection number={2} title="개인정보 수집 및 이용 목적">
            <p>• 사전등록 신청자 본인 확인 및 식별</p>
            <p>• 행사 주요 안내 및 모바일 디지털 티켓 발송</p>
            <p>• 긴급한 프로그램 변경 사항 개별 안내</p>
            <p>• 참가자 구성 분석 및 통계 자료 활용</p>
          </PolicySection>

          <PolicySection number={3} title="개인정보 보유 및 이용 기간">
            <p>• 수집된 개인정보는 원칙적으로 행사 종료 후 3개월간 보관 및 활용됩니다.</p>
            <p>• 보존 기간 만료 시 재생이 불가능한 방법으로 즉시 파기합니다.</p>
          </PolicySection>

          <PolicySection number={4} title="동의 거부 권리 및 불이익">
            <p>• 귀하는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다.</p>
            <p>• 단, 필수 항목 동의 거부 시 마린데이 사전등록 서비스 이용이 제한됩니다.</p>
          </PolicySection>

          <PolicySection number={5} title="개인정보 처리 업무의 위탁">
            <p>• 위탁 대상자: 주식회사 카카오</p>
            <p>• 위탁 업무 내용: 카카오 알림톡(사전등록 확인, 모바일 입장 티켓) 발송 대행</p>
          </PolicySection>

          <div className="flex w-full items-start gap-[8px] px-[4px]">
            <img src={alertCircle} alt="" className="size-[16px] shrink-0" />
            <p className="flex-1 text-[12px] leading-[1.4] text-[#64748b]">
              수집된 개인정보는 약관에 명시된 목적 외의 용도로 활용되거나 외부에 임의 무단
              배포되지 않습니다.
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="flex w-full flex-col items-start gap-[12px] border-t border-[#e2e8f0] bg-white px-[24px] py-[16px]">
          <button
            type="button"
            onClick={onAgree}
            className="flex w-full items-center justify-center rounded-[16px] py-[16px] text-[16px] font-bold text-white"
            style={{
              backgroundImage:
                'linear-gradient(152.09deg, rgb(10,233,224) 0.94%, rgb(54,120,180) 97.19%)',
            }}
          >
            동의하고 돌아가기
          </button>
          <div className="flex w-full items-start justify-center pb-[8px] pt-[12px]">
            <div className="h-[5px] w-[139px] rounded-[100px] bg-[#0f2b48] opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
