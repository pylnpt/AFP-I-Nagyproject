# Rendszerterv

## 1. Rendszer célja

A projekt célja egy olyan webes felület létrehozása amely támogatni képes az autókölcsönzőnek üzleti folyamatai egyszerűsítését. Emellet pedig ügyfélkörének bővítésére is lehetősége nyílik. Az autót bérelni kívánóknak nem kell közvetlenül a kölcsönzőt felkeresnie hanem az interneten keresztül elérheti és böngészni tud az elérhető autók közül. Így időt és energiát spórol és nem kell a nyitvatartási időt figyelemmel kísérni. Valamint a vállalkozás vezetőjének helyzete is leegyszerűsödik, mert nincs helyhez kötve, szabadon intézheti ügyeit, elutazhat, stb. Hanem csak egy felületen keresztül tud úja autót hozzáadni, a már meglévőeket módosítani esetlegesen törölni is. Így ezen döntések meghozatalát nem kell kiadnia a kezéból és az alkalmazottakra bíznia.

## 2. Projektterv

A webes alkalmazásban az üzletvezetőnek van a legnagyobb jogköre. Amíg a weboldalra látogató csak megtekintheti az autóálisan elérhető autókat és emailon keresztül bérelhet, addig a vezető az autók menedzselését végzi: autókat adhato hozzá, a már meglévőeket módosíthatja és alkalomadtán törölheti is azokat. Az alkalmazottaknak természetesen a megrendelő kérésére nem kaptak hozzáférést. Ők kizárólag emailon, illetve telefonon kommunikálhatnak az ügyfelekkel.


## 3. Üzleti folyamatok modellje

    Jelenlegi üzleti folyamatok modellje:

    A jelenlegi rendszerben elég körülményes egy autó kibérlése és használata. Ezt hivatott alkalmazásunk könnyíteni. Most az ügyfél felkeresi az autókölcsönzőt vagy ellátogat az autókölcsönző weboldalára, ahol meg tudja tekinteni a választékot. Miután eldöntötte, hogy melyik autót szeretné és mikor akkor egyeztet egy időpontot. Majd a megbeszélt időpontban ismét befárad a kölcsönzőbe, egy alkalmazottal egyeztetve elviszi az autót. Az előre leegyeztetett dátumra visszaviszi az autót és újra bekerülhet az elérhető autók listájába.

    Igényelt üzleti folyamatok modellje:

    Az általunk kínált megoldással azonban ez a folyamat leegyszerűsödne. Emellett a régi rendszer is a már megszokott rendben tudna üzemelni. Viszont személyes megjelenést az elején nem igényel, illetve a nyitvatartási időt is figyelmen kívül lehet hagyni. Az ügyfél a weboldalon tájékozódik, kiválasztja számára legmegfelelőbb autót. Itt az alábbi adatait kell megadnia:

        - nevét,
        - email címét
        - és üzenetként információkat a bérelni kívánt autóról

    Először emailba, majd telefonon leegyezteti az időpontot a bérlésre vonatkozóan. Így már csak a megbeszélt időpontban kell megjelennie és elhoznia a járművét. A kölcsönzés végét jelentő dátumon pedig visszaviszi ás átadja a bérelt járművet. Így újra bérelhetővé válik.

## 4. Funkcionális leírás

Az összes ügyfél számára látható az éppen bérelhető autók valamint a kölcsönzővel kapcsolatos adatok. Azonban csak az autókkal kapcsolatos műveleteket csak az üzletvezető képes módosítani. Leggyakoribb használati esete azonban mégis az ügyfelek böngészése lesz a weboldalon.

## 5. Fizikai környezet

Az alkalmazás bármilyen operációs rendszeren képes lesz elfutni, mivel egy webes alkalmazásról van szó, az általunk készített kódot a különböző böngészők képesek értelmezni. Ebből adódóan nem igényel hatalmas erőforrásokat, egy kétmagos processzor, valamint 2-4GB memóriával (RAM) rendelkező számitógép/laptop képes hiba nélkül futtatni az alkalmazást.

## 6. Architektúrális terv

Az architektúrális tervnek a funkcionális követelményeken túl fontos elemét képezik a rendszer használatát befolyásoló tényezők is. Az adatok tárolását adatbázisok segítségével biztosítjuk így rugalmasság szempontjából a későbbi bővítésekre is felkészültünk. Az adatbázis további felhasználók tekintetében 10 ezer felhasználó adatainak tárolására képes. Ezen belül 100 felhasználói fiók a cég alkalmazottjai, vezetősége részére van fenntartva. Emellett valós időben 100 és 200 közötti felhasználót tud biztonságosan kezelni egyszerre.
A felhasználók karbantartása is megvalósul. A hosszú ideje inaktív felhasználók előszöt email-ban értesítést kapnak majd ha erre sem reagálnak akkor a rendszer automatikusan törli így helyet szabadít fel a jövendőbeli felhasználóknak. Abban az esetben ha betelt a férőhelyek száma betelt akkor egy hibaüzenetet ad amelyben jelzi a felhasználó felé, hogy nincs lehetősége regisztrálni, térjen vissza később. Másik erőssége az alkalmazásnak, hogy az üzemeltetése egyszerű. Az esetleges szerver meghibásodás vagy szolgáltató váltás esetén gond nélkül áttelepíthető másik állomásra.
A mai korban elengedhetetlen követelmény a biztonság. Ezt a különböző felhasználói jogosultságokkal érhető el. Ennek köszönhetően a látogatók nem tudják az autók adatait módosítani valamint nem férhetnek hozzá bizalmas információkhoz. A felhasználók kezelése a token rendszerrel valósul meg.