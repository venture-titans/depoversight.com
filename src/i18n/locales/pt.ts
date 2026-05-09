// Portuguese (pt).
// Security wording: "sinais para revisão", never "vulnerabilidades confirmadas".
import type { Dictionary } from './en';

const pt = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Produto',
      demo: 'Demo',
      howItWorks: 'Como funciona',
      compare: 'Comparar',
      integrations: 'Integrações',
    },
    cta: 'Pedir acesso antecipado',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    selectLanguage: 'Selecionar idioma',
    skipToContent: 'Ir para o conteúdo',
  },
  hero: {
    eyebrow: 'Inteligência de dependências',
    title: 'Saiba quando suas dependências ficam arriscadas antes do scanner avisar.',
    subtitle:
      'O DepOversight monitora PRs, commits, issues e releases upstream para mostrar sinais relevantes para a segurança no seu grafo de dependências antes de existirem CVEs, advisories ou alertas de scanner.',
    oneLiner:
      'Os scanners de CVE dizem o que já é conhecido. O DepOversight mostra o que está começando a parecer arriscado.',
    primaryCta: 'Pedir acesso antecipado',
    secondaryCta: 'Ver demo',
    watchingLabel: 'Monitorando upstream',
    watchingSources: ['PRs', 'commits', 'issues', 'releases', 'changelogs', 'advisories'],
  },
  demo: {
    sectionTitle: 'Demo ao vivo',
    sectionLead:
      'Um instantâneo do que o DepOversight revela em uma dependência de exemplo. Todos os dados são ilustrativos.',
    project: 'Projeto',
    environment: 'Ambiente',
    environmentValue: 'produção',
    dependency: 'Dependência',
    status: 'Status',
    statusReviewRequired: 'Revisão necessária',
    live: 'Ao vivo',
    headerLine: '{{project}} · produção · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Exemplo trabalhado · Reconstrução ilustrativa',
      title: 'Comprometimento da cadeia de suprimentos do axios no npm — 31 de março de 2026',
      framing:
        'O DepOversight não estava em execução durante este incidente. Esta visualização reconstrói o que o produto teria revelado, com base no registro público.',
      sourcesLabel: 'Fontes',
    },
    replay: 'Replay',
    replayDate: '31 mar 2026',
    metrics: {
      signals: 'Sinais de segurança',
      exposureWindow: 'Possível janela de exposição',
      disclosure: 'Padrão de divulgação pública',
      sensitivePrs: 'PRs em áreas sensíveis',
      advisories: 'Advisories detectados',
    },
    filters: {
      label: 'Filtrar por severidade',
      all: 'Todos',
      high: 'Alta',
      review: 'Revisão',
      monitoring: 'Monitoramento',
      blocked: 'Bloqueada',
      empty: 'Nenhum sinal corresponde a este filtro.',
    },
    severity: {
      high: 'Alta',
      review: 'Revisão',
      monitoring: 'Monitoramento',
      blocked: 'Bloqueada',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projetos',
        signals: 'Sinais',
        integrations: 'Integrações',
      },
      severityShortcuts: {
        high: 'Alta',
        review: 'Revisão',
        monitoring: 'Monitoramento',
        resolved: 'Resolvidas',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Política',
      },
      collapseLabel: 'Workspace de demo',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Padrão histórico confirmado',
      potentialUndisclosedFix: 'Possível correção não divulgada',
      exposureWindow: 'Janela de exposição',
      prCheck: 'Verificação de PR',
      maliciousVersion: 'Versão maliciosa (removida)',
      communityConfirmed: 'Comprometimento confirmado pela comunidade',
    },
    sourceType: {
      publicGithubIssue: 'Issue público no GitHub',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Atualização de dependência',
      registryRelease: 'Release no npm',
      manifestChange: 'Alteração no manifesto do pacote',
    },
    detail: {
      summary: 'Resumo',
      whyFlagged: 'Por que foi sinalizado',
      recommendedAction: 'Ação recomendada',
      viewSource: 'Ver fonte',
      viewTimeline: 'Ver linha do tempo',
      viewPrCheck: 'Ver verificação de PR',
      severity: 'Severidade',
      status: 'Status',
      dependency: 'Dependência',
      sourceType: 'Tipo de fonte',
      empty: 'Selecione um sinal para ver os detalhes.',
      back: 'Voltar aos sinais',
    },
    prCheck: {
      title: 'Verificação DepOversight',
      result: 'Revisão necessária',
      summary:
        'A atualização de dependência inclui atividade upstream relevante para a segurança.',
      dependencyLabel: 'Dependência',
      reasonsLabel: 'Motivos',
      reasons: [
        'PRs sensíveis para segurança abertos ou recém mesclados detectados',
        'Status do release pouco claro',
        'Nenhum advisory encontrado',
        'A versão atual pode estar afetada',
      ],
      footer: 'Revisão manual necessária antes do merge.',
      close: 'Fechar',
    },
    timelineButton: 'Ver linha do tempo',
    prCheckButton: 'Ver verificação de PR',
    timelineModalTitle: 'Linha do tempo da janela de exposição',
    disclaimer:
      'O DepOversight revela sinais para revisão relevantes para a segurança baseados em atividade pública upstream. Um sinal não é uma vulnerabilidade confirmada salvo se ligado a um advisory ou CVE.',
    signals: {
      publicIssue: {
        title: 'Versões maliciosas de axios publicadas no npm',
        summary:
          'Em 31 de março de 2026 às 00:21 UTC, axios@1.14.1 foi publicado no npm; às 01:00 UTC seguiu axios@0.30.4. Ambos continham um hook post-install oculto que baixava um payload em runtime.',
        whyFlagged: [
          'Bump de versão inesperado fora do ritmo habitual de releases do mantenedor',
          'Nova dependência transitiva adicionada: plain-crypto-js@4.2.1, sem histórico prévio com axios',
          'Novo hook post-install no package.json publicado',
          'Nenhum commit correspondente no repositório git do axios para o artefato publicado',
        ],
        recommendedAction:
          'Suspenda qualquer auto-merge de upgrades de axios que toque 1.14.1 / 0.30.4 até que a origem do release seja verificada.',
      },
      publicFix: {
        title: 'Dependência transitiva suspeita introduzida',
        summary:
          'plain-crypto-js@4.2.1 aparece como dependência de runtime nos releases maliciosos do axios. O pacote foi publicado dois dias antes por um publisher sem histórico prévio.',
        whyFlagged: [
          'Pacote recém-publicado referenciado como dependência de runtime',
          'A conta do publisher não tem histórico prévio de pacotes',
          'O nome do pacote imita uma biblioteca legítima de criptografia',
          'O script post-install baixa um binário remoto',
        ],
        recommendedAction:
          'Trate plain-crypto-js@4.2.1 como não confiável; fixe na última versão segura conhecida do axios.',
      },
      mergedUnreleased: {
        title: 'Comunidade confirma que axios 1.14.1 é malicioso',
        summary:
          'Múltiplos pesquisadores independentes (Datadog, SANS, Wiz, Elastic) relatam que axios 1.14.1 implanta um RAT multiplataforma via post-install. Os mantenedores do axios reconhecem no issue #10636.',
        whyFlagged: [
          'Confirmação independente de múltiplas fontes',
          'Reconhecido pelos mantenedores no post-mortem público',
          'Payloads RAT observados em macOS, Windows, Linux',
          'Ativo durante uma janela de 3 horas antes que o npm removesse as versões',
        ],
        recommendedAction:
          'Audite qualquer ambiente de CI / desenvolvimento que possa ter instalado axios 1.14.1 entre 00:21 e 03:25 UTC.',
      },
      riskyUpdate: {
        title: 'PR de Renovate atualizando axios bloqueado',
        summary:
          'Renovate abriu um PR atualizando axios de 1.13.0 para 1.14.1. A verificação de PR do DepOversight bloqueia o merge — a versão alvo está na lista ativa de marcados, antes de qualquer CVE ter sido atribuído.',
        whyFlagged: [
          'A versão alvo (1.14.1) está na lista de marcados',
          'PR aberto durante a janela de exposição ativa',
          'Nenhum CVE atribuído na hora de abrir o PR — scanners tradicionais não teriam pego',
          'Auto-merge habilitado neste repositório',
        ],
        recommendedAction:
          'Revisão manual necessária. Fixe axios em 1.13.0 ou atualize para um release verificado quando disponível.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Cenários de segurança que o DepOversight revela',
    sectionLead:
      'O risco em dependências open source raramente chega como um único CVE. Estes são os padrões que revelamos.',
    items: {
      upstream: {
        title: 'Risco introduzido upstream',
        description:
          'Uma nova mudança upstream amplia a superfície sensível para segurança de uma dependência que você distribui.',
      },
      publicFix: {
        title: 'Risco existente corrigido publicamente',
        description:
          'Um mantenedor corrige uma issue relevante para segurança em aberto antes de qualquer advisory ser publicado.',
      },
      mergedNoRelease: {
        title: 'Correção mesclada, mas sem release',
        description:
          'A correção está na main, mas todas as versões publicadas ainda contêm o caminho de código não corrigido.',
      },
      silentPatch: {
        title: 'Release de patch silencioso',
        description:
          'Um novo release contém uma correção relevante para segurança sem advisory ou destaque nas notas de release.',
      },
      publicIssue: {
        title: 'Divulgação pública de issue',
        description:
          'Um mantenedor ou reporter publica uma issue relevante para segurança antes do triage ser concluído.',
      },
      riskyUpgrade: {
        title: 'Upgrade de dependência arriscado',
        description:
          'Um upgrade proposto introduz nova superfície de código sensível para segurança no seu grafo de dependências.',
      },
      reverted: {
        title: 'Correção revertida ou parcial',
        description:
          'Uma correção anterior relevante para segurança é revertida, restringida ou aplicada apenas parcialmente.',
      },
      degradation: {
        title: 'Degradação de confiança na dependência',
        description:
          'Sinais de manutenção em torno de uma dependência mudam de formas que justificam revisão de postura.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Onde a janela de exposição se abre',
    sectionLead:
      'Uma linha do tempo típica do sinal upstream até o CVE — e onde o DepOversight fecha a lacuna.',
    exposureWindowLabel: 'Possível janela de exposição',
    callout:
      'A lacuna perigosa não é depois da divulgação. É entre o sinal público upstream e o advisory oficial.',
    events: {
      day0Signal: { day: '31 mar · 00:21 UTC', label: 'axios@1.14.1 publicado no npm' },
      day0Flag: { day: '31 mar · ~02:00 UTC', label: 'DepOversight revela sinal de release anômalo' },
      day3Merge: { day: '31 mar · 03:25 UTC', label: 'npm remove ambas as versões de axios' },
      day7Release: { day: '1 abr', label: 'Microsoft, Datadog publicam post-mortems' },
      day14Cve: { day: '~8 abr', label: 'CVE atribuído para os releases comprometidos' },
      day14Scanner: { day: '8 abr+', label: 'Scanners tradicionais alcançam' },
    },
  },
  problem: {
    sectionTitle: 'O problema',
    sectionLead:
      'Os scanners de CVE respondem uma pergunta que já estava respondida — quando a respondem.',
    bullets: [
      'A maioria dos feeds de CVE descreve risco depois da divulgação.',
      'Correções costumam aterrissar antes da publicação dos advisories.',
      'Alguns patches saem em silêncio sem nenhum advisory.',
      'Pontos cegos do scanner deixam times reagindo em vez de decidir.',
    ],
  },
  solution: {
    sectionTitle: 'A solução',
    sectionLead:
      'O DepOversight rastreia mudanças de postura de segurança nas suas dependências open source — de PRs arriscados e correções públicas a patches sem release e janelas de exposição pré-advisory.',
    bullets: [
      'Ler atividade upstream continuamente, em todo o grafo de dependências.',
      'Detectar padrões relevantes para segurança em PRs, commits, issues, releases e changelogs.',
      'Sinalizar mudanças de postura das dependências — não apenas CVEs publicados.',
      'Bloquear atualizações arriscadas antes de chegarem na main.',
    ],
    fitsAlongsideTitle: 'Funciona junto com seu scanner existente',
    fitsAlongsideBody:
      'O DepOversight funciona junto com Dependabot, Snyk, GitHub Advanced Security ou Socket — não os substitui. O scanner continua sendo sua fonte de verdade para advisories publicados. O DepOversight cobre a lacuna antes da divulgação.',
    tuneForReviewTitle: 'Ajustado para revisão, não para fadiga de alertas',
    tuneForReviewBody:
      'Os sinais são gatilhos de revisão. Cada um vem com o PR / commit / issue de origem e a ação recomendada para que sua equipe decida o que é acionável — falsos positivos continuam sendo falsos positivos, não plantões.',
  },
  whatItTellsYou: {
    sectionTitle: 'O que o DepOversight te diz',
    items: [
      {
        title: 'Se confiar nesta dependência agora',
        body: 'Uma leitura ao vivo da postura de cada dependência do seu grafo, não só das que têm CVEs conhecidos.',
      },
      {
        title: 'Se existe correção upstream sem release',
        body: 'Quando um patch relevante para segurança está na main mas ainda sem release, você vê antes das notas de release.',
      },
      {
        title: 'Se um release contém patch de segurança silencioso',
        body: 'Releases são analisados em busca de padrões de correção mesmo sem advisory acompanhante.',
      },
      {
        title: 'Se um upgrade introduz nova superfície de risco',
        body: 'Bumps que tocam autenticação, parsing ou limites de processo são sinalizados para revisão.',
      },
      {
        title: 'Se um sinal público antecede um advisory',
        body: 'Você vê a lacuna entre o primeiro sinal público relevante e o advisory oficial — antes que ela se feche.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Como funciona',
    capabilitiesLabel: 'Capacidades de detecção',
    steps: [
      {
        title: 'Observar upstream',
        body: 'Lê continuamente PRs, commits, issues, releases e changelogs no seu grafo de dependências declarado.',
      },
      {
        title: 'Detectar sinais relevantes',
        body: 'Aplica regras de detecção ajustadas para atividade upstream relevante: padrões de linguagem, mudanças de superfície de código e padrões de divulgação.',
      },
      {
        title: 'Revelar eventos dignos de revisão',
        body: 'Promove sinais para sua fila de revisão com fontes, evidências e ação recomendada.',
      },
      {
        title: 'Bloquear merges arriscados',
        body: 'Uma verificação de PR detém atualizações de dependência que tocam versões sinalizadas até serem revisadas.',
      },
    ],
  },
  detection: {
    sectionTitle: 'O motor de detecção',
    sectionLead:
      'O DepOversight não roda exploits. Ele lê atividade upstream e revela padrões que engenheiros de segurança experientes já procuram.',
    items: [
      {
        title: 'Marcação por tipo de fonte',
        body: 'Cada sinal é marcado por fonte: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Detecção de padrões de linguagem',
        body: 'Identifica linguagem de correção, linguagem de segurança e linguagem de divulgação sem afirmar que existe um exploit.',
      },
      {
        title: 'Consciência de superfície',
        body: 'Sinaliza PRs que tocam autenticação, parsing, deserialização, rede ou limites de processo.',
      },
      {
        title: 'Acompanhamento do estado de release',
        body: 'Acompanha se uma correção está mesclada, lançada ou apenas presente em uma branch de desenvolvimento.',
      },
    ],
    disclaimer:
      'Sinais são gatilhos de revisão, não vulnerabilidades confirmadas, salvo se ligados a um advisory ou CVE publicado.',
  },
  comparison: {
    sectionTitle: 'Como isso é diferente de um scanner de CVE',
    sectionLead:
      'Scanners tradicionais respondem: "Esta dependência é vulnerável?" O DepOversight pergunta: "Devemos confiar nesta dependência agora?"',
    columns: {
      capability: 'Capacidade',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Ferramentas como o Socket se sobrepõem a partes disso — o DepOversight foca especificamente na janela pré-divulgação: atividade upstream que ainda não gerou um advisory.',
    rows: [
      { capability: 'Detecta CVEs publicados', scanner: 'Sim', depoversight: 'Revela' },
      {
        capability: 'Revela correções públicas upstream antes do advisory',
        scanner: 'Não',
        depoversight: 'Sim',
      },
      { capability: 'Sinaliza patches silenciosos', scanner: 'Não', depoversight: 'Sim' },
      {
        capability: 'Detecta PRs em código sensível para segurança',
        scanner: 'Não',
        depoversight: 'Sim',
      },
      { capability: 'Destaca janelas de exposição', scanner: 'Não', depoversight: 'Sim' },
      {
        capability: 'Bloqueia upgrades arriscados antes do merge',
        scanner: 'Limitado',
        depoversight: 'Sim',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integrações',
    sectionLead: 'O DepOversight lê o que você já tem.',
    dataSourcesLabel: 'Fontes de dados',
    workflowLabel: 'Fluxo de trabalho',
    items: [
      { name: 'GitHub', description: 'Verificações de PR, feeds de commits e releases.' },
      { name: 'GitLab', description: 'Verificações de MR e integração com pipelines.' },
      { name: 'npm', description: 'Manifests de pacotes e referência cruzada de advisories.' },
      { name: 'PyPI', description: 'Metadados de pacotes e feeds de releases.' },
      { name: 'Maven Central', description: 'Metadados de artefatos e scraping de changelog.' },
      { name: 'Go modules', description: 'Parsing de go.mod e metadados do proxy.golang.org.' },
      {
        name: 'crates.io',
        description: 'Metadados de crates Rust e acompanhamento de versões retiradas.',
      },
      { name: 'RubyGems', description: 'Metadados de gems e feeds de releases.' },
      { name: 'Slack', description: 'Notificações por canal quando os sinais exigem revisão.' },
      {
        name: 'Motor de políticas',
        description: 'Regras configuráveis para quais sinais bloqueiam, monitoram ou notificam.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Para quem é o DepOversight',
    items: [
      {
        title: 'Engenharia de segurança',
        body: 'Você já triagia ruído de CVEs. O DepOversight revela os sinais que chegam antes dos advisories — para você decidir em vez de reagir.',
      },
      {
        title: 'Plataforma e infraestrutura',
        body: 'Bloqueie atualizações arriscadas antes de chegarem na main. Defina política na verificação de PR, não na resposta a incidentes.',
      },
      {
        title: 'Startups com uso intenso de open source',
        body: 'A maior parte do seu código é de outros. Saiba quando a postura deles muda antes de publicar um release que dependa disso.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Pedir acesso antecipado',
    sectionLead: 'Conte-nos onde o DepOversight se encaixaria. Vamos retornar.',
    callout: 'Bloqueie atualizações arriscadas antes de chegarem na main.',
    pricing: 'O acesso antecipado é gratuito. Os níveis de preços serão anunciados antes do GA.',
    fields: {
      name: { label: 'Nome', placeholder: 'Opcional' },
      email: {
        label: 'E-mail corporativo',
        placeholder: 'voce@empresa.com',
        error: 'Informe um e-mail válido.',
        required: 'obrigatório',
      },
      company: { label: 'Empresa', placeholder: 'Opcional' },
      githubOrg: { label: 'Organização no GitHub', placeholder: 'Opcional' },
      ecosystem: { label: 'Principal ecossistema de pacotes', placeholder: 'ex. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Ferramenta atual',
        placeholder: 'Selecione',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Outra',
        },
      },
      message: {
        label: 'Mensagem',
        placeholder: 'Opcional — o que gostaria de ver primeiro?',
      },
    },
    submit: 'Pedir acesso',
    submitting: 'Enviando…',
    submitError: 'Não foi possível enviar. Tente novamente ou escreva para hello@depoversight.com.',
    success: {
      title: 'Obrigado — seu pedido foi registrado.',
      body: 'Entraremos em contato à medida que abrirmos mais vagas de acesso antecipado.',
    },
    expectations:
      'Entraremos em contato em alguns dias. As vagas de acesso antecipado abrem em lotes — você receberá resposta mesmo na fila.',
    privacyNotice: 'Ao enviar você concorda com nossa <link>política de privacidade</link>.',
  },
  blog: {
    indexTitle: 'Blog',
    indexLead:
      'Notas de campo sobre segurança de dependências, incidentes na cadeia de suprimentos e o que detectamos antes da divulgação.',
    readMore: 'Ler artigo',
    minRead: '{{count}} min de leitura',
    publishedOn: 'Publicado em {{date}}',
    updatedOn: 'Atualizado em {{date}}',
    backToIndex: 'Voltar ao blog',
    tagsLabel: 'Tags',
    rawMarkdown: 'Ver como markdown',
    empty: 'Ainda não há artigos, volte em breve.',
    categories: {
      industry: 'Setor',
      fundamentals: 'Fundamentos',
      tools: 'Ferramentas',
    },
  },
  footer: {
    tagline: 'Inteligência de dependências antes da divulgação.',
    copyright: '© {{year}} DepOversight. Todos os direitos reservados.',
    sections: {
      product: 'Produto',
      resources: 'Recursos',
    },
    links: {
      demo: 'Demo ao vivo',
      howItWorks: 'Como funciona',
      compare: 'vs. scanners de CVE',
      earlyAccess: 'Acesso antecipado',
      llms: 'Descoberta por IA (llms.txt)',
      sitemap: 'Mapa do site',
      privacy: 'Privacidade',
      contact: 'Contato',
    },
    disclaimer:
      'O DepOversight revela sinais para revisão relevantes para a segurança baseados em atividade pública upstream. Um sinal não é uma vulnerabilidade confirmada salvo se ligado a um advisory ou CVE.',
  },
} satisfies Dictionary;

export default pt;
