import{J as ca,S as qe,i as Fe,s as Le,D as Et,e as g,j as V,c as _,a as b,d as m,l as A,b as u,K as $,f as U,E as c,F as It,G as Dt,H as Vt,m as te,n as T,o as ae,p as E,I as Lt,v as Ve,w as Ae,x as Te,A as Se,L as Rt,M as le,N as Re,k as Ue,t as B,g as H,h as Pe,O as ge,P as ua,Q as pa,R as da}from"../chunks/vendor-5168071f.js";const ha=()=>{const t=ca("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},fa={subscribe(t){return ha().page.subscribe(t)}};const ma=t=>({}),Ut=t=>({});function ka(t){let e;const s=t[9]["custom-tip"],l=Et(s,t,t[8],Ut);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,n){l&&l.m(a,n),e=!0},p(a,n){l&&l.p&&(!e||n&256)&&It(l,s,a,a[8],e?Vt(s,a[8],n,ma):Dt(a[8]),Ut)},i(a){e||(E(l,a),e=!0)},o(a){T(l,a),e=!1},d(a){l&&l.d(a)}}}function va(t){let e;return{c(){e=g("div"),this.h()},l(s){e=_(s,"DIV",{class:!0,style:!0});var l=b(e);l.forEach(m),this.h()},h(){u(e,"class","default-tip svelte-npb0qt"),u(e,"style",t[6])},m(s,l){U(s,e,l),e.innerHTML=t[0]},p(s,l){l&1&&(e.innerHTML=s[0])},i:Lt,o:Lt,d(s){s&&m(e)}}}function ga(t){let e,s,l,a,n,h,w;const i=t[9].default,p=Et(i,t,t[8],null),f=[va,ka],z=[];function y(d,v){return d[0]?0:1}return n=y(t),h=z[n]=f[n](t),{c(){e=g("div"),s=g("span"),p&&p.c(),l=V(),a=g("div"),h.c(),this.h()},l(d){e=_(d,"DIV",{class:!0});var v=b(e);s=_(v,"SPAN",{class:!0});var K=b(s);p&&p.l(K),K.forEach(m),l=A(v),a=_(v,"DIV",{class:!0});var I=b(a);h.l(I),I.forEach(m),v.forEach(m),this.h()},h(){u(s,"class","tooltip-slot svelte-npb0qt"),u(a,"class","tooltip svelte-npb0qt"),$(a,"active",t[5]),$(a,"left",t[4]),$(a,"right",t[2]),$(a,"bottom",t[3]),$(a,"top",t[1]),u(e,"class","tooltip-wrapper svelte-npb0qt")},m(d,v){U(d,e,v),c(e,s),p&&p.m(s,null),c(e,l),c(e,a),z[n].m(a,null),w=!0},p(d,[v]){p&&p.p&&(!w||v&256)&&It(p,i,d,d[8],w?Vt(i,d[8],v,null):Dt(d[8]),null);let K=n;n=y(d),n===K?z[n].p(d,v):(te(),T(z[K],1,1,()=>{z[K]=null}),ae(),h=z[n],h?h.p(d,v):(h=z[n]=f[n](d),h.c()),E(h,1),h.m(a,null)),v&32&&$(a,"active",d[5]),v&16&&$(a,"left",d[4]),v&4&&$(a,"right",d[2]),v&8&&$(a,"bottom",d[3]),v&2&&$(a,"top",d[1])},i(d){w||(E(p,d),E(h),w=!0)},o(d){T(p,d),T(h),w=!1},d(d){d&&m(e),p&&p.d(d),z[n].d()}}}function _a(t,e,s){let{$$slots:l={},$$scope:a}=e,{tip:n=""}=e,{top:h=!1}=e,{right:w=!1}=e,{bottom:i=!1}=e,{left:p=!1}=e,{active:f=!1}=e,{color:z="#757575"}=e,y=`background-color: ${z};`;return t.$$set=d=>{"tip"in d&&s(0,n=d.tip),"top"in d&&s(1,h=d.top),"right"in d&&s(2,w=d.right),"bottom"in d&&s(3,i=d.bottom),"left"in d&&s(4,p=d.left),"active"in d&&s(5,f=d.active),"color"in d&&s(7,z=d.color),"$$scope"in d&&s(8,a=d.$$scope)},[n,h,w,i,p,f,y,z,a,l]}class ba extends qe{constructor(e){super();Fe(this,e,_a,ga,Le,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function wa(t){let e,s;const l=t[3].default,a=Et(l,t,t[2],null);return{c(){e=g("a"),a&&a.c(),this.h()},l(n){e=_(n,"A",{href:!0,title:!0,target:!0});var h=b(e);a&&a.l(h),h.forEach(m),this.h()},h(){u(e,"href",t[0]),u(e,"title",t[1]),u(e,"target","_blank")},m(n,h){U(n,e,h),a&&a.m(e,null),s=!0},p(n,[h]){a&&a.p&&(!s||h&4)&&It(a,l,n,n[2],s?Vt(l,n[2],h,null):Dt(n[2]),null),(!s||h&1)&&u(e,"href",n[0]),(!s||h&2)&&u(e,"title",n[1])},i(n){s||(E(a,n),s=!0)},o(n){T(a,n),s=!1},d(n){n&&m(e),a&&a.d(n)}}}function ya(t,e,s){let{$$slots:l={},$$scope:a}=e,{href:n=""}=e,{title:h=void 0}=e;return t.$$set=w=>{"href"in w&&s(0,n=w.href),"title"in w&&s(1,h=w.title),"$$scope"in w&&s(2,a=w.$$scope)},[n,h,a,l]}class za extends qe{constructor(e){super();Fe(this,e,ya,wa,Le,{href:0,title:1})}}function ja(t){let e,s,l,a,n,h,w;return{c(){e=g("a"),s=g("img"),this.h()},l(i){e=_(i,"A",{href:!0,target:!0,class:!0});var p=b(e);s=_(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(m),this.h()},h(){u(s,"class",l="avatar transition-all "+(t[3]?"":"opacity-20")+" "+(t[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(t[2]&&t[0].tracks&&t[0].tracks.includes(t[2])?"":t[2]?"opacity-20":"")+" svelte-1f522co"),Rt(s.src,a=t[4])||u(s,"src",a),u(s,"alt",n=t[0].name),u(e,"href",t[6]),u(e,"target","_blank"),u(e,"class","rounded-full")},m(i,p){U(i,e,p),c(e,s),h||(w=[le(e,"mouseover",t[7]),le(e,"mouseleave",t[8])],h=!0)},p(i,p){p&15&&l!==(l="avatar transition-all "+(i[3]?"":"opacity-20")+" "+(i[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(i[2]&&i[0].tracks&&i[0].tracks.includes(i[2])?"":i[2]?"opacity-20":"")+" svelte-1f522co")&&u(s,"class",l),p&16&&!Rt(s.src,a=i[4])&&u(s,"src",a),p&1&&n!==(n=i[0].name)&&u(s,"alt",n),p&64&&u(e,"href",i[6])},d(i){i&&m(e),h=!1,Re(w)}}}function Ea(t){let e,s,l;return s=new ba({props:{tip:t[5],$$slots:{default:[ja]},$$scope:{ctx:t}}}),{c(){e=g("div"),Ve(s.$$.fragment)},l(a){e=_(a,"DIV",{});var n=b(e);Ae(s.$$.fragment,n),n.forEach(m)},m(a,n){U(a,e,n),Te(s,e,null),l=!0},p(a,[n]){const h={};n&32&&(h.tip=a[5]),n&8287&&(h.$$scope={dirty:n,ctx:a}),s.$set(h)},i(a){l||(E(s.$$.fragment,a),l=!0)},o(a){T(s.$$.fragment,a),l=!1},d(a){a&&m(e),Se(s)}}}function Ia(t,e,s){let l,a,{speaker:n}=e,{lead:h=null}=e,{category:w=null}=e,{visible:i=!0}=e,{col:p="speakers"}=e;const f=["web:webp","web:png","web:jpg","twitter:jpg"];let z,y;if(console.log(n),n.photos&&n.photos.length>0){for(const I of f)if(n.photos.includes(I)){const[F,Z]=I.split(":"),D=`https://spec.utxo.cz/22/photos/${p}/${n.id}-${F}.${Z}`;if(z){y=D;break}z=D}}z||(z="/img/twitter-avatar.png");let d=z;function v(){y&&s(4,d=y)}function K(){s(4,d=z)}return t.$$set=I=>{"speaker"in I&&s(0,n=I.speaker),"lead"in I&&s(1,h=I.lead),"category"in I&&s(2,w=I.category),"visible"in I&&s(3,i=I.visible),"col"in I&&s(9,p=I.col)},t.$$.update=()=>{var I;t.$$.dirty&1&&s(6,l=n.twitter?`https://twitter.com/${n.twitter}`:(I=n.web)==null?void 0:I.url),t.$$.dirty&1&&s(5,a=n.name+(n.nickname?` (${n.nickname})`:""))},[n,h,w,i,d,a,l,v,K,p]}class At extends qe{constructor(e){super();Fe(this,e,Ia,Ea,Le,{speaker:0,lead:1,category:2,visible:3,col:9})}}const Da="utxo22",Va="UTXO.22",Aa="UTXO",Ta="Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference",Sa=["2022-06-04","2022-06-05"],Pa="Gabriel Loci, Praha",Ca="Czech Republic",Ma={web:"https://utxo.cz",docs:"https://docs.utxo.cz",twitter:"https://twitter.com/utxoprague",telegram:"https://t.me/utxoprague",discord:"https://discord.gg/5k9dEtVhnv",fbevent:"https://www.facebook.com/events/276727151106692",substack:"https://utxoprague.substack.com/",instagram:"https://www.instagram.com/utxoprague/"},Ka={speakers:[{id:"adam-kracik",name:"Adam Krac\xEDk",tracks:["zaklady","btc","eth","defi","alty"],photos:["web:jpg"]},{id:"adam-studenik",name:"Adam Studen\xEDk",twitter:"adamstudenik",tracks:["eth","defi"],photos:["twitter:jpg"]},{id:"anett-rohlikova",name:"Anett Rohlikova",twitter:"anettrolikova",orgs:`[Ethereum Magicians](https://ethereum-magicians.org/)
`,tracks:["eth","nft"],photos:["twitter:jpg"]},{id:"damsky",name:"damsky",twitter:"CryptoDamSky",tracks:["zaklady","eth","defi","dao","spolecnost"],photos:["twitter:jpg"]},{id:"david-bankless",name:"DavidBankless",twitter:"davidbankless",orgs:`[Flipper.Zone](https://twitter.com/flipperzonenft), [BanklessDAO](https://www.bankless.community)
`,tracks:["zaklady","dao","nft"],photos:["twitter:jpg"]},{id:"honza-dvorak",name:"Honza Dvo\u0159\xE1k",nickname:"Gorrdy",twitter:"_Honza_Dvorak",orgs:`[btcplatby.cz](https://btcplatby.cz)
`,tracks:["zaklady","btc"],photos:["twitter:jpg"]},{id:"jiri-cepelka",name:"Ji\u0159\xED \u010Cepelka",twitter:"JiriCepelka",tracks:["zaklady","eth","defi"],photos:["twitter:jpg"]},{id:"juraj-bednar",name:"Juraj Bedn\xE1r",twitter:"jurbed",bio:"Podnikatel, hacker a milovn\xEDk svobody",orgs:`Spoluzakladatel [Hacktrophy](https://hacktrophy.com/sk/), \u010Dlen [Paraleln\xE9 Polis](https://paralelnapolis.sk)
`,web:{url:"https://juraj.bednar.io"},lead:!0,tracks:["zaklady","btc","dao","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"vladimir-pinker",name:"Vladim\xEDr Pinker",nickname:"KryptoVl\xE1\u010Fa",twitter:"KryptoVlada",orgs:`YT kan\xE1l [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win)
`,tracks:["zaklady","defi","nft","alty","spolecnost"],photos:["twitter:jpg"]},{id:"mario-havel",name:"Mario Havel",twitter:"TMIYChao",bio:"Kryptoanarchista, libertari\xE1n a hacker",orgs:`Zakladatel [Bordel Hackerspace](https://bordel.paralelnipolis.cz/#/), \u010Dlen [Paraleln\xED Polis](https://www.paralelnipolis.cz/)
`,lead:!0,tracks:["zaklady","btc","eth","defi"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"m0xt",name:"m0xt",twitter:"m0xt_",tracks:["eth","defi","dao"],photos:["twitter:jpg"]},{id:"petr-klein",name:"Petr Klein",twitter:"kleinptr",tracks:["zaklady","eth","defi","dao","alty"],photos:["twitter:jpg"]},{id:"petr-mara",name:"Petr M\xE1ra",twitter:"petrmara",bio:"Technologick\xFD optimista, sb\u011Bratel NFT",web:{url:"https://www.petrmara.com"},lead:!0,tracks:["defi","nft","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"petr-mensik",name:"Petr Men\u0161\xEDk",twitter:"petr_mensik",orgs:`[Polkadotters](https://twitter.com/polkadotterss)
`,tracks:["alty","defi"],photos:["twitter:jpg"]},{id:"pavel-precechtel",name:"Pavel P\u0159ececht\u011Bl",nickname:"Hom\u039Er Shillson",twitter:"homershillson",orgs:`[VR Education](https://vreducation.cz)
`,tracks:["eth","defi","dao","alty","nft"],photos:["twitter:jpg"]},{id:"robert-chovanculiak",name:"R\xF3bert Chovanculiak",twitter:"RChovanculiak",bio:"Autor knihy [Pokrok bez povolenia](https://libinst.cz/produkt/pokrok-bez-povolenia/)",orgs:`Analytik v [INESS](https://www.iness.sk), pedagog na [CEVRO Institutu](https://www.cevroinstitut.cz/cs/pedagog/ing-robert-chovanculiak-ph-d/)
`,web:{name:"Pokrok bez povolenia (newsletter)",url:"https://robertchovanculiak.substack.com"},lead:!0,tracks:["spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"tomas-zdrazil",name:"Tom\xE1\u0161 Zdra\u017Eil",twitter:"investree_cz",orgs:`[Investree](https://investree.cz)
`,tracks:["eth","defi","spolecnost"],photos:["twitter:jpg"]},{id:"tomas-kryptovlada",name:"Tom\xE1\u0161",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["zaklady","defi"],photos:["web:webp"]},{id:"urza",name:"Urza",twitter:"urzanarchy",bio:"Anarchokapitalista, autor knihy [Anarchokapitalismus](https://kniha.urza.cz/)",orgs:`Zakladatel [Svobodn\xE9ho p\u0159\xEDstavu](https://pristav.urza.cz/), vedouc\xED [CZ/SK Mises Institutu](https://www.mises.cz/), \u010Dlen projektu [Svoboda u\u010Den\xED](https://www.svobodauceni.cz/)
`,web:{name:"Urza.cz",url:"https://urza.cz"},lead:!0,tracks:["spolecnost","regulace","btc"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"martin-gregor",name:"Martin Gregor",nickname:"ZaujaloMa",twitter:"ZaujaloMa",orgs:`YT kan\xE1l [Zaujalo ma Krypto & FinTech](https://www.youtube.com/channel/UCOn72OUpmWhnNuHl04qmRzg)
`,tracks:["btc","spolecnost","alty"],photos:["twitter:jpg"]},{id:"david-antos",name:"David Anto\u0161",nickname:"jilm",twitter:"jilm",bio:"Eurofederalista, neoliber\xE1l, globalista",orgs:`Spoluzakladatel spolku [Pro euro](https://proeuro.cz)
`,tracks:["eth","btc","defi","spolecnost"],photos:["twitter:jpg"]},{id:"jaromir-tesar",name:"Jarom\xEDr Tesa\u0159",twitter:"JaromirTesar",bio:"Blockchain expert, Cardano Ambassador",orgs:`[Cardanians](https://cardanians.io/cs)
`,tracks:["zaklady","defi","alty"],photos:["twitter:jpg"]},{id:"michal-repetny",name:"Michael Repetn\xFD",twitter:"repetny",orgs:`[Marinade.finance](https://marinade.finance/)
`,tracks:["zaklady","eth","defi","alty"],photos:["twitter:jpg"]},{id:"jan-cerny",name:"Jan \u010Cern\xFD",nickname:"-HoNY-",orgs:`\u010Clen [Bitcoinovej kan\xE1l](https://bitcoinovejkanal.cz/) komunity
`,tracks:["zaklady","btc"],photos:["web:webp"]},{id:"mirek-h",name:"Mirek H",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["btc","defi","alty"],photos:["web:webp"]},{id:"adam-lokaj",name:"Adam Lokaj",bio:"Autor knihy [Adopce Bitcoinu pro obchodn\xED korporace](https://www.adopcebtc.cz/)",orgs:`[adopcebtc.cz](https://www.adopcebtc.cz/) ([Instagram](https://www.instagram.com/adopcebitcoinu/))
`,web:{name:"adopcebtc.cz",url:"https://adopcebtc.cz/"},tracks:["btc","regulace"],photos:["web:jpg"]},{id:"fetyas",name:"Fetyas",twitter:"hernakrypto",orgs:`YT kan\xE1l [KryptoHerna](https://www.youtube.com/channel/UCOgYjFqYfUnXo5DK9HceAMw)
`,tracks:["nft"],photos:["twitter:jpg"]},{id:"vojtch",name:"Vojt\u011Bch Studen\xFD",nickname:"vojtch",twitter:"StudenyVojta",orgs:`[Bankless.cz](https://bankless.cz/)
`,tracks:["zaklady","eth","dao","defi"],photos:["twitter:jpg"]}],tracks:[{id:"zaklady",name:"Z\xE1klady kryptom\u011Bn",shortname:"Z\xE1klady",examples:`* principy otev\u0159en\xFDch projekt\u016F (blockchain\u016F)
* z\xE1klady bezpe\u010Dnosti a soukrom\xED
* pen\u011B\u017Eenky - SW, HW
* z\xE1klady obchodov\xE1n\xED - DCA
`},{id:"btc",name:"Bitcoin",examples:`* Bitcoin jako pen\xEDze
* Lightning Network - adopce, implementace
* Taproot
* Bitcoin mining
* smart-kontrakty na bitcoinu (RGB)
`},{id:"eth",name:"Ethereum a smart-kontrakty obecn\u011B",shortname:"Ethereum",examples:`* Ethereum 2.0
* Layer2 - rollupy
* (EVM) Sidechainy
* v\xFDvoj smart-kontrakt\u016F (solidity)
* MEV - Miner Extractable Value
`},{id:"defi",name:"Decentralizovan\xE9 finance (DeFi)",shortname:"DeFi",examples:`* stablecoiny
* lending protokoly
* DEX - decentralizovan\xE9 burzy
* predik\u010Dn\xED trhy
* futures/options kontrakty
* tokenizace
`},{id:"dao",name:"Decentralizovan\xE9 organizace (DAO)",shortname:"DAOs",examples:`* budoucnost organizac\xED
* showcase jednotliv\xFDch DAOs
`},{id:"nft",name:"NFTs a Metaverse",shortname:"NFTs/Metaverse",examples:`* NFT um\u011Bn\xED
* NFT collectibles
* gaming
* Metaverse
`},{id:"alty",name:"Experiment\xE1ln\xED L1 blockchainy a dal\u0161\xED altcoiny",shortname:"Alternativn\xED L1",examples:`* Polkadot
* Cardano
* Cosmos (Secret Network..)
* Solana
* NEAR
* Monero
* ...
`},{id:"regulace",name:"Regulace a fiat rampy",shortname:"Regulace",examples:`* legislativa
* sm\u011Bn\xE1rny a burzy
* darov\xE1n\xED kryptom\u011Bn
* insitucion\xE1ln\xED pen\xEDze v kryptom\u011Bn\xE1ch
`},{id:"spolecnost",name:"Krypto-spole\u010Dnost",shortname:"Spole\u010Dnost",examples:`* odluka pen\u011Bz od st\xE1tu
* kryptoanarchismus, anarchokapitalismus, meritokracie
* p\u0159edstaven\xED lok\xE1ln\xEDch krypto-komunit
* fenom\xE9n maximalismu
`}],events:[],faqs:[{question:"Kde se akce bude odehr\xE1vat?",answer:`Prvn\xED ro\u010Dn\xEDk konference se uskute\u010Dn\xED v unik\xE1tn\xED komplexu b\xFDval\xE9ho kl\xE1\u0161tera [Gabriel Loci](https://goo.gl/maps/2j9XNPSRQePZNLuz5) na pra\u017Esk\xE9m Sm\xEDchov\u011B. K dispozici bude hlavn\xED p\u0159edn\xE1\u0161kov\xFD s\xE1l, dva st\u0159edn\u011B velk\xE9 p\u0159edn\xE1\u0161kov\xE9 s\xE1ly a dal\u0161\xED men\u0161\xED s\xE1ly pro workshopy. Obsah ve v\u0161ech s\xE1lech bude prob\xEDhat paraleln\u011B. K dispozici bude tak\xE9 spousta dal\u0161\xEDch prostor, nap\u0159\xEDklad chill-out z\xF3na nebo venkovn\xED posezen\xED s food-trucky a dal\u0161\xEDmi st\xE1nky.
`},{question:"Jak z\xEDsk\xE1m vstupenku?",answer:`Prvn\xED vstupenky pl\xE1nujeme uvolnit do prodeje v pr\u016Fb\u011Bhu \xFAnora 2022. Vstupn\xE9 bude n\xEDzk\xE9 a platit budete moci jak platebn\xED kartou, tak samoz\u0159ejm\u011B kryptom\u011Bnami (p\u0159edev\u0161\xEDm Lightning Network).
`},{question:"Budou p\u0159edn\xE1\u0161ky vys\xEDlan\xE9 \u017Eiv\u011B?",answer:`Ano, pl\xE1nujeme bohat\xFD program i pro n\xE1v\u0161t\u011Bvn\xEDky online - \u017Eiv\xE9 p\u0159enosy ze v\u0161ech p\u0159edn\xE1\u0161kov\xFDch s\xE1l\u016F, rozhovory s n\xE1v\u0161t\u011Bvn\xEDky a dal\u0161\xED obsah. V\u0161e bude zdarma dostupn\xE9 na dom\xE9n\u011B UTXO.TV (a YouTube).
`},{question:'Co to znamen\xE1 "UTXO"?',answer:`"UTXO" znamen\xE1 "*Unspent transaction output*", co\u017E by se dalo p\u0159elo\u017Eit jako "neutracen\xFD v\xFDstup transakce". Jedn\xE1 se o [z\xE1kladn\xED mechanismus fungov\xE1n\xED bitcoinu](https://www.alza.cz/transakcni-poplatky-a-minimalni-velikost-utxo#co-je-utxo).

> "_UTXO je jedin\xFD zp\u016Fsob, jak\xFDm v\xE1\u0161 bitcoin skute\u010Dn\u011B "existuje". Ka\u017Ed\xE1 transakce bere p\u0159edchoz\xED neutracen\xE9 v\xFDstupy, pou\u017E\xEDv\xE1 je jako vstupy a ve v\xFDsledku vytv\xE1\u0159\xED nov\xE9 v\xFDstupy. Ka\u017Ed\xFD konec je nov\xFDm za\u010D\xE1tkem. Bitcoin je kr\xE1sn\xFD._" - [@SatsJoseph](https://twitter.com/SatsJoseph/status/1370329486059843588)
`},{question:"Pro koho je konference ur\u010Dena?",answer:`Pro v\u0161echny kryptom\u011Bnov\xE9 nad\u0161ence. Konference vznikla tak\xE9 jako neutr\xE1ln\xED m\xEDsto pro dialog v r\xE1mci cel\xE9 lok\xE1ln\xED krypto-komunity. Ka\u017Ed\xFD n\u011B\u010Demu fand\xEDme, ale poj\u010Fme se od toho alespo\u0148 chv\xEDli odprostit a poslechnout si i my\u0161lenky protistrany, nebo diskutovat.
`},{question:"Budou dostupn\xE9 z\xE1znamy p\u0159edn\xE1\u0161ek?",answer:`Ano, v\u0161echny p\u0159edn\xE1\u0161ky budou po konferenci dostupn\xE9 zdarma na UTXO.TV nebo na\u0161em YouTube kan\xE1lu.
`}],partners:[{id:"gweicz",name:"Gwei.cz",type:"community",twitter:"gweicz",photos:["twitter:jpg"]},{id:"holky-v-kryptu",name:"Holky v kryptu",type:"community",twitter:"holkyvkryptu",photos:["twitter:jpg"]},{id:"bankless-cz",name:"Bankless Czech",type:"community",twitter:"banklesscz",photos:["twitter:jpg"]},{id:"czsk-nft-community",name:"CZ/SK NFT Community",type:"community",web:{url:"https://discord.gg/X4MV9Pn5P8"},photos:["web:webp"]},{id:"kryptovlada-komunita",name:"KryptoVl\xE1\u010Fa komunita",type:"community",web:{url:"https://discord.gg/RHmhNGN"},photos:["web:webp"]},{id:"polkadotters-czsk",name:"Polkadotters",type:"community",twitter:"PolkadottersS",photos:["twitter:jpg"]},{id:"cardanians",name:"Cardanians",type:"community",twitter:"Cardanians_io",photos:["twitter:jpg"]},{id:"mitonc",name:"MitonC",type:"sponsor",twitter:"mitoncfund",photos:["twitter:jpg"]},{id:"kryptoinsider-podcast",name:"Podcast Krypto Insider (Hospod\xE1\u0159sk\xE9 noviny)",type:"medium",web:{url:"https://podcasty.hn.cz/krypto-insider/"},photos:["web:jpg"]},{id:"investree",name:"Investree",type:"medium",web:{url:"https://investree.cz/"},photos:["web:jpg"]},{id:"kryptoplatby",name:"KryptoPlatby CZ/SK",type:"medium",web:{url:"https://linktr.ee/kryptoplatby"},photos:["twitter:jpg"]}]},Na={tracks:9,speakers:28,events:0,faqs:6};var Oa={id:Da,name:Va,shortname:Aa,description:Ta,dates:Sa,place:Pa,country:Ca,links:Ma,spec:Ka,stats:Na};function Zt(t,e,s){const l=t.slice();return l[16]=e[s],l}function Xt(t,e,s){const l=t.slice();return l[19]=e[s],l}function Jt(t,e,s){const l=t.slice();return l[19]=e[s],l}function Gt(t,e,s){const l=t.slice();return l[24]=e[s],l}function Yt(t,e,s){const l=t.slice();return l[27]=e[s],l}function Wt(t,e,s){const l=t.slice();return l[27]=e[s],l}function Qt(t){let e,s,l,a,n,h;s=new At({props:{speaker:t[27],lead:!0,category:t[2],visible:!t[3]||t[3]&&t[3].id===t[27].id}});function w(){return t[10](t[27])}return{c(){e=g("div"),Ve(s.$$.fragment),l=V(),this.h()},l(i){e=_(i,"DIV",{class:!0});var p=b(e);Ae(s.$$.fragment,p),l=A(p),p.forEach(m),this.h()},h(){u(e,"class","rounded-full")},m(i,p){U(i,e,p),Te(s,e,null),c(e,l),a=!0,n||(h=[le(e,"mouseover",w),le(e,"mouseleave",t[8])],n=!0)},p(i,p){t=i;const f={};p[0]&1&&(f.speaker=t[27]),p[0]&4&&(f.category=t[2]),p[0]&9&&(f.visible=!t[3]||t[3]&&t[3].id===t[27].id),s.$set(f)},i(i){a||(E(s.$$.fragment,i),a=!0)},o(i){T(s.$$.fragment,i),a=!1},d(i){i&&m(e),Se(s),n=!1,Re(h)}}}function xt(t){let e,s,l=t[27].lead&&Qt(t);return{c(){l&&l.c(),e=Ue()},l(a){l&&l.l(a),e=Ue()},m(a,n){l&&l.m(a,n),U(a,e,n),s=!0},p(a,n){a[27].lead?l?(l.p(a,n),n[0]&1&&E(l,1)):(l=Qt(a),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(te(),T(l,1,1,()=>{l=null}),ae())},i(a){s||(E(l),s=!0)},o(a){T(l),s=!1},d(a){l&&l.d(a),a&&m(e)}}}function $t(t){let e,s,l,a,n,h;s=new At({props:{speaker:t[27],category:t[2],visible:!t[3]||t[3]&&t[3].id===t[27].id}});function w(){return t[11](t[27])}return{c(){e=g("div"),Ve(s.$$.fragment),l=V()},l(i){e=_(i,"DIV",{});var p=b(e);Ae(s.$$.fragment,p),l=A(p),p.forEach(m)},m(i,p){U(i,e,p),Te(s,e,null),c(e,l),a=!0,n||(h=[le(e,"mouseover",w),le(e,"mouseleave",t[8])],n=!0)},p(i,p){t=i;const f={};p[0]&1&&(f.speaker=t[27]),p[0]&4&&(f.category=t[2]),p[0]&9&&(f.visible=!t[3]||t[3]&&t[3].id===t[27].id),s.$set(f)},i(i){a||(E(s.$$.fragment,i),a=!0)},o(i){T(s.$$.fragment,i),a=!1},d(i){i&&m(e),Se(s),n=!1,Re(h)}}}function ea(t){let e,s,l=!t[27].lead&&$t(t);return{c(){l&&l.c(),e=Ue()},l(a){l&&l.l(a),e=Ue()},m(a,n){l&&l.m(a,n),U(a,e,n),s=!0},p(a,n){a[27].lead?l&&(te(),T(l,1,1,()=>{l=null}),ae()):l?(l.p(a,n),n[0]&1&&E(l,1)):(l=$t(a),l.c(),E(l,1),l.m(e.parentNode,e))},i(a){s||(E(l),s=!0)},o(a){T(l),s=!1},d(a){l&&l.d(a),a&&m(e)}}}function ta(t){let e,s=(t[24].shortname||t[24].name)+"",l,a,n,h;function w(){return t[12](t[24])}return{c(){e=g("div"),l=B(s),this.h()},l(i){e=_(i,"DIV",{class:!0});var p=b(e);l=H(p,s),p.forEach(m),this.h()},h(){var i;u(e,"class",a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[3]&&!((i=t[3].tracks)==null?void 0:i.includes(t[24].id))?"opacity-20":"")+" svelte-5alcep")},m(i,p){U(i,e,p),c(e,l),n||(h=[le(e,"mouseover",w),le(e,"mouseleave",t[6])],n=!0)},p(i,p){var f;t=i,p[0]&1&&s!==(s=(t[24].shortname||t[24].name)+"")&&Pe(l,s),p[0]&9&&a!==(a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[3]&&!((f=t[3].tracks)==null?void 0:f.includes(t[24].id))?"opacity-20":"")+" svelte-5alcep")&&u(e,"class",a)},d(i){i&&m(e),n=!1,Re(h)}}}function aa(t){let e,s,l=t[19].question+"",a,n,h,w,i,p;return w=new da({props:{source:t[19].answer,renderers:t[9]}}),{c(){e=g("div"),s=g("h3"),a=B(l),n=V(),h=g("p"),Ve(w.$$.fragment),i=V(),this.h()},l(f){e=_(f,"DIV",{class:!0});var z=b(e);s=_(z,"H3",{class:!0});var y=b(s);a=H(y,l),y.forEach(m),n=A(z),h=_(z,"P",{class:!0});var d=b(h);Ae(w.$$.fragment,d),d.forEach(m),i=A(z),z.forEach(m),this.h()},h(){u(s,"class","pixelfont text-sm mb-3 svelte-5alcep"),u(h,"class","md"),u(e,"class","mb-5 break-inside-avoid-column bg-white/30 rounded-3xl px-6 py-4 text-left transition-all box-shadow-light overflow-visible svelte-5alcep")},m(f,z){U(f,e,z),c(e,s),c(s,a),c(e,n),c(e,h),Te(w,h,null),c(e,i),p=!0},p(f,z){(!p||z[0]&1)&&l!==(l=f[19].question+"")&&Pe(a,l);const y={};z[0]&1&&(y.source=f[19].answer),w.$set(y)},i(f){p||(E(w.$$.fragment,f),p=!0)},o(f){T(w.$$.fragment,f),p=!1},d(f){f&&m(e),Se(w)}}}function la(t){let e,s;return e=new At({props:{speaker:t[19],col:"partners"}}),{c(){Ve(e.$$.fragment)},l(l){Ae(e.$$.fragment,l)},m(l,a){Te(e,l,a),s=!0},p(l,a){const n={};a[0]&2&&(n.speaker=l[19]),e.$set(n)},i(l){s||(E(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){Se(e,l)}}}function sa(t){let e,s,l=t[16].title+"",a,n,h,w,i,p=t[16].arr,f=[];for(let y=0;y<p.length;y+=1)f[y]=la(Xt(t,p,y));const z=y=>T(f[y],1,1,()=>{f[y]=null});return{c(){e=g("div"),s=g("h2"),a=B(l),n=V(),h=g("div");for(let y=0;y<f.length;y+=1)f[y].c();w=V(),this.h()},l(y){e=_(y,"DIV",{class:!0});var d=b(e);s=_(d,"H2",{class:!0});var v=b(s);a=H(v,l),v.forEach(m),n=A(d),h=_(d,"DIV",{class:!0});var K=b(h);for(let I=0;I<f.length;I+=1)f[I].l(K);K.forEach(m),w=A(d),d.forEach(m),this.h()},h(){u(s,"class","pixelfont text-gray-800 text-sm mb-3 svelte-5alcep"),u(h,"class","flex flex-wrap justify-center"),u(e,"class","break-inside-avoid-column mb-5")},m(y,d){U(y,e,d),c(e,s),c(s,a),c(e,n),c(e,h);for(let v=0;v<f.length;v+=1)f[v].m(h,null);c(e,w),i=!0},p(y,d){if((!i||d[0]&2)&&l!==(l=y[16].title+"")&&Pe(a,l),d[0]&2){p=y[16].arr;let v;for(v=0;v<p.length;v+=1){const K=Xt(y,p,v);f[v]?(f[v].p(K,d),E(f[v],1)):(f[v]=la(K),f[v].c(),E(f[v],1),f[v].m(h,null))}for(te(),v=p.length;v<f.length;v+=1)z(v);ae()}},i(y){if(!i){for(let d=0;d<p.length;d+=1)E(f[d]);i=!0}},o(y){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)T(f[d]);i=!1},d(y){y&&m(e),ge(f,y)}}}function Ba(t){let e,s,l,a,n,h,w,i,p,f=t[0].place+"",z,y,d,v=t[0].description+"",K,I,F,Z,D,se,Ze,he,Xe,Je,ne,Ge,fe,_e,Ye,We,me,Qe,xe,ke,oe,$e,re,et,ie,tt,be,at,O,X,we,lt,Ce,st,J,ye,nt,Me,ot,G,ze,rt,Ke,it,Y,je,ct,Ne,ut,W,Ee,pt,Oe,dt,Q,Ie,ht,Be,ft,x,De,mt,He,L;document.title=e=""+(t[0].name+" | "+t[0].description);let ce=t[0].spec.speakers,S=[];for(let r=0;r<ce.length;r+=1)S[r]=xt(Wt(t,ce,r));const na=r=>T(S[r],1,1,()=>{S[r]=null});let ue=t[0].spec.speakers,P=[];for(let r=0;r<ue.length;r+=1)P[r]=ea(Yt(t,ue,r));const oa=r=>T(P[r],1,1,()=>{P[r]=null});let ve=t[0].spec.tracks,q=[];for(let r=0;r<ve.length;r+=1)q[r]=ta(Gt(t,ve,r));let pe=t[0].spec.faqs,C=[];for(let r=0;r<pe.length;r+=1)C[r]=aa(Jt(t,pe,r));const ra=r=>T(C[r],1,1,()=>{C[r]=null});let de=t[1],M=[];for(let r=0;r<de.length;r+=1)M[r]=sa(Zt(t,de,r));const ia=r=>T(M[r],1,1,()=>{M[r]=null});return{c(){s=V(),l=g("section"),a=g("div"),n=g("h1"),h=B(t[4]),w=V(),i=g("div"),p=B("4.-5. \u010Derven 2022 @ "),z=B(f),y=V(),d=g("div"),K=B(v),I=V(),F=g("div"),Z=g("div");for(let r=0;r<S.length;r+=1)S[r].c();D=V(),se=g("div");for(let r=0;r<P.length;r+=1)P[r].c();Ze=V(),he=g("div"),Xe=B(".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Je=V(),ne=g("div");for(let r=0;r<q.length;r+=1)q[r].c();Ge=V(),fe=g("div"),_e=g("div"),Ye=B("2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),We=V(),me=g("h2"),Qe=B("\u010Casto kladen\xE9 dotazy (FAQ)"),xe=V(),ke=g("div"),oe=g("div");for(let r=0;r<C.length;r+=1)C[r].c();$e=V(),re=g("div");for(let r=0;r<M.length;r+=1)M[r].c();et=V(),ie=g("div"),tt=B("We Are All Satoshi "),be=g("i"),at=V(),O=g("div"),X=g("a"),we=g("i"),lt=B(" Dokumentace"),st=V(),J=g("a"),ye=g("i"),nt=B(" Newsletter"),ot=V(),G=g("a"),ze=g("i"),rt=B(" Discord"),it=V(),Y=g("a"),je=g("i"),ct=B(" Telegram"),ut=V(),W=g("a"),Ee=g("i"),pt=B(" Twitter"),dt=V(),Q=g("a"),Ie=g("i"),ht=B(" Instagram"),ft=V(),x=g("a"),De=g("i"),mt=B(" Facebook"),this.h()},l(r){ua('[data-svelte="svelte-1duagmk"]',document.head).forEach(m),s=A(r),l=_(r,"SECTION",{});var o=b(l);a=_(o,"DIV",{class:!0});var j=b(a);n=_(j,"H1",{class:!0});var Tt=b(n);h=H(Tt,t[4]),Tt.forEach(m),w=A(j),i=_(j,"DIV",{class:!0});var kt=b(i);p=H(kt,"4.-5. \u010Derven 2022 @ "),z=H(kt,f),kt.forEach(m),y=A(j),d=_(j,"DIV",{class:!0});var St=b(d);K=H(St,v),St.forEach(m),I=A(j),F=_(j,"DIV",{class:!0});var ee=b(F);Z=_(ee,"DIV",{class:!0});var Pt=b(Z);for(let N=0;N<S.length;N+=1)S[N].l(Pt);Pt.forEach(m),D=A(ee),se=_(ee,"DIV",{class:!0});var Ct=b(se);for(let N=0;N<P.length;N+=1)P[N].l(Ct);Ct.forEach(m),Ze=A(ee),he=_(ee,"DIV",{class:!0});var Mt=b(he);Xe=H(Mt,".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Mt.forEach(m),Je=A(ee),ne=_(ee,"DIV",{class:!0});var Kt=b(ne);for(let N=0;N<q.length;N+=1)q[N].l(Kt);Kt.forEach(m),ee.forEach(m),Ge=A(j),fe=_(j,"DIV",{class:!0});var Nt=b(fe);_e=_(Nt,"DIV",{});var Ot=b(_e);Ye=H(Ot,"2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),Ot.forEach(m),Nt.forEach(m),We=A(j),me=_(j,"H2",{class:!0});var Bt=b(me);Qe=H(Bt,"\u010Casto kladen\xE9 dotazy (FAQ)"),Bt.forEach(m),xe=A(j),ke=_(j,"DIV",{class:!0});var Ht=b(ke);oe=_(Ht,"DIV",{class:!0});var qt=b(oe);for(let N=0;N<C.length;N+=1)C[N].l(qt);qt.forEach(m),Ht.forEach(m),$e=A(j),re=_(j,"DIV",{class:!0});var Ft=b(re);for(let N=0;N<M.length;N+=1)M[N].l(Ft);Ft.forEach(m),et=A(j),ie=_(j,"DIV",{class:!0});var vt=b(ie);tt=H(vt,"We Are All Satoshi "),be=_(vt,"I",{class:!0}),b(be).forEach(m),vt.forEach(m),at=A(j),O=_(j,"DIV",{class:!0});var R=b(O);X=_(R,"A",{href:!0,target:!0,class:!0});var gt=b(X);we=_(gt,"I",{class:!0}),b(we).forEach(m),lt=H(gt," Dokumentace"),gt.forEach(m),st=A(R),J=_(R,"A",{href:!0,target:!0,class:!0});var _t=b(J);ye=_(_t,"I",{class:!0}),b(ye).forEach(m),nt=H(_t," Newsletter"),_t.forEach(m),ot=A(R),G=_(R,"A",{href:!0,target:!0,class:!0});var bt=b(G);ze=_(bt,"I",{class:!0}),b(ze).forEach(m),rt=H(bt," Discord"),bt.forEach(m),it=A(R),Y=_(R,"A",{href:!0,target:!0,class:!0});var wt=b(Y);je=_(wt,"I",{class:!0}),b(je).forEach(m),ct=H(wt," Telegram"),wt.forEach(m),ut=A(R),W=_(R,"A",{href:!0,target:!0,class:!0});var yt=b(W);Ee=_(yt,"I",{class:!0}),b(Ee).forEach(m),pt=H(yt," Twitter"),yt.forEach(m),dt=A(R),Q=_(R,"A",{href:!0,target:!0,class:!0});var zt=b(Q);Ie=_(zt,"I",{class:!0}),b(Ie).forEach(m),ht=H(zt," Instagram"),zt.forEach(m),ft=A(R),x=_(R,"A",{href:!0,target:!0,class:!0});var jt=b(x);De=_(jt,"I",{class:!0}),b(De).forEach(m),mt=H(jt," Facebook"),jt.forEach(m),R.forEach(m),j.forEach(m),o.forEach(m),this.h()},h(){u(n,"class","text-5xl md:text-6xl lg:text-7xl svelte-5alcep"),u(i,"class","subline-shadow text-lg md:text-xl lg:text-2xl svelte-5alcep"),u(d,"class","subline text-sm md:text-md lg:text-lg text-gray-800 svelte-5alcep"),u(Z,"class","mt-3 mb-6 flex flex-wrap justify-center relative"),u(se,"class","flex flex-wrap justify-center relative"),u(he,"class","pixelfont text-sm mt-5 mb-10 svelte-5alcep"),u(ne,"class","mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm"),u(F,"class","mt-10"),u(fe,"class","subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14 svelte-5alcep"),u(me,"class","pixelfont mt-10 text-gray-800"),u(oe,"class","columns-1 xl:columns-2 mt-5 h-auto text-gray-800"),u(ke,"class","container w-full mx-auto"),u(re,"class","columns-1 xl:columns-3 xl:mt-5"),u(be,"class","fas fa-heart text-red-500"),u(ie,"class","mt-3 subline-shadow2 svelte-5alcep"),u(we,"class","fas fa-book svelte-5alcep"),u(X,"href",Ce=t[0].links.docs),u(X,"target","_blank"),u(X,"class","svelte-5alcep"),u(ye,"class","fas fa-newspaper svelte-5alcep"),u(J,"href",Me=t[0].links.substack),u(J,"target","_blank"),u(J,"class","svelte-5alcep"),u(ze,"class","fab fa-discord svelte-5alcep"),u(G,"href",Ke=t[0].links.discord),u(G,"target","_blank"),u(G,"class","svelte-5alcep"),u(je,"class","fab fa-telegram-plane svelte-5alcep"),u(Y,"href",Ne=t[0].links.telegram),u(Y,"target","_blank"),u(Y,"class","svelte-5alcep"),u(Ee,"class","fab fa-twitter svelte-5alcep"),u(W,"href",Oe=t[0].links.twitter),u(W,"target","_blank"),u(W,"class","svelte-5alcep"),u(Ie,"class","fab fa-instagram svelte-5alcep"),u(Q,"href",Be=t[0].links.instagram),u(Q,"target","_blank"),u(Q,"class","svelte-5alcep"),u(De,"class","fab fa-facebook svelte-5alcep"),u(x,"href",He=t[0].links.fbevent),u(x,"target","_blank"),u(x,"class","svelte-5alcep"),u(O,"class","footer-link flex flex-wrap justify-center relative mt-10 mb-5 pixelfont-micro gap-6 mx-auto w-8/12 svelte-5alcep"),u(a,"class","relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center")},m(r,k){U(r,s,k),U(r,l,k),c(l,a),c(a,n),c(n,h),c(a,w),c(a,i),c(i,p),c(i,z),c(a,y),c(a,d),c(d,K),c(a,I),c(a,F),c(F,Z);for(let o=0;o<S.length;o+=1)S[o].m(Z,null);c(F,D),c(F,se);for(let o=0;o<P.length;o+=1)P[o].m(se,null);c(F,Ze),c(F,he),c(he,Xe),c(F,Je),c(F,ne);for(let o=0;o<q.length;o+=1)q[o].m(ne,null);c(a,Ge),c(a,fe),c(fe,_e),c(_e,Ye),c(a,We),c(a,me),c(me,Qe),c(a,xe),c(a,ke),c(ke,oe);for(let o=0;o<C.length;o+=1)C[o].m(oe,null);c(a,$e),c(a,re);for(let o=0;o<M.length;o+=1)M[o].m(re,null);c(a,et),c(a,ie),c(ie,tt),c(ie,be),c(a,at),c(a,O),c(O,X),c(X,we),c(X,lt),c(O,st),c(O,J),c(J,ye),c(J,nt),c(O,ot),c(O,G),c(G,ze),c(G,rt),c(O,it),c(O,Y),c(Y,je),c(Y,ct),c(O,ut),c(O,W),c(W,Ee),c(W,pt),c(O,dt),c(O,Q),c(Q,Ie),c(Q,ht),c(O,ft),c(O,x),c(x,De),c(x,mt),L=!0},p(r,k){if((!L||k[0]&1)&&e!==(e=""+(r[0].name+" | "+r[0].description))&&(document.title=e),(!L||k[0]&1)&&f!==(f=r[0].place+"")&&Pe(z,f),(!L||k[0]&1)&&v!==(v=r[0].description+"")&&Pe(K,v),k[0]&397){ce=r[0].spec.speakers;let o;for(o=0;o<ce.length;o+=1){const j=Wt(r,ce,o);S[o]?(S[o].p(j,k),E(S[o],1)):(S[o]=xt(j),S[o].c(),E(S[o],1),S[o].m(Z,null))}for(te(),o=ce.length;o<S.length;o+=1)na(o);ae()}if(k[0]&397){ue=r[0].spec.speakers;let o;for(o=0;o<ue.length;o+=1){const j=Yt(r,ue,o);P[o]?(P[o].p(j,k),E(P[o],1)):(P[o]=ea(j),P[o].c(),E(P[o],1),P[o].m(se,null))}for(te(),o=ue.length;o<P.length;o+=1)oa(o);ae()}if(k[0]&105){ve=r[0].spec.tracks;let o;for(o=0;o<ve.length;o+=1){const j=Gt(r,ve,o);q[o]?q[o].p(j,k):(q[o]=ta(j),q[o].c(),q[o].m(ne,null))}for(;o<q.length;o+=1)q[o].d(1);q.length=ve.length}if(k[0]&513){pe=r[0].spec.faqs;let o;for(o=0;o<pe.length;o+=1){const j=Jt(r,pe,o);C[o]?(C[o].p(j,k),E(C[o],1)):(C[o]=aa(j),C[o].c(),E(C[o],1),C[o].m(oe,null))}for(te(),o=pe.length;o<C.length;o+=1)ra(o);ae()}if(k[0]&2){de=r[1];let o;for(o=0;o<de.length;o+=1){const j=Zt(r,de,o);M[o]?(M[o].p(j,k),E(M[o],1)):(M[o]=sa(j),M[o].c(),E(M[o],1),M[o].m(re,null))}for(te(),o=de.length;o<M.length;o+=1)ia(o);ae()}(!L||k[0]&1&&Ce!==(Ce=r[0].links.docs))&&u(X,"href",Ce),(!L||k[0]&1&&Me!==(Me=r[0].links.substack))&&u(J,"href",Me),(!L||k[0]&1&&Ke!==(Ke=r[0].links.discord))&&u(G,"href",Ke),(!L||k[0]&1&&Ne!==(Ne=r[0].links.telegram))&&u(Y,"href",Ne),(!L||k[0]&1&&Oe!==(Oe=r[0].links.twitter))&&u(W,"href",Oe),(!L||k[0]&1&&Be!==(Be=r[0].links.instagram))&&u(Q,"href",Be),(!L||k[0]&1&&He!==(He=r[0].links.fbevent))&&u(x,"href",He)},i(r){if(!L){for(let k=0;k<ce.length;k+=1)E(S[k]);for(let k=0;k<ue.length;k+=1)E(P[k]);for(let k=0;k<pe.length;k+=1)E(C[k]);for(let k=0;k<de.length;k+=1)E(M[k]);L=!0}},o(r){S=S.filter(Boolean);for(let k=0;k<S.length;k+=1)T(S[k]);P=P.filter(Boolean);for(let k=0;k<P.length;k+=1)T(P[k]);C=C.filter(Boolean);for(let k=0;k<C.length;k+=1)T(C[k]);M=M.filter(Boolean);for(let k=0;k<M.length;k+=1)T(M[k]);L=!1},d(r){r&&m(s),r&&m(l),ge(S,r),ge(P,r),ge(q,r),ge(C,r),ge(M,r)}}}const La=!0,Ha="UTXO.22";function qa(t,e,s){let l;pa(t,fa,D=>s(13,l=D));let a=Oa,n=v();l.url.hostname==="localhostx"?console.log("Local only mode"):(async()=>{const D=await fetch("https://spec.utxo.cz/22/bundle.json");s(0,a=await D.json()),s(1,n=v())})();let w=Ha,i=null,p=null;function f(D){s(2,i=D)}function z(){s(2,i=null)}function y(D){s(3,p=D)}function d(){s(3,p=null)}function v(){return[{title:"Komunity",arr:a.spec.partners.filter(D=>D.type==="community")},{title:"Sponzo\u0159i",arr:a.spec.partners.filter(D=>D.type==="sponsor")},{title:"Medi\xE1ln\xED partne\u0159i",arr:a.spec.partners.filter(D=>D.type==="medium")}]}return[a,n,i,p,w,f,z,y,d,{link:za},D=>y(D),D=>y(D),D=>f(D.id)]}class Ra extends qe{constructor(e){super();Fe(this,e,qa,Ba,Le,{},null,[-1,-1])}}export{Ra as default,La as prerender};
