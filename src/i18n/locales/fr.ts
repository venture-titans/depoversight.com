// French (fr).
// Security wording: "signaux de revue" / "signaux à examiner", never "vulnérabilités confirmées".
import type { Dictionary } from './en';

const fr = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Produit',
      demo: 'Démo',
      howItWorks: 'Fonctionnement',
      compare: 'Comparer',
      integrations: 'Intégrations',
    },
    cta: 'Demander un accès anticipé',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    selectLanguage: 'Choisir la langue',
    skipToContent: 'Aller au contenu',
  },
  hero: {
    eyebrow: 'Renseignement sur les dépendances',
    title: 'Sachez quand vos dépendances deviennent risquées avant que votre scanner ne le dise.',
    subtitle:
      'DepOversight surveille les PRs, commits, issues et releases en amont pour faire émerger les signaux de sécurité dans votre graphe de dépendances avant l’existence des CVEs, advisories ou alertes de scanner.',
    oneLiner:
      'Les scanners de CVE vous disent ce qui est déjà connu. DepOversight vous montre ce qui commence à paraître risqué.',
    primaryCta: 'Demander un accès anticipé',
    secondaryCta: 'Voir la démo',
    watchingLabel: 'Surveille en amont',
    watchingSources: ['PRs', 'commits', 'issues', 'releases', 'changelogs', 'advisories'],
  },
  demo: {
    sectionTitle: 'Démo en direct',
    sectionLead:
      'Un aperçu de ce que DepOversight fait remonter sur une dépendance d’exemple. Toutes les données sont illustratives.',
    project: 'Projet',
    environment: 'Environnement',
    environmentValue: 'production',
    dependency: 'Dépendance',
    status: 'Statut',
    statusReviewRequired: 'Revue requise',
    live: 'En direct',
    headerLine: '{{project}} · production · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Exemple détaillé · Reconstruction illustrative',
      title: 'Compromission de la chaîne d’approvisionnement axios sur npm — 31 mars 2026',
      framing:
        'DepOversight n’était pas actif pendant cet incident. Cette vue reconstitue ce que le produit aurait fait remonter, à partir de la documentation publique.',
      sourcesLabel: 'Sources',
    },
    replay: 'Rejouer',
    replayDate: '31 mars 2026',
    metrics: {
      signals: 'Signaux de sécurité',
      exposureWindow: 'Fenêtre d’exposition possible',
      disclosure: 'Schéma de divulgation publique',
      sensitivePrs: 'PRs touchant des zones sensibles',
      advisories: 'Advisories détectés',
    },
    filters: {
      label: 'Filtrer par sévérité',
      all: 'Tous',
      high: 'Élevée',
      review: 'Revue',
      monitoring: 'Surveillance',
      blocked: 'Bloquée',
      empty: 'Aucun signal ne correspond à ce filtre.',
    },
    severity: {
      high: 'Élevée',
      review: 'Revue',
      monitoring: 'Surveillance',
      blocked: 'Bloquée',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projets',
        signals: 'Signaux',
        integrations: 'Intégrations',
      },
      severityShortcuts: {
        high: 'Élevée',
        review: 'Revue',
        monitoring: 'Surveillance',
        resolved: 'Résolus',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Politique',
      },
      collapseLabel: 'Espace de démo',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Schéma historique confirmé',
      potentialUndisclosedFix: 'Correctif potentiellement non divulgué',
      exposureWindow: 'Fenêtre d’exposition',
      prCheck: 'Vérification de PR',
      maliciousVersion: 'Version malveillante (retirée)',
      communityConfirmed: 'Compromission confirmée par la communauté',
    },
    sourceType: {
      publicGithubIssue: 'Issue GitHub publique',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Mise à jour de dépendance',
      registryRelease: 'Release npm',
      manifestChange: 'Modification du manifeste de paquet',
    },
    detail: {
      summary: 'Résumé',
      whyFlagged: 'Pourquoi signalé',
      recommendedAction: 'Action recommandée',
      viewSource: 'Voir la source',
      viewTimeline: 'Voir la chronologie',
      viewPrCheck: 'Voir la vérification de PR',
      severity: 'Sévérité',
      status: 'Statut',
      dependency: 'Dépendance',
      sourceType: 'Type de source',
      empty: 'Sélectionnez un signal pour voir les détails.',
      back: 'Retour aux signaux',
    },
    prCheck: {
      title: 'Vérification DepOversight',
      result: 'Revue requise',
      summary:
        'La mise à jour de dépendance contient une activité amont pertinente pour la sécurité.',
      dependencyLabel: 'Dépendance',
      reasonsLabel: 'Raisons',
      reasons: [
        'PRs sensibles à la sécurité ouvertes ou récemment fusionnées détectées',
        'Statut de release peu clair',
        'Aucun advisory trouvé',
        'La version actuelle peut être affectée',
      ],
      footer: 'Revue manuelle requise avant le merge.',
      close: 'Fermer',
    },
    timelineButton: 'Voir la chronologie',
    prCheckButton: 'Voir la vérification de PR',
    timelineModalTitle: 'Chronologie de la fenêtre d’exposition',
    disclaimer:
      'DepOversight fait émerger des signaux de revue pertinents pour la sécurité, à partir de l’activité publique amont. Un signal n’est pas une vulnérabilité confirmée s’il n’est pas lié à un advisory ou CVE.',
    signals: {
      publicIssue: {
        title: 'Versions axios malveillantes publiées sur npm',
        summary:
          'Le 31 mars 2026 à 00:21 UTC, axios@1.14.1 a été publié sur npm, suivi à 01:00 UTC par axios@0.30.4. Les deux contenaient un hook post-install caché qui télécharge un payload à l’exécution.',
        whyFlagged: [
          'Bump de version inattendu, hors de la cadence habituelle du mainteneur',
          'Nouvelle dépendance transitive ajoutée : plain-crypto-js@4.2.1, sans historique avec axios',
          'Nouveau hook post-install dans le package.json publié',
          'Aucun commit correspondant sur le dépôt git d’axios pour l’artefact publié',
        ],
        recommendedAction:
          'Suspendez tout auto-merge de mises à jour d’axios touchant 1.14.1 / 0.30.4 jusqu’à vérification de l’origine du release.',
      },
      publicFix: {
        title: 'Dépendance transitive suspecte introduite',
        summary:
          'plain-crypto-js@4.2.1 apparaît comme dépendance d’exécution dans les releases axios malveillants. Le paquet a été publié deux jours plus tôt par un publisher sans historique préalable.',
        whyFlagged: [
          'Paquet récemment publié référencé comme dépendance d’exécution',
          'Le compte du publisher n’a aucun historique préalable',
          'Le nom du paquet imite une bibliothèque de cryptographie légitime',
          'Le script post-install télécharge un binaire distant',
        ],
        recommendedAction:
          'Considérez plain-crypto-js@4.2.1 comme non fiable ; figez axios à la dernière version connue comme saine.',
      },
      mergedUnreleased: {
        title: 'La communauté confirme qu’axios 1.14.1 est malveillant',
        summary:
          'Plusieurs chercheurs indépendants (Datadog, SANS, Wiz, Elastic) signalent qu’axios 1.14.1 déploie un RAT multi-plateforme via post-install. Les mainteneurs d’axios le reconnaissent dans l’issue #10636.',
        whyFlagged: [
          'Confirmation indépendante par plusieurs sources',
          'Reconnu par les mainteneurs dans le post-mortem public',
          'Charges utiles RAT observées sur macOS, Windows, Linux',
          'Actif pendant une fenêtre de 3 heures avant que npm retire les versions',
        ],
        recommendedAction:
          'Auditez tout environnement CI / dev ayant pu installer axios 1.14.1 entre 00:21 et 03:25 UTC.',
      },
      riskyUpdate: {
        title: 'PR Renovate de mise à jour d’axios bloquée',
        summary:
          'Renovate a ouvert une PR mettant à jour axios de 1.13.0 vers 1.14.1. La vérification de PR DepOversight bloque le merge — la version cible est sur la liste active des versions signalées, avant qu’aucun CVE ne soit attribué.',
        whyFlagged: [
          'La version cible (1.14.1) est sur la liste signalée',
          'PR ouverte pendant la fenêtre d’exposition active',
          'Aucun CVE attribué à l’ouverture de la PR — les scanners traditionnels n’auraient rien vu',
          'Auto-merge activé dans ce dépôt',
        ],
        recommendedAction:
          'Revue manuelle requise. Figez axios à 1.13.0 ou mettez à jour vers une release vérifiée dès qu’elle est disponible.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Scénarios de sécurité que DepOversight fait émerger',
    sectionLead:
      'Le risque dans les dépendances open-source arrive rarement comme un seul CVE. Voici les schémas que nous faisons émerger.',
    items: {
      upstream: {
        title: 'Risque introduit en amont',
        description:
          'Un nouveau changement amont élargit la surface sensible à la sécurité d’une dépendance que vous embarquez.',
      },
      publicFix: {
        title: 'Risque existant corrigé publiquement',
        description:
          'Un mainteneur corrige publiquement une issue pertinente pour la sécurité avant la publication d’un advisory.',
      },
      mergedNoRelease: {
        title: 'Correctif fusionné, mais pas de release',
        description:
          'Le correctif est sur main, mais toutes les versions publiées contiennent encore le chemin de code non corrigé.',
      },
      silentPatch: {
        title: 'Release de patch silencieux',
        description:
          'Une nouvelle release contient un correctif pertinent pour la sécurité sans advisory ni mention dans les notes de version.',
      },
      publicIssue: {
        title: 'Divulgation publique d’issue',
        description:
          'Un mainteneur ou un rapporteur publie une issue pertinente pour la sécurité avant la fin du triage.',
      },
      riskyUpgrade: {
        title: 'Mise à jour de dépendance risquée',
        description:
          'Une mise à jour proposée introduit une nouvelle surface de code sensible à la sécurité dans votre graphe de dépendances.',
      },
      reverted: {
        title: 'Correctif annulé ou partiel',
        description:
          'Un correctif précédent pertinent pour la sécurité est annulé, restreint ou seulement partiellement appliqué.',
      },
      degradation: {
        title: 'Dégradation de la confiance dans la dépendance',
        description:
          'Les signaux de maintenance autour d’une dépendance évoluent d’une manière qui justifie une revue de posture.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Là où s’ouvre la fenêtre d’exposition',
    sectionLead:
      'Une chronologie typique du signal amont au CVE — et là où DepOversight comble l’écart.',
    exposureWindowLabel: 'Fenêtre d’exposition possible',
    callout:
      'L’écart dangereux n’est pas après la divulgation. Il est entre le signal amont public et l’advisory officiel.',
    events: {
      day0Signal: { day: '31 mars · 00:21 UTC', label: 'axios@1.14.1 publié sur npm' },
      day0Flag: { day: '31 mars · ~02:00 UTC', label: 'DepOversight remonte un signal de release anormal' },
      day3Merge: { day: '31 mars · 03:25 UTC', label: 'npm retire les deux versions d’axios' },
      day7Release: { day: '1 avril', label: 'Microsoft, Datadog publient des post-mortems' },
      day14Cve: { day: '~8 avril', label: 'CVE attribué pour les releases compromis' },
      day14Scanner: { day: '8 avril+', label: 'Les scanners traditionnels rattrapent leur retard' },
    },
  },
  problem: {
    sectionTitle: 'Le problème',
    sectionLead:
      'Les scanners de CVE répondent à une question déjà résolue — au moment où ils répondent.',
    bullets: [
      'La plupart des flux CVE décrivent le risque après la divulgation.',
      'Les correctifs arrivent souvent avant la publication d’un advisory.',
      'Certains patches sortent en silence sans aucun advisory.',
      'Les angles morts du scanner laissent les équipes réagir au lieu de décider.',
    ],
  },
  solution: {
    sectionTitle: 'La solution',
    sectionLead:
      'DepOversight suit les changements de posture de sécurité dans vos dépendances open-source — des PRs risquées et correctifs publics aux patches non publiés et fenêtres d’exposition pré-advisory.',
    bullets: [
      'Lire l’activité amont en continu, à travers le graphe de dépendances.',
      'Détecter des schémas pertinents pour la sécurité dans les PRs, commits, issues, releases et changelogs.',
      'Signaler les changements de posture des dépendances — pas seulement les CVEs publiés.',
      'Bloquer les mises à jour risquées de dépendances avant qu’elles n’atteignent main.',
    ],
    fitsAlongsideTitle: 'S’intègre à votre scanner existant',
    fitsAlongsideBody:
      'DepOversight fonctionne aux côtés de Dependabot, Snyk, GitHub Advanced Security ou Socket — il ne les remplace pas. Le scanner reste votre source de vérité pour les advisories publiés. DepOversight couvre l’écart avant la divulgation.',
    tuneForReviewTitle: 'Calibré pour la revue, pas pour la fatigue d’alertes',
    tuneForReviewBody:
      'Les signaux sont des déclencheurs de revue. Chacun arrive avec la PR / le commit / l’issue d’origine et l’action recommandée pour que votre équipe décide de ce qui est actionnable — les faux positifs restent des faux positifs, pas des astreintes.',
  },
  whatItTellsYou: {
    sectionTitle: 'Ce que DepOversight vous dit',
    items: [
      {
        title: 'Faut-il faire confiance à cette dépendance maintenant',
        body: 'Une lecture de posture en direct pour chaque dépendance de votre graphe, pas uniquement celles avec des CVEs connus.',
      },
      {
        title: 'Existe-t-il un correctif amont non publié',
        body: 'Quand un patch pertinent pour la sécurité est sur main mais pas encore livré, vous le voyez avant les notes de version.',
      },
      {
        title: 'Une release contient-elle un patch de sécurité silencieux',
        body: 'Les releases sont analysées pour des schémas de correctif même sans advisory associé.',
      },
      {
        title: 'Une mise à niveau introduit-elle une nouvelle surface de risque',
        body: 'Les bumps qui touchent l’authentification, le parsing ou les frontières de processus sont signalés pour revue.',
      },
      {
        title: 'Un signal public précède-t-il un advisory',
        body: 'Vous voyez l’écart entre le premier signal public pertinent et l’advisory officiel — avant qu’il ne se ferme.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Fonctionnement',
    capabilitiesLabel: 'Capacités de détection',
    steps: [
      {
        title: 'Surveiller l’amont',
        body: 'Lit en continu PRs, commits, issues, releases et changelogs sur votre graphe de dépendances déclaré.',
      },
      {
        title: 'Détecter les signaux pertinents',
        body: 'Applique des règles de détection ajustées pour l’activité amont pertinente : schémas de langage, changements de surface de code et schémas de divulgation.',
      },
      {
        title: 'Faire émerger les événements à revoir',
        body: 'Promeut les signaux dans votre file de revue avec sources, preuves et action recommandée.',
      },
      {
        title: 'Bloquer les merges risqués',
        body: 'Une vérification de PR arrête les mises à jour de dépendance qui touchent des versions signalées jusqu’à revue.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Le moteur de détection',
    sectionLead:
      'DepOversight n’exécute pas d’exploits. Il lit l’activité amont et fait émerger les schémas que les ingénieurs sécurité expérimentés cherchent déjà.',
    items: [
      {
        title: 'Étiquetage par type de source',
        body: 'Chaque signal est étiqueté par source : PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Détection de schémas de langage',
        body: 'Identifie le langage de correctif, le langage de sécurité et le langage de divulgation sans affirmer qu’un exploit existe.',
      },
      {
        title: 'Conscience de la surface',
        body: 'Signale les PRs qui touchent l’authentification, le parsing, la désérialisation, le réseau ou les frontières de processus.',
      },
      {
        title: 'Suivi de l’état de release',
        body: 'Suit si un correctif est fusionné, publié ou présent uniquement sur une branche de développement.',
      },
    ],
    disclaimer:
      'Les signaux sont des déclencheurs de revue, pas des vulnérabilités confirmées, sauf s’ils sont liés à un advisory ou CVE publié.',
  },
  comparison: {
    sectionTitle: 'En quoi cela diffère d’un scanner de CVE',
    sectionLead:
      'Les scanners traditionnels répondent : « Cette dépendance est-elle vulnérable ? » DepOversight demande : « Devons-nous faire confiance à cette dépendance maintenant ? »',
    columns: {
      capability: 'Capacité',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Des outils comme Socket recouvrent une partie de cette fonctionnalité — DepOversight se concentre spécifiquement sur la fenêtre pré-divulgation : l’activité amont qui n’a pas encore produit d’advisory.',
    rows: [
      { capability: 'Détecte les CVEs publiés', scanner: 'Oui', depoversight: 'Les fait émerger' },
      {
        capability: 'Fait émerger les correctifs publics amont avant l’advisory',
        scanner: 'Non',
        depoversight: 'Oui',
      },
      { capability: 'Signale les patches silencieux', scanner: 'Non', depoversight: 'Oui' },
      {
        capability: 'Détecte les PRs dans du code sensible',
        scanner: 'Non',
        depoversight: 'Oui',
      },
      { capability: 'Met en évidence les fenêtres d’exposition', scanner: 'Non', depoversight: 'Oui' },
      {
        capability: 'Bloque les mises à niveau risquées avant le merge',
        scanner: 'Limité',
        depoversight: 'Oui',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Intégrations',
    sectionLead: 'DepOversight lit ce que vous avez déjà.',
    dataSourcesLabel: 'Sources de données',
    workflowLabel: 'Flux de travail',
    items: [
      { name: 'GitHub', description: 'Vérifications de PR, flux de commits et de releases.' },
      { name: 'GitLab', description: 'Vérifications de MR et intégration aux pipelines.' },
      { name: 'npm', description: 'Manifestes de paquets et recoupement d’advisories.' },
      { name: 'PyPI', description: 'Métadonnées de paquets et flux de releases.' },
      { name: 'Maven Central', description: 'Métadonnées d’artefacts et scraping de changelog.' },
      { name: 'Go modules', description: 'Parsing go.mod et métadonnées proxy.golang.org.' },
      {
        name: 'crates.io',
        description: 'Métadonnées de crates Rust et suivi des versions retirées.',
      },
      { name: 'RubyGems', description: 'Métadonnées de gems et flux de releases.' },
      { name: 'Slack', description: 'Notifications par canal lorsque les signaux nécessitent une revue.' },
      {
        name: 'Moteur de politiques',
        description: 'Règles configurables pour quels signaux bloquent, surveillent ou notifient.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'À qui s’adresse DepOversight',
    items: [
      {
        title: 'Ingénierie sécurité',
        body: 'Vous triez déjà le bruit des CVEs. DepOversight fait émerger les signaux qui arrivent avant les advisories — pour décider plutôt que réagir.',
      },
      {
        title: 'Plateforme et infrastructure',
        body: 'Bloquez les mises à jour risquées avant qu’elles n’atteignent main. Définissez la politique au niveau de la vérification de PR, pas en réponse à incident.',
      },
      {
        title: 'Startups fortement open-source',
        body: 'L’essentiel de votre code appartient à d’autres. Sachez quand leur posture change avant de livrer une release qui en dépend.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Demander un accès anticipé',
    sectionLead: 'Dites-nous où DepOversight aurait sa place. Nous vous répondrons.',
    callout: 'Bloquez les mises à jour risquées de dépendances avant qu’elles n’atteignent main.',
    pricing: 'L’accès anticipé est gratuit. Les paliers de prix seront annoncés avant la GA.',
    fields: {
      name: { label: 'Nom', placeholder: 'Optionnel' },
      email: {
        label: 'E-mail professionnel',
        placeholder: 'vous@entreprise.com',
        error: 'Veuillez saisir un e-mail valide.',
        required: 'requis',
      },
      company: { label: 'Entreprise', placeholder: 'Optionnel' },
      githubOrg: { label: 'Organisation GitHub', placeholder: 'Optionnel' },
      ecosystem: { label: 'Écosystème de paquets principal', placeholder: 'ex. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Outil actuel',
        placeholder: 'Sélectionner',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Autre',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Optionnel — qu’aimeriez-vous voir en premier ?',
      },
    },
    submit: 'Demander l’accès',
    submitting: 'Envoi…',
    submitError: 'Échec de l’envoi. Réessayez ou écrivez à hello@depoversight.com.',
    success: {
      title: 'Merci — votre demande est enregistrée.',
      body: 'Nous vous recontacterons à mesure que nous ouvrirons des places en accès anticipé.',
    },
    expectations:
      'Nous vous recontacterons sous quelques jours. Les places d’accès anticipé s’ouvrent par vagues — vous aurez une réponse même si vous êtes en file d’attente.',
    privacyNotice: 'En soumettant, vous acceptez notre <link>politique de confidentialité</link>.',
  },
  blog: {
    indexTitle: 'Blog',
    indexLead:
      'Notes de terrain sur la sécurité des dépendances, les incidents de chaîne d’approvisionnement et ce que nous détectons avant la divulgation.',
    readMore: 'Lire l’article',
    minRead: '{{count}} min de lecture',
    publishedOn: 'Publié le {{date}}',
    updatedOn: 'Mis à jour le {{date}}',
    backToIndex: 'Retour au blog',
    tagsLabel: 'Tags',
    rawMarkdown: 'Voir en markdown',
    empty: 'Pas encore d’articles, revenez bientôt.',
    categories: {
      industry: 'Secteur',
      fundamentals: 'Fondamentaux',
      tools: 'Outils',
    },
  },
  footer: {
    tagline: 'Renseignement sur les dépendances avant la divulgation.',
    copyright: '© {{year}} DepOversight. Tous droits réservés.',
    sections: {
      product: 'Produit',
      resources: 'Ressources',
    },
    links: {
      demo: 'Démo en direct',
      howItWorks: 'Fonctionnement',
      compare: 'vs scanners CVE',
      earlyAccess: 'Accès anticipé',
      llms: 'Découverte IA (llms.txt)',
      sitemap: 'Plan du site',
      privacy: 'Confidentialité',
      contact: 'Contact',
    },
    disclaimer:
      'DepOversight fait émerger des signaux de revue pertinents pour la sécurité, à partir de l’activité publique amont. Un signal n’est pas une vulnérabilité confirmée s’il n’est pas lié à un advisory ou CVE.',
  },
} satisfies Dictionary;

export default fr;
