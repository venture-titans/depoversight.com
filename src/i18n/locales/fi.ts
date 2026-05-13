// Finnish (fi).
// Security wording: "tarkistussignaalit" / "vaatii tarkistuksen", never "vahvistettuja haavoittuvuuksia".
import type { Dictionary } from './en';

const fi = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Tuote',
      demo: 'Demo',
      howItWorks: 'Miten toimii',
      compare: 'Vertaa',
      integrations: 'Integraatiot',
    },
    cta: 'Pyydä varhainen pääsy',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
    selectLanguage: 'Valitse kieli',
    skipToContent: 'Siirry sisältöön',
  },
  hero: {
    eyebrow: 'Riippuvuusälykkyys',
    title: 'Tiedä, milloin riippuvuutesi muuttuvat riskialttiiksi — ennen kuin skannerisi kertoo.',
    subtitle:
      'DepOversight seuraa upstream-PR:ien, committien, issueiden ja julkaisujen virtaa ja nostaa esiin tietoturvaan liittyvät signaalit riippuvuusgrafissasi ennen kuin CVE:itä, advisorya tai skannerin hälytyksiä on olemassa.',
    oneLiner:
      'CVE-skannerit kertovat, mikä on jo tiedossa. DepOversight näyttää, mikä alkaa näyttää riskialttiilta.',
    primaryCta: 'Pyydä varhainen pääsy',
    secondaryCta: 'Katso live-demo',
    watchingLabel: 'Seuraa upstreamia',
    watchingSources: ['PR:t', 'commitit', 'issuet', 'releaset', 'changelogit', 'advisoryt'],
  },
  demo: {
    sectionEyebrow: 'Interaktiivinen demo',
    sectionTitle: 'Live-demo',
    sectionLead:
      'Tilannekuva siitä, mitä DepOversight nostaa esiin esimerkkiriippuvuudelle. Kaikki tieto on havainnollistavaa.',
    cta: {
      primary: 'Pyydä varhainen pääsy',
      secondary: 'Miten toimii',
    },
    project: 'Projekti',
    environment: 'Ympäristö',
    environmentValue: 'tuotanto',
    dependency: 'Riippuvuus',
    status: 'Tila',
    statusReviewRequired: 'Arviointia vaaditaan',
    live: 'Live',
    headerLine: '{{project}} · tuotanto · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Yksityiskohtainen esimerkki · Havainnollistava rekonstruktio',
      title: 'axios npm -toimitusketjun vaarantuminen — 31. maaliskuuta 2026',
      framing:
        'DepOversight ei ollut käynnissä tämän tapauksen aikana. Tämä näkymä rekonstruoi sen, mitä tuote olisi nostanut esiin julkisten lähteiden perusteella.',
      sourcesLabel: 'Lähteet',
    },
    replay: 'Toisto',
    replayDate: '31. maalisk 2026',
    metrics: {
      signals: 'Tietoturvasignaalit',
      exposureWindow: 'Mahdollinen altistumisikkuna',
      disclosure: 'Julkisen paljastuksen kuvio',
      sensitivePrs: 'PR:t herkillä alueilla',
      advisories: 'Havaitut advisoryt',
    },
    filters: {
      label: 'Suodata vakavuuden mukaan',
      all: 'Kaikki',
      high: 'Korkea',
      review: 'Arviointi',
      monitoring: 'Seuranta',
      blocked: 'Estetty',
      empty: 'Mikään signaali ei vastaa tätä suodatinta.',
    },
    severity: {
      high: 'Korkea',
      review: 'Arviointi',
      monitoring: 'Seuranta',
      blocked: 'Estetty',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projektit',
        signals: 'Signaalit',
        integrations: 'Integraatiot',
      },
      severityShortcuts: {
        high: 'Korkea',
        review: 'Arviointi',
        monitoring: 'Seuranta',
        resolved: 'Ratkaistu',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Käytäntö',
      },
      collapseLabel: 'Demo-työtila',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Vahvistettu historiallinen kuvio',
      potentialUndisclosedFix: 'Mahdollinen julkistamaton korjaus',
      exposureWindow: 'Altistumisikkuna',
      prCheck: 'PR-tarkistus',
      maliciousVersion: 'Haitallinen versio (vedetty pois)',
      communityConfirmed: 'Yhteisön vahvistama vaarantuminen',
    },
    sourceType: {
      publicGithubIssue: 'Julkinen GitHub-issue',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Riippuvuuden päivitys',
      registryRelease: 'npm-julkaisu',
      manifestChange: 'Pakettimanifestin muutos',
    },
    detail: {
      summary: 'Yhteenveto',
      whyFlagged: 'Miksi merkitty',
      recommendedAction: 'Suositeltu toimi',
      viewSource: 'Näytä lähde',
      viewTimeline: 'Näytä aikajana',
      viewPrCheck: 'Näytä PR-tarkistus',
      severity: 'Vakavuus',
      status: 'Tila',
      dependency: 'Riippuvuus',
      sourceType: 'Lähdetyyppi',
      empty: 'Valitse signaali nähdäksesi yksityiskohdat.',
      back: 'Takaisin signaaleihin',
    },
    prCheck: {
      title: 'DepOversight-tarkistus',
      result: 'Arviointia vaaditaan',
      summary:
        'Riippuvuuden päivitys sisältää tietoturvaan liittyvää upstream-aktiviteettia.',
      dependencyLabel: 'Riippuvuus',
      reasonsLabel: 'Syyt',
      reasons: [
        'Avoimia tai äskettäin mergetty tietoturvaherkkiä PR:itä havaittu',
        'Releasen tila epäselvä',
        'Advisorya ei löytynyt',
        'Nykyinen versio voi olla altistunut',
      ],
      footer: 'Manuaalinen tarkistus vaaditaan ennen mergetä.',
      close: 'Sulje',
    },
    timelineButton: 'Näytä aikajana',
    prCheckButton: 'Näytä PR-tarkistus',
    timelineModalTitle: 'Altistumisikkunan aikajana',
    disclaimer:
      'DepOversight nostaa esiin tietoturvaan liittyviä tarkistussignaaleja julkisen upstream-aktiviteetin pohjalta. Signaali ei ole vahvistettu haavoittuvuus, ellei sitä ole kytketty advisoryyn tai CVE:hen.',
    signals: {
      publicIssue: {
        title: 'Haitalliset axios-versiot julkaistu npm:ssä',
        summary:
          '31. maaliskuuta 2026 klo 00:21 UTC axios@1.14.1 julkaistiin npm:ssä; klo 01:00 UTC seurasi axios@0.30.4. Molemmat sisälsivät piilotetun post-install-koukun, joka noutaa hyötykuorman ajonaikaisesti.',
        whyFlagged: [
          'Odottamaton versioiden korotus ylläpitäjän tavanomaisen julkaisutahdin ulkopuolella',
          'Uusi transitiivinen riippuvuus lisätty: plain-crypto-js@4.2.1, ilman aiempaa axios-historiaa',
          'Uusi post-install-koukku julkaistussa package.json:ssa',
          'Vastaavaa committia ei löydy axiosin git-repositoryssa julkaistulle artefaktille',
        ],
        recommendedAction:
          'Pidätä axios-päivitysten automaattiset mergetykset, jotka koskevat 1.14.1 / 0.30.4, kunnes julkaisun alkuperä on vahvistettu.',
      },
      publicFix: {
        title: 'Epäilyttävä transitiivinen riippuvuus tuotu',
        summary:
          'plain-crypto-js@4.2.1 esiintyy ajonaikaisena riippuvuutena haitallisissa axios-julkaisuissa. Aiempi versio (4.2.0) julkaistiin edellisenä päivänä julkaisijan toimesta, jolla ei ole aiempaa historiaa.',
        whyFlagged: [
          'Vasta julkaistu paketti viitattu ajonaikaisena riippuvuutena',
          'Julkaisijatilillä ei ole aiempaa pakettihistoriaa',
          'Paketin nimi jäljittelee oikeaa salauskirjastoa',
          'Post-install-skripti lataa etäbinaarin',
        ],
        recommendedAction:
          'Käsittele plain-crypto-js@4.2.1 epäluotettavana; pinnaa viimeiseen tunnetusti turvalliseen axios-versioon.',
      },
      mergedUnreleased: {
        title: 'Yhteisö vahvistaa, että axios 1.14.1 on haitallinen',
        summary:
          'Useat riippumattomat tutkijat (Datadog, SANS, Wiz, Elastic) raportoivat, että axios 1.14.1 toimittaa monialustaisen RAT:n post-install-skriptin kautta. axiosin ylläpitäjät vahvistavat issue #10636:ssa.',
        whyFlagged: [
          'Riippumaton vahvistus useista lähteistä',
          'Ylläpitäjien vahvistama julkisessa post-mortemissa',
          'RAT-hyötykuormat havaittu macOS:ssä, Windowsissa ja Linuxissa',
          'Aktiivinen 3 tunnin ikkunan ajan ennen kuin npm veti versiot pois',
        ],
        recommendedAction:
          'Auditoi kaikki CI- / kehitysympäristöt, jotka ovat saattaneet asentaa axios 1.14.1:n välillä 00:21–03:15 UTC.',
      },
      riskyUpdate: {
        title: 'axiosia päivittävä Renovate-PR estetty',
        summary:
          'Renovate avasi PR:n, joka päivittää axiosin versiosta 1.13.0 versioon 1.14.1. DepOversightin PR-tarkistus estää mergetyksen — kohdeversio on aktiivisella merkityillä-listalla, ennen kuin yhtään CVE:tä on määritetty.',
        whyFlagged: [
          'Kohdeversio (1.14.1) on merkityillä-listalla',
          'PR avattu aktiivisen altistumisikkunan aikana',
          'CVE:tä ei ollut määritetty PR:n avaushetkellä — perinteiset skannerit eivät olisi havainneet tätä',
          'Automaattinen mergetys käytössä tässä repositoryssa',
        ],
        recommendedAction:
          'Manuaalinen tarkistus vaaditaan. Pinnaa axios versioon 1.13.0 tai päivitä vahvistettuun julkaisuun, kun saatavilla.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Tietoturvaskenaariot, jotka DepOversight nostaa esiin',
    sectionLead:
      'Riski avoimen lähdekoodin riippuvuuksissa tulee harvoin yhtenä CVE:nä. Nämä ovat kuviot, jotka nostamme esiin.',
    items: {
      upstream: {
        title: 'Upstreamissa tuotu riski',
        description:
          'Uusi upstream-muutos laajentaa toimittamasi riippuvuuden tietoturvaherkkää pintaa.',
      },
      publicFix: {
        title: 'Olemassa oleva riski julkisesti korjattu',
        description:
          'Maintainer korjaa tietoturvaan liittyvän issuen avoimesti ennen kuin advisorya julkaistaan.',
      },
      mergedNoRelease: {
        title: 'Mergeitty mutta ei releasea',
        description:
          'Korjaus on mainissa, mutta jokainen julkaistu versio sisältää edelleen paikkaamattoman koodipolun.',
      },
      silentPatch: {
        title: 'Hiljainen paikkajulkaisu',
        description:
          'Uusi release sisältää tietoturvaan liittyvän korjauksen ilman advisorya tai mainintaa release notesissa.',
      },
      publicIssue: {
        title: 'Julkinen issue-paljastus',
        description:
          'Maintainer tai raportoija julkaisee tietoturvaan liittyvän issuen ennen triagin valmistumista.',
      },
      riskyUpgrade: {
        title: 'Riskialtis riippuvuuspäivitys',
        description:
          'Ehdotettu päivitys tuo riippuvuusgrafiisi uutta tietoturvaherkkää koodipintaa.',
      },
      reverted: {
        title: 'Peruutettu tai osittainen korjaus',
        description:
          'Aiempi tietoturvaan liittyvä korjaus peruutetaan, kavennetaan tai sovelletaan vain osittain.',
      },
      degradation: {
        title: 'Riippuvuuden luottamuksen heikkeneminen',
        description:
          'Riippuvuuden ympärillä olevat ylläpitosignaalit muuttuvat tavalla, joka oikeuttaa posture-arvioinnin.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Missä altistumisikkuna avautuu',
    sectionLead:
      'Tyypillinen aikajana upstream-signaalista CVE:hen — ja se kohta, jossa DepOversight kuroo umpeen.',
    exposureWindowLabel: 'Mahdollinen altistumisikkuna',
    callout:
      'Vaarallinen aukko ei ole paljastuksen jälkeen. Se on julkisen upstream-signaalin ja virallisen advisoryn välissä.',
    events: {
      day0Signal: { day: '31. maalisk · 00:21 UTC', label: 'axios@1.14.1 julkaistu npm:ssä' },
      day0Flag: { day: '31. maalisk · ~02:00 UTC', label: 'DepOversight nostaa esiin julkaisuanomaliasignaalin' },
      day3Merge: { day: '31. maalisk · 03:15 UTC', label: 'npm vetää pois molemmat axios-versiot' },
      day7Release: { day: '1. huhtik', label: 'Microsoft, Datadog julkaisevat post-mortemit' },
      day14Cve: { day: '~8. huhtik', label: 'CVE määritetty vaarantuneille julkaisuille' },
      day14Scanner: { day: '8. huhtik+', label: 'Perinteiset skannerit ottavat kiinni' },
    },
  },
  problem: {
    sectionTitle: 'Ongelma',
    sectionLead:
      'CVE-skannerit vastaavat kysymykseen, johon vastaus oli jo olemassa — siihen mennessä kun ne vastaavat.',
    bullets: [
      'Useimmat CVE-syötteet kuvaavat riskin paljastuksen jälkeen.',
      'Korjaukset laskeutuvat usein ennen advisoryjen julkaisua.',
      'Jotkut paikat julkaistaan hiljaisesti ilman mitään advisorya.',
      'Skannereiden katvealueet pakottavat tiimit reagoimaan päättämisen sijaan.',
    ],
  },
  solution: {
    sectionTitle: 'Ratkaisu',
    sectionLead:
      'DepOversight seuraa avoimen lähdekoodin riippuvuuksiesi tietoturva-postuurin muutoksia — riskialttiista PR:istä ja julkisista korjauksista julkaisemattomiin paikkoihin ja advisorya edeltäviin altistumisikkunoihin.',
    bullets: [
      'Lue upstream-aktiviteettia jatkuvasti koko riippuvuusgrafin yli.',
      'Havaitse tietoturvaan liittyviä kuvioita PR:issä, committeissa, issueissa, releaseissa ja changelogeissa.',
      'Merkitse riippuvuuksien posture-muutoksia — ei vain julkaistuja CVE:itä.',
      'Estä riskialtit riippuvuuspäivitykset ennen kuin ne osuvat mainiin.',
    ],
    fitsAlongsideTitle: 'Toimii nykyisen skannerisi rinnalla',
    fitsAlongsideBody:
      'DepOversight toimii Dependabotin, Snykin, GitHub Advanced Securityn tai Socketin rinnalla — ei korvaa niitä. Skanneri pysyy totuuden lähteenä julkaistuille advisorylle. DepOversight hoitaa aukon ennen paljastusta.',
    tuneForReviewTitle: 'Viritetty arviointiin, ei hälytysväsymykseen',
    tuneForReviewBody:
      'Signaalit ovat arvioinnin laukaisimia. Jokainen sisältää lähde-PR:n / committin / issuen ja suositellun toimen, jotta tiimi päättää mikä vaatii toimia — väärät positiiviset pysyvät väärinä positiivisina, eivät hälytyksinä.',
  },
  whatItTellsYou: {
    sectionTitle: 'Mitä DepOversight kertoo sinulle',
    items: [
      {
        title: 'Voitko luottaa tähän riippuvuuteen juuri nyt',
        body: 'Live-postuurin lukema jokaisesta grafisi riippuvuudesta, ei vain niistä, joilla on tunnettuja CVE:itä.',
      },
      {
        title: 'Onko upstreamissa korjaus, jota ei ole julkaistu',
        body: 'Kun tietoturvaan liittyvä paikka on mainissa mutta ei vielä toimitettu, näet sen ennen release notesia.',
      },
      {
        title: 'Sisältääkö release hiljaisen tietoturvapaikan',
        body: 'Releaset analysoidaan korjauskuvioiden varalta myös ilman advisorya.',
      },
      {
        title: 'Tuoko päivitys uutta riskipintaa',
        body: 'Päivitykset, jotka koskettavat tunnistautumista, jäsennystä tai prosessirajoja, merkitään arviointia varten.',
      },
      {
        title: 'Edeltääkö julkinen signaali advisorya',
        body: 'Näet aukon ensimmäisen julkisen tietoturvaan liittyvän signaalin ja virallisen advisoryn välillä — ennen kuin se sulkeutuu.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'Miten toimii',
    capabilitiesLabel: 'Havaintokyvyt',
    steps: [
      {
        title: 'Tarkkaile upstreamia',
        body: 'Lukee jatkuvasti PR:itä, committeja, issueita, releaseita ja changelogeja ilmoittamassasi riippuvuusgrafissa.',
      },
      {
        title: 'Havaitse tietoturvaan liittyvät signaalit',
        body: 'Soveltaa upstream-aktiviteettiin viritettyjä havaintosääntöjä: kielikuvioita, koodipinnan muutoksia ja paljastuskuvioita.',
      },
      {
        title: 'Nosta esiin arvioinnin arvoiset tapahtumat',
        body: 'Korottaa signaalit arviointijonoosi lähteiden, todisteiden ja suositellun toimen kanssa.',
      },
      {
        title: 'Estä riskialtit mergetykset',
        body: 'PR-tarkistus pysäyttää riippuvuuspäivitykset, jotka koskettavat merkittyjä versioita, kunnes ne on arvioitu.',
      },
    ],
  },
  detection: {
    sectionTitle: 'Havaintomoottori',
    sectionLead:
      'DepOversight ei aja exploitteja. Se lukee upstream-aktiviteettia ja nostaa esiin kuvioita, joita kokeneet tietoturvainsinöörit jo etsivät.',
    items: [
      {
        title: 'Lähdetyypin tagaus',
        body: 'Jokainen signaali tagataan lähteen mukaan: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Kielikuvioiden havainto',
        body: 'Tunnistaa korjauskielen, tietoturvakielen ja paljastuskielen väittämättä, että exploit on olemassa.',
      },
      {
        title: 'Pintatietoisuus',
        body: 'Merkitsee PR:t, jotka koskettavat tunnistautumista, jäsennystä, deserialisointia, verkkoa tai prosessirajoja.',
      },
      {
        title: 'Releasen tilan seuranta',
        body: 'Seuraa, onko korjaus mergetty, julkaistu vai vain kehityshaarassa.',
      },
    ],
    disclaimer:
      'Signaalit ovat arvioinnin laukaisimia, eivät vahvistettuja haavoittuvuuksia, ellei niitä ole kytketty julkaistuun advisoryyn tai CVE:hen.',
  },
  comparison: {
    sectionTitle: 'Miten tämä eroaa CVE-skannerista',
    sectionLead:
      'Perinteiset skannerit vastaavat: "Onko tämä riippuvuus haavoittuvainen?" DepOversight kysyy: "Pitäisikö meidän luottaa tähän riippuvuuteen juuri nyt?"',
    columns: {
      capability: 'Kyvykkyys',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Socketin kaltaiset työkalut menevät päällekkäin osittain — DepOversight keskittyy erityisesti paljastuksen aikaikkunaan: upstream-aktiviteettiin, joka ei ole vielä tuottanut advisorya.',
    rows: [
      { capability: 'Havaitsee julkaistut CVE:t', scanner: 'Kyllä', depoversight: 'Nostaa esiin' },
      {
        capability: 'Nostaa julkiset upstream-korjaukset esiin ennen advisorya',
        scanner: 'Ei',
        depoversight: 'Kyllä',
      },
      { capability: 'Merkitsee hiljaiset paikkajulkaisut', scanner: 'Ei', depoversight: 'Kyllä' },
      {
        capability: 'Havaitsee PR:t tietoturvaherkässä koodissa',
        scanner: 'Ei',
        depoversight: 'Kyllä',
      },
      { capability: 'Korostaa altistumisikkunoita', scanner: 'Ei', depoversight: 'Kyllä' },
      {
        capability: 'Estää riskialtit päivitykset ennen mergetystä',
        scanner: 'Rajoitetusti',
        depoversight: 'Kyllä',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integraatiot',
    sectionLead: 'DepOversight lukee sen, mitä sinulla jo on.',
    dataSourcesLabel: 'Tietolähteet',
    workflowLabel: 'Työnkulku',
    items: [
      { name: 'GitHub', description: 'PR-tarkistukset, commit- ja release-syötteet.' },
      { name: 'GitLab', description: 'MR-tarkistukset ja pipeline-integraatio.' },
      { name: 'npm', description: 'Pakettien manifestit ja advisoryjen ristiviittaus.' },
      { name: 'PyPI', description: 'Pakettien metatiedot ja release-syötteet.' },
      { name: 'Maven Central', description: 'Artefaktien metatiedot ja changelogien skrappaus.' },
      { name: 'Go modules', description: 'go.mod-jäsennys ja proxy.golang.org-metatiedot.' },
      {
        name: 'crates.io',
        description: 'Rust-cratejen metatiedot ja yanked-versioiden seuranta.',
      },
      { name: 'RubyGems', description: 'Gemien metatiedot ja release-syötteet.' },
      { name: 'Slack', description: 'Kanavailmoitukset, kun signaalit vaativat arviointia.' },
      {
        name: 'Käytäntömoottori',
        description: 'Konfiguroitavat säännöt sille, mitkä signaalit estävät, seuraavat tai ilmoittavat.',
      },
    ],
  },
  whoFor: {
    sectionTitle: 'Kenelle DepOversight on',
    items: [
      {
        title: 'Tietoturvainsinöörityö',
        body: 'Triagoit jo CVE-melun. DepOversight nostaa esiin signaalit, jotka saapuvat ennen advisoryja — jotta päätät reagoinnin sijaan.',
      },
      {
        title: 'Alusta ja infrastruktuuri',
        body: 'Estä riskialtit riippuvuuspäivitykset ennen kuin ne osuvat mainiin. Aseta käytäntö PR-tarkistuksessa, ei poikkeustilanteen hoidossa.',
      },
      {
        title: 'Avoimeen lähdekoodiin nojaavat startupit',
        body: 'Suurin osa koodistasi kuuluu jollekin muulle. Tiedä, milloin heidän postuurinsa muuttuu, ennen kuin julkaiset siitä riippuvan releasen.',
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Pyydä varhainen pääsy',
    sectionLead: 'Kerro meille, mihin DepOversight sopisi. Otamme yhteyttä.',
    callout: 'Estä riskialtit riippuvuuspäivitykset ennen kuin ne osuvat mainiin.',
    pricing: 'Varhainen pääsy on ilmainen. Hintatasot ilmoitetaan ennen GA:ta.',
    fields: {
      name: { label: 'Nimi', placeholder: 'Valinnainen' },
      email: {
        label: 'Työsähköposti',
        placeholder: 'sina@yritys.fi',
        error: 'Anna kelvollinen sähköposti.',
        required: 'pakollinen',
      },
      company: { label: 'Yritys', placeholder: 'Valinnainen' },
      githubOrg: { label: 'GitHub-organisaatio', placeholder: 'Valinnainen' },
      ecosystem: { label: 'Pääasiallinen pakettiekosysteemi', placeholder: 'esim. npm, PyPI, Go modules' },
      currentTool: {
        label: 'Nykyinen työkalu',
        placeholder: 'Valitse',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Muu',
        },
      },
      message: {
        label: 'Viesti',
        placeholder: 'Valinnainen — mitä haluaisit nähdä ensin?',
      },
    },
    submit: 'Pyydä pääsy',
    submitting: 'Lähetetään…',
    submitError: 'Lähetys epäonnistui. Yritä uudelleen tai lähetä sähköpostia osoitteeseen hello@depoversight.com.',
    success: {
      title: 'Kiitos — pyyntösi on kirjattu.',
      body: 'Otamme yhteyttä, kun avaamme lisää varhaisen pääsyn paikkoja.',
    },
    expectations:
      'Otamme yhteyttä muutaman päivän sisällä. Varhaisen pääsyn paikkoja avataan erissä — saat vastauksen vaikka olisit jonossa.',
    privacyNotice: 'Lähettämällä hyväksyt <link>tietosuojakäytäntömme</link>.',
  },
  blog: {
    indexTitle: 'Blogi',
    indexLead:
      'Kenttämuistiinpanoja riippuvuusturvallisuudesta, toimitusketjun tapauksista ja siitä, mitä tunnistamme ennen julkistusta.',
    readMore: 'Lue julkaisu',
    minRead: '{{count}} min lukuaika',
    publishedOn: 'Julkaistu {{date}}',
    updatedOn: 'Päivitetty {{date}}',
    backToIndex: 'Takaisin blogiin',
    tagsLabel: 'Tunnisteet',
    rawMarkdown: 'Näytä markdownina',
    empty: 'Ei vielä julkaisuja, palaa pian.',
    categories: {
      industry: 'Toimiala',
      fundamentals: 'Perusteet',
      tools: 'Työkalut',
    },
  },
  footer: {
    tagline: 'Riippuvuusälykkyys ennen paljastusta.',
    copyright: '© {{year}} DepOversight. Kaikki oikeudet pidätetään.',
    sections: {
      product: 'Tuote',
      resources: 'Resurssit',
    },
    links: {
      demo: 'Live-demo',
      howItWorks: 'Miten toimii',
      compare: 'vs. CVE-skannerit',
      earlyAccess: 'Varhainen pääsy',
      llms: 'AI-discovery (llms.txt)',
      sitemap: 'Sivukartta',
      privacy: 'Tietosuoja',
      contact: 'Yhteystiedot',
    },
    disclaimer:
      'DepOversight nostaa esiin tietoturvaan liittyviä tarkistussignaaleja julkisen upstream-aktiviteetin pohjalta. Signaali ei ole vahvistettu haavoittuvuus, ellei sitä ole kytketty advisoryyn tai CVE:hen.',
  },
} satisfies Dictionary;

export default fi;
