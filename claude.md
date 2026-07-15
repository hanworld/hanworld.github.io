# Willee Project 홈페이지

## 프로젝트 개요
Willee Project의 공식 홈페이지. GitHub Pages로 호스팅.

## 사이트 구조

```
/
├── index.html              # 루트 (브라우저 언어 감지 후 리다이렉트)
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
│   └── board-games/        # 보드게임(Board Games) 앱
│       ├── index.html      # 한국어로 리다이렉트
│       ├── ko.html
│       ├── en.html
│       ├── ja.html
│       ├── zh.html
│       ├── manual/         # 사용 설명서
│       │   ├── ko.html
│       │   ├── en.html
│       │   ├── ja.html
│       │   └── zh.html
│       ├── privacy/        # 개인정보처리방침
│       │   ├── ko.html
│       │   ├── en.html
│       │   ├── ja.html
│       │   └── zh.html
│       └── images/
│           └── app_icon.png
└── images/
    ├── favicon.ico
    └── apple-touch-icon.png
```

## 다국어 지원
- 한국어 (ko) - 기본
- English (en)
- 日本語 (ja)
- 中文 (zh)

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
- 24시간 아날로그 시계 + 일정 관리 앱
- 플랫폼: Android, Windows
- Google Play / Microsoft Store 배포

### Good Timer
- 범용 타이머 & 스톱워치 앱 (인터벌 타이머, 프리셋, 기록/통계)
- 플랫폼: Android, Windows (미출시)
- 패키지 ID: net.willee.goodtimer

### TarotYo (타로요)
- 타로 카드 리딩 + ChatGPT 프롬프트 생성 앱 (5가지 스프레드, 카드 78장 구경)
- 앱이 직접 카드를 해석하지 않고 AI가 해석할 프롬프트를 생성
- 플랫폼: Android (Google Play 출시)
- 패키지 ID: net.willee.tarotyo
- Google Play: https://play.google.com/store/apps/details?id=net.willee.tarotyo

### Board Games (보드게임)
- 오목·오델로·체커·백개먼·커넥트 포·점 잇기·틱택토 등 7가지 보드게임을 한 앱에 담은 게임 모음
- AI 대전(알파-베타 탐색, 3단계 난이도) + 로컬 2인 대전, 서버 없이 오프라인 동작
- 플랫폼: Android (Google Play 출시 예정)
- 패키지 ID: net.willee.boardgames

## 페이지 공통 요소
- **Breadcrumb**: 언어 선택 포함, sticky 상단 고정
- **Footer**:
  - Copyright (2026)
  - 사업자등록번호 / 통신판매업 신고번호
  - 개인정보처리방침 / 이용약관 링크

## 주의사항
- 모든 페이지의 footer에 사업자등록번호 표시
- 언어별 링크는 해당 언어 페이지로 연결 유지
- 앱 페이지에서 개인정보처리방침은 각 언어별 파일로 연결 (ko.html, en.html, ja.html, zh.html)
