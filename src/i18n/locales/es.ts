// Spanish (es).
// Security wording: "señales para revisión", never "vulnerabilidades confirmadas".
import type { Dictionary } from './en';

const es = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Producto',
      demo: 'Demo',
      howItWorks: 'Cómo funciona',
      compare: 'Comparar',
      integrations: 'Integraciones',
    },
    cta: 'Solicitar acceso anticipado',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    selectLanguage: 'Seleccionar idioma',
    skipToContent: 'Saltar al contenido',
  },
  hero: {
    eyebrow: 'Inteligencia de dependencias',
    title: 'Sepa cuándo sus dependencias se vuelven riesgosas antes que su escáner se lo diga.',
    subtitle:
      'DepOversight monitorea PRs, commits, issues y releases upstream para revelar señales relevantes para la seguridad en su grafo de dependencias antes de que existan CVEs, advisories o alertas de escáner.',
    oneLiner:
      'Los escáneres de CVE le dicen lo que ya se sabe. DepOversight le muestra lo que está empezando a parecer riesgoso.',
    primaryCta: 'Solicitar acceso anticipado',
    secondaryCta: 'Ver demo en vivo',
    watchingLabel: 'Monitoreando upstream',
    watchingSources: ['PRs', 'commits', 'issues', 'releases', 'changelogs', 'advisories'],
  },
  demo: {
    sectionTitle: 'Demo en vivo',
    sectionLead:
      'Una instantánea de lo que DepOversight revela en una dependencia de ejemplo. Todos los datos son ilustrativos.',
    project: 'Proyecto',
    environment: 'Entorno',
    environmentValue: 'producción',
    dependency: 'Dependencia',
    status: 'Estado',
    statusReviewRequired: 'Revisión requerida',
    live: 'En vivo',
    headerLine: '{{project}} · producción · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Ejemplo trabajado · Reconstrucción ilustrativa',
      title: 'Compromiso de la cadena de suministro de axios en npm — 31 de marzo de 2026',
      framing:
        'DepOversight no estaba en ejecución durante este incidente. Esta vista reconstruye lo que el producto habría revelado, basándose en el registro público.',
      sourcesLabel: 'Fuentes',
    },
    replay: 'Repetición',
    replayDate: '31 mar 2026',
    metrics: {
      signals: 'Señales de seguridad',
      exposureWindow: 'Posible ventana de exposición',
      disclosure: 'Patrón de divulgación pública',
      sensitivePrs: 'PRs en áreas sensibles',
      advisories: 'Advisories detectados',
    },
    filters: {
      label: 'Filtrar por severidad',
      all: 'Todas',
      high: 'Alta',
      review: 'Revisión',
      monitoring: 'Monitoreo',
      blocked: 'Bloqueada',
      empty: 'Ninguna señal coincide con este filtro.',
    },
    severity: {
      high: 'Alta',
      review: 'Revisión',
      monitoring: 'Monitoreo',
      blocked: 'Bloqueada',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Proyectos',
        signals: 'Señales',
        integrations: 'Integraciones',
      },
      severityShortcuts: {
        high: 'Alta',
        review: 'Revisión',
        monitoring: 'Monitoreo',
        resolved: 'Resueltas',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Política',
      },
      collapseLabel: 'Espacio de demo',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Patrón histórico confirmado',
      potentialUndisclosedFix: 'Posible corrección no divulgada',
      exposureWindow: 'Ventana de exposición',
      prCheck: 'Verificación de PR',
      maliciousVersion: 'Versión maliciosa (retirada)',
      communityConfirmed: 'Compromiso confirmado por la comunidad',
    },
    sourceType: {
      publicGithubIssue: 'Issue público de GitHub',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Actualización de dependencia',
      registryRelease: 'Release de npm',
      manifestChange: 'Cambio en el manifiesto del paquete',
    },
    detail: {
      summary: 'Resumen',
      whyFlagged: 'Por qué se marcó',
      recommendedAction: 'Acción recomendada',
      viewSource: 'Ver fuente',
      viewTimeline: 'Ver línea de tiempo',
      viewPrCheck: 'Ver verificación de PR',
      severity: 'Severidad',
      status: 'Estado',
      dependency: 'Dependencia',
      sourceType: 'Tipo de fuente',
      empty: 'Seleccione una señal para ver los detalles.',
      back: 'Volver a las señales',
    },
    prCheck: {
      title: 'Verificación de DepOversight',
      result: 'Revisión requerida',
      summary:
        'La actualización de dependencia incluye actividad upstream relevante para la seguridad.',
      dependencyLabel: 'Dependencia',
      reasonsLabel: 'Motivos',
      reasons: [
        'PRs sensibles a la seguridad abiertos o recientemente fusionados detectados',
        'Estado del release poco claro',
        'No se encontró advisory',
        'La versión actual puede verse afectada',
      ],
      footer: 'Se requiere revisión manual antes del merge.',
      close: 'Cerrar',
    },
    timelineButton: 'Ver línea de tiempo',
    prCheckButton: 'Ver verificación de PR',
    timelineModalTitle: 'Línea de tiempo de la ventana de exposición',
    disclaimer:
      'DepOversight revela señales para revisión relevantes para la seguridad basadas en actividad pública upstream. Una señal no es una vulnerabilidad confirmada salvo que esté ligada a un advisory o CVE.',
    signals: {
      publicIssue: {
        title: 'Versiones maliciosas de axios publicadas en npm',
        summary:
          'El 31 de marzo de 2026 a las 00:21 UTC se publicó axios@1.14.1 en npm; a las 01:00 UTC le siguió axios@0.30.4. Ambas contenían un hook post-install oculto que descargaba un payload en runtime.',
        whyFlagged: [
          'Bump de versión inesperado fuera de la cadencia habitual del mantenedor',
          'Nueva dependencia transitiva añadida: plain-crypto-js@4.2.1, sin historial previo con axios',
          'Nuevo hook post-install en el package.json publicado',
          'Sin commit equivalente en el repositorio git de axios para el artefacto publicado',
        ],
        recommendedAction:
          'Detenga cualquier auto-merge de upgrades de axios que toque 1.14.1 / 0.30.4 hasta verificar el origen del release.',
      },
      publicFix: {
        title: 'Dependencia transitiva sospechosa introducida',
        summary:
          'plain-crypto-js@4.2.1 aparece como dependencia en runtime de los releases maliciosos de axios. El paquete fue publicado dos días antes por un publisher sin historial previo.',
        whyFlagged: [
          'Paquete recién publicado referenciado como dependencia en runtime',
          'La cuenta del publisher no tiene historial previo de paquetes',
          'El nombre del paquete imita una librería legítima de criptografía',
          'El script post-install descarga un binario remoto',
        ],
        recommendedAction:
          'Trate plain-crypto-js@4.2.1 como no confiable; fije a la última versión segura conocida de axios.',
      },
      mergedUnreleased: {
        title: 'La comunidad confirma que axios 1.14.1 es malicioso',
        summary:
          'Múltiples investigadores independientes (Datadog, SANS, Wiz, Elastic) reportan que axios 1.14.1 despliega un RAT multiplataforma vía post-install. Los mantenedores de axios lo reconocen en el issue #10636.',
        whyFlagged: [
          'Confirmación independiente de múltiples fuentes',
          'Reconocido por los mantenedores en el post-mortem público',
          'Payloads RAT observados en macOS, Windows, Linux',
          'Activo durante una ventana de 3 horas antes de que npm retirara las versiones',
        ],
        recommendedAction:
          'Audite cualquier entorno de CI / desarrollo que pueda haber instalado axios 1.14.1 entre las 00:21 y las 03:25 UTC.',
      },
      riskyUpdate: {
        title: 'PR de Renovate que actualiza axios bloqueado',
        summary:
          'Renovate abrió un PR actualizando axios de 1.13.0 a 1.14.1. La verificación de PR de DepOversight bloquea el merge — la versión objetivo está en la lista de marcados activos, antes de que se asignara cualquier CVE.',
        whyFlagged: [
          'La versión objetivo (1.14.1) está en la lista de marcados',
          'PR abierto durante la ventana de exposición activa',
          'No se asignó CVE en el momento de abrir el PR — los escáneres tradicionales no lo habrían detectado',
          'Auto-merge habilitado en este repositorio',
        ],
        recommendedAction:
          'Se requiere revisión manual. Fije axios a 1.13.0 o actualice a un release verificado cuando esté disponible.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Escenarios de seguridad que DepOversight revela',
    sectionLead:
      'El riesgo en dependencias open-source rara vez llega como un único CVE. Estos son los patrones que revelamos.',
    items: {
      upstream: {
        title: 'Riesgo introducido upstream',
        description:
          'Un cambio nuevo upstream amplía la superficie sensible para la seguridad de una dependencia que usted distribuye.',
      },
      publicFix: {
        title: 'Riesgo existente corregido públicamente',
        description:
          'Un mantenedor corrige una issue relevante para la seguridad de forma abierta antes de que se publique cualquier advisory.',
      },
      mergedNoRelease: {
        title: 'Corrección fusionada, pero sin release',
        description:
          'La corrección está en main, pero todas las versiones publicadas siguen conteniendo la ruta de código sin parchear.',
      },
      silentPatch: {
        title: 'Release con parche silencioso',
        description:
          'Un nuevo release contiene una corrección relevante para la seguridad sin advisory ni mención en las notas de versión.',
      },
      publicIssue: {
        title: 'Divulgación pública de issue',
        description:
          'Un mantenedor o reporter publica un issue relevante para la seguridad antes de que se complete el triage.',
      },
      riskyUpgrade: {
        title: 'Actualización de dependencia riesgosa',
        description:
          'Una actualización propuesta introduce nueva superficie de código sensible a la seguridad en su grafo de dependencias.',
      },
      reverted: {
        title: 'Corrección revertida o parcial',
        description:
          'Una corrección relevante para la seguridad anterior se revierte, se reduce o se aplica solo parcialmente.',
      },
      degradation: {
        title: 'Degradación de confianza en la dependencia',
        description:
          'Las señales de mantenimiento de una dependencia cambian de formas que justifican una revisión de postura.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Dónde se abre la ventana de exposición',
    sectionLead:
      'Una línea de tiempo típica desde la señal upstream hasta el CVE — y dónde DepOversight cierra la brecha.',
    exposureWindowLabel: 'Posible ventana de exposición',
    callout:
      'La brecha peligrosa no es después de la divulgación. Es entre la señal pública upstream y el advisory oficial.',
    events: {
      day0Signal: { day: '31 mar · 00:21 UTC', label: 'axios@1.14.1 publicado en npm' },
      day0Flag: { day: '31 mar · ~02:00 UTC', label: 'DepOversight revela señal de release anómalo' },
      day3Merge: { day: '31 mar · 03:25 UTC', label: 'npm retira ambas versiones de axios' },
      day7Release: { day: '1 abr', label: 'Microsoft, Datadog publican post-mortems' },
      day14Cve: { day: '~8 abr', label: 'Se asigna CVE para los releases comprometidos' },
      day14Scanner: { day: '8 abr+', label: 'Los escáneres tradicionales se ponen al día' },
    },
  },
  problem: {
    sectionTitle: 'El problema',
    sectionLead:
      'Los escáneres de CVE responden una pregunta que ya estaba respondida — para cuando la responden.',
    bullets: [
      'La mayoría de los feeds de CVE describen el riesgo después de la divulgación.',
      'Las correcciones suelen aterrizar antes de que se publiquen los advisories.',
      'Algunos parches se publican en silencio sin advisory alguno.',
      'Los puntos ciegos del escáner dejan a los equipos reaccionando en lugar de decidir.',
    ],
  },
  solution: {
    sectionTitle: 'La solución',
    sectionLead:
      'DepOversight rastrea cambios de postura de seguridad en sus dependencias open-source — desde PRs riesgosos y correcciones públicas hasta parches sin release y ventanas de exposición previas al advisory.',
    bullets: [
      'Lea actividad upstream de forma continua, en todo el grafo de dependencias.',
      'Detecte patrones relevantes para la seguridad en PRs, commits, issues, releases y changelogs.',
      'Marque cambios de postura de las dependencias — no solo CVEs publicados.',
      'Bloquee actualizaciones riesgosas de dependencias antes de que lleguen a main.',
    ],
    fitsAlongsideTitle: 'Funciona junto con tu escáner existente',
    fitsAlongsideBody:
      'DepOversight funciona junto con Dependabot, Snyk, GitHub Advanced Security o Socket — no los reemplaza. El escáner sigue siendo tu fuente de verdad para advisories publicados. DepOversight cubre la brecha antes de la divulgación.',
    tuneForReviewTitle: 'Ajustado para revisión, no para fatiga de alertas',
    tuneForReviewBody:
      'Las señales son disparadores de revisión. Cada una incluye el PR / commit / issue de origen y la acción recomendada para que tu equipo decida qué es accionable — los falsos positivos siguen siendo falsos positivos, no llamadas.',
  },
  whatItTellsYou: {
    sectionTitle: 'Lo que DepOversight le dice',
    items: [
      {
        title: 'Si confiar en esta dependencia ahora mismo',
        body: 'Una lectura de postura en vivo de cada dependencia de su grafo, no solo de las que tienen CVEs conocidos.',
      },
      {
        title: 'Si existe una corrección upstream pero sin release',
        body: 'Cuando un parche relevante para la seguridad está en main pero aún sin publicar, lo ve antes que las notas de versión.',
      },
      {
        title: 'Si un release contiene un parche de seguridad silencioso',
        body: 'Los releases se analizan en busca de patrones de corrección incluso cuando no los acompaña ningún advisory.',
      },
      {
        title: 'Si una actualización introduce nueva superficie de riesgo',
        body: 'Los bumps que tocan autenticación, parsing o límites de proceso se marcan para revisión.',
      },
      {
        title: 'Si una señal pública precede a un advisory',
        body: 'Ve la brecha entre la primera señal pública relevante para la seguridad y el advisory oficial — antes de que se cierre.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Cómo funciona',
    capabilitiesLabel: 'Capacidades de detección',
    steps: [
      {
        title: 'Vigilar upstream',
        body: 'Lee de forma continua PRs, commits, issues, releases y changelogs en su grafo de dependencias declarado.',
      },
      {
        title: 'Detectar señales relevantes para la seguridad',
        body: 'Aplica reglas de detección ajustadas para actividad upstream relevante: patrones de lenguaje, cambios de superficie de código y patrones de divulgación.',
      },
      {
        title: 'Revelar eventos dignos de revisión',
        body: 'Promueve señales a su cola de revisión con fuentes, evidencia y acción recomendada.',
      },
      {
        title: 'Bloquear merges riesgosos',
        body: 'Una verificación de PR detiene actualizaciones de dependencia que tocan versiones marcadas hasta su revisión.',
      },
    ],
  },
  detection: {
    sectionTitle: 'El motor de detección',
    sectionLead:
      'DepOversight no ejecuta exploits. Lee actividad upstream y revela patrones que los ingenieros de seguridad experimentados ya buscan.',
    items: [
      {
        title: 'Etiquetado por tipo de fuente',
        body: 'Cada señal se etiqueta por fuente: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Detección de patrones de lenguaje',
        body: 'Identifica lenguaje de corrección, lenguaje de seguridad y lenguaje de divulgación sin afirmar que existe un exploit.',
      },
      {
        title: 'Conciencia de superficie',
        body: 'Marca PRs que tocan autenticación, parsing, deserialización, red o límites de proceso.',
      },
      {
        title: 'Seguimiento del estado de release',
        body: 'Rastrea si una corrección está fusionada, publicada o solo presente en una rama de desarrollo.',
      },
    ],
    disclaimer:
      'Las señales son disparadores de revisión, no vulnerabilidades confirmadas, salvo que estén ligadas a un advisory o CVE publicado.',
  },
  comparison: {
    sectionTitle: 'En qué se diferencia esto de un escáner de CVE',
    sectionLead:
      'Los escáneres tradicionales responden: "¿Es esta dependencia vulnerable?" DepOversight pregunta: "¿Deberíamos confiar en esta dependencia ahora mismo?"',
    columns: {
      capability: 'Capacidad',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Herramientas como Socket se solapan con partes de esto — DepOversight se centra específicamente en la ventana previa a la divulgación: actividad upstream que aún no ha producido un advisory.',
    rows: [
      { capability: 'Detecta CVEs publicados', scanner: 'Sí', depoversight: 'Los revela' },
      {
        capability: 'Revela correcciones públicas upstream antes del advisory',
        scanner: 'No',
        depoversight: 'Sí',
      },
      { capability: 'Marca releases con parche silencioso', scanner: 'No', depoversight: 'Sí' },
      {
        capability: 'Detecta PRs en código sensible a la seguridad',
        scanner: 'No',
        depoversight: 'Sí',
      },
      { capability: 'Resalta ventanas de exposición', scanner: 'No', depoversight: 'Sí' },
      {
        capability: 'Bloquea actualizaciones de dependencia riesgosas antes del merge',
        scanner: 'Limitado',
        depoversight: 'Sí',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integraciones',
    sectionLead: 'DepOversight lee lo que ya tiene.',
    dataSourcesLabel: 'Fuentes de datos',
    workflowLabel: 'Flujo de trabajo',
    items: [
      { name: 'GitHub', description: 'Verificaciones de PR, feeds de commits y releases.' },
      { name: 'GitLab', description: 'Verificaciones de MR e integración con pipelines.' },
      { name: 'npm', description: 'Manifiestos de paquetes y referencia cruzada de advisories.' },
      { name: 'PyPI', description: 'Metadatos de paquetes y feeds de releases.' },
      { name: 'Maven Central', description: 'Metadatos de artefactos y scraping de changelog.' },
      { name: 'Go modules', description: 'Parseo de go.mod y metadatos de proxy.golang.org.' },
      {
        name: 'crates.io',
        description: 'Metadatos de crates de Rust y seguimiento de versiones retiradas.',
      },
      { name: 'RubyGems', description: 'Metadatos de gems y feeds de releases.' },
      { name: 'Slack', description: 'Notificaciones por canal cuando las señales requieren revisión.' },
      {
        name: 'Motor de políticas',
        description: 'Reglas configurables para qué señales bloquean, monitorean o notifican.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Para quién es DepOversight',
    items: [
      {
        title: 'Ingeniería de seguridad',
        body: 'Ya hace triage del ruido de CVEs. DepOversight revela las señales que llegan antes de los advisories — para que decida en lugar de reaccionar.',
      },
      {
        title: 'Plataforma e infraestructura',
        body: 'Bloquee actualizaciones de dependencia riesgosas antes de que lleguen a main. Defina la política en la verificación de PR, no en la respuesta a incidentes.',
      },
      {
        title: 'Startups con uso intensivo de open-source',
        body: 'La mayor parte de su código es de otros. Sepa cuándo cambia su postura antes de publicar un release que dependa de él.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Solicitar acceso anticipado',
    sectionLead: 'Cuéntenos dónde encajaría DepOversight. Le contestaremos.',
    callout: 'Bloquee actualizaciones de dependencia riesgosas antes de que lleguen a main.',
    pricing: 'El acceso anticipado es gratuito. Los niveles de precios se anunciarán antes del GA.',
    fields: {
      name: { label: 'Nombre', placeholder: 'Opcional' },
      email: {
        label: 'Correo de trabajo',
        placeholder: 'usted@empresa.com',
        error: 'Introduzca un correo válido.',
        required: 'requerido',
      },
      company: { label: 'Empresa', placeholder: 'Opcional' },
      githubOrg: { label: 'Organización de GitHub', placeholder: 'Opcional' },
      ecosystem: { label: 'Ecosistema principal de paquetes', placeholder: 'ej. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Herramienta actual',
        placeholder: 'Seleccione una',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Otro',
        },
      },
      message: {
        label: 'Mensaje',
        placeholder: 'Opcional — ¿qué le gustaría ver primero?',
      },
    },
    submit: 'Solicitar acceso',
    submitting: 'Enviando…',
    submitError: 'No se pudo enviar. Inténtalo de nuevo o escribe a hello@depoversight.com.',
    success: {
      title: 'Gracias — su solicitud está registrada.',
      body: 'Le contactaremos a medida que abramos más cupos de acceso anticipado.',
    },
    expectations:
      'Te contactaremos en unos días. Los cupos de acceso anticipado se abren por lotes — recibirás respuesta incluso si estás en cola.',
    privacyNotice: 'Al enviar aceptas nuestra <link>política de privacidad</link>.',
  },
  footer: {
    tagline: 'Inteligencia de dependencias antes de la divulgación.',
    copyright: '© {{year}} DepOversight. Todos los derechos reservados.',
    sections: {
      product: 'Producto',
      resources: 'Recursos',
    },
    links: {
      demo: 'Demo en vivo',
      howItWorks: 'Cómo funciona',
      compare: 'vs. escáneres de CVE',
      earlyAccess: 'Acceso anticipado',
      llms: 'Descubrimiento por IA (llms.txt)',
      sitemap: 'Mapa del sitio',
      privacy: 'Privacidad',
      contact: 'Contacto',
    },
    disclaimer:
      'DepOversight revela señales para revisión relevantes para la seguridad basadas en actividad pública upstream. Una señal no es una vulnerabilidad confirmada salvo que esté ligada a un advisory o CVE.',
  },
} satisfies Dictionary;

export default es;
