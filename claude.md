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
│   └── twenty-four-hours/  # Twenty Four Hours 앱
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
- 웹사이트: https://www.willee.net

## 앱 목록
### Twenty Four Hours
- 24시간 아날로그 시계 + 일정 관리 앱
- 플랫폼: Android, Windows
- Google Play / Microsoft Store 배포

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
