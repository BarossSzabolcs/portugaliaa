var felsorolas=""
var Lisbon="A Tagus folyó partján, az Atlanti-óceán közelében, Portugália fővárosa és legnagyobb városa felfelé halad a hét meredek hegység között és varázslatos meleg időjárású úticélt képez, csábító sikátorokat, furcsa üzleteket, gótikus székesegyházakat, lenyűgöző hidakat és színes körzeteket, amelyek visszhangoznak a tradicionális, azaz hagyományos fado zenétől. A város legrégebbi kerülete Alfama, egy régi mór negyed, amely a macskaköves utcák, a rusztikus építészet és a Szent György-kastély labirintusától különbözik. A legjobb módja annak, hogy megismerjék Lisszabont, az egyik olyan vintage villamossal körbe utazni, mint például a jól ismert Tram 28, amely a történelmi negyedben, kert és fő látnivalók mentén kanyarodik."
Lisbon+=`<div  class="col-sm-4"><img id="Lisabon" src="liszbonkep.jpg"  class="blur enlarge" alt=""></div>`
var Algarve="A napos mediterrán éghajlat, a gyönyörű strandok, a festői városok, a történelmi helyek, a mesés konyha és a megfizethető költségek csak néhány oka annak, hogy az Algarve az egyik legjobb látogatható hely Portugáliában. Az ország legdélebbi régiójában található Algarve ünnepeket kínál a szemnek, az olajfaligetek nyugodt tájaitól, a hagyományos fehérre meszelt falvaktól a vadig, a szélsebességű partokig, ahol drámai sziklái vannak, nyári üdülőhelyekkel. Faro a régió fővárosa, Lagos pedig a környéken az éjszakai élet forrása. A narancssárga ligetekből álló Silves a legismertebb vörös homokkő kastélyáról, míg Tavira elegáns város, reneszánsz emlékekkel, hidakkal és kastélyokkal tele."
Algarve+=`<div  class="col-sm-4"><img id="Algarve" src="algarvekep.jpg"  class="blur enlarge" alt=""></div>`
var Obidos = "A dombtetőn, a nyugat-portugáliai Centro régióban található Obidosot egy régi erődített fal veszi körül. A fal mellett a csodálatos középkori kastély és Obidos történelmi központja képezi a város fő látványosságát és könnyen megközelíthető. A keskeny, macskaköves utcák labirintusa a forgalmas terek mentén vezet a látogatókhoz, kávézókhoz, furcsa üzletekhez és színes virágokkal megtöltött fehérre meszelt házakhoz. A kastély a parancsnoksággal, hatalmas kapukkal és tornyokkal, ami most egy luxusszálloda, de csodálatos látványosság mégis."
Obidos+=`<div  class="col-sm-4"><img id="Obidos" src="obidoskep.jpg"  class="blur enlarge" alt=""></div>`
var Sintra = "A Sintra a lisszaboni tengerparton található Sintra hegység lábánál helyezkedik el, csupán egynapos kirándulással Portugália fővárosától. A Sintra zöldellő dombok látványos környezetét kínálja, csodálatos villákkal, királyi kirándulásokkal, kastélyokkal és palotákkal, például a híres Pena-palotával, ami egy fantasztikus kastély, amely a németországi Neuschwansteinre emlékeztet. Az 1800-as évek közepén épült és a portugál királyi család számára nyári menedékként szolgáló Pena palotáját egzotikus fákat, növényeket és virágos – erdős parkok veszik körül. Nem szabad kihagyni a Moors kastély ősi romjait, amely a város legmagasabb hegyét koronázza és a romantikus Monserrate palotát szubtrópusi kertjeivel."
Sintra+=`<div  class="col-sm-4"><img id="Sintra" src="sintrakep.jpg"  class="blur enlarge" alt=""></div>`
var Madeira = "Az „Atlanti-óceán úszó kertje” becenevet kapott Madeira termékeny oázis az Atlanti-óceánon Portugália és Észak-Afrika között. A buja zöld táj, virágoskertek és a borok miatt népszerű. A Madeirán a látnivalók közé tartozik az Orchideakert és a Laurissilva-erdő, amely a világ legnagyobb babérkoncentrációja. A Madeira fővárosa és legnagyobb városa Funchal, ahol történelmi egyházak, erődítmények, turisztikai üdülőhelyek és éttermek találhatók, valamint a fákkal szegélyezett Lido sétány, ahonnan pompás kilátás nyílik az óceánra."
Madeira+=`<div  class="col-sm-4"><img id="Madeira" src="madeirakep.jpg"  class="blur enlarge" alt=""></div>`
felsorolas+=
`
<ul>
    <li><button id="felsorolok" onclick="kattintgato1()">1.Lisbon</button></li>
    <li><button id="felsorolok" onclick="kattintgato2()">2.Algarve</button></li>
    <li><button id="felsorolok" onclick="kattintgato3()">3.Obidos</button></li>
    <li><button id="felsorolok" onclick="kattintgato4()">4.Sintra</button></li>
    <li><button id="felsorolok" onclick="kattintgato5()">5.Madeira</button></li>
</ul>
`

document.getElementById("felsorolas").innerHTML=felsorolas
function kattintgato1(){
    document.getElementById("felsorolasokszovege").innerHTML=Lisbon
}
function kattintgato2(){
    document.getElementById("felsorolasokszovege").innerHTML=Algarve
}
function kattintgato3(){
    document.getElementById("felsorolasokszovege").innerHTML=Obidos
}
function kattintgato4(){
    document.getElementById("felsorolasokszovege").innerHTML=Sintra
}
function kattintgato5(){
    document.getElementById("felsorolasokszovege").innerHTML=Madeira
}