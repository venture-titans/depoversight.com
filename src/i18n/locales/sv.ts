// Swedish (sv).
// Security wording: "granskningssignaler" / "granskning krävs", never "bekräftade sårbarheter".
import type { Dictionary } from './en';

const sv = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Produkt',
      demo: 'Demo',
      howItWorks: 'Så fungerar det',
      compare: 'Jämför',
      integrations: 'Integrationer',
    },
    cta: 'Begär tidig tillgång',
    openMenu: 'Öppna meny',
    closeMenu: 'Stäng meny',
    selectLanguage: 'Välj språk',
    skipToContent: 'Hoppa till innehåll',
  },
  hero: {
    eyebrow: 'Beroendeintelligens',
    title: 'Vet när dina beroenden börjar bli riskabla — innan din skanner säger till.',
    subtitle:
      'DepOversight bevakar uppströms PR:er, commits, issues och releaser och lyfter fram säkerhetsrelevanta signaler i ditt beroendegraf innan CVE:er, advisories eller skannervarningar finns.',
    oneLiner:
      'CVE-skannrar talar om vad som redan är känt. DepOversight visar vad som börjar se riskabelt ut.',
    primaryCta: 'Begär tidig tillgång',
    secondaryCta: 'Se livedemo',
    watchingLabel: 'Bevakar uppströms',
    watchingSources: ['PR:er', 'commits', 'issues', 'releaser', 'changeloggar', 'advisories'],
  },
  demo: {
    sectionEyebrow: 'Interaktiv demo',
    sectionTitle: 'Livedemo',
    sectionLead:
      'En ögonblicksbild av vad DepOversight lyfter fram för ett exempelberoende. All data är illustrativ.',
    cta: {
      primary: 'Begär tidig tillgång',
      secondary: 'Så fungerar det',
    },
    project: 'Projekt',
    environment: 'Miljö',
    environmentValue: 'produktion',
    dependency: 'Beroende',
    status: 'Status',
    statusReviewRequired: 'Granskning krävs',
    live: 'Live',
    headerLine: '{{project}} · produktion · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Genomarbetat exempel · Illustrativ rekonstruktion',
      title: 'axios npm-supply-chain-kompromettering — 31 mars 2026',
      framing:
        'DepOversight körde inte under denna incident. Denna vy rekonstruerar vad produkten skulle ha lyft fram, baserat på det offentliga underlaget.',
      sourcesLabel: 'Källor',
    },
    replay: 'Replay',
    replayDate: '31 mar 2026',
    metrics: {
      signals: 'Säkerhetssignaler',
      exposureWindow: 'Möjligt exponeringsfönster',
      disclosure: 'Mönster för publikt avslöjande',
      sensitivePrs: 'PR:er i känsliga områden',
      advisories: 'Upptäckta advisories',
    },
    filters: {
      label: 'Filtrera efter allvar',
      all: 'Alla',
      high: 'Hög',
      review: 'Granskning',
      monitoring: 'Övervakning',
      blocked: 'Blockerad',
      empty: 'Inga signaler matchar detta filter.',
    },
    severity: {
      high: 'Hög',
      review: 'Granskning',
      monitoring: 'Övervakning',
      blocked: 'Blockerad',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projekt',
        signals: 'Signaler',
        integrations: 'Integrationer',
      },
      severityShortcuts: {
        high: 'Hög',
        review: 'Granskning',
        monitoring: 'Övervakning',
        resolved: 'Lösta',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Policy',
      },
      collapseLabel: 'Demoarbetsyta',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Bekräftat historiskt mönster',
      potentialUndisclosedFix: 'Potentiellt icke-offentliggjord fix',
      exposureWindow: 'Exponeringsfönster',
      prCheck: 'PR-kontroll',
      maliciousVersion: 'Skadlig version (indragen)',
      communityConfirmed: 'Communitybekräftad kompromettering',
    },
    sourceType: {
      publicGithubIssue: 'Publikt GitHub-issue',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Beroendeuppdatering',
      registryRelease: 'npm-release',
      manifestChange: 'Paketmanifest-ändring',
    },
    detail: {
      summary: 'Sammanfattning',
      whyFlagged: 'Varför flaggad',
      recommendedAction: 'Rekommenderad åtgärd',
      viewSource: 'Visa källa',
      viewTimeline: 'Visa tidslinje',
      viewPrCheck: 'Visa PR-kontroll',
      severity: 'Allvar',
      status: 'Status',
      dependency: 'Beroende',
      sourceType: 'Källtyp',
      empty: 'Välj en signal för att se detaljer.',
      back: 'Tillbaka till signaler',
    },
    prCheck: {
      title: 'DepOversight-kontroll',
      result: 'Granskning krävs',
      summary:
        'Beroendeuppdateringen innehåller säkerhetsrelevant uppströmsaktivitet.',
      dependencyLabel: 'Beroende',
      reasonsLabel: 'Skäl',
      reasons: [
        'Öppna eller nyligen mergade säkerhetskänsliga PR:er upptäckta',
        'Releasestatus oklar',
        'Ingen advisory hittad',
        'Aktuell version kan vara påverkad',
      ],
      footer: 'Manuell granskning krävs före merge.',
      close: 'Stäng',
    },
    timelineButton: 'Visa tidslinje',
    prCheckButton: 'Visa PR-kontroll',
    timelineModalTitle: 'Tidslinje för exponeringsfönstret',
    disclaimer:
      'DepOversight lyfter fram säkerhetsrelevanta granskningssignaler baserade på publik uppströmsaktivitet. En signal är inte en bekräftad sårbarhet om den inte är kopplad till en advisory eller CVE.',
    signals: {
      publicIssue: {
        title: 'Skadliga axios-versioner publicerade på npm',
        summary:
          'Den 31 mars 2026 kl 00:21 UTC publicerades axios@1.14.1 på npm; 01:00 UTC följde axios@0.30.4. Båda innehöll en dold post-install-hook som hämtade en runtime-payload.',
        whyFlagged: [
          'Oväntat versionssprång utanför maintainerns vanliga release-rytm',
          'Nytt transitivt beroende tillagt: plain-crypto-js@4.2.1, utan tidigare axios-historik',
          'Ny post-install-hook i den publicerade package.json',
          'Ingen motsvarande commit i axios git-repository för den publicerade artefakten',
        ],
        recommendedAction:
          'Stoppa varje auto-merge av axios-uppgraderingar som rör 1.14.1 / 0.30.4 tills release-ursprung är verifierat.',
      },
      publicFix: {
        title: 'Misstänkt transitivt beroende infört',
        summary:
          'plain-crypto-js@4.2.1 syns som runtime-beroende i de skadliga axios-releaserna. En tidigare version (4.2.0) publicerades dagen innan av en publisher utan tidigare historik.',
        whyFlagged: [
          'Nyligen publicerat paket refererat som runtime-beroende',
          'Publisher-kontot har ingen tidigare paket-historik',
          'Paketnamnet imiterar ett legitimt kryptobibliotek',
          'Post-install-skriptet laddar ned en fjärrbinär',
        ],
        recommendedAction:
          'Behandla plain-crypto-js@4.2.1 som ej tillförlitligt; pin på senaste kända säkra axios-versionen.',
      },
      mergedUnreleased: {
        title: 'Communityn bekräftar att axios 1.14.1 är skadlig',
        summary:
          'Flera oberoende forskare (Datadog, SANS, Wiz, Elastic) rapporterar att axios 1.14.1 levererar en plattformsoberoende RAT via post-install. axios maintainers bekräftar i issue #10636.',
        whyFlagged: [
          'Oberoende bekräftelse från flera källor',
          'Bekräftat av maintainers i publik post-mortem',
          'RAT-payloads observerade på macOS, Windows, Linux',
          'Aktiv under ett 3-timmarsfönster innan npm drog tillbaka versionerna',
        ],
        recommendedAction:
          'Granska varje CI- / dev-miljö som kan ha installerat axios 1.14.1 mellan 00:21 och 03:15 UTC.',
      },
      riskyUpdate: {
        title: 'Renovate-PR som uppgraderar axios blockerad',
        summary:
          'Renovate öppnade en PR som uppgraderar axios från 1.13.0 till 1.14.1. DepOversights PR-kontroll blockerar mergen — målversionen står på den aktiva flaggade listan, innan något CVE tilldelats.',
        whyFlagged: [
          'Målversionen (1.14.1) står på flaggade listan',
          'PR öppnad under aktivt exponeringsfönster',
          'Inget CVE tilldelat när PR öppnades — klassiska skannrar skulle inte ha sett det',
          'Auto-merge aktiverat i detta repository',
        ],
        recommendedAction:
          'Manuell granskning krävs. Pinna axios på 1.13.0 eller uppgradera till en verifierad release när den finns tillgänglig.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Säkerhetsscenarier som DepOversight lyfter fram',
    sectionLead:
      'Risk i open source-beroenden kommer sällan som en enskild CVE. Detta är mönstren vi lyfter fram.',
    items: {
      upstream: {
        title: 'Risk införd uppströms',
        description:
          'En ny uppströmsändring vidgar den säkerhetskänsliga ytan på ett beroende du levererar.',
      },
      publicFix: {
        title: 'Befintlig risk publikt åtgärdad',
        description:
          'En maintainer åtgärdar ett säkerhetsrelevant issue öppet innan någon advisory publiceras.',
      },
      mergedNoRelease: {
        title: 'Mergad fix, men ingen release',
        description:
          'Fixen finns på main, men varje publicerad version innehåller fortfarande den opatchade kodvägen.',
      },
      silentPatch: {
        title: 'Tyst patch-release',
        description:
          'En ny release innehåller en säkerhetsrelevant fix utan advisory eller omnämnande i release notes.',
      },
      publicIssue: {
        title: 'Publikt issue-avslöjande',
        description:
          'En maintainer eller rapportör publicerar ett säkerhetsrelevant issue innan triagen är klar.',
      },
      riskyUpgrade: {
        title: 'Riskabel beroendeuppgradering',
        description:
          'En föreslagen uppgradering inför ny säkerhetskänslig kodyta i ditt beroendegraf.',
      },
      reverted: {
        title: 'Återställd eller partiell fix',
        description:
          'En tidigare säkerhetsrelevant fix återställs, snävas in eller appliceras bara delvis.',
      },
      degradation: {
        title: 'Försämrad tillit till beroendet',
        description:
          'Underhållssignaler kring ett beroende ändras på sätt som motiverar en posture-granskning.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Var exponeringsfönstret öppnas',
    sectionLead:
      'En typisk tidslinje från uppströms signal till CVE — och var DepOversight stänger gapet.',
    exposureWindowLabel: 'Möjligt exponeringsfönster',
    callout:
      'Det farliga gapet är inte efter avslöjandet. Det är mellan den publika uppströms signalen och den officiella advisoryn.',
    events: {
      day0Signal: { day: '31 mar · 00:21 UTC', label: 'axios@1.14.1 publicerad på npm' },
      day0Flag: { day: '31 mar · ~02:00 UTC', label: 'DepOversight lyfter fram release-anomali-signal' },
      day3Merge: { day: '31 mar · 03:15 UTC', label: 'npm drar tillbaka båda axios-versionerna' },
      day7Release: { day: '1 apr', label: 'Microsoft, Datadog publicerar post-mortems' },
      day14Cve: { day: '~8 apr', label: 'CVE tilldelat för komprometterade releaser' },
      day14Scanner: { day: '8 apr+', label: 'Klassiska skannrar hinner ifatt' },
    },
  },
  problem: {
    sectionTitle: 'Problemet',
    sectionLead:
      'CVE-skannrar svarar på en fråga som redan var besvarad — när de svarar.',
    bullets: [
      'De flesta CVE-feeds beskriver risk efter avslöjandet.',
      'Fixar landar ofta innan advisories publiceras.',
      'Vissa patchar släpps i tysthet helt utan advisory.',
      'Skannrarnas blinda fläckar tvingar team att reagera istället för att besluta.',
    ],
  },
  solution: {
    sectionTitle: 'Lösningen',
    sectionLead:
      'DepOversight följer säkerhetsposture-förändringar i dina open source-beroenden — från riskabla PR:er och publika fixar till osläppta patchar och exponeringsfönster före advisory.',
    bullets: [
      'Läs uppströms aktivitet kontinuerligt, över hela beroendegrafen.',
      'Upptäck säkerhetsrelevanta mönster i PR:er, commits, issues, releaser och changeloggar.',
      'Flagga posture-ändringar i beroenden — inte bara publicerade CVE:er.',
      'Blockera riskabla beroendeuppdateringar innan de når main.',
    ],
    fitsAlongsideTitle: 'Passar med din befintliga skanner',
    fitsAlongsideBody:
      'DepOversight körs vid sidan av Dependabot, Snyk, GitHub Advanced Security eller Socket — det ersätter dem inte. Skannern förblir din source-of-truth för publicerade advisories. DepOversight hanterar gapet före avslöjande.',
    tuneForReviewTitle: 'Trimmad för granskning, inte för aviseringströtthet',
    tuneForReviewBody:
      'Signaler är granskningstriggers. Varje kommer med käll-PR / commit / issue och rekommenderad åtgärd så att ditt team beslutar vad som är aktuellt — falska positiva förblir falska positiva, inte jourkall.',
  },
  whatItTellsYou: {
    sectionTitle: 'Vad DepOversight berättar för dig',
    items: [
      {
        title: 'Om du kan lita på det här beroendet just nu',
        body: 'En liveavläsning av posture för varje beroende i din graf, inte bara de med kända CVE:er.',
      },
      {
        title: 'Om en fix finns uppströms men inte är släppt',
        body: 'När en säkerhetsrelevant patch finns på main men inte är levererad ser du det före release notes.',
      },
      {
        title: 'Om en release innehåller en tyst säkerhetspatch',
        body: 'Releaser scannas efter fix-mönster även när ingen advisory följer med.',
      },
      {
        title: 'Om en uppgradering inför ny riskyta',
        body: 'Bumpar som rör autentisering, parsing eller processgränser flaggas för granskning.',
      },
      {
        title: 'Om en publik signal föregår en advisory',
        body: 'Du ser gapet mellan den första publika säkerhetsrelevanta signalen och den officiella advisoryn — innan det stängs.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Så fungerar det',
    capabilitiesLabel: 'Detektionsförmågor',
    steps: [
      {
        title: 'Bevaka uppströms',
        body: 'Läser kontinuerligt PR:er, commits, issues, releaser och changeloggar i din deklarerade beroendegraf.',
      },
      {
        title: 'Upptäck säkerhetsrelevanta signaler',
        body: 'Tillämpar detektionsregler avstämda för uppströms aktivitet: språkmönster, kodyteförändringar och avslöjandemönster.',
      },
      {
        title: 'Lyft fram händelser värda granskning',
        body: 'Befordrar signaler till din granskningskö med källor, bevis och rekommenderad åtgärd.',
      },
      {
        title: 'Blockera riskabla mergar',
        body: 'En PR-kontroll stoppar beroendeuppdateringar som rör flaggade versioner tills de är granskade.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Detektionsmotorn',
    sectionLead:
      'DepOversight kör inga exploits. Den läser uppströms aktivitet och lyfter fram mönster som erfarna säkerhetsingenjörer redan letar efter.',
    items: [
      {
        title: 'Källtypstaggning',
        body: 'Varje signal taggas efter källa: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Detektion av språkmönster',
        body: 'Identifierar fix-språk, säkerhetsspråk och avslöjandespråk utan att hävda att en exploit existerar.',
      },
      {
        title: 'Medvetenhet om kodyta',
        body: 'Flaggar PR:er som rör autentisering, parsing, deserialisering, nätverk eller processgränser.',
      },
      {
        title: 'Spårning av releasestatus',
        body: 'Spårar om en fix är mergad, släppt eller bara finns på en utvecklingsbranch.',
      },
    ],
    disclaimer:
      'Signaler är granskningstriggers, inte bekräftade sårbarheter, om de inte är kopplade till en publicerad advisory eller CVE.',
  },
  comparison: {
    sectionTitle: 'Hur detta skiljer sig från en CVE-skanner',
    sectionLead:
      'Traditionella skannrar svarar: "Är det här beroendet sårbart?" DepOversight frågar: "Bör vi lita på det här beroendet just nu?"',
    columns: {
      capability: 'Förmåga',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Verktyg som Socket överlappar delvis — DepOversight fokuserar specifikt på pre-disclosure-fönstret: uppströms-aktivitet som ännu inte producerat någon advisory.',
    rows: [
      { capability: 'Upptäcker publicerade CVE:er', scanner: 'Ja', depoversight: 'Lyfter fram dem' },
      {
        capability: 'Lyfter publika uppströms-fixar före advisory',
        scanner: 'Nej',
        depoversight: 'Ja',
      },
      { capability: 'Flaggar tysta patch-releaser', scanner: 'Nej', depoversight: 'Ja' },
      {
        capability: 'Upptäcker PR:er i säkerhetskänslig kod',
        scanner: 'Nej',
        depoversight: 'Ja',
      },
      { capability: 'Markerar exponeringsfönster', scanner: 'Nej', depoversight: 'Ja' },
      {
        capability: 'Blockerar riskabla uppgraderingar före merge',
        scanner: 'Begränsat',
        depoversight: 'Ja',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integrationer',
    sectionLead: 'DepOversight läser det du redan har.',
    dataSourcesLabel: 'Datakällor',
    workflowLabel: 'Arbetsflöde',
    items: [
      { name: 'GitHub', description: 'PR-kontroller, commit- och release-feeds.' },
      { name: 'GitLab', description: 'MR-kontroller och pipeline-integration.' },
      { name: 'npm', description: 'Paketmanifest och korsreferens av advisories.' },
      { name: 'PyPI', description: 'Paketmetadata och release-feeds.' },
      { name: 'Maven Central', description: 'Artefaktmetadata och changelog-skrapning.' },
      { name: 'Go modules', description: 'go.mod-parsning och proxy.golang.org-metadata.' },
      {
        name: 'crates.io',
        description: 'Rust-crate-metadata och spårning av yanked-versioner.',
      },
      { name: 'RubyGems', description: 'Gem-metadata och release-feeds.' },
      { name: 'Slack', description: 'Kanalnotiser när signaler kräver granskning.' },
      {
        name: 'Policy-motor',
        description: 'Konfigurerbara regler för vilka signaler som blockerar, övervakar eller aviserar.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Vem DepOversight är till för',
    items: [
      {
        title: 'Säkerhetsteknik',
        body: 'Du triagerar redan CVE-brus. DepOversight lyfter fram signaler som kommer före advisories — så att du kan besluta i stället för att reagera.',
      },
      {
        title: 'Plattform och infrastruktur',
        body: 'Blockera riskabla beroendeuppdateringar innan de når main. Sätt policy vid PR-kontrollen, inte i incidenthantering.',
      },
      {
        title: 'Open source-tunga startups',
        body: 'Det mesta av din kod tillhör någon annan. Vet när deras posture ändras innan du släpper en release som beror på det.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Begär tidig tillgång',
    sectionLead: 'Berätta var DepOversight skulle passa. Vi hör av oss.',
    callout: 'Blockera riskabla beroendeuppdateringar innan de når main.',
    pricing: 'Tidig tillgång är gratis. Prisnivåer tillkännages före GA.',
    fields: {
      name: { label: 'Namn', placeholder: 'Valfritt' },
      email: {
        label: 'Jobbmail',
        placeholder: 'du@foretag.se',
        error: 'Ange en giltig e-post.',
        required: 'obligatorisk',
      },
      company: { label: 'Företag', placeholder: 'Valfritt' },
      githubOrg: { label: 'GitHub-organisation', placeholder: 'Valfritt' },
      ecosystem: { label: 'Främsta paketekosystem', placeholder: 't.ex. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Nuvarande verktyg',
        placeholder: 'Välj',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Annat',
        },
      },
      message: {
        label: 'Meddelande',
        placeholder: 'Valfritt — vad vill du se först?',
      },
    },
    submit: 'Begär tillgång',
    submitting: 'Skickar…',
    submitError: 'Kunde inte skicka. Försök igen eller mejla hello@depoversight.com.',
    success: {
      title: 'Tack — din förfrågan är registrerad.',
      body: 'Vi hör av oss när vi öppnar fler platser för tidig tillgång.',
    },
    expectations:
      'Vi hör av oss inom några dagar. Platser för tidig tillgång öppnas i omgångar — du får svar även om du står i kö.',
    privacyNotice: 'Genom att skicka godkänner du vår <link>integritetspolicy</link>.',
  },
  blog: {
    indexTitle: 'Blogg',
    indexLead:
      'Fältanteckningar om beroendesäkerhet, leveranskedjeincidenter och det vi upptäcker före offentliggörandet.',
    readMore: 'Läs inlägget',
    minRead: '{{count}} min läsning',
    publishedOn: 'Publicerat {{date}}',
    updatedOn: 'Uppdaterat {{date}}',
    backToIndex: 'Tillbaka till bloggen',
    tagsLabel: 'Taggar',
    rawMarkdown: 'Visa som markdown',
    empty: 'Inga inlägg ännu, kom tillbaka snart.',
    categories: {
      industry: 'Bransch',
      fundamentals: 'Grunderna',
      tools: 'Verktyg',
    },
  },
  footer: {
    tagline: 'Beroendeintelligens före avslöjande.',
    copyright: '© {{year}} DepOversight. Alla rättigheter förbehållna.',
    sections: {
      product: 'Produkt',
      resources: 'Resurser',
    },
    links: {
      demo: 'Livedemo',
      howItWorks: 'Så fungerar det',
      compare: 'vs. CVE-skannrar',
      earlyAccess: 'Tidig tillgång',
      llms: 'AI-discovery (llms.txt)',
      sitemap: 'Webbplatskarta',
      privacy: 'Integritet',
      contact: 'Kontakt',
    },
    disclaimer:
      'DepOversight lyfter fram säkerhetsrelevanta granskningssignaler baserade på publik uppströmsaktivitet. En signal är inte en bekräftad sårbarhet om den inte är kopplad till en advisory eller CVE.',
  },
} satisfies Dictionary;

export default sv;
