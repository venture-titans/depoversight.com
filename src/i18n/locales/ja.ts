// Japanese (ja).
// Security wording: 「レビューシグナル」「要確認」, never 「確認済み脆弱性」.
import type { Dictionary } from './en';

const ja = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'プロダクト',
      demo: 'デモ',
      howItWorks: '仕組み',
      compare: '比較',
      integrations: '連携',
    },
    cta: '早期アクセスを申し込む',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    selectLanguage: '言語を選択',
    skipToContent: 'コンテンツへスキップ',
  },
  hero: {
    eyebrow: '依存関係インテリジェンス',
    title: 'スキャナーが警告する前に、依存関係がリスクを帯び始めたタイミングを把握。',
    subtitle:
      'DepOversight は CVE・アドバイザリ・スキャナーアラートが出る前に、上流の PR・コミット・Issue・リリースを監視して、依存関係グラフ全体のセキュリティ関連シグナルを可視化します。',
    oneLiner:
      'CVE スキャナーは「すでに分かっていること」を伝えます。DepOversight は「これからリスクになりそうなこと」を示します。',
    primaryCta: '早期アクセスを申し込む',
    secondaryCta: 'ライブデモを見る',
    watchingLabel: '上流を監視中',
    watchingSources: ['PR', 'コミット', 'Issue', 'リリース', 'Changelog', 'アドバイザリ'],
  },
  demo: {
    sectionEyebrow: 'インタラクティブデモ',
    sectionTitle: 'ライブデモ',
    sectionLead:
      'サンプル依存関係に対して DepOversight が表面化するもののスナップショット。データはすべて例示です。',
    cta: {
      primary: '早期アクセスを申し込む',
      secondary: '仕組み',
    },
    project: 'プロジェクト',
    environment: '環境',
    environmentValue: '本番',
    dependency: '依存関係',
    status: 'ステータス',
    statusReviewRequired: 'レビュー必要',
    live: 'ライブ',
    headerLine: '{{project}} · 本番 · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: '詳細な例 · 説明用の再現',
      title: 'axios npm サプライチェーン侵害 — 2026年3月31日',
      framing:
        'DepOversight はこのインシデントの最中には稼働していませんでした。このビューは公開記録に基づいて、製品が表面化したであろう内容を再構成したものです。',
      sourcesLabel: '出典',
    },
    replay: 'リプレイ',
    replayDate: '2026年3月31日',
    metrics: {
      signals: 'セキュリティシグナル',
      exposureWindow: '想定される露出ウィンドウ',
      disclosure: '公開ディスクロージャーパターン',
      sensitivePrs: '機密領域に触れる PR',
      advisories: '検出されたアドバイザリ',
    },
    filters: {
      label: '重要度で絞り込み',
      all: 'すべて',
      high: '高',
      review: 'レビュー',
      monitoring: 'モニタリング',
      blocked: 'ブロック',
      empty: 'このフィルタに該当するシグナルはありません。',
    },
    severity: {
      high: '高',
      review: 'レビュー',
      monitoring: 'モニタリング',
      blocked: 'ブロック',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'プロジェクト',
        signals: 'シグナル',
        integrations: '連携',
      },
      severityShortcuts: {
        high: '高',
        review: 'レビュー',
        monitoring: 'モニタリング',
        resolved: '解決済み',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'ポリシー',
      },
      collapseLabel: 'デモワークスペース',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: '確認済みの過去パターン',
      potentialUndisclosedFix: '未公開の可能性がある修正',
      exposureWindow: '露出ウィンドウ',
      prCheck: 'PR チェック',
      maliciousVersion: '悪意のあるバージョン (取り下げ済み)',
      communityConfirmed: 'コミュニティが確認した侵害',
    },
    sourceType: {
      publicGithubIssue: '公開 GitHub Issue',
      pullRequestOrCommit: 'プルリクエスト / コミット',
      commitOrPr: 'コミット / PR',
      dependencyUpdate: '依存関係の更新',
      registryRelease: 'npm リリース',
      manifestChange: 'パッケージマニフェストの変更',
    },
    detail: {
      summary: '概要',
      whyFlagged: 'フラグ理由',
      recommendedAction: '推奨アクション',
      viewSource: 'ソースを見る',
      viewTimeline: 'タイムラインを見る',
      viewPrCheck: 'PR チェックを見る',
      severity: '重要度',
      status: 'ステータス',
      dependency: '依存関係',
      sourceType: 'ソース種別',
      empty: 'シグナルを選択すると詳細が表示されます。',
      back: 'シグナル一覧に戻る',
    },
    prCheck: {
      title: 'DepOversight チェック',
      result: 'レビュー必要',
      summary:
        '依存関係の更新にセキュリティ関連の上流アクティビティが含まれています。',
      dependencyLabel: '依存関係',
      reasonsLabel: '理由',
      reasons: [
        'オープンまたは最近マージされたセキュリティ機微な PR を検出',
        'リリース状況が不明瞭',
        'アドバイザリが見つからない',
        '現行バージョンが影響を受ける可能性',
      ],
      footer: 'マージ前にマニュアルレビューが必要です。',
      close: '閉じる',
    },
    timelineButton: 'タイムラインを見る',
    prCheckButton: 'PR チェックを見る',
    timelineModalTitle: '露出ウィンドウのタイムライン',
    disclaimer:
      'DepOversight は公開された上流アクティビティに基づき、セキュリティ関連のレビューシグナルを表面化します。シグナルは公開されたアドバイザリまたは CVE と紐づかない限り、確認済みの脆弱性ではありません。',
    signals: {
      publicIssue: {
        title: '悪意のある axios バージョンが npm に公開',
        summary:
          '2026年3月31日 00:21 UTC に axios@1.14.1 が npm に公開され、01:00 UTC に axios@0.30.4 が続きました。両方ともランタイムでペイロードを取得する隠された post-install フックを含んでいました。',
        whyFlagged: [
          'メンテナーの通常のリリース頻度から外れた予想外のバージョン引き上げ',
          '新しい推移的依存関係 plain-crypto-js@4.2.1 が追加 (axios との過去の関連なし)',
          '公開された package.json に新しい post-install フック',
          '公開されたアーティファクトに対応するコミットが axios の git リポジトリに存在しない',
        ],
        recommendedAction:
          '1.14.1 / 0.30.4 に触れる axios アップグレードの自動マージは、リリース元が検証されるまで保留してください。',
      },
      publicFix: {
        title: '疑わしい推移的依存関係が導入',
        summary:
          'plain-crypto-js@4.2.1 が悪意のある axios リリースのランタイム依存関係として現れます。以前のバージョン (4.2.0) は前日に過去の実績のない publisher により公開されました。',
        whyFlagged: [
          '新しく公開されたパッケージがランタイム依存関係として参照',
          'publisher アカウントに過去のパッケージ履歴なし',
          'パッケージ名が正規の暗号化ライブラリを模倣',
          'post-install スクリプトがリモートバイナリをダウンロード',
        ],
        recommendedAction:
          'plain-crypto-js@4.2.1 を信頼できないものとして扱い、最後に既知の安全な axios バージョンにピン留めしてください。',
      },
      mergedUnreleased: {
        title: 'コミュニティが axios 1.14.1 の悪意を確認',
        summary:
          '複数の独立した研究者 (Datadog、SANS、Wiz、Elastic) が、axios 1.14.1 が post-install 経由でクロスプラットフォームの RAT を展開すると報告しています。axios のメンテナーは Issue #10636 で認めています。',
        whyFlagged: [
          '複数ソースからの独立した確認',
          'メンテナーが公開ポストモーテムで認知',
          'macOS、Windows、Linux で RAT ペイロードを観測',
          'npm がバージョンを取り下げる前の3時間のウィンドウで活動',
        ],
        recommendedAction:
          '00:21 から 03:15 UTC の間に axios 1.14.1 をインストールした可能性のあるすべての CI / 開発環境を監査してください。',
      },
      riskyUpdate: {
        title: 'axios をアップグレードする Renovate PR をブロック',
        summary:
          'Renovate が axios を 1.13.0 から 1.14.1 にアップグレードする PR を開きました。DepOversight の PR チェックがマージをブロックします — ターゲットバージョンは、CVE が割り当てられる前にアクティブなフラグリストに掲載されています。',
        whyFlagged: [
          'ターゲットバージョン (1.14.1) がフラグリストに掲載',
          'アクティブな露出ウィンドウ中に開かれた PR',
          'PR オープン時に CVE 未割り当て — 従来のスキャナーでは捕捉できなかったはず',
          'このリポジトリで自動マージが有効',
        ],
        recommendedAction:
          'マニュアルレビューが必要です。axios を 1.13.0 にピン留めするか、検証済みリリースが利用可能になり次第アップグレードしてください。',
      },
    },
  },
  scenarios: {
    sectionTitle: 'DepOversight が表面化するセキュリティシナリオ',
    sectionLead:
      'オープンソース依存関係のリスクは、単一の CVE として現れることはまれです。これが私たちが表面化するパターンです。',
    items: {
      upstream: {
        title: '上流で持ち込まれたリスク',
        description:
          '上流の新しい変更が、出荷中の依存関係のセキュリティ機微面を広げます。',
      },
      publicFix: {
        title: '既存リスクの公開修正',
        description:
          'メンテナーが、いかなるアドバイザリ公開よりも前にセキュリティ関連 Issue を公開で修正します。',
      },
      mergedNoRelease: {
        title: 'マージ済みだがリリースなし',
        description:
          '修正は main にありますが、すべての公開バージョンには未パッチのコードパスが残っています。',
      },
      silentPatch: {
        title: 'サイレントパッチリリース',
        description:
          '新リリースに、アドバイザリやリリースノートでの言及なしにセキュリティ関連修正が含まれています。',
      },
      publicIssue: {
        title: '公開された Issue',
        description:
          'メンテナーまたはレポーターが、トリアージ完了前にセキュリティ関連 Issue を公開します。',
      },
      riskyUpgrade: {
        title: 'リスクのある依存関係アップグレード',
        description:
          '提案されたアップグレードが、依存関係グラフに新たなセキュリティ機微なコード面を持ち込みます。',
      },
      reverted: {
        title: 'リバートまたは部分修正',
        description:
          '以前のセキュリティ関連修正がリバート、縮小、あるいは部分的にしか適用されていません。',
      },
      degradation: {
        title: '依存関係の信頼度低下',
        description:
          '依存関係周辺のメンテナンスシグナルが、ポスチャー再評価に値するかたちで変化します。',
      },
    },
  },
  timeline: {
    sectionTitle: '露出ウィンドウが開くタイミング',
    sectionLead:
      '上流シグナルから CVE までの典型的なタイムライン — そして DepOversight がギャップを埋める場所。',
    exposureWindowLabel: '想定される露出ウィンドウ',
    callout:
      '危険なギャップは公開後ではありません。公開上流シグナルと公式アドバイザリの間にあります。',
    events: {
      day0Signal: { day: '3月31日 · 00:21 UTC', label: 'axios@1.14.1 を npm に公開' },
      day0Flag: { day: '3月31日 · ~02:00 UTC', label: 'DepOversight がリリース異常シグナルを表面化' },
      day3Merge: { day: '3月31日 · 03:15 UTC', label: 'npm が axios の両バージョンを取り下げ' },
      day7Release: { day: '4月1日', label: 'Microsoft、Datadog がポストモーテムを公開' },
      day14Cve: { day: '~4月8日', label: '侵害されたリリースに CVE が割り当てられる' },
      day14Scanner: { day: '4月8日以降', label: '従来のスキャナーが追いつく' },
    },
  },
  problem: {
    sectionTitle: '課題',
    sectionLead:
      'CVE スキャナーは、答える時点ですでに答えのある問いに答えています。',
    bullets: [
      'ほとんどの CVE フィードは、公開後にリスクを記述します。',
      '修正はしばしばアドバイザリ公開より先に着地します。',
      '一部のパッチはアドバイザリなしに静かにリリースされます。',
      'スキャナーの盲点は、チームを意思決定ではなく後追いに追い込みます。',
    ],
  },
  solution: {
    sectionTitle: '解決',
    sectionLead:
      'DepOversight は、リスクのある PR や公開修正、未リリースのパッチ、アドバイザリ前の露出ウィンドウまで、オープンソース依存関係のセキュリティポスチャー変動を追跡します。',
    bullets: [
      '依存関係グラフ全体で、上流の活動を継続的に読み取ります。',
      'PR、コミット、Issue、リリース、Changelog の中からセキュリティ関連パターンを検出します。',
      '公開された CVE だけでなく、依存関係のポスチャー変動をフラグ付けします。',
      'main に到達する前にリスクのある依存関係更新をブロックします。',
    ],
    fitsAlongsideTitle: '既存のスキャナーと並行して動作',
    fitsAlongsideBody:
      'DepOversight は Dependabot、Snyk、GitHub Advanced Security、Socket と並行して動作します — 置き換えるものではありません。スキャナーは公開済みアドバイザリの真実の情報源として残り、DepOversight は公開前の隙間を担います。',
    tuneForReviewTitle: 'アラート疲れではなくレビューに最適化',
    tuneForReviewBody:
      'シグナルはレビューのトリガーです。それぞれは元の PR / コミット / Issue と推奨アクションが付属しており、何が対応可能かをチームが判断します — 誤検知は誤検知のままで、呼び出しにはなりません。',
  },
  whatItTellsYou: {
    sectionTitle: 'DepOversight が伝えること',
    items: [
      {
        title: 'いまこの依存関係を信頼してよいか',
        body: '既知の CVE があるものに限らず、グラフ内の各依存関係のライブなポスチャー読み取りを提供します。',
      },
      {
        title: '上流に未リリースの修正があるか',
        body: 'セキュリティ関連パッチが main にあるものの未出荷であれば、リリースノートよりも先に把握できます。',
      },
      {
        title: 'リリースにサイレントなセキュリティパッチが含まれるか',
        body: 'アドバイザリが伴わない場合でも、リリースは修正パターンの観点で解析されます。',
      },
      {
        title: 'アップグレードが新たなリスク面を持ち込むか',
        body: '認証、パース、プロセス境界に触れるバージョン引き上げはレビュー対象としてフラグされます。',
      },
      {
        title: '公開シグナルがアドバイザリに先行するか',
        body: '最初の公開セキュリティ関連シグナルと公式アドバイザリの差分を、閉じる前に把握できます。',
      },
    ],
  },
  howItWorks: {
    sectionTitle: '仕組み',
    capabilitiesLabel: '検出機能',
    steps: [
      {
        title: '上流を監視',
        body: '宣言された依存関係グラフ全体で、PR・コミット・Issue・リリース・Changelog を継続的に読み取ります。',
      },
      {
        title: 'セキュリティ関連シグナルを検出',
        body: '言語パターン、コード面の変更、ディスクロージャーパターンを対象に、上流活動向けに調整された検出ルールを適用します。',
      },
      {
        title: 'レビュー対象を表面化',
        body: 'シグナルをソース、エビデンス、推奨アクションと共にレビューキューへ昇格させます。',
      },
      {
        title: 'リスクのあるマージをブロック',
        body: 'PR チェックが、フラグされたバージョンに触れる依存関係更新をレビューまで停止します。',
      },
    ],
  },
  detection: {
    sectionTitle: '検出エンジン',
    sectionLead:
      'DepOversight はエクスプロイトを実行しません。上流活動を読み取り、経験豊富なセキュリティエンジニアが既に探しているパターンを表面化します。',
    items: [
      {
        title: 'ソース種別タグ付け',
        body: '各シグナルはソース別にタグ付けされます: PR、コミット、Issue、リリース、Changelog、アドバイザリ。',
      },
      {
        title: '言語パターン検出',
        body: 'エクスプロイトが存在すると主張せずに、修正・セキュリティ・ディスクロージャーの言語を識別します。',
      },
      {
        title: '面の意識',
        body: '認証、パース、デシリアライズ、ネットワーク、プロセス境界に触れる PR をフラグします。',
      },
      {
        title: 'リリース状態の追跡',
        body: '修正がマージ済みか、リリース済みか、開発ブランチのみに存在するかを追跡します。',
      },
    ],
    disclaimer:
      'シグナルはレビューのトリガーであり、公開されたアドバイザリまたは CVE と紐づかない限り確認済みの脆弱性ではありません。',
  },
  comparison: {
    sectionTitle: 'CVE スキャナーとの違い',
    sectionLead:
      '従来のスキャナーは「この依存関係に脆弱性はあるか?」と問います。DepOversight は「いまこの依存関係を信頼してよいか?」と問います。',
    columns: {
      capability: '機能',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Socket のようなツールはこの一部と重なります — DepOversight は公開前のウィンドウ、つまりまだアドバイザリを生んでいない上流アクティビティに特化しています。',
    rows: [
      { capability: '公開された CVE を検出', scanner: 'はい', depoversight: '表面化' },
      {
        capability: 'アドバイザリ前の上流公開修正を表面化',
        scanner: 'いいえ',
        depoversight: 'はい',
      },
      { capability: 'サイレントパッチリリースをフラグ', scanner: 'いいえ', depoversight: 'はい' },
      {
        capability: 'セキュリティ機微なコード上の PR を検出',
        scanner: 'いいえ',
        depoversight: 'はい',
      },
      { capability: '露出ウィンドウを強調', scanner: 'いいえ', depoversight: 'はい' },
      {
        capability: 'マージ前のリスクのあるアップグレードをブロック',
        scanner: '限定的',
        depoversight: 'はい',
      },
    ],
  },
  integrations: {
    sectionTitle: '連携',
    sectionLead: 'DepOversight はすでにあるものを読み取ります。',
    dataSourcesLabel: 'データソース',
    workflowLabel: 'ワークフロー',
    items: [
      { name: 'GitHub', description: 'PR チェック、コミットおよびリリースのフィード。' },
      { name: 'GitLab', description: 'MR チェックとパイプライン連携。' },
      { name: 'npm', description: 'パッケージマニフェストとアドバイザリの相互参照。' },
      { name: 'PyPI', description: 'パッケージメタデータとリリースフィード。' },
      { name: 'Maven Central', description: 'アーティファクトメタデータと Changelog スクレイピング。' },
      { name: 'Go modules', description: 'go.mod のパースと proxy.golang.org のメタデータ。' },
      {
        name: 'crates.io',
        description: 'Rust クレートのメタデータと yanked バージョン追跡。',
      },
      { name: 'RubyGems', description: 'Gem メタデータとリリースフィード。' },
      { name: 'Slack', description: 'シグナルがレビューを必要とするときのチャンネル通知。' },
      {
        name: 'ポリシーエンジン',
        description: 'どのシグナルがブロック、モニタリング、または通知するかを定める設定可能なルール。',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'DepOversight が役立つ対象',
    items: [
      {
        title: 'セキュリティエンジニアリング',
        body: 'すでに CVE ノイズをトリアージしているはずです。DepOversight はアドバイザリより先に届くシグナルを表面化します — 後追いではなく意思決定を可能にします。',
      },
      {
        title: 'プラットフォームとインフラ',
        body: 'main に到達する前にリスクのある依存関係更新をブロックします。インシデント対応ではなく PR チェックで方針を定めます。',
      },
      {
        title: 'オープンソース依存度の高いスタートアップ',
        body: 'コードの大半は他者のものです。それに依存するリリースを出荷する前に、相手のポスチャー変動を把握しましょう。',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: '早期アクセスを申し込む',
    sectionLead: 'DepOversight がフィットしそうな場面を教えてください。折り返しご連絡します。',
    callout: 'main に到達する前にリスクのある依存関係更新をブロックします。',
    pricing: '早期アクセスは無料です。料金プランは GA 前に発表します。',
    fields: {
      name: { label: '名前', placeholder: '任意' },
      email: {
        label: '勤務先メール',
        placeholder: 'you@company.com',
        error: '有効なメールアドレスを入力してください。',
        required: '必須',
      },
      company: { label: '会社', placeholder: '任意' },
      githubOrg: { label: 'GitHub Org', placeholder: '任意' },
      ecosystem: { label: '主なパッケージエコシステム', placeholder: '例: npm、PyPI、Go modules' },
      currentTool: {
        label: '現在のツール',
        placeholder: '選択',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'その他',
        },
      },
      message: {
        label: 'メッセージ',
        placeholder: '任意 — 最初に何を見たいですか?',
      },
    },
    submit: 'アクセスを申し込む',
    submitting: '送信中…',
    submitError: '送信できませんでした。再試行するか、hello@depoversight.com までご連絡ください。',
    success: {
      title: 'ありがとうございます — リクエストを受け付けました。',
      body: '早期アクセス枠が拡大次第ご連絡いたします。',
    },
    expectations:
      '数日以内にご連絡します。早期アクセス枠はバッチで開放されます — 順番待ちの場合でもお返事します。',
    privacyNotice: '送信すると<link>プライバシーポリシー</link>に同意したものとみなされます。',
  },
  blog: {
    indexTitle: 'ブログ',
    indexLead:
      '依存関係のセキュリティ、サプライチェーン事案、公開前に検出する兆候についての現場からのノート。',
    readMore: '記事を読む',
    minRead: '{{count}} 分で読めます',
    publishedOn: '公開日: {{date}}',
    updatedOn: '更新日: {{date}}',
    backToIndex: 'ブログ一覧へ戻る',
    tagsLabel: 'タグ',
    rawMarkdown: 'Markdown 形式で表示',
    empty: 'まだ記事はありません, またお越しください。',
    categories: {
      industry: '業界',
      fundamentals: '基礎',
      tools: 'ツール',
    },
  },
  footer: {
    tagline: '公開前に届く依存関係インテリジェンス。',
    copyright: '© {{year}} DepOversight. All rights reserved.',
    sections: {
      product: 'プロダクト',
      resources: 'リソース',
    },
    links: {
      demo: 'ライブデモ',
      howItWorks: '仕組み',
      compare: 'CVE スキャナーとの比較',
      earlyAccess: '早期アクセス',
      llms: 'AI ディスカバリ (llms.txt)',
      sitemap: 'サイトマップ',
      privacy: 'プライバシー',
      contact: 'お問い合わせ',
    },
    disclaimer:
      'DepOversight は公開された上流アクティビティに基づき、セキュリティ関連のレビューシグナルを表面化します。シグナルは公開されたアドバイザリまたは CVE と紐づかない限り、確認済みの脆弱性ではありません。',
  },
} satisfies Dictionary;

export default ja;
