// German (de).
// Security wording: "Prüfsignale" / "zur Prüfung", never "bestätigte Schwachstellen".
import type { Dictionary } from './en';

const de = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Produkt',
      demo: 'Demo',
      howItWorks: 'Funktionsweise',
      compare: 'Vergleich',
      integrations: 'Integrationen',
    },
    cta: 'Frühzugang anfragen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    selectLanguage: 'Sprache wählen',
    skipToContent: 'Zum Inhalt springen',
  },
  hero: {
    eyebrow: 'Dependency-Intelligence',
    title: 'Erkennen Sie riskante Abhängigkeiten, bevor Ihr Scanner Sie warnt.',
    subtitle:
      'DepOversight beobachtet Upstream-PRs, -Commits, -Issues und -Releases und macht sicherheitsrelevante Signale in Ihrem Abhängigkeitsgraphen sichtbar, bevor CVEs, Advisories oder Scanner-Alarme existieren.',
    oneLiner:
      'CVE-Scanner zeigen, was bereits bekannt ist. DepOversight zeigt, was anfängt, riskant zu wirken.',
    primaryCta: 'Frühzugang anfragen',
    secondaryCta: 'Live-Demo ansehen',
    watchingLabel: 'Beobachtet Upstream',
    watchingSources: ['PRs', 'Commits', 'Issues', 'Releases', 'Changelogs', 'Advisories'],
  },
  demo: {
    sectionEyebrow: 'Interaktive Demo',
    sectionTitle: 'Live-Demo',
    sectionLead:
      'Ein Ausschnitt dessen, was DepOversight für eine Beispiel-Abhängigkeit aufdeckt. Alle Daten sind illustrativ.',
    cta: {
      primary: 'Frühzugang anfragen',
      secondary: 'Funktionsweise',
    },
    project: 'Projekt',
    environment: 'Umgebung',
    environmentValue: 'Produktion',
    dependency: 'Abhängigkeit',
    status: 'Status',
    statusReviewRequired: 'Prüfung erforderlich',
    live: 'Live',
    headerLine: '{{project}} · Produktion · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Ausführliches Beispiel · Illustrative Rekonstruktion',
      title: 'axios npm-Supply-Chain-Kompromittierung — 31. März 2026',
      framing:
        'DepOversight war während dieses Vorfalls nicht aktiv. Diese Ansicht rekonstruiert, was das Produkt anhand der öffentlichen Dokumentation aufgedeckt hätte.',
      sourcesLabel: 'Quellen',
    },
    replay: 'Replay',
    replayDate: '31. März 2026',
    metrics: {
      signals: 'Sicherheitssignale',
      exposureWindow: 'Mögliches Expositionsfenster',
      disclosure: 'Öffentliches Offenlegungsmuster',
      sensitivePrs: 'PRs in sensiblen Bereichen',
      advisories: 'Erkannte Advisories',
    },
    filters: {
      label: 'Nach Schweregrad filtern',
      all: 'Alle',
      high: 'Hoch',
      review: 'Prüfung',
      monitoring: 'Beobachtung',
      blocked: 'Blockiert',
      empty: 'Keine Signale entsprechen diesem Filter.',
    },
    severity: {
      high: 'Hoch',
      review: 'Prüfung',
      monitoring: 'Beobachtung',
      blocked: 'Blockiert',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projekte',
        signals: 'Signale',
        integrations: 'Integrationen',
      },
      severityShortcuts: {
        high: 'Hoch',
        review: 'Prüfung',
        monitoring: 'Beobachtung',
        resolved: 'Gelöst',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Richtlinie',
      },
      collapseLabel: 'Demo-Workspace',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Bestätigtes historisches Muster',
      potentialUndisclosedFix: 'Potenziell nicht offengelegter Fix',
      exposureWindow: 'Expositionsfenster',
      prCheck: 'PR-Check',
      maliciousVersion: 'Bösartige Version (zurückgezogen)',
      communityConfirmed: 'Von der Community bestätigte Kompromittierung',
    },
    sourceType: {
      publicGithubIssue: 'Öffentliches GitHub-Issue',
      pullRequestOrCommit: 'Pull Request / Commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Abhängigkeits-Update',
      registryRelease: 'npm-Release',
      manifestChange: 'Paketmanifest-Änderung',
    },
    detail: {
      summary: 'Zusammenfassung',
      whyFlagged: 'Warum markiert',
      recommendedAction: 'Empfohlene Maßnahme',
      viewSource: 'Quelle ansehen',
      viewTimeline: 'Zeitstrahl ansehen',
      viewPrCheck: 'PR-Check ansehen',
      severity: 'Schweregrad',
      status: 'Status',
      dependency: 'Abhängigkeit',
      sourceType: 'Quelltyp',
      empty: 'Wählen Sie ein Signal, um Details zu sehen.',
      back: 'Zurück zu Signalen',
    },
    prCheck: {
      title: 'DepOversight-Check',
      result: 'Prüfung erforderlich',
      summary:
        'Das Abhängigkeits-Update enthält sicherheitsrelevante Upstream-Aktivität.',
      dependencyLabel: 'Abhängigkeit',
      reasonsLabel: 'Gründe',
      reasons: [
        'Offene oder kürzlich gemergte sicherheits­sensible PRs erkannt',
        'Release-Status unklar',
        'Kein Advisory gefunden',
        'Aktuelle Version könnte betroffen sein',
      ],
      footer: 'Vor dem Merge ist eine manuelle Prüfung erforderlich.',
      close: 'Schließen',
    },
    timelineButton: 'Zeitstrahl ansehen',
    prCheckButton: 'PR-Check ansehen',
    timelineModalTitle: 'Zeitstrahl des Expositionsfensters',
    disclaimer:
      'DepOversight macht sicherheitsrelevante Prüfsignale auf Basis öffentlicher Upstream-Aktivität sichtbar. Ein Signal ist keine bestätigte Schwachstelle, sofern es nicht mit einem Advisory oder CVE verknüpft ist.',
    signals: {
      publicIssue: {
        title: 'Bösartige axios-Versionen auf npm veröffentlicht',
        summary:
          'Am 31. März 2026 um 00:21 UTC wurde axios@1.14.1 auf npm veröffentlicht, gefolgt um 01:00 UTC von axios@0.30.4. Beide enthielten einen versteckten Post-Install-Hook, der zur Laufzeit ein Payload nachlud.',
        whyFlagged: [
          'Unerwarteter Versionssprung außerhalb der üblichen Release-Kadenz des Maintainers',
          'Neue transitive Abhängigkeit hinzugefügt: plain-crypto-js@4.2.1, ohne vorherige Historie mit axios',
          'Neuer Post-Install-Hook in der veröffentlichten package.json',
          'Kein passender Commit im axios-Git-Repository für das veröffentlichte Artefakt',
        ],
        recommendedAction:
          'Halten Sie jeden Auto-Merge von axios-Updates an, der 1.14.1 / 0.30.4 betrifft, bis die Release-Herkunft verifiziert ist.',
      },
      publicFix: {
        title: 'Verdächtige transitive Abhängigkeit eingeführt',
        summary:
          'plain-crypto-js@4.2.1 erscheint als Laufzeit-Abhängigkeit in den bösartigen axios-Releases. Eine frühere Version (4.2.0) wurde am Vortag von einem Publisher ohne vorherige Historie veröffentlicht.',
        whyFlagged: [
          'Frisch veröffentlichtes Paket als Laufzeit-Abhängigkeit referenziert',
          'Publisher-Account hat keine vorherige Paket-Historie',
          'Paketname ähnelt einer legitimen Kryptografie-Bibliothek',
          'Post-Install-Skript lädt eine Remote-Binärdatei nach',
        ],
        recommendedAction:
          'Behandeln Sie plain-crypto-js@4.2.1 als nicht vertrauenswürdig; pinnen Sie auf die letzte als sicher bekannte axios-Version.',
      },
      mergedUnreleased: {
        title: 'Community bestätigt: axios 1.14.1 ist bösartig',
        summary:
          'Mehrere unabhängige Forscher (Datadog, SANS, Wiz, Elastic) berichten, dass axios 1.14.1 einen plattformübergreifenden RAT per Post-Install ausliefert. Die axios-Maintainer bestätigen es in Issue #10636.',
        whyFlagged: [
          'Unabhängige Bestätigung aus mehreren Quellen',
          'Im öffentlichen Post-Mortem von Maintainern bestätigt',
          'RAT-Payloads auf macOS, Windows, Linux beobachtet',
          'Aktiv in einem 3-Stunden-Fenster, bevor npm die Versionen zurückzog',
        ],
        recommendedAction:
          'Auditen Sie alle CI- und Dev-Umgebungen, die axios 1.14.1 zwischen 00:21 und 03:15 UTC installiert haben könnten.',
      },
      riskyUpdate: {
        title: 'Renovate-PR zur axios-Aktualisierung blockiert',
        summary:
          'Renovate öffnete eine PR, die axios von 1.13.0 auf 1.14.1 aktualisiert. Der DepOversight-PR-Check blockiert den Merge — die Zielversion steht auf der aktiven Markierungsliste, bevor irgendein CVE zugewiesen war.',
        whyFlagged: [
          'Zielversion (1.14.1) steht auf der Markierungsliste',
          'PR im aktiven Expositionsfenster geöffnet',
          'Bei PR-Erstellung kein CVE zugewiesen — klassische Scanner hätten nichts gesehen',
          'Auto-Merge in diesem Repository aktiviert',
        ],
        recommendedAction:
          'Manuelle Prüfung erforderlich. Pinnen Sie axios auf 1.13.0 oder aktualisieren Sie auf eine verifizierte Version, sobald verfügbar.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Sicherheits-Szenarien, die DepOversight aufdeckt',
    sectionLead:
      'Risiken in Open-Source-Abhängigkeiten kommen selten als einzelner CVE. Das sind die Muster, die wir aufdecken.',
    items: {
      upstream: {
        title: 'Risiko upstream eingebracht',
        description:
          'Eine neue Upstream-Änderung erweitert die sicherheitssensible Oberfläche einer von Ihnen ausgelieferten Abhängigkeit.',
      },
      publicFix: {
        title: 'Bestehendes Risiko öffentlich behoben',
        description:
          'Ein Maintainer behebt ein sicherheitsrelevantes Issue offen, bevor irgendein Advisory veröffentlicht wird.',
      },
      mergedNoRelease: {
        title: 'Fix gemerged, aber kein Release',
        description:
          'Der Fix ist auf main, aber jede veröffentlichte Version enthält weiterhin den ungepatchten Code-Pfad.',
      },
      silentPatch: {
        title: 'Stilles Patch-Release',
        description:
          'Ein neues Release enthält einen sicherheitsrelevanten Fix ohne Advisory oder Hinweis in den Release Notes.',
      },
      publicIssue: {
        title: 'Öffentliche Issue-Offenlegung',
        description:
          'Ein Maintainer oder Reporter veröffentlicht ein sicherheitsrelevantes Issue, bevor das Triage abgeschlossen ist.',
      },
      riskyUpgrade: {
        title: 'Riskantes Abhängigkeits-Upgrade',
        description:
          'Ein vorgeschlagenes Upgrade bringt neue sicherheitssensible Code-Oberfläche in Ihren Abhängigkeitsgraphen.',
      },
      reverted: {
        title: 'Zurückgenommener oder partieller Fix',
        description:
          'Ein vorheriger sicherheitsrelevanter Fix wird zurückgenommen, eingeschränkt oder nur teilweise angewendet.',
      },
      degradation: {
        title: 'Vertrauensverlust einer Abhängigkeit',
        description:
          'Wartungssignale rund um eine Abhängigkeit ändern sich auf eine Weise, die eine Posture-Prüfung rechtfertigt.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Wo sich das Expositionsfenster öffnet',
    sectionLead:
      'Eine typische Zeitachse vom Upstream-Signal bis zum CVE — und wo DepOversight die Lücke schließt.',
    exposureWindowLabel: 'Mögliches Expositionsfenster',
    callout:
      'Die gefährliche Lücke liegt nicht nach der Offenlegung. Sie liegt zwischen dem öffentlichen Upstream-Signal und dem offiziellen Advisory.',
    events: {
      day0Signal: { day: '31. März · 00:21 UTC', label: 'axios@1.14.1 auf npm veröffentlicht' },
      day0Flag: { day: '31. März · ~02:00 UTC', label: 'DepOversight zeigt Release-Anomalie-Signal' },
      day3Merge: { day: '31. März · 03:15 UTC', label: 'npm zieht beide axios-Versionen zurück' },
      day7Release: { day: '1. April', label: 'Microsoft, Datadog veröffentlichen Post-Mortems' },
      day14Cve: { day: '~8. April', label: 'CVE für die kompromittierten Releases zugewiesen' },
      day14Scanner: { day: '8. April+', label: 'Klassische Scanner holen auf' },
    },
  },
  problem: {
    sectionTitle: 'Das Problem',
    sectionLead:
      'CVE-Scanner beantworten eine Frage, die bereits beantwortet war — bis sie sie beantworten.',
    bullets: [
      'Die meisten CVE-Feeds beschreiben Risiko nach der Offenlegung.',
      'Fixes landen oft, bevor Advisories veröffentlicht werden.',
      'Manche Patches werden still ausgeliefert, ganz ohne Advisory.',
      'Scanner-Blindstellen lassen Teams reagieren statt entscheiden.',
    ],
  },
  solution: {
    sectionTitle: 'Die Lösung',
    sectionLead:
      'DepOversight verfolgt Sicherheitsposture-Änderungen Ihrer Open-Source-Abhängigkeiten — von riskanten PRs und öffentlichen Fixes bis zu nicht veröffentlichten Patches und Pre-Advisory-Expositionsfenstern.',
    bullets: [
      'Upstream-Aktivität fortlaufend lesen, über den gesamten Abhängigkeitsgraphen.',
      'Sicherheitsrelevante Muster in PRs, Commits, Issues, Releases und Changelogs erkennen.',
      'Abhängigkeits-Posture-Änderungen markieren — nicht nur veröffentlichte CVEs.',
      'Riskante Abhängigkeits-Updates blockieren, bevor sie auf main gelangen.',
    ],
    fitsAlongsideTitle: 'Passt zu Ihrem bestehenden Scanner',
    fitsAlongsideBody:
      'DepOversight läuft neben Dependabot, Snyk, GitHub Advanced Security oder Socket — es ersetzt sie nicht. Der Scanner bleibt Ihre Quelle der Wahrheit für veröffentlichte Advisories. DepOversight schließt die Lücke vor der Offenlegung.',
    tuneForReviewTitle: 'Auf Prüfung getrimmt, nicht auf Alarmmüdigkeit',
    tuneForReviewBody:
      'Signale sind Prüf-Auslöser. Jedes kommt mit der Quell-PR / Commit / Issue und einer empfohlenen Maßnahme, damit Ihr Team entscheidet, was umsetzbar ist — Fehlalarme bleiben Fehlalarme, keine Bereitschaften.',
  },
  whatItTellsYou: {
    sectionTitle: 'Was DepOversight Ihnen sagt',
    items: [
      {
        title: 'Ob Sie dieser Abhängigkeit gerade vertrauen sollten',
        body: 'Eine Live-Posture-Lesung jeder Abhängigkeit in Ihrem Graphen, nicht nur derer mit bekannten CVEs.',
      },
      {
        title: 'Ob ein Fix upstream existiert, aber nicht released ist',
        body: 'Wenn ein sicherheitsrelevanter Patch auf main liegt, aber noch nicht ausgeliefert ist, sehen Sie ihn vor den Release Notes.',
      },
      {
        title: 'Ob ein Release einen stillen Sicherheits-Patch enthält',
        body: 'Releases werden auf Fix-Muster geprüft, auch ohne begleitendes Advisory.',
      },
      {
        title: 'Ob ein Upgrade neue Risikofläche einbringt',
        body: 'Bumps, die Authentifizierung, Parsing oder Prozessgrenzen berühren, werden zur Prüfung markiert.',
      },
      {
        title: 'Ob ein öffentliches Signal einem Advisory vorausgeht',
        body: 'Sie sehen die Lücke zwischen dem ersten öffentlichen sicherheitsrelevanten Signal und dem offiziellen Advisory — bevor sie sich schließt.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Funktionsweise',
    capabilitiesLabel: 'Detection-Fähigkeiten',
    steps: [
      {
        title: 'Upstream beobachten',
        body: 'Liest fortlaufend PRs, Commits, Issues, Releases und Changelogs in Ihrem deklarierten Abhängigkeitsgraphen.',
      },
      {
        title: 'Sicherheitsrelevante Signale erkennen',
        body: 'Wendet Erkennungsregeln auf sicherheitsrelevante Upstream-Aktivität an: Sprachmuster, Code-Oberflächen-Änderungen und Offenlegungsmuster.',
      },
      {
        title: 'Prüfwürdige Ereignisse aufdecken',
        body: 'Bringt Signale mit Quellen, Belegen und empfohlener Maßnahme in Ihre Prüfwarteschlange.',
      },
      {
        title: 'Riskante Merges blockieren',
        body: 'Ein PR-Check stoppt Abhängigkeits-Updates, die markierte Versionen berühren, bis sie geprüft sind.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Die Detection-Engine',
    sectionLead:
      'DepOversight führt keine Exploits aus. Es liest Upstream-Aktivität und deckt Muster auf, nach denen erfahrene Security-Engineers ohnehin suchen.',
    items: [
      {
        title: 'Quelltyp-Tagging',
        body: 'Jedes Signal wird nach Quelle markiert: PR, Commit, Issue, Release, Changelog, Advisory.',
      },
      {
        title: 'Spracherkennung',
        body: 'Identifiziert Fix-Sprache, Sicherheits-Sprache und Offenlegungs-Sprache, ohne zu behaupten, ein Exploit existiere.',
      },
      {
        title: 'Bewusstsein für Code-Oberfläche',
        body: 'Markiert PRs, die Authentifizierung, Parsing, Deserialisierung, Netzwerk oder Prozessgrenzen berühren.',
      },
      {
        title: 'Release-Status-Tracking',
        body: 'Verfolgt, ob ein Fix gemerged, released oder nur in einem Entwicklungs-Branch vorhanden ist.',
      },
    ],
    disclaimer:
      'Signale sind Prüf-Auslöser, keine bestätigten Schwachstellen, sofern nicht mit einem veröffentlichten Advisory oder CVE verknüpft.',
  },
  comparison: {
    sectionTitle: 'Wodurch sich das von einem CVE-Scanner unterscheidet',
    sectionLead:
      'Klassische Scanner beantworten: „Ist diese Abhängigkeit verwundbar?" DepOversight fragt: „Sollten wir dieser Abhängigkeit gerade vertrauen?"',
    columns: {
      capability: 'Fähigkeit',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Tools wie Socket überlappen mit Teilen davon — DepOversight konzentriert sich speziell auf das Pre-Disclosure-Fenster: Upstream-Aktivität, die noch kein Advisory hervorgebracht hat.',
    rows: [
      { capability: 'Erkennt veröffentlichte CVEs', scanner: 'Ja', depoversight: 'Macht sie sichtbar' },
      {
        capability: 'Macht öffentliche Upstream-Fixes vor dem Advisory sichtbar',
        scanner: 'Nein',
        depoversight: 'Ja',
      },
      { capability: 'Markiert stille Patch-Releases', scanner: 'Nein', depoversight: 'Ja' },
      {
        capability: 'Erkennt PRs in sicherheitssensiblem Code',
        scanner: 'Nein',
        depoversight: 'Ja',
      },
      { capability: 'Hebt Expositionsfenster hervor', scanner: 'Nein', depoversight: 'Ja' },
      {
        capability: 'Blockiert riskante Abhängigkeits-Upgrades vor dem Merge',
        scanner: 'Begrenzt',
        depoversight: 'Ja',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integrationen',
    sectionLead: 'DepOversight liest, was Sie bereits haben.',
    dataSourcesLabel: 'Datenquellen',
    workflowLabel: 'Workflow',
    items: [
      { name: 'GitHub', description: 'PR-Checks, Commit- und Release-Feeds.' },
      { name: 'GitLab', description: 'MR-Checks und Pipeline-Integration.' },
      { name: 'npm', description: 'Paket-Manifeste und Advisory-Querverweise.' },
      { name: 'PyPI', description: 'Paket-Metadaten und Release-Feeds.' },
      { name: 'Maven Central', description: 'Artefakt-Metadaten und Changelog-Scraping.' },
      { name: 'Go modules', description: 'go.mod-Parsing und proxy.golang.org-Metadaten.' },
      {
        name: 'crates.io',
        description: 'Rust-Crate-Metadaten und Tracking zurückgezogener Versionen.',
      },
      { name: 'RubyGems', description: 'Gem-Metadaten und Release-Feeds.' },
      { name: 'Slack', description: 'Channel-Benachrichtigungen, wenn Signale eine Prüfung erfordern.' },
      {
        name: 'Richtlinien-Engine',
        description: 'Konfigurierbare Regeln, welche Signale blockieren, beobachten oder benachrichtigen.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Für wen DepOversight gedacht ist',
    items: [
      {
        title: 'Security Engineering',
        body: 'Sie triagieren bereits CVE-Rauschen. DepOversight macht die Signale sichtbar, die vor den Advisories ankommen — damit Sie entscheiden statt reagieren.',
      },
      {
        title: 'Plattform und Infrastruktur',
        body: 'Blockieren Sie riskante Updates, bevor sie auf main gelangen. Setzen Sie Policy am PR-Check, nicht in der Incident Response.',
      },
      {
        title: 'Open-Source-lastige Startups',
        body: 'Der größte Teil Ihres Codes gehört anderen. Wissen Sie, wann sich deren Posture ändert, bevor Sie ein darauf aufbauendes Release ausliefern.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Frühzugang anfragen',
    sectionLead: 'Sagen Sie uns, wo DepOversight passen würde. Wir melden uns.',
    callout: 'Riskante Abhängigkeits-Updates blockieren, bevor sie auf main gelangen.',
    pricing: 'Frühzugang ist kostenlos. Preisstufen werden vor dem GA angekündigt.',
    fields: {
      name: { label: 'Name', placeholder: 'Optional' },
      email: {
        label: 'Geschäftliche E-Mail',
        placeholder: 'sie@firma.de',
        error: 'Bitte gültige E-Mail angeben.',
        required: 'erforderlich',
      },
      company: { label: 'Firma', placeholder: 'Optional' },
      githubOrg: { label: 'GitHub-Organisation', placeholder: 'Optional' },
      ecosystem: { label: 'Hauptsächliches Paket-Ökosystem', placeholder: 'z. B. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Aktuelles Tool',
        placeholder: 'Auswählen',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Andere',
        },
      },
      message: {
        label: 'Nachricht',
        placeholder: 'Optional — was möchten Sie zuerst sehen?',
      },
    },
    submit: 'Zugang anfragen',
    submitting: 'Senden…',
    submitError: 'Senden fehlgeschlagen. Bitte erneut versuchen oder an hello@depoversight.com schreiben.',
    success: {
      title: 'Danke — Ihre Anfrage ist eingegangen.',
      body: 'Wir melden uns, sobald wir weitere Frühzugangs-Plätze öffnen.',
    },
    expectations:
      'Wir melden uns innerhalb weniger Tage. Frühzugangs-Plätze öffnen in Wellen — Sie erhalten eine Rückmeldung, auch wenn Sie in der Warteschlange sind.',
    privacyNotice: 'Mit dem Absenden akzeptieren Sie unsere <link>Datenschutzrichtlinie</link>.',
  },
  blog: {
    indexTitle: 'Blog',
    indexLead:
      'Notizen aus dem Feld zu Abhängigkeitssicherheit, Supply-Chain-Vorfällen und allem, was wir vor der Veröffentlichung erkennen.',
    readMore: 'Beitrag lesen',
    minRead: '{{count}} Min. Lesezeit',
    publishedOn: 'Veröffentlicht am {{date}}',
    updatedOn: 'Aktualisiert am {{date}}',
    backToIndex: 'Zurück zum Blog',
    tagsLabel: 'Tags',
    rawMarkdown: 'Als Markdown anzeigen',
    empty: 'Noch keine Beiträge, schauen Sie bald wieder vorbei.',
    categories: {
      industry: 'Branche',
      fundamentals: 'Grundlagen',
      tools: 'Tools',
    },
  },
  footer: {
    tagline: 'Dependency-Intelligence vor der Offenlegung.',
    copyright: '© {{year}} DepOversight. Alle Rechte vorbehalten.',
    sections: {
      product: 'Produkt',
      resources: 'Ressourcen',
    },
    links: {
      demo: 'Live-Demo',
      howItWorks: 'Funktionsweise',
      compare: 'vs. CVE-Scanner',
      earlyAccess: 'Frühzugang',
      llms: 'KI-Discovery (llms.txt)',
      sitemap: 'Sitemap',
      privacy: 'Datenschutz',
      contact: 'Kontakt',
    },
    disclaimer:
      'DepOversight macht sicherheitsrelevante Prüfsignale auf Basis öffentlicher Upstream-Aktivität sichtbar. Ein Signal ist keine bestätigte Schwachstelle, sofern es nicht mit einem Advisory oder CVE verknüpft ist.',
  },
} satisfies Dictionary;

export default de;
