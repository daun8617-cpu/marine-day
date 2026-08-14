import { useState } from 'react'
import heroBg from './assets/marine-day/hero-bg-1.png'
import heroVideo from './assets/marine-day/hero-bg.mp4'
import statusRight from './assets/marine-day/status-right.svg'
import emblemBig from './assets/marine-day/emblem-group-b.svg'
import emblemAccent from './assets/marine-day/emblem-group-a.svg'
import emblemLabel from './assets/marine-day/emblem-top.svg'
import lineTitle from './assets/marine-day/line-title.svg'
import lineSection from './assets/marine-day/line-section.svg'

const SCHEDULE_ITEMS = [
  {
    time: '14:30~14:35 (5’)',
    title: 'Ai와 함께 만들어가는 해사산업',
    speaker: '조 익 순',
    affiliation: '한국해양대학교 교수',
  },
  {
    time: '14:30~14:35 (5’)',
    title: 'Ai와 함께 만들어가는 해사산업',
    speaker: '조 익 순',
    affiliation: '한국해양대학교 교수',
  },
  {
    time: '14:30~14:35 (5’)',
    title: 'Ai와 함께 만들어가는 해사산업',
    speaker: '조 익 순',
    affiliation: '한국해양대학교 교수',
  },
  {
    time: '14:30~14:35 (5’)',
    title: 'Ai와 함께 만들어가는 해사산업',
    speaker: '조 익 순',
    affiliation: '한국해양대학교 교수',
  },
  {
    time: '14:30~14:35 (5’)',
    title: 'Ai와 함께 만들어가는 해사산업',
    speaker: '조 익 순',
    affiliation: '한국해양대학교 교수',
  },
]

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <img src={lineSection} alt="" className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" />
      <span className="relative rounded-full bg-[#96dde6] px-[10px] py-[6px] text-[12px] font-semibold tracking-[-0.3px] text-black">
        {text}
      </span>
    </div>
  )
}

function App() {
  const [heroVideoFailed, setHeroVideoFailed] = useState(false)

  return (
    <div className="flex min-h-screen justify-center bg-[#010413]">
      <div className="relative min-h-[1543px] w-[393px] overflow-hidden text-white">
        {/* Hero 배경 영상 */}
        <div className="pointer-events-none absolute left-[-276px] top-[93px] h-[534px] w-[949px] overflow-hidden">
          {heroVideoFailed ? (
            <img src={heroBg} alt="" className="h-full w-full object-cover" />
          ) : (
            <video
              src={heroVideo}
              poster={heroBg}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
              onError={() => setHeroVideoFailed(true)}
            />
          )}
        </div>
        {/* 배경이 하단 배경색으로 자연스럽게 사라지는 그라데이션 */}
        <div
          className="pointer-events-none absolute left-0 top-[330px] h-[307px] w-full"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(0,0,0,0) 4.934%, #010413 63.893%)',
          }}
        />

        {/* Status Bar */}
        <div className="absolute left-0 top-0 flex h-[44px] w-[393px] items-center justify-between px-[18px]">
          <p className="text-[15px] font-semibold tracking-[-0.5px]">9:41</p>
          <img src={statusRight} alt="" className="h-[11.336px] w-[66px]" />
        </div>

        {/* Head */}
        <div className="absolute left-[46px] top-[60px] flex w-[300px] flex-col items-center gap-[14px]">
          <div className="flex w-full flex-col items-center gap-[20px]">
            <div className="relative h-[89.26px] w-[141.06px]">
              <img
                src={emblemBig}
                alt=""
                className="absolute left-[31.06px] top-0 h-[63.34px] w-[100.57px]"
              />
              <img
                src={emblemAccent}
                alt=""
                className="absolute left-[93.4px] top-[52.44px] h-[11.88px] w-[13.7px]"
              />
              <img
                src={emblemLabel}
                alt="10th Anniversary"
                className="absolute bottom-0 left-0 h-[8.75px] w-full"
              />
            </div>
            <div className="flex w-full flex-col items-center text-center text-shadow-[0px_2px_6px_rgba(0,0,0,0.15),0px_1px_2px_rgba(0,0,0,0.3)]">
              <h1 className="w-full text-[52px] font-semibold leading-[1.1] tracking-[-1.3px]">
                MARINE DAY
              </h1>
              <p className="w-full text-[45px] font-light leading-[1.1] tracking-[-1.125px] text-[#6bcfdc]">
                2026
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-[5px]">
            <img src={lineTitle} alt="" className="h-px w-full" />
            <p className="w-full text-center text-[20px] font-semibold tracking-[-0.5px] text-shadow-[3px_3px_20px_rgba(0,0,0,0.5)]">
              10년을 잇다, 미래를 향하다
            </p>
            <img src={lineTitle} alt="" className="h-px w-full" />
          </div>
        </div>

        {/* Body */}
        <div className="absolute left-[55px] top-[407px] flex w-[283px] flex-col items-center gap-[22px]">
          <div className="flex w-full flex-col items-center gap-[6px] text-center">
            <p className="w-full text-[14px] font-semibold tracking-[-0.35px] text-[#ededed] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              주 제
            </p>
            <div className="flex w-full flex-col items-center">
              <p className="w-full text-[16px] font-semibold tracking-[-0.4px] text-white">
                AI와 데이터 기반의 해운 DX 전략과 솔루션:
              </p>
              <p
                className="w-full bg-clip-text text-[24px] font-semibold tracking-[-0.6px] text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(156.17deg, rgb(10,233,224) 0.94%, rgb(54,120,180) 97.19%)',
                }}
              >
                규제 대응을 넘어 자율 운항으로
              </p>
            </div>
          </div>

          <div className="flex w-[266px] flex-col items-center gap-[6px] text-center">
            <p className="w-full text-[14px] font-semibold tracking-[-0.35px] text-[#ededed] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              일 시
            </p>
            <div className="flex w-full flex-col items-center gap-[2px]">
              <p className="w-full whitespace-pre-wrap text-[24px] font-semibold tracking-[-0.6px] text-white">
                2026. 10. 28 (목) 14:30
              </p>
              <p className="w-full text-[15px] font-semibold tracking-[-0.375px] text-[#96dde6] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                방문등록 13:30~ 세미나 14:30~
              </p>
            </div>
          </div>

          <div className="flex w-[268px] flex-col items-center gap-[6px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <p className="w-full text-center text-[14px] font-semibold tracking-[-0.35px] text-[#ededed]">
              장 소
            </p>
            <p className="w-full text-[20px] font-semibold tracking-[-0.5px] text-white">
              부산 파라다이스 호텔 2F(카프리룸)
            </p>
          </div>
        </div>

        {/* 사전등록 버튼 */}
        <a
          href="https://marineworks.co.kr/marinworks"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[41px] top-[709px] flex w-[310px] cursor-pointer flex-col items-center gap-[3px] overflow-hidden rounded-[100px] p-[10px]"
          style={{
            boxShadow:
              '0px 0px 40px 4px rgba(10,232,224,0.45), 0px 0px 18.337px 2.719px rgba(10,232,224,0.3)',
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[100px]"
            style={{
              backgroundImage:
                'linear-gradient(138.05deg, rgb(10,233,224) 0.94%, rgb(54,120,180) 97.19%)',
            }}
          />
          <p className="relative w-full text-center text-[24px] font-semibold tracking-[-0.6px] text-white">
            사전등록 바로가기
          </p>
          <p className="relative w-full text-center text-[16px] font-semibold tracking-[-0.4px] text-black">
            방문등록 13:30~ 세미나 14:30~
          </p>
        </a>

        {/* 모시는 글 */}
        <div className="absolute left-[30px] top-[829px] flex w-[333px] flex-col items-start gap-[14px]">
          <SectionLabel text="모시는 글" />
          <p className="w-full whitespace-pre-wrap text-[14px] font-normal tracking-[-0.35px] text-white">
            <span className="block leading-[1.7]">
              '2026 MARINE DAY' 기술세미나에 여러분을 초대합니다.
            </span>
            <span className="block leading-[1.7]">
              Marineworks는 지난 10년간 해양 산업의 디지털 혁신을 이끌어 왔습니다.
              '10년을 잇다, 미래를 향하다'를 주제로 열리는 올해 Marine Day에서는 AI
              기반 자율운항, 스마트 선박, 디지털 해양 플랫폼 등 미래 해양 산업의
              핵심 기술과 비전을 공유합니다.
            </span>
            <span className="block leading-[1.7]">
              지난 10년의 혁신을 돌아보고, 미래를 함께 그려갈 여러분을 초대합니다
            </span>
          </p>
        </div>

        {/* 세부일정 */}
        <div className="absolute left-[30px] top-[1057px] flex w-[333px] flex-col items-start gap-[14px]">
          <SectionLabel text="세부일정" />
          <div className="flex w-full flex-col items-start font-semibold text-white">
            <div className="flex h-[20px] w-full items-center justify-between bg-linear-to-r from-[#069893] to-[#4183c0] px-[10px] text-[12px] tracking-[-0.3px]">
              <p className="leading-[1.45]">14:30(85’)</p>
              <p className="text-center leading-[1.45]">1부</p>
            </div>
            {SCHEDULE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex w-full items-center gap-[32px] border-b-[0.5px] border-solid border-white bg-[#000133] p-[10px]"
              >
                <p className="whitespace-nowrap text-[12px] tracking-[-0.3px] leading-[1.45]">
                  {item.time}
                </p>
                <div className="flex w-[175px] flex-col items-start justify-center gap-[2px]">
                  <p className="w-full text-[15px] tracking-[-0.375px] leading-[1.45]">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-[14px] whitespace-nowrap">
                    <p className="text-[15px] tracking-[-0.375px] leading-[1.45]">
                      {item.speaker}
                    </p>
                    <p className="text-[12px] tracking-[-0.3px] leading-[1.45]">
                      {item.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-0 left-1/2 h-[34px] w-[393px] -translate-x-1/2 overflow-hidden">
          <div className="absolute bottom-[8px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-[#3f4162]" />
        </div>
      </div>
    </div>
  )
}

export default App
