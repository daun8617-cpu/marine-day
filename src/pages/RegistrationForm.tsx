import type { FormEvent } from 'react'
import statusRight from '../assets/marine-day/status-right.svg'
import arrowLeft from '../assets/marine-day/arrow-left.svg'
import check from '../assets/marine-day/check.svg'

export type RegistrationData = {
  name: string
  phone: string
  email: string
  organization: string
}

export type RegistrationFormState = RegistrationData & { agreed: boolean }

const inputClass =
  'w-full rounded-[12px] border border-[#1e293b] bg-[#0f2b48] px-[16px] py-[14px] text-[15px] text-white placeholder:text-[#94a3b8] outline-none focus:border-[#0ae9e0]'

export default function RegistrationForm({
  value,
  onChange,
  onBack,
  onViewPrivacyPolicy,
  onSubmit,
}: {
  value: RegistrationFormState
  onChange: (next: RegistrationFormState) => void
  onBack: () => void
  onViewPrivacyPolicy: () => void
  onSubmit: (data: RegistrationData) => void
}) {
  const { name, phone, email, organization, agreed } = value
  const isValid = name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && agreed

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    onSubmit({ name, phone, email, organization })
  }

  return (
    <div className="flex min-h-screen justify-center bg-[#071329]">
      <form
        onSubmit={handleSubmit}
        className="flex min-h-screen w-[393px] flex-col items-start justify-between text-white"
      >
        <div className="flex w-full flex-col items-start">
          {/* Status Bar */}
          <div className="flex h-[44px] w-full items-center justify-between px-[18px]">
            <p className="text-[15px] font-semibold tracking-[-0.5px]">9:41</p>
            <img src={statusRight} alt="" className="h-[11.336px] w-[66px]" />
          </div>

          {/* Header */}
          <div className="flex h-[56px] w-full items-center justify-between px-[20px]">
            <button
              type="button"
              onClick={onBack}
              aria-label="뒤로가기"
              className="flex size-[40px] items-center justify-center rounded-[20px]"
            >
              <img src={arrowLeft} alt="" className="size-[20px]" />
            </button>
            <p className="text-[18px] font-semibold">사전등록</p>
            <div className="size-[40px]" />
          </div>

          {/* Form Body */}
          <div className="flex w-full flex-col items-start gap-[28px] px-[24px] pb-[24px] pt-[16px]">
            <div className="flex w-full flex-col items-start gap-[8px]">
              <div className="rounded-[4px] bg-[#ff6f5e] px-[8px] py-[4px]">
                <p className="text-[11px] font-bold">PRE-REGISTRATION</p>
              </div>
              <p className="w-full text-[24px] font-bold">마린데이 2026 사전등록</p>
              <p className="w-full text-[14px] leading-[1.4] text-[#94a3b8]">
                해양 과학과 문화를 한자리에서 만나는 특별한 여정. 사전등록으로 현장 대기 없이 빠른
                참가가 가능합니다.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-[16px]">
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[14px] font-semibold">이름</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => onChange({ ...value, name: e.target.value })}
                  placeholder="이름을 입력해 주세요"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[14px] font-semibold">연락처</p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => onChange({ ...value, phone: e.target.value })}
                  placeholder="010-0000-0000"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[14px] font-semibold">이메일</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => onChange({ ...value, email: e.target.value })}
                  placeholder="marine.kim@ocean.com"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <div className="flex items-center gap-[4px]">
                  <p className="text-[14px] font-semibold">소속 기관 / 회사</p>
                  <p className="text-[12px] text-[#94a3b8]">(선택)</p>
                </div>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => onChange({ ...value, organization: e.target.value })}
                  placeholder="소속을 입력해 주세요"
                  className={inputClass}
                />
              </div>
            </div>

            <label className="flex w-full items-center gap-[10px] rounded-[8px] border border-[#1e293b] bg-[#0d203d] p-[12px]">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => onChange({ ...value, agreed: e.target.checked })}
                required
                className="sr-only"
              />
              <span
                aria-hidden
                className="flex size-[20px] shrink-0 items-center justify-center rounded-[4px] bg-[#ff6f5e]"
              >
                <img src={check} alt="" className="size-[12px]" />
              </span>
              <span className="flex-1 text-[13px]">
                개인정보 수집 및 이용 동의 <span className="font-semibold text-[#ff6f5e]">(필수)</span>
              </span>
              <button
                type="button"
                onClick={onViewPrivacyPolicy}
                className="shrink-0 text-[12px] text-[#94a3b8] underline"
              >
                보기
              </button>
            </label>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[12px]">
          <div className="flex w-full flex-col items-start px-[24px] py-[16px]">
            <button
              type="submit"
              disabled={!isValid}
              className="flex w-full items-center justify-center rounded-[16px] py-[16px] text-[16px] font-bold text-white disabled:opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(152.09deg, rgb(10,233,224) 0.94%, rgb(54,120,180) 97.19%)',
              }}
            >
              사전등록 완료하기
            </button>
          </div>
          <div className="flex w-full items-start justify-center pb-[8px] pt-[21px]">
            <div className="h-[5px] w-[139px] rounded-[100px] bg-white opacity-30" />
          </div>
        </div>
      </form>
    </div>
  )
}
