var szoveg = ""
szoveg+=`
`
document.getElementById("html1").innerHTML=szoveg
var vianakep = ""
var vianazaszlokep = ""
var viana1 = "A Viana do Castelo kerület (portugálul Distrito de Viana do Castelo) Portugália északnyugati részén fekszik. Északról a spanyolországi Galicia Pontevedra tartománya, keletről a szintén galiciai Ourense tartomány, délről a portugál Braga kerület, nyugatról pedig az Atlanti-óceán határolja. Területe 2255 km², népessége 252.011 fő (2006). Népsűrűsége 111,8 fő/km². A kerület központja Viana do Castelo."
vianakep+=`<img id="vianakep" src="vianadecastelo.jpg" alt="">`
vianazaszlokep+=`<img id="vianazaszlo" src="vianadecastelozaszlo.jpg" alt="">`
function viana(){
    
    
    document.getElementById("terkepadatok").innerHTML=viana1
    document.getElementById("terkepadatok").innerHTML+=vianakep 
    document.getElementById("terkepadatok").innerHTML+=vianazaszlokep
}
var bragakep = ""
var bragazaszlokep = ""
var braga1 = "Braga kerület (portugálul Distrito de Braga) Portugália északnyugati részén, Norte régióban található közigazgatási egység. Északról Viana do Castelo kerület és Galicia (Spanyolország), keletről Vila Real kerület, délről Porto kerület, nyugatról pedig az Atlanti-óceán határolja. Nevét székhelye, Braga után kapta. Területe 2706 km², ahol 831.368 fős népesség él."
bragakep+=`<img id="bragakep" src="braga.jpg" alt="">`
bragazaszlokep+=`<img id="bragazaszlo" src="bragazaszlo.jpg" alt="">`
function braga(){
    document.getElementById("terkepadatok").innerHTML=braga1
    document.getElementById("terkepadatok").innerHTML+=bragakep 
    document.getElementById("terkepadatok").innerHTML+=bragazaszlokep
}
var vilarealkep = ""
var vilarealzaszlokep = ""
var vilareal1 = "Vila Real kerület (portugálul: Distrito de Vila Real) egy kerület Észak-Portugáliában. A 4 239 km2 területű kerület Porto kikötővárosától keletre és a Douro folyótól északra fekszik. Vila Real mindig is Trás-os-Montes történelmi tartományhoz tartozott. Megközelítőleg 230 000 lakosa volt a 2001-es népszámláláskor. A népesség az utóbbi években az elvándorlás és az elöregedés miatt negatív arányokat mutat. Sok falu elnéptelenedett és elnéptelenedett, míg a kerület fővárosa gyarapodott. Északon és keleten Spanyolországgal (Galícia), nyugaton Braga és Porto körzetével, délen Viseu körzetével, keleten pedig Bragança körzetével határos."
vilarealkep+=`<img id="vilarealkep" src="vilareal.jpg" alt="">`
vilarealzaszlokep+=`<img id="vilarealzaszlo" src="vilarealzaszlo.jpg" alt="">`

function vilareal(){
    document.getElementById("terkepadatok").innerHTML=vilareal1
    document.getElementById("terkepadatok").innerHTML+=vilarealkep
    document.getElementById("terkepadatok").innerHTML+=vilarealzaszlokep
}
var bragnacakep=""
var bragnacazaszlokep=""
var bragnaca1 = "Bragança kerület (portugálul Distrito de Bragança) Portugália északkeleti részén található közigazgatási egység. Északról Galicia és Kasztília és León (Spanyolország), keletről Kasztília és León (Spanyolország), délről Guarda kerület, délnyugatról Viseu kerület, nyugatról Vila Real kerület határolja. Területe 6608 km², amelyen 136.252 fős (2011) népesség él. A kerület székhelyéről, Bragançáról kapta nevét."
bragnacakep+=`<img id="bragnacakep" src="braganca.jpg" alt="">`
bragnacazaszlokep+=`<img id="bragnacazaszlo" src="bragancazaszlo.jpg" alt="">`

function bragnaca(){
    document.getElementById("terkepadatok").innerHTML=bragnaca1
    document.getElementById("terkepadatok").innerHTML+=bragnacakep
    document.getElementById("terkepadatok").innerHTML+=bragnacazaszlokep
}
var portokep = ""
var portozaszlokep = ""
var porto1 = "Portói kerület (portugálul: Distrito do Porto) Portugália északnyugati partvidékén található. A kerület fővárosa Porto, az ország második legnagyobb városa. Délen Aveiro és Viseu, északon Braga, keleten pedig Vila Real kerület határolja.Területe 2 395 km2 (925 négyzetkilométer), lakossága 1 817 172 fő. 2017-ben a fő legális külföldi lakosság Brazíliából (9 442 fő), Kínából (2 475 fő), Ukrajnából (2 160 fő), Olaszországból (1 273 fő), Spanyolországból (1 189 fő), Angolából (1 118 fő) és a Zöld-foki szigetekről (1 040 fő) érkezett. Ezek a számok nem tartalmazzák azokat, akik portugál állampolgárságot szereztek, ami a közelmúltban portugál-brasilek vagy portugál-afrikaiak körében rendszeres."
portokep+=`<img id="portokep" src="porto.jpg" alt="">`
portozaszlokep+=`<img id="portozaszlo" src="portozaszlo.jpg" alt="">`

function porto(){
    document.getElementById("terkepadatok").innerHTML=porto1
    document.getElementById("terkepadatok").innerHTML+=portokep
    document.getElementById("terkepadatok").innerHTML+=portozaszlokep
}
var aveirokep=""
var aveirozaszlokep=""
var aveiro1 = "Aveiro kerület (portugálul Distrito de Aveiro) Portugália nyugati részén, Norte és Centro régióban található közigazgatási egység. Északról Porto kerület, keletről Viseu kerület, délről Coimbra kerület, nyugatról pedig az Atlanti-óceán határolja. Nevét székhelye, Aveiro város után kapta. Területe 2808 km², ahol 713 578 fős népesség él."
aveirokep+=`<img id="aveirokep" src="aveiro.jpg" alt="">`
aveirozaszlokep+=`<img id="aveirozaszlo" src="aveirozaszlo.png" alt="">`

function aveiro(){
    document.getElementById("terkepadatok").innerHTML=aveiro1
    document.getElementById("terkepadatok").innerHTML+=aveirokep
    document.getElementById("terkepadatok").innerHTML+=aveirozaszlokep
}
var viseukep=""
var viseuzaszlokep=""
var viseu1 = "Viseu kerület (portugálul: Distrito de Viseu) Portugália északi-középső részén, Norte és Centro régiókban található közigazgatási egység. Északról Porto és Vila Real kerületek, északkeletről Bragança kerület, keletről Guarda kerület, délről Coimbra kerület, nyugatról pedig Aveiro kerület határolja. Nevét székhelye, Viseu után kapta. Területe 5007 km², ahol 394 927 fős népesség él."
viseukep+=`<img id="viseukep" src="viseu.jpg" alt="">`
viseuzaszlokep+=`<img id="viseuzaszlo" src="viseuzaszlo.jpg" alt="">`
function viseu(){
    document.getElementById("terkepadatok").innerHTML=viseu1
    document.getElementById("terkepadatok").innerHTML+=viseukep
    document.getElementById("terkepadatok").innerHTML+=viseuzaszlokep
}
var guardakep = ""
var guardazaszlokep=""
var guarda1 = "A Guarda kerület Portugália középső, keleti részén, Centro régióban található. Délről Castelo Branco, nyugatról Coimbra és Viseu, északról Braganca kerület, kelet felől pedig Kasztília és León és kis részt Extremadura (mindkettő Spanyolország) határolja.Nevét székhelye után kapta. Területe 5518 km², ahol 173.716 fős népesség él."
guardakep+=`<img id="guardakep" src="guarda.jpg" alt="">`
guardazaszlokep+=`<img id="guardazaszlo" src="guardazaszlo.jpg" alt="">`
function guarda(){
    document.getElementById("terkepadatok").innerHTML=guarda1
    document.getElementById("terkepadatok").innerHTML+=guardakep
    document.getElementById("terkepadatok").innerHTML+=guardazaszlokep
}
var coimbrakep = ""
var coimbrazaszlokep = ""
var coimbra1 = "Coimbra kerület (portugálul: Distrito de Coimbra) Portugália középső részén, Centro régióban található közigazgatási egység. Északról Aveiro és Viseu kerületek, keletről Guarda és Castelo Branco kerületek, délről Leiria kerület, nyugatról pedig az Atlanti-óceán határolja. Nevét székhelye, Coimbra város után kapta. Területe 3947 km², ahol 441 245 fős népesség él."
coimbrakep+=`<img id="coimbrakep" src="coimbra.jpg" alt="">`
coimbrazaszlokep+=`<img id="coimbrazaszlo" src="coimbrazaszlo.jpg" alt="">`
function coimbra(){
    document.getElementById("terkepadatok").innerHTML=coimbra1
    document.getElementById("terkepadatok").innerHTML+=coimbrakep
    document.getElementById("terkepadatok").innerHTML+=coimbrazaszlokep
}
var castelokep = ""
var castelozaszlokep = ""
var castelo1 = "Castelo Branco kerület (portugálul: Distrito de Castelo Branco) Portugália középső részén, Centro régióban található közigazgatási egység. Északról Coimbra és Guarda kerületek, keletről Extremadura (Spanyolország), délről Portalegre és Santarém kerületek, nyugatról pedig Leiria kerület határolja. Nevét székhelye, Castelo Branco város után kapta. Területe 6675 km², ahol 208 070 fős népesség él."
castelokep+=`<img id="castelokep" src="castelobranco.jpg" alt="">`
castelozaszlokep+=`<img id="castelozaszlo" src="castelobrancozaszlo.jpg" alt="">`
function castelo(){
    document.getElementById("terkepadatok").innerHTML=castelo1
    document.getElementById("terkepadatok").innerHTML+=castelokep
    document.getElementById("terkepadatok").innerHTML+=castelozaszlokep
}
var leiriakep = ""
var leiriazaszlokep = ""
var leiria1 = "Leiria kerület (portugál nyelven: Distrito de Leiria) Portugália nyugati részén, a Centro régióban található. Délről Lisszabon kerület, nyugatról az Atlanti-óceán, északról Coimbra, kelet felől pedig Castelo Branco és Santarém kerületek határolják. Nevét székhelye, Leiria város után kapta. Területe 3515 km², ahol 459.450 fős népesség él. A kerületben a népsűrűség 131 fő/ km²."
leiriakep+=`<img id="leiriakep" src="leiria.jpg" alt="">`
leiriazaszlokep+=`<img id="leiriazaszlo" src="leiriazaszlo.jpg" alt="">`
function leiria(){
    document.getElementById("terkepadatok").innerHTML=leiria1
    document.getElementById("terkepadatok").innerHTML+=leiriakep
    document.getElementById("terkepadatok").innerHTML+=leiriazaszlokep
}
var santeremkep = ""
var santeremzaszlokep = ""
var santerem1 = "Santarém kerület Portugália középső részén, Centro (régió) és Alentejo régióban található. Délről Setúbal (kerület) és Évora (kerület), nyugatról az Lisszabon (kerület) és Leiria (kerület), északról Castelo Branco (kerület), kelet felől pedig Portalegre (kerület) határolja. Nevét székhelye után kapta. Területe 6747 négyzetkilométer, ahol 475344 fős népesség él."
santeremkep+=`<img id="santeremkep" src="santarem.jpg" alt="">`
santeremzaszlokep+=`<img id="santeremzaszlo" src="santaremzaszlo.jpg" alt="">`
function santerem(){
    document.getElementById("terkepadatok").innerHTML=santerem1
    document.getElementById("terkepadatok").innerHTML+=santeremkep
    document.getElementById("terkepadatok").innerHTML+=santeremzaszlokep
}
var portalegrekep = ""
var portalegrezaszlokep = ""
var portalegre1 = "Portalegre kerület (portugálul Distrito de Portalegre) Portugália középső részén, Alentejo régióban található közigazgatási egység. Északról Castelo Branco kerület, keletről Extremadura (Spanyolország), délről Évora kerület, nyugatról pedig Santarém kerület határolja. Nevét székhelye, Portalegre után kapta. Területe 6065 km², ahol 127 018 fős népesség él."
portalegrekep+=`<img id="portalegrekep" src="portalegre.jpg" alt="">`
portalegrezaszlokep+=`<img id="portalegrezaszlo" src="portalegrezaszlo.jpg" alt="">`
function portalegre(){
    document.getElementById("terkepadatok").innerHTML=portalegre1
    document.getElementById("terkepadatok").innerHTML+=portalegrekep
    document.getElementById("terkepadatok").innerHTML+=portalegrezaszlokep
}
var lisboakep = ""
var lisboazaszlokep = ""
var lisboa1 = "Lisszabon kerület (portugál nyelven: Distrito de Lisboa) Portugália nyugati részén, a Centro régióban található. Délkeletről Setúbal kerület, nyugatról az Atlanti-óceán, északról Leiria, kelet felől pedig Santarém kerületek határolják. Nevét székhelye és egyben a portugál főváros, Lisszabon város után kapta. Területe 2800 km², ahol 2 135 992 fős népesség él. A kerületben a népsűrűség 760 fő/ km²."
lisboakep+=`<img id="lisboakep" src="lisboa.jpg" alt="">`
lisboazaszlokep+=`<img id="lisboazaszlo" src="lisboazaszlo.png" alt="">`
function lisboa(){
    document.getElementById("terkepadatok").innerHTML=lisboa1
    document.getElementById("terkepadatok").innerHTML+=lisboakep
    document.getElementById("terkepadatok").innerHTML+=lisboazaszlokep
}
var evorakep=""
var evorazaszlokep=""
var evora1 = "Évora kerület (portugálul Distrito de Évora) Portugália déli részén, Alentejo régióban található. Délről Beja, nyugatról Setúbal, északról Santarém és Portalegre kerületek, kelet felől pedig Extremadura (Spanyolország) határolja. Nevét székhelye, Évora város után kapta. Területe 7393 km², ahol 173 408 fős népesség él.[mikor?]"
evorakep+=`<img id="evorakep" src="evora.jpg" alt="">`
evorazaszlokep+=`<img id="evorazaszlo" src="evorazaszlo.jpg" alt="">`
function evora(){
    document.getElementById("terkepadatok").innerHTML=evora1
    document.getElementById("terkepadatok").innerHTML+=evorakep
    document.getElementById("terkepadatok").innerHTML+=evorazaszlokep
}
var setubalkep = ""
var setubalzaszlokep = ""
var setubal1 = "Setúbal kerület Portugália délnyugati részén, Lisszabon és Alentejo régióban található. Délről Beja, nyugatról az Atlanti-óceán, északról Lisszabon és Santarém, kelet felől pedig Évora kerület határolja. Nevét székhelye, Setúbal után kapta. Területe 5064 km², ahol 788.459 fős népesség él."
setubalkep+=`<img id="setubalkep" src="setubal.jpg" alt="">`
setubalzaszlokep+=`<img id="setubalzaszlo" src="setubalzaszlo.jpg" alt="">`
function setubal(){
    document.getElementById("terkepadatok").innerHTML=setubal1
    document.getElementById("terkepadatok").innerHTML+=setubalkep
    document.getElementById("terkepadatok").innerHTML+=setubalzaszlokep
}
var bejakep = ""
var bejazaszlokep = ""
var beja1 = "Beja kerület (portugálul Distrito de Beja) Portugália déli részén található közigazgatási egység. Északról Évora kerület és Extremadura (Spanyolország), keletről Andalúzia (Spanyolország), délről Faro kerület, nyugatról az Atlanti-óceán és Setúbal kerület határolja. Területe 10.425 km², amelyen 150.287 fős népesség él. A kerület székhelyéről, Bejáról kapta nevét."
bejakep+=`<img id="bejakep" src="beja.jpg" alt="">`
bejazaszlokep+=`<img id="bejazaszlo" src="bejazaszlo.png" alt="">`
function beja(){
    document.getElementById("terkepadatok").innerHTML=beja1
    document.getElementById("terkepadatok").innerHTML+=bejakep
    document.getElementById("terkepadatok").innerHTML+=bejazaszlokep
}
var farokep = ""
var farozaszlokep = ""
var faro1 = "Faro kerület (portugálul Distrito de Faro) Portugália déli részén, a történelmi Algarve tartományban helyezkedik el. Északról Beja kerület, keletről Andalúzia (Spanyolország), délről és nyugatról pedig az Atlanti-óceán határolja. Területe 4 960 km², amellyel a 10. legnagyobb területű kerület Portugálián belül. Népessége 458 734 fő. Nevét a kerület központjáról, Faro városáról kapta."
farokep+=`<img id="farokep" src="faro.jpg" alt="">`
farozaszlokep+=`<img id="farozaszlo" src="farozaszlo.png" alt="">`
function faro(){
    document.getElementById("terkepadatok").innerHTML=faro1
    document.getElementById("terkepadatok").innerHTML+=farokep
    document.getElementById("terkepadatok").innerHTML+=farozaszlokep
}
var madeirakep = ""
var madeirazaszlokep = ""
var madeira1 = "Madeira (portugálul Ilha da Madeira) a vulkáni eredetű Madeira-szigetek legnagyobbika az Atlanti-óceánban, Lisszabontól 978 km-re. Geológiailag az Afrikai-lemezen fekszik, de Porto Santóval együtt politikailag és kulturálisan Európához tartozik, mint Portugália autonóm régiója."
madeirakep+=`<img id="madeirakep" src="madeira.jpg" alt="">`
madeirazaszlokep+=`<img id="madeirazaszlo" src="madeirazaszlo.png" alt="">`
function madeira(){
    document.getElementById("terkepadatok").innerHTML=madeira1
    document.getElementById("terkepadatok").innerHTML+=madeirakep
    document.getElementById("terkepadatok").innerHTML+=madeirazaszlokep
}
var acoreskep = ""
var acoreszaszlokep = ""
var acores1 = "Az Azori-szigetek (portugálul: Açores) Portugáliához tartozó szigetcsoport az Atlanti-óceánon, Lisszabontól körülbelül 1400 km-re nyugatra, Marokkótól körülbelül 1500 km-re északnyugatra és körülbelül 1930 km-re délkeletre Új-Fundlandtól. Portugália két autonóm régiójának egyike (a másik Madeira). Adminisztratív központja a Faial szigetén épült Horta, legnagyobb városa a São Miguel szigetén található Ponta Delgada."
acoreskep+=`<img id="acoreskep" src="acores.jpg" alt="">`
acoreszaszlokep+=`<img id="acoreszaszlo" src="acoreszaszlo1.png" alt="">`
function acores(){
    document.getElementById("terkepadatok").innerHTML=acores1
    document.getElementById("terkepadatok").innerHTML+=acoreskep
    document.getElementById("terkepadatok").innerHTML+=acoreszaszlokep
}
