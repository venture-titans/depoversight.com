// Dutch (nl).
// Security wording: "beoordelingssignalen" / "beoordeling nodig", never "bevestigde kwetsbaarheden".
import type { Dictionary } from './en';

const nl = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Product',
      demo: 'Demo',
      howItWorks: 'Hoe het werkt',
      compare: 'Vergelijk',
      integrations: 'Integraties',
    },
    cta: 'Vroege toegang aanvragen',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    selectLanguage: 'Taal kiezen',
    skipToContent: 'Naar inhoud',
  },
  hero: {
    eyebrow: 'Dependency-intelligence',
    title: 'Weet wanneer uw dependencies risicovol worden voordat uw scanner het meldt.',
    subtitle:
      'DepOversight monitort upstream PRs, commits, issues en releases om security-relevante signalen in uw dependency-graph zichtbaar te maken voordat CVEs, advisories of scanner-meldingen bestaan.',
    oneLiner:
      'CVE-scanners vertellen wat al bekend is. DepOversight laat zien wat risicovol begint te lijken.',
    primaryCta: 'Vroege toegang aanvragen',
    secondaryCta: 'Bekijk de live demo',
    watchingLabel: 'Bewaakt upstream',
    watchingSources: ['PRs', 'commits', 'issues', 'releases', 'changelogs', 'advisories'],
  },
  demo: {
    sectionTitle: 'Live demo',
    sectionLead:
      'Een momentopname van wat DepOversight zichtbaar maakt voor een voorbeeld-dependency. Alle data is illustratief.',
    project: 'Project',
    environment: 'Omgeving',
    environmentValue: 'productie',
    dependency: 'Dependency',
    status: 'Status',
    statusReviewRequired: 'Beoordeling nodig',
    live: 'Live',
    headerLine: '{{project}} · productie · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Uitgewerkt voorbeeld · Illustratieve reconstructie',
      title: 'axios npm supply-chain-compromittering — 31 maart 2026',
      framing:
        'DepOversight draaide niet tijdens dit incident. Deze weergave reconstrueert wat het product zou hebben opgemerkt op basis van het publieke dossier.',
      sourcesLabel: 'Bronnen',
    },
    replay: 'Replay',
    replayDate: '31 mrt 2026',
    metrics: {
      signals: 'Securitysignalen',
      exposureWindow: 'Mogelijk blootstellingsvenster',
      disclosure: 'Publiek disclosure-patroon',
      sensitivePrs: 'PRs in gevoelige gebieden',
      advisories: 'Gedetecteerde advisories',
    },
    filters: {
      label: 'Filter op ernst',
      all: 'Alle',
      high: 'Hoog',
      review: 'Beoordeling',
      monitoring: 'Monitoring',
      blocked: 'Geblokkeerd',
      empty: 'Geen signalen voldoen aan dit filter.',
    },
    severity: {
      high: 'Hoog',
      review: 'Beoordeling',
      monitoring: 'Monitoring',
      blocked: 'Geblokkeerd',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projecten',
        signals: 'Signalen',
        integrations: 'Integraties',
      },
      severityShortcuts: {
        high: 'Hoog',
        review: 'Beoordeling',
        monitoring: 'Monitoring',
        resolved: 'Opgelost',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Beleid',
      },
      collapseLabel: 'Demo-werkruimte',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Bevestigd historisch patroon',
      potentialUndisclosedFix: 'Mogelijk niet-bekendgemaakte fix',
      exposureWindow: 'Blootstellingsvenster',
      prCheck: 'PR-check',
      maliciousVersion: 'Kwaadaardige versie (ingetrokken)',
      communityConfirmed: 'Door de community bevestigde compromittering',
    },
    sourceType: {
      publicGithubIssue: 'Publiek GitHub-issue',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Dependency-update',
      registryRelease: 'npm-release',
      manifestChange: 'Pakketmanifest-wijziging',
    },
    detail: {
      summary: 'Samenvatting',
      whyFlagged: 'Waarom gemarkeerd',
      recommendedAction: 'Aanbevolen actie',
      viewSource: 'Bron bekijken',
      viewTimeline: 'Tijdlijn bekijken',
      viewPrCheck: 'PR-check bekijken',
      severity: 'Ernst',
      status: 'Status',
      dependency: 'Dependency',
      sourceType: 'Brontype',
      empty: 'Selecteer een signaal om details te zien.',
      back: 'Terug naar signalen',
    },
    prCheck: {
      title: 'DepOversight-check',
      result: 'Beoordeling nodig',
      summary:
        'De dependency-update bevat security-relevante upstream-activiteit.',
      dependencyLabel: 'Dependency',
      reasonsLabel: 'Redenen',
      reasons: [
        'Open of recent gemergde security-gevoelige PRs gedetecteerd',
        'Releasestatus onduidelijk',
        'Geen advisory gevonden',
        'Huidige versie kan beïnvloed zijn',
      ],
      footer: 'Handmatige beoordeling vereist vóór de merge.',
      close: 'Sluiten',
    },
    timelineButton: 'Tijdlijn bekijken',
    prCheckButton: 'PR-check bekijken',
    timelineModalTitle: 'Tijdlijn van het blootstellingsvenster',
    disclaimer:
      'DepOversight brengt security-relevante beoordelingssignalen aan het licht op basis van publieke upstream-activiteit. Een signaal is geen bevestigde kwetsbaarheid tenzij gekoppeld aan een advisory of CVE.',
    signals: {
      publicIssue: {
        title: 'Kwaadaardige axios-versies gepubliceerd op npm',
        summary:
          'Op 31 maart 2026 om 00:21 UTC werd axios@1.14.1 op npm gepubliceerd, om 01:00 UTC gevolgd door axios@0.30.4. Beide bevatten een verborgen post-install hook die tijdens runtime een payload ophaalt.',
        whyFlagged: [
          'Onverwachte versiesprong buiten de gebruikelijke release-cadans van de maintainer',
          'Nieuwe transitieve afhankelijkheid toegevoegd: plain-crypto-js@4.2.1, zonder eerdere axios-historie',
          'Nieuwe post-install hook in de gepubliceerde package.json',
          'Geen overeenkomende commit op de axios-git-repository voor het gepubliceerde artefact',
        ],
        recommendedAction:
          'Houd elke auto-merge van axios-upgrades die 1.14.1 / 0.30.4 raakt tegen totdat de release-oorsprong is geverifieerd.',
      },
      publicFix: {
        title: 'Verdachte transitieve afhankelijkheid geïntroduceerd',
        summary:
          'plain-crypto-js@4.2.1 verschijnt als runtime-afhankelijkheid in de kwaadaardige axios-releases. Het pakket is twee dagen eerder gepubliceerd door een publisher zonder eerdere historie.',
        whyFlagged: [
          'Recent gepubliceerd pakket gerefereerd als runtime-afhankelijkheid',
          'Publisher-account heeft geen eerdere pakkethistorie',
          'Pakketnaam imiteert een legitieme cryptografie-bibliotheek',
          'Post-install script downloadt een externe binary',
        ],
        recommendedAction:
          'Behandel plain-crypto-js@4.2.1 als onbetrouwbaar; pin op de laatste als veilig bekende axios-versie.',
      },
      mergedUnreleased: {
        title: 'Community bevestigt dat axios 1.14.1 kwaadaardig is',
        summary:
          'Meerdere onafhankelijke onderzoekers (Datadog, SANS, Wiz, Elastic) melden dat axios 1.14.1 een cross-platform RAT uitrolt via post-install. axios-maintainers erkennen het in issue #10636.',
        whyFlagged: [
          'Onafhankelijke bevestiging uit meerdere bronnen',
          'Door maintainers erkend in publieke post-mortem',
          'RAT-payloads waargenomen op macOS, Windows, Linux',
          'Actief gedurende een venster van 3 uur voordat npm de versies introk',
        ],
        recommendedAction:
          'Audit elke CI- / dev-omgeving die axios 1.14.1 mogelijk heeft geïnstalleerd tussen 00:21 en 03:25 UTC.',
      },
      riskyUpdate: {
        title: 'Renovate-PR die axios upgradet geblokkeerd',
        summary:
          'Renovate opende een PR die axios upgradet van 1.13.0 naar 1.14.1. De DepOversight-PR-check blokkeert de merge — de doelversie staat op de actieve gemarkeerde lijst, voordat enige CVE was toegewezen.',
        whyFlagged: [
          'Doelversie (1.14.1) staat op de gemarkeerde lijst',
          'PR geopend tijdens actief blootstellingsvenster',
          'Geen CVE toegewezen op het moment van openen — traditionele scanners zouden niets hebben gezien',
          'Auto-merge ingeschakeld in deze repository',
        ],
        recommendedAction:
          'Handmatige beoordeling vereist. Pin axios op 1.13.0 of upgrade naar een geverifieerde release zodra beschikbaar.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Securityscenario’s die DepOversight zichtbaar maakt',
    sectionLead:
      'Risico in open-source dependencies komt zelden als één enkele CVE. Dit zijn de patronen die wij naar boven halen.',
    items: {
      upstream: {
        title: 'Risico geïntroduceerd upstream',
        description:
          'Een nieuwe upstream-wijziging vergroot het security-gevoelige oppervlak van een dependency die u uitlevert.',
      },
      publicFix: {
        title: 'Bestaand risico publiekelijk gefixt',
        description:
          'Een maintainer fixt een security-relevant issue in de openheid voordat er een advisory wordt gepubliceerd.',
      },
      mergedNoRelease: {
        title: 'Fix gemerged, maar geen release',
        description:
          'De fix staat in main, maar elke uitgebrachte versie bevat nog het ongepatchte codepad.',
      },
      silentPatch: {
        title: 'Stille patch-release',
        description:
          'Een nieuwe release bevat een security-relevante fix zonder advisory of vermelding in de release notes.',
      },
      publicIssue: {
        title: 'Publieke issue-disclosure',
        description:
          'Een maintainer of melder publiceert een security-relevant issue voordat de triage is afgerond.',
      },
      riskyUpgrade: {
        title: 'Risicovolle dependency-upgrade',
        description:
          'Een voorgestelde upgrade introduceert nieuw security-gevoelig code-oppervlak in uw dependency-graph.',
      },
      reverted: {
        title: 'Teruggedraaide of partiële fix',
        description:
          'Een eerdere security-relevante fix wordt teruggedraaid, ingeperkt of slechts gedeeltelijk toegepast.',
      },
      degradation: {
        title: 'Vertrouwensverval van een dependency',
        description:
          'Onderhoudssignalen rond een dependency veranderen op een manier die een posture-beoordeling rechtvaardigt.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Waar het blootstellingsvenster opent',
    sectionLead:
      'Een typische tijdlijn van upstream-signaal tot CVE — en waar DepOversight het gat dicht.',
    exposureWindowLabel: 'Mogelijk blootstellingsvenster',
    callout:
      'Het gevaarlijke gat zit niet ná de disclosure. Het zit tussen het publieke upstream-signaal en de officiële advisory.',
    events: {
      day0Signal: { day: '31 mrt · 00:21 UTC', label: 'axios@1.14.1 gepubliceerd op npm' },
      day0Flag: { day: '31 mrt · ~02:00 UTC', label: 'DepOversight haalt release-anomalie-signaal naar boven' },
      day3Merge: { day: '31 mrt · 03:25 UTC', label: 'npm trekt beide axios-versies in' },
      day7Release: { day: '1 apr', label: 'Microsoft, Datadog publiceren post-mortems' },
      day14Cve: { day: '~8 apr', label: 'CVE toegewezen voor de gecompromitteerde releases' },
      day14Scanner: { day: '8 apr+', label: 'Traditionele scanners halen in' },
    },
  },
  problem: {
    sectionTitle: 'Het probleem',
    sectionLead:
      'CVE-scanners beantwoorden een vraag die al beantwoord was — tegen de tijd dat zij hem beantwoorden.',
    bullets: [
      'De meeste CVE-feeds beschrijven risico ná disclosure.',
      'Fixes landen vaak voor advisories worden gepubliceerd.',
      'Sommige patches gaan stil de deur uit, helemaal zonder advisory.',
      'Blinde vlekken van scanners laten teams reageren in plaats van beslissen.',
    ],
  },
  solution: {
    sectionTitle: 'De oplossing',
    sectionLead:
      'DepOversight volgt security-posture-veranderingen in uw open-source dependencies — van risicovolle PRs en publieke fixes tot niet-uitgebrachte patches en pre-advisory blootstellingsvensters.',
    bullets: [
      'Lees upstream-activiteit continu, over de hele dependency-graph.',
      'Detecteer security-relevante patronen in PRs, commits, issues, releases en changelogs.',
      'Markeer posture-veranderingen — niet alleen gepubliceerde CVEs.',
      'Blokkeer risicovolle dependency-updates voordat ze main bereiken.',
    ],
    fitsAlongsideTitle: 'Past naast uw bestaande scanner',
    fitsAlongsideBody:
      'DepOversight draait naast Dependabot, Snyk, GitHub Advanced Security of Socket — het vervangt ze niet. De scanner blijft uw source-of-truth voor gepubliceerde advisories. DepOversight dekt het gat vóór disclosure.',
    tuneForReviewTitle: 'Afgestemd op beoordeling, niet op alert-vermoeidheid',
    tuneForReviewBody:
      'Signalen zijn beoordelingstriggers. Elk komt met de bron-PR / commit / issue en aanbevolen actie zodat uw team beslist wat actieve aandacht vereist — false-positives blijven false-positives, geen pages.',
  },
  whatItTellsYou: {
    sectionTitle: 'Wat DepOversight u vertelt',
    items: [
      {
        title: 'Of u deze dependency nu kunt vertrouwen',
        body: 'Een live posture-aflezing voor elke dependency in uw graph, niet alleen voor die met bekende CVEs.',
      },
      {
        title: 'Of er een fix upstream is, maar nog niet uitgebracht',
        body: 'Wanneer een security-relevante patch in main staat maar nog niet is uitgebracht, ziet u dat vóór de release notes.',
      },
      {
        title: 'Of een release een stille security-patch bevat',
        body: 'Releases worden ook zonder begeleidende advisory gescand op fix-patronen.',
      },
      {
        title: 'Of een upgrade nieuw risico-oppervlak introduceert',
        body: 'Bumps die authenticatie, parsing of procesgrenzen raken, worden voor beoordeling gemarkeerd.',
      },
      {
        title: 'Of een publiek signaal vooruitloopt op een advisory',
        body: 'U ziet het gat tussen het eerste publieke security-relevante signaal en de officiële advisory — voor het sluit.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Hoe het werkt',
    capabilitiesLabel: 'Detectiemogelijkheden',
    steps: [
      {
        title: 'Upstream observeren',
        body: 'Leest continu PRs, commits, issues, releases en changelogs in uw gedeclareerde dependency-graph.',
      },
      {
        title: 'Security-relevante signalen detecteren',
        body: 'Past detectieregels toe die zijn afgestemd op upstream-activiteit: taalpatronen, code-oppervlakwijzigingen en disclosure-patronen.',
      },
      {
        title: 'Beoordelingswaardige events naar boven halen',
        body: 'Promoot signalen naar uw beoordeelwachtrij met bronnen, bewijs en aanbevolen actie.',
      },
      {
        title: 'Risicovolle merges blokkeren',
        body: 'Een PR-check stopt dependency-updates die gemarkeerde versies raken, totdat ze beoordeeld zijn.',
      },
    ],
  },
  detection: {
    sectionTitle: 'De detection-engine',
    sectionLead:
      'DepOversight draait geen exploits. Het leest upstream-activiteit en haalt patronen naar boven die ervaren security-engineers al zoeken.',
    items: [
      {
        title: 'Brontype-tagging',
        body: 'Elk signaal wordt getagd op bron: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Detectie van taalpatronen',
        body: 'Identificeert fix-, security- en disclosure-taal zonder te claimen dat er een exploit bestaat.',
      },
      {
        title: 'Oppervlakbewustzijn',
        body: 'Markeert PRs die authenticatie, parsing, deserialisatie, netwerk of procesgrenzen raken.',
      },
      {
        title: 'Tracking van releasestatus',
        body: 'Volgt of een fix gemerged is, uitgebracht is of alleen op een ontwikkelbranch staat.',
      },
    ],
    disclaimer:
      'Signalen zijn beoordelingstriggers, geen bevestigde kwetsbaarheden, tenzij gekoppeld aan een gepubliceerde advisory of CVE.',
  },
  comparison: {
    sectionTitle: 'Hoe dit verschilt van een CVE-scanner',
    sectionLead:
      'Traditionele scanners beantwoorden: "Is deze dependency kwetsbaar?" DepOversight vraagt: "Moeten we deze dependency nu vertrouwen?"',
    columns: {
      capability: 'Capaciteit',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Tools zoals Socket overlappen met delen hiervan — DepOversight focust specifiek op het pre-disclosure-venster: upstream-activiteit die nog geen advisory heeft opgeleverd.',
    rows: [
      { capability: 'Detecteert gepubliceerde CVEs', scanner: 'Ja', depoversight: 'Brengt naar voren' },
      {
        capability: 'Brengt publieke upstream-fixes vóór advisory naar voren',
        scanner: 'Nee',
        depoversight: 'Ja',
      },
      { capability: 'Markeert stille patch-releases', scanner: 'Nee', depoversight: 'Ja' },
      {
        capability: 'Detecteert PRs in security-gevoelige code',
        scanner: 'Nee',
        depoversight: 'Ja',
      },
      { capability: 'Markeert blootstellingsvensters', scanner: 'Nee', depoversight: 'Ja' },
      {
        capability: 'Blokkeert risicovolle upgrades vóór de merge',
        scanner: 'Beperkt',
        depoversight: 'Ja',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integraties',
    sectionLead: 'DepOversight leest wat u al heeft.',
    dataSourcesLabel: 'Databronnen',
    workflowLabel: 'Workflow',
    items: [
      { name: 'GitHub', description: 'PR-checks, commit- en releasefeeds.' },
      { name: 'GitLab', description: 'MR-checks en pipeline-integratie.' },
      { name: 'npm', description: 'Pakketmanifests en advisory-cross-reference.' },
      { name: 'PyPI', description: 'Pakketmetadata en releasefeeds.' },
      { name: 'Maven Central', description: 'Artifact-metadata en changelog-scraping.' },
      { name: 'Go modules', description: 'go.mod-parsing en proxy.golang.org-metadata.' },
      {
        name: 'crates.io',
        description: 'Rust crate-metadata en yanked-version tracking.',
      },
      { name: 'RubyGems', description: 'Gem-metadata en releasefeeds.' },
      { name: 'Slack', description: 'Kanaalmeldingen wanneer signalen beoordeling vereisen.' },
      {
        name: 'Policy-engine',
        description: 'Configureerbare regels voor welke signalen blokkeren, monitoren of notificeren.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Voor wie is DepOversight',
    items: [
      {
        title: 'Security engineering',
        body: 'U triagt al CVE-ruis. DepOversight haalt de signalen naar boven die vóór advisories binnenkomen — zodat u beslist in plaats van reageert.',
      },
      {
        title: 'Platform en infrastructuur',
        body: 'Blokkeer risicovolle updates voordat ze main bereiken. Stel beleid in bij de PR-check, niet bij incident response.',
      },
      {
        title: 'Open-source-zware startups',
        body: 'Het meeste van uw code is van iemand anders. Weet wanneer hun posture verandert voordat u een release uitbrengt die ervan afhangt.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Vroege toegang aanvragen',
    sectionLead: 'Vertel ons waar DepOversight zou passen. Wij nemen contact op.',
    callout: 'Blokkeer risicovolle dependency-updates voordat ze main bereiken.',
    pricing: 'Vroege toegang is gratis. Prijsniveaus worden voor GA aangekondigd.',
    fields: {
      name: { label: 'Naam', placeholder: 'Optioneel' },
      email: {
        label: 'Werk-e-mail',
        placeholder: 'u@bedrijf.nl',
        error: 'Voer een geldig e-mailadres in.',
        required: 'verplicht',
      },
      company: { label: 'Bedrijf', placeholder: 'Optioneel' },
      githubOrg: { label: 'GitHub-organisatie', placeholder: 'Optioneel' },
      ecosystem: { label: 'Belangrijkste pakket-ecosysteem', placeholder: 'bv. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Huidige tool',
        placeholder: 'Selecteer',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Anders',
        },
      },
      message: {
        label: 'Bericht',
        placeholder: 'Optioneel — wat wilt u eerst zien?',
      },
    },
    submit: 'Toegang aanvragen',
    submitting: 'Verzenden…',
    submitError: 'Verzenden mislukt. Probeer het opnieuw of mail hello@depoversight.com.',
    success: {
      title: 'Bedankt — uw aanvraag is binnen.',
      body: 'We nemen contact op zodra we meer plekken voor vroege toegang openen.',
    },
    expectations:
      'We nemen binnen enkele dagen contact op. Vroege-toegang-plaatsen openen in batches — u krijgt een reactie ook als u in de wachtrij staat.',
    privacyNotice: 'Door te verzenden gaat u akkoord met ons <link>privacybeleid</link>.',
  },
  footer: {
    tagline: 'Dependency-intelligence vóór de disclosure.',
    copyright: '© {{year}} DepOversight. Alle rechten voorbehouden.',
    sections: {
      product: 'Product',
      resources: 'Bronnen',
    },
    links: {
      demo: 'Live demo',
      howItWorks: 'Hoe het werkt',
      compare: 'vs. CVE-scanners',
      earlyAccess: 'Vroege toegang',
      llms: 'AI-discovery (llms.txt)',
      sitemap: 'Sitemap',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    disclaimer:
      'DepOversight brengt security-relevante beoordelingssignalen aan het licht op basis van publieke upstream-activiteit. Een signaal is geen bevestigde kwetsbaarheid tenzij gekoppeld aan een advisory of CVE.',
  },
} satisfies Dictionary;

export default nl;
