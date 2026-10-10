# Willee Project 홈페이지

## 프로젝트 개요
Willee Project의 공식 홈페이지. GitHub Pages로 호스팅.

## 사이트 구조

```
/
├── index.html              # 루트 (브라우저 언어 감지 후 리다이렉트)
├── css/
│   └── common.css          # 모든 페이지 공통 스타일 (아래 '공통 스타일·검색 정보')
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
│   └── keepsum/            # Keepsum 앱
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
- 예외: Nums to One·Tenmates·Keepsum의 manual·privacy만 번체 중국어(zh-Hant)까지 5개 언어. 앱이 번체 이용자에게 `zh-Hant.html`을 연다. 소개 페이지와 메인은 4개 언어 그대로 (2026-10-04 결정, Tenmates는 2026-10-09, Keepsum은 2026-10-10)

## 색상 팔레트
```css
민트: #2EC4B6
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
- 타로 카드 리딩 + AI 프롬프트 생성 앱 (5가지 스프레드, 카드 78장 구경)
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
- 플랫폼: Android (출시 예정 — 2026-10-11 플레이 내부 테스트)
- 패키지 ID: net.willee.keepsum
- 원본 문서: 앱 저장소(A32.Keepsum) `docs/manual/manual.{ko,en,ja,zh,zh-Hant}.md`, `docs/privacy/privacy.{…}.md`, 소개 문안은 `docs/store/listing.md`. 앱의 앱 정보 화면이 `apps/keepsum/{manual,privacy}/{언어}.html`을 열고 AdMob 유럽 동의 메시지에 `privacy/en.html`이 등록되어 있으므로 폴더·파일 이름(`zh-Hant`의 대소문자 포함)을 바꾸지 말 것
- **경쟁작 게임 이름 표기 금지**: Number Sums·ナンバーサム, Sumplete, Rullo 등 다른 회사 게임 이름과 'Number Sum(s)'처럼 그에 가까운 말을 쓰지 않음(앱 저장소 `listing.md` 규칙)

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
  - 언어별 배너가 있는 앱(Nums to One·Tenmates·Keepsum)은 `og_image_{ko,en,ja,zh}.jpg`를 쓰고, zh-Hant는 zh 그림을 쓴다.
  - 공유 미리보기는 WebP를 못 읽는 곳이 있어 JPG·PNG로 둔다.
- **이미지:**
  - 스크린샷과 배너는 WebP로 둔다.
  - 스크린샷 `<img>`에는 원본 크기 `width`·`height`와 `loading="lazy" decoding="async"`를 넣는다.
  - 머리글 배너에는 `width`·`height`만 넣는다.

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
