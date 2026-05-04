// Polish (pl).
// Security wording: "sygnały do przeglądu" / "wymaga przeglądu", never "potwierdzone podatności".
import type { Dictionary } from './en';

const pl = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Produkt',
      demo: 'Demo',
      howItWorks: 'Jak działa',
      compare: 'Porównaj',
      integrations: 'Integracje',
    },
    cta: 'Poproś o wczesny dostęp',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    selectLanguage: 'Wybierz język',
    skipToContent: 'Przejdź do treści',
  },
  hero: {
    eyebrow: 'Inteligencja zależności',
    title: 'Wiedz, kiedy Twoje zależności stają się ryzykowne, zanim powie Ci to skaner.',
    subtitle:
      'DepOversight monitoruje upstreamowe PR, commity, issue i wydania, aby ujawnić sygnały istotne dla bezpieczeństwa w grafie zależności, zanim pojawią się CVE, advisory lub alerty skanerów.',
    oneLiner:
      'Skanery CVE mówią Ci, co już wiadomo. DepOversight pokazuje, co zaczyna wyglądać ryzykownie.',
    primaryCta: 'Poproś o wczesny dostęp',
    secondaryCta: 'Zobacz demo na żywo',
    watchingLabel: 'Monitoruje upstream',
    watchingSources: ['PR-y', 'commity', 'issue', 'releasy', 'changelogi', 'advisory'],
  },
  demo: {
    sectionTitle: 'Demo na żywo',
    sectionLead:
      'Migawka tego, co DepOversight ujawnia dla przykładowej zależności. Wszystkie dane są poglądowe.',
    project: 'Projekt',
    environment: 'Środowisko',
    environmentValue: 'produkcja',
    dependency: 'Zależność',
    status: 'Status',
    statusReviewRequired: 'Wymaga przeglądu',
    live: 'Na żywo',
    headerLine: '{{project}} · produkcja · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Szczegółowy przykład · Ilustracyjna rekonstrukcja',
      title: 'Naruszenie łańcucha dostaw axios w npm — 31 marca 2026',
      framing:
        'DepOversight nie był aktywny podczas tego incydentu. Ten widok rekonstruuje, co produkt by ujawnił, na podstawie publicznych zapisów.',
      sourcesLabel: 'Źródła',
    },
    replay: 'Replay',
    replayDate: '31 mar 2026',
    metrics: {
      signals: 'Sygnały bezpieczeństwa',
      exposureWindow: 'Możliwe okno ekspozycji',
      disclosure: 'Wzorzec publicznego ujawnienia',
      sensitivePrs: 'PR-y w obszarach wrażliwych',
      advisories: 'Wykryte advisory',
    },
    filters: {
      label: 'Filtruj wg ważności',
      all: 'Wszystkie',
      high: 'Wysoka',
      review: 'Przegląd',
      monitoring: 'Monitorowanie',
      blocked: 'Zablokowana',
      empty: 'Żaden sygnał nie pasuje do tego filtra.',
    },
    severity: {
      high: 'Wysoka',
      review: 'Przegląd',
      monitoring: 'Monitorowanie',
      blocked: 'Zablokowana',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projekty',
        signals: 'Sygnały',
        integrations: 'Integracje',
      },
      severityShortcuts: {
        high: 'Wysoka',
        review: 'Przegląd',
        monitoring: 'Monitorowanie',
        resolved: 'Rozwiązane',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Polityka',
      },
      collapseLabel: 'Workspace dema',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Potwierdzony wzorzec historyczny',
      potentialUndisclosedFix: 'Potencjalna nieujawniona poprawka',
      exposureWindow: 'Okno ekspozycji',
      prCheck: 'Sprawdzenie PR',
      maliciousVersion: 'Złośliwa wersja (wycofana)',
      communityConfirmed: 'Naruszenie potwierdzone przez społeczność',
    },
    sourceType: {
      publicGithubIssue: 'Publiczny issue GitHub',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Aktualizacja zależności',
      registryRelease: 'Wydanie npm',
      manifestChange: 'Zmiana manifestu pakietu',
    },
    detail: {
      summary: 'Podsumowanie',
      whyFlagged: 'Powód oznaczenia',
      recommendedAction: 'Zalecane działanie',
      viewSource: 'Zobacz źródło',
      viewTimeline: 'Zobacz oś czasu',
      viewPrCheck: 'Zobacz sprawdzenie PR',
      severity: 'Ważność',
      status: 'Status',
      dependency: 'Zależność',
      sourceType: 'Typ źródła',
      empty: 'Wybierz sygnał, aby zobaczyć szczegóły.',
      back: 'Powrót do sygnałów',
    },
    prCheck: {
      title: 'Sprawdzenie DepOversight',
      result: 'Wymaga przeglądu',
      summary:
        'Aktualizacja zależności obejmuje upstreamową aktywność istotną dla bezpieczeństwa.',
      dependencyLabel: 'Zależność',
      reasonsLabel: 'Powody',
      reasons: [
        'Wykryto otwarte lub niedawno zmergowane PR-y wrażliwe dla bezpieczeństwa',
        'Status release’u niejasny',
        'Nie znaleziono advisory',
        'Bieżąca wersja może być dotknięta',
      ],
      footer: 'Przed mergem wymagany ręczny przegląd.',
      close: 'Zamknij',
    },
    timelineButton: 'Zobacz oś czasu',
    prCheckButton: 'Zobacz sprawdzenie PR',
    timelineModalTitle: 'Oś czasu okna ekspozycji',
    disclaimer:
      'DepOversight ujawnia sygnały do przeglądu istotne dla bezpieczeństwa na podstawie publicznej aktywności upstream. Sygnał nie jest potwierdzoną podatnością, chyba że jest powiązany z advisory lub CVE.',
    signals: {
      publicIssue: {
        title: 'Złośliwe wersje axios opublikowane w npm',
        summary:
          '31 marca 2026 o 00:21 UTC opublikowano axios@1.14.1 w npm; o 01:00 UTC pojawił się axios@0.30.4. Obie zawierały ukryty hook post-install pobierający payload w runtime.',
        whyFlagged: [
          'Niespodziewany skok wersji poza zwykłym rytmem wydań mainainera',
          'Dodana nowa zależność tranzytywna: plain-crypto-js@4.2.1 bez wcześniejszej historii z axios',
          'Nowy hook post-install w opublikowanym package.json',
          'Brak odpowiadającego commita w repozytorium git axios dla opublikowanego artefaktu',
        ],
        recommendedAction:
          'Wstrzymaj automatyczne mergowanie aktualizacji axios dotykających 1.14.1 / 0.30.4 do czasu weryfikacji pochodzenia release’u.',
      },
      publicFix: {
        title: 'Wprowadzona podejrzana zależność tranzytywna',
        summary:
          'plain-crypto-js@4.2.1 pojawia się jako zależność runtime w złośliwych wydaniach axios. Pakiet został opublikowany dwa dni wcześniej przez publishera bez wcześniejszej historii.',
        whyFlagged: [
          'Świeżo opublikowany pakiet wskazany jako zależność runtime',
          'Konto publishera nie ma wcześniejszej historii pakietów',
          'Nazwa pakietu imituje legalną bibliotekę kryptograficzną',
          'Skrypt post-install pobiera zdalny binarny',
        ],
        recommendedAction:
          'Traktuj plain-crypto-js@4.2.1 jako niezaufany; przypnij ostatnią znaną bezpieczną wersję axios.',
      },
      mergedUnreleased: {
        title: 'Społeczność potwierdza, że axios 1.14.1 jest złośliwy',
        summary:
          'Wielu niezależnych badaczy (Datadog, SANS, Wiz, Elastic) zgłasza, że axios 1.14.1 wdraża wieloplatformowy RAT przez post-install. Maintainerzy axios potwierdzają w issue #10636.',
        whyFlagged: [
          'Niezależne potwierdzenie z wielu źródeł',
          'Potwierdzone przez maintainerów w publicznym post-mortem',
          'Payloady RAT zaobserwowane na macOS, Windows, Linux',
          'Aktywne przez 3-godzinne okno zanim npm wycofał wersje',
        ],
        recommendedAction:
          'Audytuj każde środowisko CI / dev, które mogło zainstalować axios 1.14.1 między 00:21 a 03:25 UTC.',
      },
      riskyUpdate: {
        title: 'PR Renovate aktualizujący axios zablokowany',
        summary:
          'Renovate otworzył PR aktualizujący axios z 1.13.0 do 1.14.1. Sprawdzenie PR DepOversight blokuje merge — wersja docelowa znajduje się na aktywnej liście oznaczonych, zanim przypisano jakikolwiek CVE.',
        whyFlagged: [
          'Wersja docelowa (1.14.1) jest na liście oznaczonych',
          'PR otwarty podczas aktywnego okna ekspozycji',
          'Brak CVE w momencie otwarcia PR — tradycyjne skanery niczego by nie zauważyły',
          'Automatyczne mergowanie włączone w tym repozytorium',
        ],
        recommendedAction:
          'Wymagany ręczny przegląd. Przypnij axios na 1.13.0 lub zaktualizuj do zweryfikowanego release’u, gdy będzie dostępny.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Scenariusze bezpieczeństwa, które DepOversight ujawnia',
    sectionLead:
      'Ryzyko w zależnościach open source rzadko przychodzi jako pojedynczy CVE. Oto wzorce, które ujawniamy.',
    items: {
      upstream: {
        title: 'Ryzyko wprowadzone upstream',
        description:
          'Nowa zmiana upstream poszerza wrażliwą powierzchnię zależności, którą dostarczasz.',
      },
      publicFix: {
        title: 'Istniejące ryzyko publicznie naprawione',
        description:
          'Maintainer poprawia istotne dla bezpieczeństwa issue jawnie, zanim opublikowane zostanie jakiekolwiek advisory.',
      },
      mergedNoRelease: {
        title: 'Poprawka zmergowana, ale brak release’u',
        description:
          'Poprawka jest na main, ale każda wydana wersja wciąż zawiera niezałataną ścieżkę kodu.',
      },
      silentPatch: {
        title: 'Cichy release z patchem',
        description:
          'Nowy release zawiera istotną dla bezpieczeństwa poprawkę bez advisory ani wzmianki w release notes.',
      },
      publicIssue: {
        title: 'Publiczne ujawnienie issue',
        description:
          'Maintainer lub zgłaszający publikuje istotne dla bezpieczeństwa issue, zanim triage zostanie zakończony.',
      },
      riskyUpgrade: {
        title: 'Ryzykowna aktualizacja zależności',
        description:
          'Proponowana aktualizacja wprowadza nową wrażliwą powierzchnię kodu do Twojego grafu zależności.',
      },
      reverted: {
        title: 'Cofnięta lub częściowa poprawka',
        description:
          'Wcześniejsza istotna dla bezpieczeństwa poprawka zostaje cofnięta, zawężona lub zastosowana tylko częściowo.',
      },
      degradation: {
        title: 'Spadek zaufania do zależności',
        description:
          'Sygnały utrzymaniowe wokół zależności zmieniają się w sposób uzasadniający przegląd posture.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Gdzie otwiera się okno ekspozycji',
    sectionLead:
      'Typowa oś czasu od sygnału upstream do CVE — i miejsce, w którym DepOversight zamyka lukę.',
    exposureWindowLabel: 'Możliwe okno ekspozycji',
    callout:
      'Niebezpieczna luka nie jest po ujawnieniu. Jest pomiędzy publicznym sygnałem upstream a oficjalnym advisory.',
    events: {
      day0Signal: { day: '31 mar · 00:21 UTC', label: 'axios@1.14.1 opublikowany w npm' },
      day0Flag: { day: '31 mar · ~02:00 UTC', label: 'DepOversight ujawnia sygnał anomalii w release’ie' },
      day3Merge: { day: '31 mar · 03:25 UTC', label: 'npm wycofuje obie wersje axios' },
      day7Release: { day: '1 kwi', label: 'Microsoft, Datadog publikują post-mortem' },
      day14Cve: { day: '~8 kwi', label: 'Przypisano CVE dla naruszonych wydań' },
      day14Scanner: { day: '8 kwi+', label: 'Tradycyjne skanery nadrabiają' },
    },
  },
  problem: {
    sectionTitle: 'Problem',
    sectionLead:
      'Skanery CVE odpowiadają na pytanie, na które odpowiedź już istniała — w momencie gdy odpowiadają.',
    bullets: [
      'Większość feedów CVE opisuje ryzyko po ujawnieniu.',
      'Poprawki często lądują przed publikacją advisory.',
      'Niektóre patche wychodzą po cichu, bez żadnego advisory.',
      'Martwe pola skanerów zmuszają zespoły do reagowania zamiast decydowania.',
    ],
  },
  solution: {
    sectionTitle: 'Rozwiązanie',
    sectionLead:
      'DepOversight śledzi zmiany posture bezpieczeństwa w Twoich zależnościach open source — od ryzykownych PR-ów i publicznych poprawek po niewydane patche i okna ekspozycji przed advisory.',
    bullets: [
      'Czytaj aktywność upstream w sposób ciągły, w całym grafie zależności.',
      'Wykrywaj wzorce istotne dla bezpieczeństwa w PR-ach, commitach, issue, releasach i changelogach.',
      'Oznaczaj zmiany posture zależności — nie tylko opublikowane CVE.',
      'Blokuj ryzykowne aktualizacje, zanim trafią na main.',
    ],
    fitsAlongsideTitle: 'Działa obok Twojego istniejącego skanera',
    fitsAlongsideBody:
      'DepOversight działa równolegle z Dependabot, Snyk, GitHub Advanced Security lub Socket — nie zastępuje ich. Skaner pozostaje Twoim źródłem prawdy dla opublikowanych advisory. DepOversight obsługuje lukę przed ujawnieniem.',
    tuneForReviewTitle: 'Dostrojony do przeglądu, nie do zmęczenia alertami',
    tuneForReviewBody:
      'Sygnały są wyzwalaczami przeglądu. Każdy zawiera źródłowy PR / commit / issue oraz zalecane działanie, aby Twój zespół zdecydował, co wymaga reakcji — fałszywe alarmy pozostają fałszywymi alarmami, nie wezwaniami.',
  },
  whatItTellsYou: {
    sectionTitle: 'Co DepOversight Ci mówi',
    items: [
      {
        title: 'Czy ufać tej zależności w tej chwili',
        body: 'Aktualny odczyt posture dla każdej zależności w Twoim grafie, nie tylko dla tych ze znanymi CVE.',
      },
      {
        title: 'Czy istnieje upstreamowa poprawka, która nie została wydana',
        body: 'Gdy istotny dla bezpieczeństwa patch jest na main, ale jeszcze nie wysłany, widzisz to przed release notes.',
      },
      {
        title: 'Czy release zawiera cichy patch bezpieczeństwa',
        body: 'Releasy są analizowane pod kątem wzorców poprawek nawet bez towarzyszącego advisory.',
      },
      {
        title: 'Czy aktualizacja wprowadza nową powierzchnię ryzyka',
        body: 'Bumpy dotykające uwierzytelniania, parsowania lub granic procesu są oznaczane do przeglądu.',
      },
      {
        title: 'Czy publiczny sygnał wyprzedza advisory',
        body: 'Widzisz lukę między pierwszym publicznym sygnałem istotnym dla bezpieczeństwa a oficjalnym advisory — zanim się zamknie.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Jak działa',
    capabilitiesLabel: 'Możliwości wykrywania',
    steps: [
      {
        title: 'Obserwacja upstream',
        body: 'Czyta w sposób ciągły PR-y, commity, issue, releasy i changelogi w Twoim zadeklarowanym grafie zależności.',
      },
      {
        title: 'Wykrywanie sygnałów istotnych',
        body: 'Stosuje reguły wykrywania dostrojone do upstreamowej aktywności: wzorce językowe, zmiany powierzchni kodu i wzorce ujawniania.',
      },
      {
        title: 'Wynoszenie zdarzeń wartych przeglądu',
        body: 'Promuje sygnały do Twojej kolejki przeglądu wraz ze źródłami, dowodami i zalecanym działaniem.',
      },
      {
        title: 'Blokowanie ryzykownych merge’y',
        body: 'PR check zatrzymuje aktualizacje zależności dotykające oznaczonych wersji, dopóki nie zostaną przejrzane.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Silnik wykrywania',
    sectionLead:
      'DepOversight nie uruchamia exploitów. Czyta aktywność upstream i wynosi wzorce, których doświadczeni inżynierowie bezpieczeństwa już szukają.',
    items: [
      {
        title: 'Tagowanie typu źródła',
        body: 'Każdy sygnał jest tagowany wg źródła: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Wykrywanie wzorców językowych',
        body: 'Identyfikuje język poprawek, język bezpieczeństwa i język ujawniania bez twierdzenia, że istnieje exploit.',
      },
      {
        title: 'Świadomość powierzchni',
        body: 'Oznacza PR-y dotykające uwierzytelniania, parsowania, deserializacji, sieci lub granic procesu.',
      },
      {
        title: 'Śledzenie stanu wydania',
        body: 'Śledzi, czy poprawka jest zmergowana, wydana, czy obecna tylko na gałęzi developerskiej.',
      },
    ],
    disclaimer:
      'Sygnały to wyzwalacze przeglądu, nie potwierdzone podatności, chyba że są powiązane z opublikowanym advisory lub CVE.',
  },
  comparison: {
    sectionTitle: 'Czym to się różni od skanera CVE',
    sectionLead:
      'Tradycyjne skanery odpowiadają: „Czy ta zależność jest podatna?" DepOversight pyta: „Czy powinniśmy ufać tej zależności teraz?"',
    columns: {
      capability: 'Możliwość',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Narzędzia takie jak Socket pokrywają się częściowo — DepOversight skupia się konkretnie na oknie przed-ujawnieniowym: aktywności upstream, która nie wygenerowała jeszcze advisory.',
    rows: [
      { capability: 'Wykrywa opublikowane CVE', scanner: 'Tak', depoversight: 'Wynosi je' },
      {
        capability: 'Wynosi publiczne upstreamowe poprawki przed advisory',
        scanner: 'Nie',
        depoversight: 'Tak',
      },
      { capability: 'Oznacza ciche patch releasy', scanner: 'Nie', depoversight: 'Tak' },
      {
        capability: 'Wykrywa PR-y w kodzie wrażliwym dla bezpieczeństwa',
        scanner: 'Nie',
        depoversight: 'Tak',
      },
      { capability: 'Podświetla okna ekspozycji', scanner: 'Nie', depoversight: 'Tak' },
      {
        capability: 'Blokuje ryzykowne upgrade’y przed mergem',
        scanner: 'Ograniczone',
        depoversight: 'Tak',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integracje',
    sectionLead: 'DepOversight czyta to, co już masz.',
    dataSourcesLabel: 'Źródła danych',
    workflowLabel: 'Workflow',
    items: [
      { name: 'GitHub', description: 'Checki PR, feedy commitów i releasów.' },
      { name: 'GitLab', description: 'Checki MR i integracja z pipeline’ami.' },
      { name: 'npm', description: 'Manifesty pakietów i krzyżowe odniesienia advisory.' },
      { name: 'PyPI', description: 'Metadane pakietów i feedy releasów.' },
      { name: 'Maven Central', description: 'Metadane artefaktów i scraping changelogów.' },
      { name: 'Go modules', description: 'Parsowanie go.mod i metadane proxy.golang.org.' },
      {
        name: 'crates.io',
        description: 'Metadane crate’ów Rust i śledzenie wersji wycofanych.',
      },
      { name: 'RubyGems', description: 'Metadane gemów i feedy releasów.' },
      { name: 'Slack', description: 'Powiadomienia w kanale, gdy sygnały wymagają przeglądu.' },
      {
        name: 'Silnik polityk',
        description: 'Konfigurowalne reguły określające, które sygnały blokują, monitorują lub powiadamiają.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Dla kogo jest DepOversight',
    items: [
      {
        title: 'Inżynieria bezpieczeństwa',
        body: 'Już triagujesz szum CVE. DepOversight wynosi sygnały, które przychodzą przed advisory — abyś decydował zamiast reagować.',
      },
      {
        title: 'Platforma i infrastruktura',
        body: 'Blokuj ryzykowne aktualizacje, zanim trafią na main. Ustawiaj politykę przy checku PR, nie przy reakcji na incydent.',
      },
      {
        title: 'Startupy mocno oparte na open source',
        body: 'Większość Twojego kodu należy do kogoś innego. Wiedz, kiedy zmienia się ich posture, zanim wydasz release, który od nich zależy.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Poproś o wczesny dostęp',
    sectionLead: 'Powiedz nam, gdzie DepOversight by się sprawdził. Odezwiemy się.',
    callout: 'Blokuj ryzykowne aktualizacje, zanim trafią na main.',
    pricing: 'Wczesny dostęp jest bezpłatny. Cenniki zostaną ogłoszone przed GA.',
    fields: {
      name: { label: 'Imię', placeholder: 'Opcjonalnie' },
      email: {
        label: 'Służbowy e-mail',
        placeholder: 'ty@firma.pl',
        error: 'Podaj poprawny adres e-mail.',
        required: 'wymagane',
      },
      company: { label: 'Firma', placeholder: 'Opcjonalnie' },
      githubOrg: { label: 'Organizacja GitHub', placeholder: 'Opcjonalnie' },
      ecosystem: { label: 'Główny ekosystem pakietów', placeholder: 'np. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Aktualne narzędzie',
        placeholder: 'Wybierz',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Inne',
        },
      },
      message: {
        label: 'Wiadomość',
        placeholder: 'Opcjonalnie — co chciałbyś zobaczyć najpierw?',
      },
    },
    submit: 'Poproś o dostęp',
    submitting: 'Wysyłanie…',
    submitError: 'Nie udało się wysłać. Spróbuj ponownie lub napisz na hello@depoversight.com.',
    success: {
      title: 'Dziękujemy — Twoja prośba została zarejestrowana.',
      body: 'Odezwiemy się, gdy otworzymy kolejne miejsca wczesnego dostępu.',
    },
    expectations:
      'Skontaktujemy się w ciągu kilku dni. Miejsca wczesnego dostępu otwierają się partiami — otrzymasz odpowiedź, nawet jeśli jesteś w kolejce.',
    privacyNotice: 'Wysyłając akceptujesz naszą <link>politykę prywatności</link>.',
  },
  footer: {
    tagline: 'Inteligencja zależności przed ujawnieniem.',
    copyright: '© {{year}} DepOversight. Wszelkie prawa zastrzeżone.',
    sections: {
      product: 'Produkt',
      resources: 'Zasoby',
    },
    links: {
      demo: 'Demo na żywo',
      howItWorks: 'Jak działa',
      compare: 'vs. skanery CVE',
      earlyAccess: 'Wczesny dostęp',
      llms: 'Discovery AI (llms.txt)',
      sitemap: 'Mapa strony',
      privacy: 'Prywatność',
      contact: 'Kontakt',
    },
    disclaimer:
      'DepOversight ujawnia sygnały do przeglądu istotne dla bezpieczeństwa na podstawie publicznej aktywności upstream. Sygnał nie jest potwierdzoną podatnością, chyba że jest powiązany z advisory lub CVE.',
  },
} satisfies Dictionary;

export default pl;
