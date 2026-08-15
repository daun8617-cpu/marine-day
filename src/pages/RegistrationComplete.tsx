import statusRight from '../assets/marine-day/status-right.svg'
import check from '../assets/marine-day/check.svg'
import calendar from '../assets/marine-day/calendar.svg'
import type { RegistrationData } from './RegistrationForm'

export default function RegistrationComplete({
  data,
  onHome,
}: {
  data: RegistrationData
  onHome: () => void
}) {
  return (
    <div className="flex min-h-screen justify-center bg-[#071329]">
      <div className="flex min-h-screen w-[393px] flex-col items-start justify-between text-white">
        <div className="flex w-full flex-col items-center">
          {/* Status Bar */}
          <div className="flex h-[44px] w-full items-center justify-between px-[18px]">
            <p className="text-[15px] font-semibold tracking-[-0.5px]">9:41</p>
            <img src={statusRight} alt="" className="h-[11.336px] w-[66px]" />
          </div>

          <div className="flex w-full flex-col items-center gap-[32px] px-[24px] pt-[24px]">
            <div className="flex w-full flex-col items-center gap-[20px]">
              <div
                className="flex size-[80px] items-center justify-center rounded-[40px]"
                style={{
                  backgroundImage:
                    'linear-gradient(105.22deg, rgb(10,233,224) 0.94%, rgb(54,120,180) 97.19%)',
                }}
              >
                <div className="flex size-[74px] items-center justify-center rounded-[37px] bg-[#071329]">
                  <div className="flex size-[56px] items-center justify-center rounded-[28px] bg-[#ff6f5e]">
                    <img src={check} alt="" className="size-[28px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[8px] text-center">
                <p className="w-full text-[24px] font-bold">사전등록이 완료되었습니다!</p>
                <div className="w-full text-[14px] leading-[1.4] text-[#94a3b8]">
                  <p>
                    등록하신 연락처 <span className="font-semibold text-[#ff6f5e]">({data.phone})</span> 로
                  </p>
                  <p>모바일 디지털 티켓이 곧 발송됩니다.</p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[16px] rounded-[16px] border border-[#1e293b] bg-[#0d203d] p-[20px]">
              <p className="w-full text-[15px] font-bold">사전등록 정보 요약</p>
              <div className="flex w-full flex-col items-start gap-[12px]">
                <div className="flex w-full items-center justify-between">
                  <p className="text-[13px] text-[#94a3b8]">참석자</p>
                  <p className="text-[14px] font-semibold">{data.name}</p>
                </div>
                <div className="h-px w-full bg-[#1e293b]" />
                <div className="flex w-full items-center justify-between">
                  <p className="text-[13px] text-[#94a3b8]">이메일</p>
                  <p className="text-[14px] font-semibold">{data.email}</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-[12px] rounded-[12px] border border-[#1e293b] bg-[#0f2b48] p-[16px]">
              <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[20px] bg-[#173a5c]">
                <img src={calendar} alt="" className="size-[20px]" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[2px]">
                <p className="text-[12px] text-[#94a3b8]">행사 일정</p>
                <p className="text-[14px] font-semibold">2026년 10월 28일 목요일</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[12px]">
          <div className="flex w-full flex-col items-start px-[24px] py-[16px]">
            <button
              type="button"
              onClick={onHome}
              className="flex w-full items-center justify-center rounded-[16px] bg-white py-[16px] text-[16px] font-bold text-[#071329]"
            >
              홈으로 돌아가기
            </button>
          </div>
          <div className="flex w-full items-start justify-center pb-[8px] pt-[21px]">
            <div className="h-[5px] w-[139px] rounded-[100px] bg-white opacity-30" />
          </div>
        </div>
      </div>
    </div>
  )
}
