// Italian (it).
// Security wording: "segnali da revisionare" / "revisione richiesta", never "vulnerabilità confermate".
import type { Dictionary } from './en';

const it = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Prodotto',
      demo: 'Demo',
      howItWorks: 'Come funziona',
      compare: 'Confronta',
      integrations: 'Integrazioni',
    },
    cta: 'Richiedi accesso anticipato',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    selectLanguage: 'Seleziona lingua',
    skipToContent: 'Vai al contenuto',
  },
  hero: {
    eyebrow: 'Intelligence sulle dipendenze',
    title: 'Sappi quando le tue dipendenze diventano rischiose, prima che lo dica lo scanner.',
    subtitle:
      'DepOversight monitora PR, commit, issue e release upstream per far emergere segnali rilevanti per la sicurezza nel tuo grafo di dipendenze prima che esistano CVE, advisory o avvisi degli scanner.',
    oneLiner:
      'Gli scanner di CVE dicono ciò che è già noto. DepOversight mostra ciò che inizia a sembrare rischioso.',
    primaryCta: 'Richiedi accesso anticipato',
    secondaryCta: 'Guarda la demo',
    watchingLabel: 'Monitora upstream',
    watchingSources: ['PR', 'commit', 'issue', 'release', 'changelog', 'advisory'],
  },
  demo: {
    sectionEyebrow: 'Demo interattiva',
    sectionTitle: 'Demo dal vivo',
    sectionLead:
      'Un’istantanea di ciò che DepOversight fa emergere su una dipendenza di esempio. Tutti i dati sono illustrativi.',
    cta: {
      primary: 'Richiedi accesso anticipato',
      secondary: 'Come funziona',
    },
    project: 'Progetto',
    environment: 'Ambiente',
    environmentValue: 'produzione',
    dependency: 'Dipendenza',
    status: 'Stato',
    statusReviewRequired: 'Revisione richiesta',
    live: 'Live',
    headerLine: '{{project}} · produzione · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Esempio dettagliato · Ricostruzione illustrativa',
      title: 'Compromissione della supply chain di axios su npm — 31 marzo 2026',
      framing:
        'DepOversight non era attivo durante questo incidente. Questa vista ricostruisce ciò che il prodotto avrebbe fatto emergere, basandosi sulla documentazione pubblica.',
      sourcesLabel: 'Fonti',
    },
    replay: 'Replay',
    replayDate: '31 mar 2026',
    metrics: {
      signals: 'Segnali di sicurezza',
      exposureWindow: 'Possibile finestra di esposizione',
      disclosure: 'Pattern di divulgazione pubblica',
      sensitivePrs: 'PR su aree sensibili',
      advisories: 'Advisory rilevati',
    },
    filters: {
      label: 'Filtra per gravità',
      all: 'Tutti',
      high: 'Alta',
      review: 'Revisione',
      monitoring: 'Monitoraggio',
      blocked: 'Bloccata',
      empty: 'Nessun segnale corrisponde a questo filtro.',
    },
    severity: {
      high: 'Alta',
      review: 'Revisione',
      monitoring: 'Monitoraggio',
      blocked: 'Bloccata',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Progetti',
        signals: 'Segnali',
        integrations: 'Integrazioni',
      },
      severityShortcuts: {
        high: 'Alta',
        review: 'Revisione',
        monitoring: 'Monitoraggio',
        resolved: 'Risolti',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Politica',
      },
      collapseLabel: 'Workspace della demo',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Pattern storico confermato',
      potentialUndisclosedFix: 'Possibile fix non divulgato',
      exposureWindow: 'Finestra di esposizione',
      prCheck: 'Verifica PR',
      maliciousVersion: 'Versione malevola (ritirata)',
      communityConfirmed: 'Compromissione confermata dalla community',
    },
    sourceType: {
      publicGithubIssue: 'Issue GitHub pubblica',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Aggiornamento di dipendenza',
      registryRelease: 'Release npm',
      manifestChange: 'Modifica del manifest del pacchetto',
    },
    detail: {
      summary: 'Sintesi',
      whyFlagged: 'Perché segnalato',
      recommendedAction: 'Azione consigliata',
      viewSource: 'Vedi sorgente',
      viewTimeline: 'Vedi timeline',
      viewPrCheck: 'Vedi verifica PR',
      severity: 'Gravità',
      status: 'Stato',
      dependency: 'Dipendenza',
      sourceType: 'Tipo di sorgente',
      empty: 'Seleziona un segnale per vedere i dettagli.',
      back: 'Torna ai segnali',
    },
    prCheck: {
      title: 'Verifica DepOversight',
      result: 'Revisione richiesta',
      summary:
        'L’aggiornamento di dipendenza include attività upstream rilevante per la sicurezza.',
      dependencyLabel: 'Dipendenza',
      reasonsLabel: 'Motivi',
      reasons: [
        'PR sensibili alla sicurezza aperte o appena mergeate rilevate',
        'Stato della release poco chiaro',
        'Nessun advisory trovato',
        'La versione attuale potrebbe essere interessata',
      ],
      footer: 'Revisione manuale richiesta prima del merge.',
      close: 'Chiudi',
    },
    timelineButton: 'Vedi timeline',
    prCheckButton: 'Vedi verifica PR',
    timelineModalTitle: 'Timeline della finestra di esposizione',
    disclaimer:
      'DepOversight fa emergere segnali di revisione rilevanti per la sicurezza basati su attività upstream pubblica. Un segnale non è una vulnerabilità confermata salvo che sia legato a un advisory o CVE.',
    signals: {
      publicIssue: {
        title: 'Versioni axios malevole pubblicate su npm',
        summary:
          'Il 31 marzo 2026 alle 00:21 UTC, axios@1.14.1 è stato pubblicato su npm; alle 01:00 UTC è seguito axios@0.30.4. Entrambe contenevano un hook post-install nascosto che scaricava un payload a runtime.',
        whyFlagged: [
          'Bump di versione inatteso fuori dalla cadenza abituale del maintainer',
          'Nuova dipendenza transitiva aggiunta: plain-crypto-js@4.2.1, senza storico precedente con axios',
          'Nuovo hook post-install nel package.json pubblicato',
          'Nessun commit corrispondente nel repository git di axios per l’artefatto pubblicato',
        ],
        recommendedAction:
          'Sospendi qualsiasi auto-merge di upgrade di axios che tocchi 1.14.1 / 0.30.4 finché l’origine del release non sia verificata.',
      },
      publicFix: {
        title: 'Dipendenza transitiva sospetta introdotta',
        summary:
          'plain-crypto-js@4.2.1 appare come dipendenza di runtime nei release malevoli di axios. Una versione precedente (4.2.0) è stata pubblicata il giorno prima da un publisher senza storico precedente.',
        whyFlagged: [
          'Pacchetto appena pubblicato referenziato come dipendenza di runtime',
          'L’account publisher non ha storico di pacchetti precedenti',
          'Il nome del pacchetto imita una libreria di crittografia legittima',
          'Lo script post-install scarica un binario remoto',
        ],
        recommendedAction:
          'Tratta plain-crypto-js@4.2.1 come non affidabile; fissa axios alla ultima versione conosciuta come sicura.',
      },
      mergedUnreleased: {
        title: 'La community conferma che axios 1.14.1 è malevolo',
        summary:
          'Più ricercatori indipendenti (Datadog, SANS, Wiz, Elastic) segnalano che axios 1.14.1 distribuisce un RAT multi-piattaforma via post-install. I maintainer di axios riconoscono nell’issue #10636.',
        whyFlagged: [
          'Conferma indipendente da più fonti',
          'Riconosciuto dai maintainer nel post-mortem pubblico',
          'Payload RAT osservati su macOS, Windows, Linux',
          'Attivo durante una finestra di 3 ore prima che npm ritirasse le versioni',
        ],
        recommendedAction:
          'Audita ogni ambiente CI / dev che possa aver installato axios 1.14.1 tra le 00:21 e le 03:15 UTC.',
      },
      riskyUpdate: {
        title: 'PR Renovate di upgrade di axios bloccata',
        summary:
          'Renovate ha aperto una PR che aggiorna axios da 1.13.0 a 1.14.1. La verifica PR di DepOversight blocca il merge — la versione target è nella lista attiva dei segnalati, prima che venisse assegnato qualsiasi CVE.',
        whyFlagged: [
          'La versione target (1.14.1) è nella lista dei segnalati',
          'PR aperta durante la finestra di esposizione attiva',
          'Nessun CVE assegnato all’apertura della PR — gli scanner tradizionali non avrebbero rilevato nulla',
          'Auto-merge abilitato in questo repository',
        ],
        recommendedAction:
          'Revisione manuale richiesta. Fissa axios a 1.13.0 o aggiorna a un release verificato non appena disponibile.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Scenari di sicurezza che DepOversight fa emergere',
    sectionLead:
      'Il rischio nelle dipendenze open source raramente arriva come un singolo CVE. Questi sono i pattern che facciamo emergere.',
    items: {
      upstream: {
        title: 'Rischio introdotto upstream',
        description:
          'Un nuovo cambiamento upstream amplia la superficie sensibile alla sicurezza di una dipendenza che spedisci.',
      },
      publicFix: {
        title: 'Rischio esistente corretto pubblicamente',
        description:
          'Un maintainer corregge un’issue rilevante per la sicurezza in modo aperto prima della pubblicazione di qualunque advisory.',
      },
      mergedNoRelease: {
        title: 'Fix mergeato, ma senza release',
        description:
          'La fix è su main, ma ogni versione rilasciata contiene ancora il percorso di codice non patchato.',
      },
      silentPatch: {
        title: 'Release con patch silenziosa',
        description:
          'Una nuova release contiene una fix rilevante per la sicurezza senza advisory né menzione nelle release notes.',
      },
      publicIssue: {
        title: 'Divulgazione pubblica di issue',
        description:
          'Un maintainer o reporter pubblica un’issue rilevante per la sicurezza prima che il triage sia completato.',
      },
      riskyUpgrade: {
        title: 'Upgrade di dipendenza rischioso',
        description:
          'Un upgrade proposto introduce nuova superficie di codice sensibile alla sicurezza nel tuo grafo di dipendenze.',
      },
      reverted: {
        title: 'Fix annullata o parziale',
        description:
          'Una precedente fix rilevante per la sicurezza viene revertita, ridotta o solo parzialmente applicata.',
      },
      degradation: {
        title: 'Degrado della fiducia nella dipendenza',
        description:
          'I segnali di manutenzione attorno a una dipendenza cambiano in modi che giustificano una revisione di posture.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Dove si apre la finestra di esposizione',
    sectionLead:
      'Una timeline tipica dal segnale upstream al CVE — e dove DepOversight chiude il divario.',
    exposureWindowLabel: 'Possibile finestra di esposizione',
    callout:
      'Il divario pericoloso non è dopo la divulgazione. È tra il segnale pubblico upstream e l’advisory ufficiale.',
    events: {
      day0Signal: { day: '31 mar · 00:21 UTC', label: 'axios@1.14.1 pubblicato su npm' },
      day0Flag: { day: '31 mar · ~02:00 UTC', label: 'DepOversight fa emergere segnale di release anomala' },
      day3Merge: { day: '31 mar · 03:15 UTC', label: 'npm ritira entrambe le versioni di axios' },
      day7Release: { day: '1 apr', label: 'Microsoft, Datadog pubblicano post-mortem' },
      day14Cve: { day: '~8 apr', label: 'CVE assegnato per i release compromessi' },
      day14Scanner: { day: '8 apr+', label: 'Gli scanner tradizionali recuperano' },
    },
  },
  problem: {
    sectionTitle: 'Il problema',
    sectionLead:
      'Gli scanner di CVE rispondono a una domanda già risposta — nel momento in cui rispondono.',
    bullets: [
      'La maggior parte dei feed CVE descrive il rischio dopo la divulgazione.',
      'Le fix spesso atterrano prima che vengano pubblicate le advisory.',
      'Alcune patch escono in silenzio senza alcuna advisory.',
      'Le zone d’ombra degli scanner lasciano i team a reagire invece di decidere.',
    ],
  },
  solution: {
    sectionTitle: 'La soluzione',
    sectionLead:
      'DepOversight traccia i cambiamenti di posture di sicurezza nelle tue dipendenze open source — da PR rischiose e fix pubbliche a patch non rilasciate e finestre di esposizione pre-advisory.',
    bullets: [
      'Leggere l’attività upstream in continuo, su tutto il grafo di dipendenze.',
      'Rilevare pattern rilevanti in PR, commit, issue, release e changelog.',
      'Segnalare cambiamenti di posture delle dipendenze — non solo CVE pubblicate.',
      'Bloccare aggiornamenti rischiosi prima che arrivino su main.',
    ],
    fitsAlongsideTitle: 'Si integra con il tuo scanner esistente',
    fitsAlongsideBody:
      'DepOversight funziona insieme a Dependabot, Snyk, GitHub Advanced Security o Socket — non li sostituisce. Lo scanner resta la tua fonte di verità per gli advisory pubblicati. DepOversight copre il divario prima della divulgazione.',
    tuneForReviewTitle: 'Calibrato per la revisione, non per la fatica da allerte',
    tuneForReviewBody:
      'I segnali sono trigger di revisione. Ognuno arriva con la PR / commit / issue di origine e l’azione consigliata, così il tuo team decide cosa è azionabile — i falsi positivi restano falsi positivi, non chiamate notturne.',
  },
  whatItTellsYou: {
    sectionTitle: 'Cosa ti dice DepOversight',
    items: [
      {
        title: 'Se fidarsi di questa dipendenza adesso',
        body: 'Una lettura di posture in tempo reale per ogni dipendenza nel tuo grafo, non solo per quelle con CVE noti.',
      },
      {
        title: 'Se esiste una fix upstream non rilasciata',
        body: 'Quando una patch rilevante è su main ma non ancora rilasciata, la vedi prima delle release notes.',
      },
      {
        title: 'Se una release contiene una patch di sicurezza silenziosa',
        body: 'Le release vengono analizzate per pattern di fix anche quando nessun advisory le accompagna.',
      },
      {
        title: 'Se un upgrade introduce nuova superficie di rischio',
        body: 'I bump che toccano autenticazione, parsing o confini di processo vengono segnalati per revisione.',
      },
      {
        title: 'Se un segnale pubblico precede un advisory',
        body: 'Vedi il divario tra il primo segnale pubblico rilevante e l’advisory ufficiale — prima che si chiuda.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Come funziona',
    capabilitiesLabel: 'Capacità di rilevamento',
    steps: [
      {
        title: 'Osservare upstream',
        body: 'Legge in continuo PR, commit, issue, release e changelog del tuo grafo di dipendenze dichiarato.',
      },
      {
        title: 'Rilevare segnali rilevanti',
        body: 'Applica regole di rilevamento tarate per attività upstream rilevante: pattern di linguaggio, cambi di superficie di codice e pattern di divulgazione.',
      },
      {
        title: 'Far emergere eventi degni di revisione',
        body: 'Promuove i segnali nella tua coda di revisione con sorgenti, evidenze e azione consigliata.',
      },
      {
        title: 'Bloccare merge rischiosi',
        body: 'Un controllo PR ferma gli aggiornamenti di dipendenza che toccano versioni segnalate fino alla revisione.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Il motore di rilevamento',
    sectionLead:
      'DepOversight non esegue exploit. Legge l’attività upstream e fa emergere pattern che gli ingegneri di sicurezza esperti già cercano.',
    items: [
      {
        title: 'Etichettatura per tipo di sorgente',
        body: 'Ogni segnale è etichettato per sorgente: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Rilevamento di pattern di linguaggio',
        body: 'Identifica linguaggio di fix, di sicurezza e di divulgazione senza affermare che esista un exploit.',
      },
      {
        title: 'Consapevolezza della superficie',
        body: 'Segnala PR che toccano autenticazione, parsing, deserializzazione, rete o confini di processo.',
      },
      {
        title: 'Tracking dello stato di release',
        body: 'Traccia se una fix è mergeata, rilasciata o presente solo su un branch di sviluppo.',
      },
    ],
    disclaimer:
      'I segnali sono trigger di revisione, non vulnerabilità confermate, salvo che siano legati a un advisory o CVE pubblicato.',
  },
  comparison: {
    sectionTitle: 'In cosa differisce da uno scanner di CVE',
    sectionLead:
      'Gli scanner tradizionali rispondono: "Questa dipendenza è vulnerabile?" DepOversight chiede: "Dovremmo fidarci di questa dipendenza ora?"',
    columns: {
      capability: 'Capacità',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Strumenti come Socket si sovrappongono in parte — DepOversight si concentra specificamente sulla finestra pre-divulgazione: attività upstream che non ha ancora prodotto un advisory.',
    rows: [
      { capability: 'Rileva CVE pubblicate', scanner: 'Sì', depoversight: 'Le fa emergere' },
      {
        capability: 'Fa emergere fix pubbliche upstream prima dell’advisory',
        scanner: 'No',
        depoversight: 'Sì',
      },
      { capability: 'Segnala release con patch silenziose', scanner: 'No', depoversight: 'Sì' },
      {
        capability: 'Rileva PR su codice sensibile',
        scanner: 'No',
        depoversight: 'Sì',
      },
      { capability: 'Evidenzia finestre di esposizione', scanner: 'No', depoversight: 'Sì' },
      {
        capability: 'Blocca upgrade rischiosi prima del merge',
        scanner: 'Limitato',
        depoversight: 'Sì',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integrazioni',
    sectionLead: 'DepOversight legge ciò che hai già.',
    dataSourcesLabel: 'Fonti dati',
    workflowLabel: 'Flusso di lavoro',
    items: [
      { name: 'GitHub', description: 'Controlli PR, feed di commit e release.' },
      { name: 'GitLab', description: 'Controlli MR e integrazione con le pipeline.' },
      { name: 'npm', description: 'Manifest dei pacchetti e cross-reference degli advisory.' },
      { name: 'PyPI', description: 'Metadati dei pacchetti e feed di release.' },
      { name: 'Maven Central', description: 'Metadati degli artifact e scraping del changelog.' },
      { name: 'Go modules', description: 'Parsing di go.mod e metadati di proxy.golang.org.' },
      {
        name: 'crates.io',
        description: 'Metadati dei crate Rust e tracking delle versioni ritirate.',
      },
      { name: 'RubyGems', description: 'Metadati delle gem e feed di release.' },
      { name: 'Slack', description: 'Notifiche di canale quando i segnali richiedono revisione.' },
      {
        name: 'Motore di politiche',
        description: 'Regole configurabili per quali segnali bloccano, monitorano o notificano.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'A chi è rivolto DepOversight',
    items: [
      {
        title: 'Security engineering',
        body: 'Stai già triagando il rumore dei CVE. DepOversight fa emergere i segnali che arrivano prima degli advisory — così decidi invece di reagire.',
      },
      {
        title: 'Piattaforma e infrastruttura',
        body: 'Blocca aggiornamenti di dipendenza rischiosi prima che arrivino su main. Imposta la policy al controllo PR, non in incident response.',
      },
      {
        title: 'Startup ad alto uso di open source',
        body: 'La maggior parte del tuo codice è di altri. Sappi quando la loro posture cambia prima di rilasciare una versione che ne dipende.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Richiedi accesso anticipato',
    sectionLead: 'Dicci dove DepOversight si inserirebbe. Ti ricontatteremo.',
    callout: 'Blocca gli aggiornamenti di dipendenza rischiosi prima che arrivino su main.',
    pricing: 'L’accesso anticipato è gratuito. I livelli di prezzo saranno annunciati prima del GA.',
    fields: {
      name: { label: 'Nome', placeholder: 'Facoltativo' },
      email: {
        label: 'Email di lavoro',
        placeholder: 'tu@azienda.it',
        error: 'Inserisci un’email valida.',
        required: 'obbligatorio',
      },
      company: { label: 'Azienda', placeholder: 'Facoltativo' },
      githubOrg: { label: 'Organizzazione GitHub', placeholder: 'Facoltativo' },
      ecosystem: { label: 'Principale ecosistema di pacchetti', placeholder: 'es. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Strumento attuale',
        placeholder: 'Seleziona',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Altro',
        },
      },
      message: {
        label: 'Messaggio',
        placeholder: 'Facoltativo — cosa vorresti vedere per primo?',
      },
    },
    submit: 'Richiedi accesso',
    submitting: 'Invio…',
    submitError: 'Invio non riuscito. Riprova o scrivi a hello@depoversight.com.',
    success: {
      title: 'Grazie — la tua richiesta è arrivata.',
      body: 'Ti contatteremo man mano che apriremo nuovi posti di accesso anticipato.',
    },
    expectations:
      'Ti ricontatteremo in pochi giorni. I posti per l’accesso anticipato si aprono a lotti — riceverai una risposta anche se sei in coda.',
    privacyNotice: 'Inviando accetti la nostra <link>informativa sulla privacy</link>.',
  },
  blog: {
    indexTitle: 'Blog',
    indexLead:
      'Note dal campo su sicurezza delle dipendenze, incidenti nella supply chain e ciò che rileviamo prima della divulgazione.',
    readMore: 'Leggi articolo',
    minRead: '{{count}} min di lettura',
    publishedOn: 'Pubblicato il {{date}}',
    updatedOn: 'Aggiornato il {{date}}',
    backToIndex: 'Torna al blog',
    tagsLabel: 'Tag',
    rawMarkdown: 'Visualizza come markdown',
    empty: 'Nessun articolo ancora, torna presto.',
    categories: {
      industry: 'Settore',
      fundamentals: 'Fondamenti',
      tools: 'Strumenti',
    },
  },
  footer: {
    tagline: 'Intelligence sulle dipendenze prima della divulgazione.',
    copyright: '© {{year}} DepOversight. Tutti i diritti riservati.',
    sections: {
      product: 'Prodotto',
      resources: 'Risorse',
    },
    links: {
      demo: 'Demo dal vivo',
      howItWorks: 'Come funziona',
      compare: 'vs. scanner CVE',
      earlyAccess: 'Accesso anticipato',
      llms: 'Discovery AI (llms.txt)',
      sitemap: 'Sitemap',
      privacy: 'Privacy',
      contact: 'Contatto',
    },
    disclaimer:
      'DepOversight fa emergere segnali di revisione rilevanti per la sicurezza basati su attività upstream pubblica. Un segnale non è una vulnerabilità confermata salvo che sia legato a un advisory o CVE.',
  },
} satisfies Dictionary;

export default it;
