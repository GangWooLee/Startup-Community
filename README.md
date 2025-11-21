# Startup Community Platform

차세대 스타트업 생태계 구축을 위한 하이브리드 플랫폼입니다.

## 📖 프로젝트 소개

### “누구나 쉽게 창업 정보를 공유하고 연결할 수 있는 스타트업 커뮤니티 플랫폼”

스타트업에 관심이 있는 사람부터 이미 회사를 운영하는 CEO까지, 모두가 자유롭게 대화하고 필요한 인력을 구하거나 아이디어 피드백을 받을 수 있는 창업 커뮤니티형 웹서비스입니다. 커뮤니티, 외주 매칭, AI 분석이 한 공간에 모인 창업 허브 플랫폼을 지향합니다.

### 해결하고자 하는 문제
1. **정보의 파편화**: 커뮤니티(카페, 오픈채팅)와 외주 플랫폼(크몽, 위시켓)이 분리되어 있어 이용이 불편합니다.
2. **객관적 평가 부재**: 초보 창업자들이 아이디어의 시장성이나 경쟁력을 객관적으로 평가받을 기회가 부족합니다.

### 핵심 기능
1. **💬 커뮤니티 (피드백 네트워크)**
   - 창업 아이디어, 사업계획, 브랜딩 공유 및 피드백
   - 직무별/관심사별 게시판 (PM, 개발, 디자인, 투자 등)
   - 현직 창업자/멘토와의 질의응답

2. **👋🏻 외주 & 인력 구인 플랫폼**
   - 웹/앱 개발, 디자인, 마케팅 등 외주 등록 및 지원
   - 신뢰도 기반 인력 추천 및 리뷰 시스템

3. **🗣 AI 분석 및 네트워크 매칭**
   - 아이디어 분석을 통한 유사 산업/시장 데이터 기반 피드백 리포트
   - 분석 결과 바탕의 관련 직군/멘토/협업자 자동 매칭

## 🏗️ 아키텍처

- **Fullstack Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL + Vector)
- **ORM**: Drizzle ORM
- **Monorepo**: Turborepo
- **Styling**: Tailwind CSS

> 💡 자세한 아키텍처 설계 및 기술적 의사결정 내용은 [STRUCTOR.md](./STRUCTOR.md) 파일을 참고하세요.

## 🚀 시작하기 (Getting Started)

이 프로젝트는 **단 한 번의 명령어**로 모든 환경을 세팅할 수 있도록 구성되어 있습니다.

### 1. 필수 요구사항
- Node.js 20+
- npm

### 2. 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/GangWooLee/Startup-Community.git
cd Startup-Community

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
# apps/web/.env.local 파일을 생성하고 필요한 값을 채워주세요.
cp apps/web/.env.example apps/web/.env.local

# 4. 개발 서버 실행
npm run dev
```

- **Web App**: [http://localhost:3000](http://localhost:3000)

## 📁 프로젝트 구조

```
.
├── apps/
│   └── web/          # Next.js 풀스택 애플리케이션 (Frontend + Backend)
├── packages/
│   ├── db/           # Drizzle ORM & 데이터베이스 스키마
│   ├── ui/           # 공통 UI 컴포넌트 (Shared Component Library)
│   └── tsconfig/     # TypeScript 공통 설정
├── STRUCTOR.md       # 상세 아키텍처 문서
└── package.json      # Monorepo 루트 설정
```

## 👥 팀 소개 (Team)
기획·개발·AI·비즈니스·네트워킹 역량이 유기적으로 결합된 실전형 창업 팀입니다.
- **탄탄한 기술 기반**: 이공계 전공자 및 실제 앱 개발 경험 보유
- **전문적 비즈니스 감각**: 현직 증권사 재직자의 시장 분석 및 BM 설계 역량
- **기획 및 PM 역량**: 다수의 스타트업 프로젝트 리딩 경험
- **검증된 네트워크**: 창업 학회 및 커뮤니티 네트워크 보유
