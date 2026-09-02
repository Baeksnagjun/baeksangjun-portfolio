# styles — 디자인 토큰

Figma `color System` 아트보드에서 추출한 색상 / 폰트 시스템.
출처: <https://www.figma.com/design/5BOpl3z7LngqLCY2896vOp/?node-id=7-9>

| 파일 | 내용 |
| --- | --- |
| `fonts.css` | `NanumSquare Neo` @font-face (300/400/700/800/900) |
| `tokens.css` | CSS 변수 — color(primitive/semantic) + typography + spacing + radius + layout |

`src/app/globals.css` 가 `fonts.css` + `tokens.css` 를 import 하고 리셋·기본 타이포를 적용합니다.

**CSS-only 방식**입니다. 모든 토큰은 CSS 변수(`--*`)로만 존재하고, JS 상수 버전은 두지 않습니다.
색상/사이즈가 필요한 곳은 항상 `var(--토큰)` 을 씁니다 (아래 사용법 참고).

## 색상

| 토큰 | 값 | 이름 |
| --- | --- | --- |
| `--color-main` | `#2d6af7` | 메인 |
| `--color-sub1` | `#313df6` | 서브 블루1 |
| `--color-sub2` | `#005bac` | 서브 블루2 |
| `--color-gray01` → `--color-gray08` | `#14181d` … `#e3e7ed` | Gray 스케일 (Figma 스와치 라벨 중복 → 01~08로 정규화) |

## 타이포 / 사이즈

| 그룹 | 토큰 | 비고 |
| --- | --- | --- |
| font-size | `--font-size-xs` `sm` `base` `lg` `xl` `2xl` `3xl` `4xl` `5xl` | 12→56px, t-shirt 스케일. `base` = 16px |
| line-height | `--line-height-tight`(1.2) `snug`(1.4) `normal`(1.5) `relaxed`(1.7) | 큰 사이즈일수록 tight |
| font-weight | `--font-weight-light` `regular` `bold` `extrabold` `heavy` | 300 / 400 / 700 / 800 / 900 |
| spacing | `--space-1` … `--space-32` | 4px 베이스, 번호 = 4px × n |
| radius | `--radius-sm`(4) `md`(8) `lg`(16) `full` | Figma 스와치 5px 계열 |
| layout | `--layout-max-width`(1200px) `--layout-gutter` | 콘텐츠 최대 폭 / 좌우 여백 |

## 사용법

### 1. CSS Modules (`*.module.css`) — 기본

```css
.button {
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);
}

.section {
  max-width: var(--layout-max-width);
  margin-inline: auto;
  padding-block: var(--space-24); /* 섹션 세로 간격 */
  padding-inline: var(--layout-gutter);
}
```

### 2. React 인라인 스타일 — 값이 동적일 때

CSS 변수 문자열을 그대로 넣습니다.

```tsx
<span style={{ color: 'var(--color-sub1)' }}>강조</span>

// 동적 선택
<div style={{ borderColor: active ? 'var(--color-primary)' : 'var(--color-border)' }} />
```

### 3. 하지 말 것

```css
color: #2d6af7;              /* ❌ 하드코딩 */
color: var(--color-primary); /* ✅ */
```

### 토큰 고르는 기준

- 브랜드 강조·CTA·링크 → `--color-primary` (= `--color-main`)
- 본문 텍스트 `--color-text`, 흐린 텍스트 `--color-text-muted`, 제목 `--color-text-strong`
- 테두리 `--color-border`, 옅은 배경 `--color-bg-subtle`
- 간격은 항상 `--space-*` (임의 px 금지), 모서리는 `--radius-*`

> 차트 라이브러리 등 JS에서 색 문자열이 꼭 필요한 상황이 생기면,
> 그때 필요한 값만 담은 `tokens.ts` 를 추가하세요. 지금은 두지 않습니다.

## 폰트 로컬 호스팅

기본은 jsDelivr CDN. 오프라인 환경이면 woff2를 `public/fonts/` 로 받아
`fonts.css` 의 `src` 경로만 `/fonts/...` 로 교체하세요.
