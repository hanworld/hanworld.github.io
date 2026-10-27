# Willee Project 홈페이지

## 프로젝트 개요
Willee Project의 공식 홈페이지. GitHub Pages로 호스팅.

## 사이트 구조

```
/
├── index.html              # 루트 (브라우저 언어 감지 후 리다이렉트)
├── css/
│   └── common.css          # 모든 페이지 공통 스타일 (아래 '공통 스타일·검색 정보'·'디자인')
├── fonts/                  # Pretendard·Pretendard JP (OFL, 글자 묶음별 woff2)
│   ├── pretendard.css      # common.css가 불러옴
│   └── pretendard-jp.css   # 일본어 페이지만 연결
├── ko/                     # 한국어
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── en/                     # 영어
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── ja/                     # 일본어
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── zh/                     # 중국어
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── apps/
│   ├── twenty-four-hours/  # Twenty Four Hours 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   ├── privacy/        # 개인정보처리방침
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── good-timer/         # Good Timer 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   ├── privacy/        # 개인정보처리방침
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── tarotyo/            # 타로요(TarotYo) 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   ├── privacy/        # 개인정보처리방침
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── board-games/        # 보드게임(Board Games) 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   ├── privacy/        # 개인정보처리방침
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   └── zh.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── nums-to-one/        # Nums to One 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── tenmates/           # Tenmates 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── keepsum/            # Keepsum 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── cagewise/           # Cagewise 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   └── images/
│   │       └── app_icon.png
│   ├── minewise/           # Minewise 앱
│   │   ├── index.html      # 한국어로 리다이렉트
│   │   ├── ko.html
│   │   ├── en.html
│   │   ├── ja.html
│   │   ├── zh.html
│   │   ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│   │   │   ├── ko.html
│   │   │   ├── en.html
│   │   │   ├── ja.html
│   │   │   ├── zh.html
│   │   │   └── zh-Hant.html
│   │   └── images/
│   │       └── app_icon.png
│   └── huestar/            # Huestar 앱
│       ├── index.html      # 한국어로 리다이렉트
│       ├── ko.html
│       ├── en.html
│       ├── ja.html
│       ├── zh.html
│       ├── manual/         # 사용 설명서 (번체 zh-Hant 포함 5개 언어)
│       │   ├── ko.html
│       │   ├── en.html
│       │   ├── ja.html
│       │   ├── zh.html
│       │   └── zh-Hant.html
│       ├── privacy/        # 개인정보처리방침 (번체 zh-Hant 포함 5개 언어)
│       │   ├── ko.html
│       │   ├── en.html
│       │   ├── ja.html
│       │   ├── zh.html
│       │   └── zh-Hant.html
│       └── images/
│           └── app_icon.png
└── images/
    ├── favicon.ico
    ├── apple-touch-icon.png
    └── og_image.png        # 공유 미리보기 그림 (메인·회사 방침/약관)
```

앱 `images/`의 `app_icon.png`는 원본이라 페이지에서 쓰지 않는다. 화면에는 `app_icon.webp`(300px)를 쓴다.

## 다국어 지원
- 한국어 (ko) - 기본
- English (en)
- 日本語 (ja)
- 中文 (zh)
- 예외: Nums to One·Tenmates·Keepsum·Cagewise·Minewise·Huestar의 manual·privacy만 번체 중국어(zh-Hant)까지 5개 언어. 앱이 번체 이용자에게 `zh-Hant.html`을 연다. 소개 페이지와 메인은 4개 언어 그대로 (2026-10-04 결정, Tenmates는 2026-10-09, Keepsum은 2026-10-10, Cagewise는 2026-10-18, Minewise는 2026-10-22, Huestar는 2026-10-23)

## 색상 팔레트
회사 대표색은 **티파니민트**다(2026-10-18). 흰 바탕에서 글자색으로 쓰면 읽기 어려우니 남색 위 강조·단추·배지에 쓰고, 흰 바탕 링크는 진한 청록(#0B7C77)을 쓴다.
```css
티파니민트: #81D8D0 (대표색)
민트: #2EC4B6 (로고)
다크민트: #1D7A5F
네이비: #1A365D
화이트: #FFFFFF
골드: #D4AF37
라이트민트: #F0FDFC
```

## 사업자 정보
- 사업자등록번호: 157-05-00709
- 통신판매업 신고번호: 제2026-화성동탄-1057호
- 이메일: hanworld@willee.net
- 웹사이트: https://willee.net

## 앱 목록
### Twenty Four Hours
- 24시간 아날로그 시계 + 일정 관리 앱 (v1.0.2: 인앱 결제 종료, 배너 광고로 운영)
- 플랫폼: Android만 지원 (Google Play 출시)
- 패키지 ID: net.willee.twentyfourhours
- 홈페이지에 Windows/iOS 등 타 플랫폼 '지원 예정'·'심사 대기중' 표기 금지 (2026-09-19 전부 삭제)

### Good Timer
- 범용 타이머 & 스톱워치 앱 (인터벌 타이머, 프리셋, 기록/통계) (v1.0.1: 인앱 결제(개발 응원) 종료, 배너 광고로 운영)
- 플랫폼: Android만 지원 (Google Play 출시)
- 패키지 ID: net.willee.goodtimer
- Google Play: https://play.google.com/store/apps/details?id=net.willee.goodtimer
- 홈페이지에 Windows/iOS 등 타 플랫폼 '출시 예정'·'지원 예정' 표기 금지 (2026-09-20 전부 삭제)

### TarotYo (타로요)
- 타로 카드 리딩 + AI 프롬프트 생성 앱 (6가지 스프레드, 카드 78장 구경, 지난 카드 기록)
- 앱이 직접 카드를 해석하지 않고 AI가 해석할 프롬프트를 생성
- 플랫폼: Android (Google Play 출시)
- 패키지 ID: net.willee.tarotyo
- Google Play: https://play.google.com/store/apps/details?id=net.willee.tarotyo
- **타사 AI 서비스명 표기 금지** (2026-09 OpenAI 상표권 신고 대응): 페이지 제목·설명·배너 alt 등에 ChatGPT/GPT/OpenAI 등 특정 서비스명을 쓰지 않고 일반 명사 "AI"로 표기. 매뉴얼의 선택 가능 서비스 나열(설명적 용도) 1회 + 비제휴 고지만 허용

### Board Games (보드게임)
- 오목·리버시·체커·백개먼·사목·점 잇기·틱택토 등 7가지 보드게임을 한 앱에 담은 게임 모음
- AI 대전(알파-베타 탐색, 3단계 난이도) + 로컬 2인 대전, 서버 없이 오프라인 동작
- 플랫폼: Android (Google Play 출시)
- 패키지 ID: net.willee.boardgames
- Google Play: https://play.google.com/store/apps/details?id=net.willee.boardgames
- **상표 게임명 표기 금지** (2026-09-25 출시 전 변경): Othello(메가하우스)·Connect Four(해즈브로)는 등록 상표라 일반 명칭으로 표기 — 리버시/Reversi/リバーシ/黑白棋, 사목/Four in a Row/四目並べ/四子棋. 오델로·オセロ·커넥트 포·コネクトフォー 등으로 되돌리지 말 것

### Nums to One
- 숫자 카드 4장을 사칙연산으로 합쳐 목표값(기본 24)을 만드는 숫자 퍼즐. 클래식(시간 제한 없음)·러시(60초)·데일리(매일 3문제) 모드
- 플랫폼: Android (Google Play 출시)
- 패키지 ID: net.willee.numstoone
- Google Play: https://play.google.com/store/apps/details?id=net.willee.numstoone
- 원본 문서: 앱 저장소 `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`. 앱의 앱 정보 화면이 `apps/nums-to-one/{manual,privacy}/{언어}.html`을 열므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **"24 Game" 표기 금지** (Suntex 상표): 게임 방식을 설명할 때만 24를 씀("Make 24", "24 만들기")

### Tenmates
- 판의 숫자 중 같은 숫자이거나 합이 10인 짝을 지워 판을 비우는 숫자 퍼즐. Classic(시간 제한 없음, 5×4~9×12)·Rush(90초)·Daily(매일 한 판) 모드
- 플랫폼: Android (Google Play 출시, 2026-10-09)
- Google Play: https://play.google.com/store/apps/details?id=net.willee.tenmates
- 패키지 ID: net.willee.tenmates
- 원본 문서: 앱 저장소(A30.Tenmates) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/tenmates/{manual,privacy}/{언어}.html`을 열므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **경쟁작 게임 이름 표기 금지**: Number Match·넘버 매치·ナンバーマッチ, Take Ten, Ten Pair, Ten Match 등 다른 회사 게임 이름을 쓰지 않음(앱 저장소 `listing.md` 규칙)

### Keepsum
- 숫자로 가득 찬 판에서 남길 숫자와 지울 숫자를 골라 모든 가로줄·세로줄의 합을 단서와 맞추는 논리 퍼즐. Classic(시간 제한 없음, 5×5~9×9)·Daily(매일 7×7 한 판)·Rush(3분, 한 판 풀 때마다 +30초) 모드
- 플랫폼: Android (Google Play 출시, 2026-10-11)
- Google Play: https://play.google.com/store/apps/details?id=net.willee.keepsum
- 패키지 ID: net.willee.keepsum
- 원본 문서: 앱 저장소(A32.Keepsum) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/keepsum/{manual,privacy}/{언어}.html`을 열고 AdMob 유럽 동의 메시지에 `privacy/en.html`이 등록되어 있으므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **경쟁작 게임 이름 표기 금지**: Number Sums·ナンバーサム, Sumplete, Rullo 등 다른 회사 게임 이름과 'Number Sum(s)'처럼 그에 가까운 말을 쓰지 않음(앱 저장소 `listing.md` 규칙)

### Cagewise
- 9×9 판에 1~9를 채우는 스도쿠에 케이지(점선으로 묶은 칸 무리와 그 합)를 더한 킬러 스도쿠. Classic(시간 제한 없음, 입문~마스터 여섯 등급)·Daily(매일 한 판, 쉬움·보통·어려움이 차례로) 모드
- 플랫폼: Android (Google Play 출시, 2026-10-21)
- Google Play: https://play.google.com/store/apps/details?id=net.willee.cagewise
- 패키지 ID: net.willee.cagewise
- 원본 문서: 앱 저장소(A33.Cagewise) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/cagewise/{manual,privacy}/{언어}.html`을 열고 AdMob 유럽 동의 메시지와 Play Console에 `privacy/en.html`이 등록되어 있으므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **다른 회사 게임 이름·상표 표기 금지**: Sudoku.com, KenKen, KenDoku, Kakuro 등을 쓰지 않음. 일본어는 '数独'(니콜리 상표) 대신 'ナンプレ'만 씀(앱 저장소 `listing.md` 규칙)
- 한국어는 '생명 없이' 대신 '실수 제한 없이'로 씀(2026-10-18 사용자 의견, 앱 저장소 `listing.md`)

### Minewise
- 숫자 단서만으로 지뢰를 피해 지뢰가 아닌 칸을 모두 여는, 추측 없는 지뢰찾기 퍼즐(모든 판이 찍지 않고 논리만으로 풀림). Classic(시간 제한 없음, 다섯 등급 9×9~16×30)·하드(지뢰를 밟으면 끝, 힌트 없음)·Daily(매일 작은·중간·큰 판 셋) 모드
- 플랫폼: Android (Google Play 출시, 2026-10-25)
- Google Play: https://play.google.com/store/apps/details?id=net.willee.minewise
- 패키지 ID: net.willee.minewise
- 원본 문서: 앱 저장소(A34.Minewise) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/minewise/{manual,privacy}/{언어}.html`을 열고 Play Console·AdMob 유럽 동의 메시지에 방침 주소를 등록하므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **다른 회사 게임 이름·상표 표기 금지**: 'Microsoft Minesweeper', 'Hexcells' 등을 쓰지 않음. 'minesweeper'·'지뢰찾기'·'マインスイーパー'·'扫雷'·'踩地雷'는 장르 이름으로만 씀(앱 저장소 `docs/README.md` 규칙)
- 광고는 화면 아래 배너 하나라 '광고 없음'·'No ads'로 쓰지 않음. 쓸 수 있는 것은 '전면·영상(·보상형) 광고 없음'까지(A34 요청, 앱 저장소 `listing.md`)

### Huestar
- 색 구역으로 나뉜 판의 가로줄·세로줄·구역마다 별을 놓되 별끼리 붙지 않게 하는 논리 퍼즐(스타배틀). 모든 판이 답 하나이고 찍지 않고 논리만으로 풀림. Classic(시간 제한 없음, 여섯 등급 6×6~10×10, 등급 6은 별 둘)·Daily(매일 작은·중간·큰 판 셋) 모드
- 플랫폼: Android (Google Play 출시, 2026-10-27)
- Google Play: https://play.google.com/store/apps/details?id=net.willee.huestar
- 패키지 ID: net.willee.huestar
- 원본 문서: 앱 저장소(A35.Huestar) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/huestar/{manual,privacy}/{언어}.html`을 열고 Play Console·AdMob 유럽 동의 메시지에 방침 주소를 등록하므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **다른 회사 게임 이름·상표 표기 금지**: 'Queens'·'LinkedIn'·'Two Not Touch'·'Cat Sudoku'·'Meowdoku'와 '-doku'로 끝나는 이름, '星战'·'星星大作战'을 쓰지 않고 왕관·여왕 그림도 쓰지 않음. 'Star Battle'·'스타배틀'·'スターバトル'은 장르 이름으로만 씀. 'Classic'·'Daily'·'Huestar'는 모든 언어에서 영어로 씀(앱 저장소 `docs/README.md`·`listing.md` 규칙)
- 광고는 화면 아래 배너 하나라 '광고 없음'·'No ads'로 쓰지 않음. 쓸 수 있는 것은 '전면 광고 없음'까지이고, 배너 단위가 동영상도 받으므로 '영상 광고 없음'은 쓰지 않음(A35 요청, 앱 저장소 `listing.md`)
- 한국어에 '(휴스타)'를 병기하지 않음(2026-10-23 사용자 결정, 앱 저장소 `listing.md`)

## 공통 스타일·검색 정보 (2026-10-09)
- **공통 스타일:** 모든 페이지는 페이지 안 `<style>` 바로 뒤에 `<link rel="stylesheet" href="/css/common.css">`를 연결한다. 여기에는 폰 화면(600px 이하) 여백, 한국어 줄바꿈(`keep-all`), 메뉴줄 줄넘김, 표·긴 주소 끊기 규칙이 있다. 여러 페이지에 공통인 수정은 이 파일에서 한다.
- **`<head>` 틀:**
  - `<title>` 바로 다음에 `<meta name="description">`과 `<meta name="theme-color" content="#122847">`를 둔다.
  - hreflang 목록 다음에는 공유 미리보기 태그를 둔다: `og:type`, `og:site_name`(ko는 윌리 프로젝트), `og:title`(=title), `og:description`(=description), `og:url`(=canonical), `og:image`(+width·height), `og:locale`, `twitter:card`.
  - 새 페이지도 같은 틀로 만든다.
- **설명 문구:**
  - 소개 페이지는 overview 첫 문장(들)을 쓴다.
  - 설명서는 "제목 — 앱 정보 첫 문장"으로 쓴다.
  - 방침은 언어별 정형 문구를 쓴다.
  - 메인은 앱 이름을 나열한다. **새 앱을 추가하면 메인 4개 언어 description에 앱 이름도 넣는다.**
- **공유 그림:**
  - 메인과 회사 방침·약관은 `images/og_image.png`(1200×630)를 쓴다.
  - 앱 페이지는 `apps/<앱>/images/og_image.jpg`(배너를 JPG로 바꾼 것, 1024×500)를 쓴다.
  - 언어별 배너가 있는 앱(Nums to One·Tenmates·Keepsum·Cagewise·Minewise·Huestar·TarotYo)은 `og_image_{ko,en,ja,zh}.jpg`를 쓰고, zh-Hant는 zh 그림을 쓴다.
  - 공유 미리보기는 WebP를 못 읽는 곳이 있어 JPG·PNG로 둔다.
- **이미지:**
  - 스크린샷과 배너는 WebP로 둔다.
  - 스크린샷 `<img>`에는 원본 크기 `width`·`height`와 `loading="lazy" decoding="async"`를 넣는다.
  - 머리글 배너에는 `width`·`height`만 넣는다.

## 디자인 (2026-10-18)
- **모양:** 남색 머리띠·메뉴줄·꼬리말에 티파니민트 강조, 둥근 카드와 그림자. 메인·소개는 넓게(1080px, 앱 카드 3열), 설명서·방침은 읽기 좋은 폭(800px) 그대로.
- **색:** `common.css` 맨 위 변수(`--tiffany`, `--bg`, `--card`, `--ink`, `--text`, `--muted`, `--link` 등)로만 쓴다. 다크 모드는 `prefers-color-scheme: dark`에서 변수만 바꾼다. 페이지 안 `<style>`의 색은 `common.css`가 같은 선택자로 덮는다. 새 이름표를 만들면 `common.css`에도 변수로 색을 준다.
- **글꼴:** 한국어·영어는 Pretendard, 일본어는 Pretendard JP(일본어 페이지는 `common.css` 앞에 `<link rel="stylesheet" href="/fonts/pretendard-jp.css">`), 중국어는 기기 글꼴(Pretendard의 한국식 한자가 섞이지 않게). 글꼴은 `/fonts/`에 직접 두고 다른 서버에서 불러오지 않는다.
- **내려받기 단추:** 소개 페이지 머리글의 한 줄 소개 아래에 `<div class="store-cta">`를 둔다. 출시 전에는 `<span>Google Play 출시 예정</span>`, 출시 뒤에는 스토어 링크(`<a>` + 내려받기 아이콘). '출시 예정'을 스토어 링크로 바꿀 때 이 단추도 함께 바꾼다.
- **폰:** 언어 고르기는 PC에서만 알약 모양이고, 폰에서는 글자만 둔다(메뉴줄을 한 줄로 지키려고).

## 페이지 공통 요소
- **Breadcrumb**: 언어 선택 포함, sticky 상단 고정. 폰에서는 홈 링크를 집 아이콘만 남기고, 설명서·방침은 현재 페이지 이름(머리글에 크게 있음)을 뺀다(`common.css`)
- **Footer**:
  - Copyright (2026)
  - 사업자등록번호 / 통신판매업 신고번호
  - 개인정보처리방침 / 이용약관 링크

## 주의사항
- 모든 페이지의 footer에 사업자등록번호 표시
- 언어별 링크는 해당 언어 페이지로 연결 유지
- 앱 페이지에서 개인정보처리방침은 각 언어별 파일로 연결 (ko.html, en.html, ja.html, zh.html)

## Willee 운영 정보

> 윌리 조직 v5.0: 이 저장소는 홈페이지 세션이 맡는다. 다른 저장소는 읽기만 하고(`git --no-optional-locks`), Basecamp 문서는 Basecamp 세션에 변경 요청을 보낸다. 규칙: `~/.claude/skills/_shared/agent-spawning-policy.md`

- 프로젝트: A00.WilleeProject · PCode WP-A00-WLPJ-R-20161202 · YouTrack A00_WLPJ
- 저장소: git@github.com:hanworld/hanworld.github.io.git · 문서 저장소: D:\01.Willee Project\01.Project\A00.WilleeProject
- 스택: 정적 사이트(GitHub Pages, willee.net)
- 빌드: 없음 (master에 푸시하면 GitHub Pages가 게시)
- 그림: none

_Last updated: 2026-10-16 by /wp-init (v5.0)_
