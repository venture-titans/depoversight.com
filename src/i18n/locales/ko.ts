// Korean (ko).
// Security wording: "검토 시그널" / "검토 필요", never "확인된 취약점".
import type { Dictionary } from './en';

const ko = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: '제품',
      demo: '데모',
      howItWorks: '작동 방식',
      compare: '비교',
      integrations: '연동',
    },
    cta: '얼리 액세스 신청',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    selectLanguage: '언어 선택',
    skipToContent: '본문으로 건너뛰기',
  },
  hero: {
    eyebrow: '의존성 인텔리전스',
    title: '스캐너가 알려주기 전에, 의존성이 위험해지는 시점을 파악하세요.',
    subtitle:
      'DepOversight는 CVE, 권고, 스캐너 알림이 존재하기 전에 업스트림 PR·커밋·이슈·릴리스를 모니터링하여 의존성 그래프 전반의 보안 관련 시그널을 드러냅니다.',
    oneLiner:
      'CVE 스캐너는 이미 알려진 것을 알려줍니다. DepOversight는 위험해지기 시작한 것을 보여줍니다.',
    primaryCta: '얼리 액세스 신청',
    secondaryCta: '라이브 데모 보기',
    watchingLabel: '업스트림 모니터링 중',
    watchingSources: ['PR', '커밋', 'Issue', '릴리스', 'Changelog', '권고'],
  },
  demo: {
    sectionTitle: '라이브 데모',
    sectionLead:
      '예시 의존성에 대해 DepOversight가 드러내는 것의 스냅샷입니다. 모든 데이터는 예시입니다.',
    project: '프로젝트',
    environment: '환경',
    environmentValue: '프로덕션',
    dependency: '의존성',
    status: '상태',
    statusReviewRequired: '검토 필요',
    live: '실시간',
    headerLine: '{{project}} · 프로덕션 · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: '상세 예시 · 설명용 재구성',
      title: 'axios npm 공급망 침해 — 2026년 3월 31일',
      framing:
        'DepOversight는 이 사고 중에는 가동되지 않았습니다. 이 뷰는 공개 기록을 기반으로 제품이 드러냈을 내용을 재구성한 것입니다.',
      sourcesLabel: '출처',
    },
    replay: '리플레이',
    replayDate: '2026년 3월 31일',
    metrics: {
      signals: '보안 시그널',
      exposureWindow: '가능한 노출 구간',
      disclosure: '공개 디스클로저 패턴',
      sensitivePrs: '민감 영역의 PR',
      advisories: '탐지된 권고',
    },
    filters: {
      label: '심각도로 필터',
      all: '전체',
      high: '높음',
      review: '검토',
      monitoring: '모니터링',
      blocked: '차단',
      empty: '이 필터에 해당하는 시그널이 없습니다.',
    },
    severity: {
      high: '높음',
      review: '검토',
      monitoring: '모니터링',
      blocked: '차단',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: '프로젝트',
        signals: '시그널',
        integrations: '연동',
      },
      severityShortcuts: {
        high: '높음',
        review: '검토',
        monitoring: '모니터링',
        resolved: '해결됨',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: '정책',
      },
      collapseLabel: '데모 워크스페이스',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: '확인된 과거 패턴',
      potentialUndisclosedFix: '미공개 가능성이 있는 수정',
      exposureWindow: '노출 구간',
      prCheck: 'PR 체크',
      maliciousVersion: '악성 버전 (회수됨)',
      communityConfirmed: '커뮤니티가 확인한 침해',
    },
    sourceType: {
      publicGithubIssue: '공개 GitHub 이슈',
      pullRequestOrCommit: '풀 리퀘스트 / 커밋',
      commitOrPr: '커밋 / PR',
      dependencyUpdate: '의존성 업데이트',
      registryRelease: 'npm 릴리스',
      manifestChange: '패키지 매니페스트 변경',
    },
    detail: {
      summary: '요약',
      whyFlagged: '플래그 이유',
      recommendedAction: '권장 조치',
      viewSource: '소스 보기',
      viewTimeline: '타임라인 보기',
      viewPrCheck: 'PR 체크 보기',
      severity: '심각도',
      status: '상태',
      dependency: '의존성',
      sourceType: '소스 유형',
      empty: '시그널을 선택하면 상세 정보가 표시됩니다.',
      back: '시그널 목록으로',
    },
    prCheck: {
      title: 'DepOversight 체크',
      result: '검토 필요',
      summary:
        '의존성 업데이트에 보안 관련 업스트림 활동이 포함되어 있습니다.',
      dependencyLabel: '의존성',
      reasonsLabel: '사유',
      reasons: [
        '오픈 또는 최근 머지된 보안 민감 PR 탐지',
        '릴리스 상태 불분명',
        '권고 미발견',
        '현재 버전이 영향을 받을 수 있음',
      ],
      footer: '머지 전 수동 검토가 필요합니다.',
      close: '닫기',
    },
    timelineButton: '타임라인 보기',
    prCheckButton: 'PR 체크 보기',
    timelineModalTitle: '노출 구간 타임라인',
    disclaimer:
      'DepOversight는 공개 업스트림 활동을 기반으로 보안 관련 검토 시그널을 드러냅니다. 시그널은 공개된 권고나 CVE와 연결되지 않는 한 확인된 취약점이 아닙니다.',
    signals: {
      publicIssue: {
        title: '악성 axios 버전이 npm에 게시됨',
        summary:
          '2026년 3월 31일 00:21 UTC에 axios@1.14.1이 npm에 게시되었고, 01:00 UTC에 axios@0.30.4가 뒤따랐습니다. 두 버전 모두 런타임에 페이로드를 가져오는 숨겨진 post-install 훅을 포함하고 있었습니다.',
        whyFlagged: [
          '메인테이너의 평소 릴리스 주기에서 벗어난 예기치 않은 버전 인상',
          '새 전이 의존성 추가됨: plain-crypto-js@4.2.1 (axios와의 이전 이력 없음)',
          '게시된 package.json에 새로운 post-install 훅',
          '게시된 아티팩트에 해당하는 commit이 axios의 git 저장소에 없음',
        ],
        recommendedAction:
          '1.14.1 / 0.30.4와 관련된 axios 업그레이드의 자동 머지를 릴리스 출처가 검증될 때까지 보류하세요.',
      },
      publicFix: {
        title: '의심스러운 전이 의존성 도입',
        summary:
          'plain-crypto-js@4.2.1이 악성 axios 릴리스의 런타임 의존성으로 등장합니다. 해당 패키지는 이전 이력이 없는 publisher가 이틀 전에 게시했습니다.',
        whyFlagged: [
          '신규 게시된 패키지가 런타임 의존성으로 참조됨',
          'publisher 계정에 이전 패키지 이력 없음',
          '패키지 이름이 정상적인 암호화 라이브러리를 모방',
          'post-install 스크립트가 원격 바이너리를 다운로드',
        ],
        recommendedAction:
          'plain-crypto-js@4.2.1을 신뢰할 수 없는 것으로 취급하고, 마지막으로 알려진 안전한 axios 버전으로 핀 고정하세요.',
      },
      mergedUnreleased: {
        title: '커뮤니티가 axios 1.14.1의 악성을 확인',
        summary:
          '여러 독립 연구자 (Datadog, SANS, Wiz, Elastic)가 axios 1.14.1이 post-install을 통해 크로스 플랫폼 RAT을 배포한다고 보고합니다. axios 메인테이너는 이슈 #10636에서 인정했습니다.',
        whyFlagged: [
          '여러 출처의 독립 확인',
          '메인테이너가 공개 포스트모템에서 인지',
          'macOS, Windows, Linux에서 RAT 페이로드 관찰',
          'npm이 버전을 회수하기 전 3시간 동안 활성화',
        ],
        recommendedAction:
          '00:21에서 03:25 UTC 사이에 axios 1.14.1을 설치했을 가능성이 있는 모든 CI / 개발 환경을 감사하세요.',
      },
      riskyUpdate: {
        title: 'axios를 업그레이드하는 Renovate PR 차단',
        summary:
          'Renovate가 axios를 1.13.0에서 1.14.1로 업그레이드하는 PR을 열었습니다. DepOversight의 PR 체크가 머지를 차단합니다 — 대상 버전은 CVE가 할당되기 전에 활성 플래그 목록에 있습니다.',
        whyFlagged: [
          '대상 버전 (1.14.1)이 플래그 목록에 있음',
          '활성 노출 구간 동안 PR 열림',
          'PR 열린 시점에 CVE 미할당 — 전통적 스캐너는 잡지 못했을 것',
          '이 저장소에서 자동 머지 활성화됨',
        ],
        recommendedAction:
          '수동 검토가 필요합니다. axios를 1.13.0으로 핀 고정하거나, 검증된 릴리스가 사용 가능해지면 업그레이드하세요.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'DepOversight가 드러내는 보안 시나리오',
    sectionLead:
      '오픈 소스 의존성의 위험은 단일 CVE로 오는 경우가 드뭅니다. 다음은 우리가 드러내는 패턴들입니다.',
    items: {
      upstream: {
        title: '업스트림에서 도입된 위험',
        description:
          '새로운 업스트림 변경이 출하 중인 의존성의 보안 민감 면을 넓힙니다.',
      },
      publicFix: {
        title: '공개적으로 수정된 기존 위험',
        description:
          '메인테이너가 어떤 권고가 공개되기 전에 보안 관련 이슈를 공개적으로 수정합니다.',
      },
      mergedNoRelease: {
        title: '머지되었으나 릴리스 없음',
        description:
          '수정은 main에 있으나 모든 공개 버전에는 여전히 미패치 코드 경로가 남아 있습니다.',
      },
      silentPatch: {
        title: '사일런트 패치 릴리스',
        description:
          '새 릴리스에 권고나 릴리스 노트 언급 없이 보안 관련 수정이 포함됩니다.',
      },
      publicIssue: {
        title: '공개 이슈 디스클로저',
        description:
          '메인테이너 또는 신고자가 트리아지가 끝나기 전에 보안 관련 이슈를 공개합니다.',
      },
      riskyUpgrade: {
        title: '위험한 의존성 업그레이드',
        description:
          '제안된 업그레이드가 의존성 그래프에 새로운 보안 민감 코드 면을 도입합니다.',
      },
      reverted: {
        title: '되돌리거나 부분 적용된 수정',
        description:
          '이전의 보안 관련 수정이 되돌려지거나 축소되거나 부분적으로만 적용됩니다.',
      },
      degradation: {
        title: '의존성 신뢰도 저하',
        description:
          '의존성 주변의 유지 보수 시그널이 포스처 재검토가 필요한 방식으로 변동합니다.',
      },
    },
  },
  timeline: {
    sectionTitle: '노출 구간이 열리는 지점',
    sectionLead:
      '업스트림 시그널부터 CVE까지의 일반적인 타임라인 — 그리고 DepOversight가 격차를 메우는 위치.',
    exposureWindowLabel: '가능한 노출 구간',
    callout:
      '위험한 격차는 공개 이후가 아닙니다. 공개 업스트림 시그널과 공식 권고 사이에 존재합니다.',
    events: {
      day0Signal: { day: '3월 31일 · 00:21 UTC', label: 'axios@1.14.1을 npm에 게시' },
      day0Flag: { day: '3월 31일 · ~02:00 UTC', label: 'DepOversight가 릴리스 이상 시그널을 표면화' },
      day3Merge: { day: '3월 31일 · 03:25 UTC', label: 'npm이 axios의 두 버전을 회수' },
      day7Release: { day: '4월 1일', label: 'Microsoft, Datadog가 포스트모템 게시' },
      day14Cve: { day: '~4월 8일', label: '침해된 릴리스에 CVE 할당' },
      day14Scanner: { day: '4월 8일+', label: '전통적 스캐너 따라잡음' },
    },
  },
  problem: {
    sectionTitle: '문제',
    sectionLead:
      'CVE 스캐너는 답할 시점에는 이미 답이 있던 질문에 답합니다.',
    bullets: [
      '대부분의 CVE 피드는 공개 이후에 위험을 기술합니다.',
      '수정은 종종 권고가 공개되기 전에 안착합니다.',
      '일부 패치는 어떤 권고도 없이 조용히 출시됩니다.',
      '스캐너의 사각지대는 팀이 결정하는 대신 반응하게 만듭니다.',
    ],
  },
  solution: {
    sectionTitle: '해결',
    sectionLead:
      'DepOversight는 위험한 PR과 공개 수정에서부터 미릴리스 패치, 권고 이전 노출 구간까지 오픈 소스 의존성의 보안 포스처 변동을 추적합니다.',
    bullets: [
      '의존성 그래프 전반에서 업스트림 활동을 지속적으로 읽습니다.',
      'PR, 커밋, 이슈, 릴리스, 체인지로그에서 보안 관련 패턴을 탐지합니다.',
      '공개된 CVE만이 아니라 의존성 포스처 변동에 플래그를 답니다.',
      '위험한 의존성 업데이트가 main에 도달하기 전에 차단합니다.',
    ],
    fitsAlongsideTitle: '기존 스캐너와 함께 작동',
    fitsAlongsideBody:
      'DepOversight는 Dependabot, Snyk, GitHub Advanced Security, Socket과 함께 실행됩니다 — 이를 대체하지 않습니다. 스캐너는 공개된 권고에 대한 진실의 원천으로 남아 있고, DepOversight는 공개 이전의 공백을 처리합니다.',
    tuneForReviewTitle: '알림 피로가 아닌 검토에 맞춰 조정됨',
    tuneForReviewBody:
      '시그널은 검토 트리거입니다. 각각은 원본 PR / 커밋 / 이슈와 권장 조치가 함께 제공되어 팀이 무엇이 실행 가능한지 결정할 수 있습니다 — 거짓 양성은 거짓 양성으로 남고 호출 알림이 되지 않습니다.',
  },
  whatItTellsYou: {
    sectionTitle: 'DepOversight가 알려주는 것',
    items: [
      {
        title: '지금 이 의존성을 신뢰해도 되는지',
        body: '알려진 CVE가 있는 것뿐만 아니라 그래프 내 모든 의존성에 대한 라이브 포스처 판독을 제공합니다.',
      },
      {
        title: '업스트림에 미릴리스 수정이 있는지',
        body: '보안 관련 패치가 main에 있으나 아직 출하되지 않은 경우, 릴리스 노트보다 먼저 확인할 수 있습니다.',
      },
      {
        title: '릴리스에 사일런트 보안 패치가 포함되었는지',
        body: '권고가 동반되지 않더라도 릴리스를 수정 패턴 기준으로 분석합니다.',
      },
      {
        title: '업그레이드가 새로운 위험 면을 도입하는지',
        body: '인증, 파싱, 프로세스 경계를 건드리는 버전 인상은 검토 대상으로 표시됩니다.',
      },
      {
        title: '공개 시그널이 권고에 선행하는지',
        body: '최초의 공개 보안 관련 시그널과 공식 권고 사이의 격차를 격차가 닫히기 전에 확인할 수 있습니다.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: '작동 방식',
    capabilitiesLabel: '탐지 기능',
    steps: [
      {
        title: '업스트림 모니터링',
        body: '선언된 의존성 그래프 전반에서 PR, 커밋, 이슈, 릴리스, 체인지로그를 지속적으로 읽습니다.',
      },
      {
        title: '보안 관련 시그널 탐지',
        body: '언어 패턴, 코드 면 변경, 디스클로저 패턴 등 업스트림 활동에 맞춰 조정된 탐지 규칙을 적용합니다.',
      },
      {
        title: '검토 가치가 있는 이벤트 표면화',
        body: '시그널을 소스, 근거, 권장 조치와 함께 검토 큐로 승격합니다.',
      },
      {
        title: '위험한 머지 차단',
        body: 'PR 체크가 플래그된 버전을 건드리는 의존성 업데이트를 검토 시까지 정지합니다.',
      },
    ],
  },
  detection: {
    sectionTitle: '탐지 엔진',
    sectionLead:
      'DepOversight는 익스플로잇을 실행하지 않습니다. 업스트림 활동을 읽고, 숙련된 보안 엔지니어가 이미 찾고 있는 패턴을 표면화합니다.',
    items: [
      {
        title: '소스 유형 태깅',
        body: '각 시그널은 소스별로 태그됩니다: PR, 커밋, 이슈, 릴리스, 체인지로그, 권고.',
      },
      {
        title: '언어 패턴 탐지',
        body: '익스플로잇이 존재한다고 주장하지 않으면서 수정·보안·디스클로저 언어를 식별합니다.',
      },
      {
        title: '면 인식',
        body: '인증, 파싱, 역직렬화, 네트워크, 프로세스 경계를 건드리는 PR을 표시합니다.',
      },
      {
        title: '릴리스 상태 추적',
        body: '수정이 머지되었는지, 릴리스되었는지, 개발 브랜치에만 있는지를 추적합니다.',
      },
    ],
    disclaimer:
      '시그널은 검토 트리거이며, 공개된 권고나 CVE와 연결되지 않는 한 확인된 취약점이 아닙니다.',
  },
  comparison: {
    sectionTitle: 'CVE 스캐너와의 차이점',
    sectionLead:
      '전통적 스캐너는 "이 의존성은 취약한가?"에 답합니다. DepOversight는 "지금 이 의존성을 신뢰해야 하는가?"를 묻습니다.',
    columns: {
      capability: '기능',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Socket과 같은 도구는 이 기능의 일부와 겹칩니다 — DepOversight는 특히 공개 이전 구간, 즉 아직 권고를 생성하지 않은 업스트림 활동에 집중합니다.',
    rows: [
      { capability: '공개된 CVE 탐지', scanner: '예', depoversight: '표면화' },
      {
        capability: '권고 이전 업스트림 공개 수정 표면화',
        scanner: '아니오',
        depoversight: '예',
      },
      { capability: '사일런트 패치 릴리스 플래그', scanner: '아니오', depoversight: '예' },
      {
        capability: '보안 민감 코드의 PR 탐지',
        scanner: '아니오',
        depoversight: '예',
      },
      { capability: '노출 구간 강조', scanner: '아니오', depoversight: '예' },
      {
        capability: '머지 전 위험한 업그레이드 차단',
        scanner: '제한적',
        depoversight: '예',
      },
    ],
  },
  integrations: {
    sectionTitle: '연동',
    sectionLead: 'DepOversight는 이미 보유한 것을 읽습니다.',
    dataSourcesLabel: '데이터 소스',
    workflowLabel: '워크플로우',
    items: [
      { name: 'GitHub', description: 'PR 체크, 커밋·릴리스 피드.' },
      { name: 'GitLab', description: 'MR 체크와 파이프라인 연동.' },
      { name: 'npm', description: '패키지 매니페스트와 권고 교차 참조.' },
      { name: 'PyPI', description: '패키지 메타데이터와 릴리스 피드.' },
      { name: 'Maven Central', description: '아티팩트 메타데이터와 체인지로그 스크래핑.' },
      { name: 'Go modules', description: 'go.mod 파싱과 proxy.golang.org 메타데이터.' },
      {
        name: 'crates.io',
        description: 'Rust 크레이트 메타데이터와 yanked 버전 추적.',
      },
      { name: 'RubyGems', description: 'Gem 메타데이터와 릴리스 피드.' },
      { name: 'Slack', description: '시그널이 검토를 필요로 할 때 채널 알림.' },
      {
        name: '정책 엔진',
        description: '어떤 시그널이 차단, 모니터링 또는 알림을 트리거할지에 대한 설정 가능한 규칙.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'DepOversight가 적합한 대상',
    items: [
      {
        title: '보안 엔지니어링',
        body: '이미 CVE 노이즈를 트리아지하고 있을 것입니다. DepOversight는 권고보다 먼저 도착하는 시그널을 표면화하여 반응이 아닌 결정을 가능하게 합니다.',
      },
      {
        title: '플랫폼과 인프라',
        body: '위험한 의존성 업데이트가 main에 도달하기 전에 차단합니다. 정책을 인시던트 대응이 아닌 PR 체크에서 설정합니다.',
      },
      {
        title: '오픈 소스 의존이 큰 스타트업',
        body: '코드의 대부분은 다른 사람의 것입니다. 그것에 의존하는 릴리스를 출하하기 전에, 그들의 포스처 변동을 파악하세요.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: '얼리 액세스 신청',
    sectionLead: 'DepOversight가 어디에 적합할지 알려 주세요. 회신드리겠습니다.',
    callout: '위험한 의존성 업데이트가 main에 도달하기 전에 차단합니다.',
    pricing: '얼리 액세스는 무료입니다. 가격 정책은 GA 전에 발표됩니다.',
    fields: {
      name: { label: '이름', placeholder: '선택' },
      email: {
        label: '업무 이메일',
        placeholder: 'you@company.com',
        error: '유효한 이메일을 입력하세요.',
        required: '필수',
      },
      company: { label: '회사', placeholder: '선택' },
      githubOrg: { label: 'GitHub 조직', placeholder: '선택' },
      ecosystem: { label: '주요 패키지 생태계', placeholder: '예: npm, PyPI, Go modules' },
      currentTool: {
        label: '현재 도구',
        placeholder: '선택하세요',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: '기타',
        },
      },
      message: {
        label: '메시지',
        placeholder: '선택 — 가장 먼저 보고 싶은 것은 무엇인가요?',
      },
    },
    submit: '액세스 신청',
    submitting: '전송 중…',
    submitError: '전송하지 못했습니다. 다시 시도하거나 hello@depoversight.com 으로 문의해 주세요.',
    success: {
      title: '감사합니다 — 신청이 접수되었습니다.',
      body: '얼리 액세스 슬롯이 추가되는 대로 연락드리겠습니다.',
    },
    expectations:
      '며칠 내에 연락드리겠습니다. 얼리 액세스 슬롯은 배치 단위로 열립니다 — 대기 중이어도 회신드립니다.',
    privacyNotice: '제출하면 <link>개인정보 보호정책</link>에 동의한 것으로 간주됩니다.',
  },
  blog: {
    indexTitle: '블로그',
    indexLead:
      '의존성 보안, 공급망 사고, 공개 전에 우리가 감지하는 신호에 대한 현장 노트.',
    readMore: '글 읽기',
    minRead: '{{count}}분 분량',
    publishedOn: '게시일: {{date}}',
    updatedOn: '업데이트일: {{date}}',
    backToIndex: '블로그로 돌아가기',
    tagsLabel: '태그',
    rawMarkdown: '마크다운으로 보기',
    empty: '아직 게시글이 없습니다, 곧 다시 확인해 주세요.',
    categories: {
      industry: '업계',
      fundamentals: '기초',
      tools: '도구',
    },
  },
  footer: {
    tagline: '공개 이전의 의존성 인텔리전스.',
    copyright: '© {{year}} DepOversight. All rights reserved.',
    sections: {
      product: '제품',
      resources: '리소스',
    },
    links: {
      demo: '라이브 데모',
      howItWorks: '작동 방식',
      compare: 'CVE 스캐너 비교',
      earlyAccess: '얼리 액세스',
      llms: 'AI 디스커버리 (llms.txt)',
      sitemap: '사이트맵',
      privacy: '개인정보',
      contact: '문의',
    },
    disclaimer:
      'DepOversight는 공개 업스트림 활동을 기반으로 보안 관련 검토 시그널을 드러냅니다. 시그널은 공개된 권고나 CVE와 연결되지 않는 한 확인된 취약점이 아닙니다.',
  },
} satisfies Dictionary;

export default ko;
