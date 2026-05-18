import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fce365b9-f567-492b-b5dc-1520b8d432a4/files/215b5884-2d4c-46ee-941a-15223f6ca70b.jpg";
const LETTER_IMG = "https://cdn.poehali.dev/projects/fce365b9-f567-492b-b5dc-1520b8d432a4/files/cea23eb6-4a48-4f5c-9a40-7bc739036ce0.jpg";
const MAP_IMG = "https://cdn.poehali.dev/projects/fce365b9-f567-492b-b5dc-1520b8d432a4/files/88380178-ad13-4b32-96a0-291b44a03ae2.jpg";

const soldiers = [
  { id: 1, name: "Иванов Александр Петрович", years: "1918–1943", rank: "Старший сержант", unit: "62-я армия", region: "Сталинград", photo: HERO_IMG, bio: "Родился в 1918 году в Воронеже. Призван в июне 1941 г. Участвовал в обороне Сталинграда. Погиб в феврале 1943 года при освобождении города." },
  { id: 2, name: "Соколов Николай Михайлович", years: "1915–1944", rank: "Лейтенант", unit: "1-й Белорусский фронт", region: "Москва", photo: HERO_IMG, bio: "Уроженец Москвы. Окончил военное училище в 1940 году. Участвовал в битве за Москву, освобождении Белоруссии. Пропал без вести в 1944 году." },
  { id: 3, name: "Кузнецова Мария Ивановна", years: "1920–2001", rank: "Военный фельдшер", unit: "Санитарная рота", region: "Ленинград", photo: HERO_IMG, bio: "Медицинский работник, участница блокады Ленинграда. Спасла более 300 раненых солдат. Награждена орденом Красной Звезды." },
  { id: 4, name: "Петров Василий Фёдорович", years: "1912–1945", rank: "Капитан", unit: "3-я танковая армия", region: "Курск", photo: HERO_IMG, bio: "Танкист. Участник Курской битвы. Командовал ротой Т-34. Погиб в апреле 1945 года при штурме Берлина." },
  { id: 5, name: "Семёнов Григорий Алексеевич", years: "1923–2010", rank: "Рядовой", unit: "5-я гвардейская дивизия", region: "Смоленск", photo: HERO_IMG, bio: "Призван в 1942 году в возрасте 18 лет. Дошёл до Берлина. Был трижды ранен. После войны вернулся на родину и работал учителем." },
  { id: 6, name: "Орлова Анна Дмитриевна", years: "1922–1998", rank: "Снайпер", unit: "Женская снайперская бригада", region: "Тула", photo: HERO_IMG, bio: "Одна из первых женщин-снайперов. Имела 47 подтверждённых уничтоженных целей. Награждена медалью «За отвагу» и орденом Славы." },
];

const units = ["Все части", "62-я армия", "1-й Белорусский фронт", "Санитарная рота", "3-я танковая армия", "5-я гвардейская дивизия", "Женская снайперская бригада"];
const regions = ["Все регионы", "Сталинград", "Москва", "Ленинград", "Курск", "Смоленск", "Тула"];

const timeline = [
  { year: "1941", month: "Июнь", event: "22 июня — начало Великой Отечественной войны. Немецкие войска атаковали СССР по трём направлениям." },
  { year: "1941", month: "Сентябрь", event: "Начало блокады Ленинграда. Город окружён немецкими и финскими войсками." },
  { year: "1941", month: "Декабрь", event: "Контрнаступление советских войск под Москвой. Первая крупная победа Красной армии." },
  { year: "1942", month: "Ноябрь", event: "Начало операции «Уран» — окружение немецких войск под Сталинградом." },
  { year: "1943", month: "Февраль", event: "Капитуляция армии Паулюса под Сталинградом. Коренной перелом в войне." },
  { year: "1943", month: "Июль", event: "Курская битва — крупнейшее танковое сражение Второй мировой войны." },
  { year: "1944", month: "Январь", event: "Снятие блокады Ленинграда после 872 дней осады." },
  { year: "1944", month: "Июнь", event: "Операция «Багратион» — освобождение Белоруссии." },
  { year: "1945", month: "Май", event: "9 мая — Победа. Акт о безоговорочной капитуляции Германии подписан в Берлине." },
];

const letters = [
  {
    id: 1,
    from: "Иванов А.П.",
    to: "жене Наташе",
    date: "14 октября 1942",
    place: "Сталинград",
    text: "Здравствуй, моя дорогая Наташа. Пишу тебе с передовой. Здесь всё грохочет, но мы держимся. Береги детей. Я помню каждое твоё слово и возвращаюсь к ним в самые трудные минуты. Скоро всё кончится — верю в это всем сердцем. Целую тебя и малышей крепко-крепко.",
    photo: LETTER_IMG,
  },
  {
    id: 2,
    from: "Соколов Н.М.",
    to: "матери Евдокии",
    date: "3 июля 1944",
    place: "Белоруссия",
    text: "Дорогая мамочка, я жив и здоров. Мы наступаем, враг отступает. Видел бы ты, как встречают нас освобождённые города — со слезами и цветами. Думаю о тебе каждый день. Как огород? Не надрывайся. После победы вернусь и помогу. Жди меня.",
    photo: LETTER_IMG,
  },
  {
    id: 3,
    from: "Петров В.Ф.",
    to: "сыну Ивану",
    date: "17 января 1945",
    place: "Польша",
    text: "Сынок, ты уже взрослый — 12 лет. Когда вырастешь, знай: твой отец воевал честно. Помогай маме. Учись хорошо. Я горжусь тобой, даже не зная пока — каким ты станешь. Берлин уже близко. Скоро домой. Обнимаю тебя, мой мальчик.",
    photo: LETTER_IMG,
  },
];

const gallery = [
  { id: 1, title: "Портрет участника войны", year: "1942", src: HERO_IMG },
  { id: 2, title: "Фронтовое письмо", year: "1943", src: LETTER_IMG },
  { id: 3, title: "Военная карта", year: "1943", src: MAP_IMG },
  { id: 4, title: "Солдаты на привале", year: "1944", src: HERO_IMG },
  { id: 5, title: "Документы из архива", year: "1941", src: LETTER_IMG },
  { id: 6, title: "Карта наступления", year: "1945", src: MAP_IMG },
];

type Section = "biographies" | "heroes" | "map" | "letters";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("biographies");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("Все части");
  const [selectedRegion, setSelectedRegion] = useState("Все регионы");
  const [selectedSoldier, setSelectedSoldier] = useState<typeof soldiers[0] | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<typeof letters[0] | null>(null);
  const [galleryPhoto, setGalleryPhoto] = useState<typeof gallery[0] | null>(null);

  const filteredSoldiers = soldiers.filter((s) => {
    const matchName = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchUnit = selectedUnit === "Все части" || s.unit === selectedUnit;
    const matchRegion = selectedRegion === "Все регионы" || s.region === selectedRegion;
    return matchName && matchUnit && matchRegion;
  });

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "biographies", label: "Биографии", icon: "BookOpen" },
    { id: "heroes", label: "Герои", icon: "Star" },
    { id: "map", label: "Карта боёв", icon: "Map" },
    { id: "letters", label: "Письма", icon: "Mail" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5ede0", color: "#2a1a0a" }}>

      {/* Header */}
      <header className="relative overflow-hidden" style={{ backgroundColor: "#2a1a0a", borderBottom: "3px double #8b6914" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a47a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="container mx-auto px-4 py-10 relative">
          <div className="text-center animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #8b6914)" }} />
              <span className="text-3xl" style={{ color: "#8b6914" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, transparent, #8b6914)" }} />
            </div>
            <p className="font-oswald tracking-[0.4em] text-xs mb-4" style={{ color: "#c4a47a" }}>
              ВЕЛИКАЯ ОТЕЧЕСТВЕННАЯ ВОЙНА
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold mb-2" style={{ color: "#f5ede0", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
              Книга Памяти
            </h1>
            <p className="font-cormorant italic text-xl mt-2 mb-6" style={{ color: "#d4b896" }}>
              1941 — 1945
            </p>
            <p className="font-cormorant text-base max-w-xl mx-auto" style={{ color: "#a88450" }}>
              Их имена не должны быть забыты. Здесь хранятся истории тех, кто защитил нашу землю.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #8b6914)" }} />
              <span className="text-3xl" style={{ color: "#8b6914" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, transparent, #8b6914)" }} />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ backgroundColor: "#3d2510", borderBottom: "2px solid #8b6914" }}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center gap-2 px-6 py-4 font-oswald text-sm tracking-widest transition-all whitespace-nowrap"
                style={{
                  color: activeSection === item.id ? "#f5ede0" : "#c4a47a",
                  backgroundColor: activeSection === item.id ? "#5c3d1e" : "transparent",
                  borderBottom: activeSection === item.id ? "2px solid #8b6914" : "2px solid transparent",
                  marginBottom: "-2px",
                }}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">

        {/* ===== БИОГРАФИИ ===== */}
        {activeSection === "biographies" && (
          <div className="animate-fade-up">
            <div className="mb-8">
              <h2 className="font-oswald text-2xl tracking-widest mb-1" style={{ color: "#5c3d1e" }}>БИОГРАФИИ УЧАСТНИКОВ</h2>
              <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, #8b6914, transparent)" }} />

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="relative flex-1 min-w-[200px]">
                  <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#8b6914" }} />
                  <input
                    type="text"
                    placeholder="Поиск по имени или фамилии..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 font-cormorant text-sm border focus:outline-none focus:ring-1"
                    style={{ backgroundColor: "#f0e4cc", borderColor: "#c4a47a", color: "#2a1a0a" }}
                  />
                </div>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="px-3 py-2.5 font-cormorant text-sm border focus:outline-none"
                  style={{ backgroundColor: "#f0e4cc", borderColor: "#c4a47a", color: "#2a1a0a" }}
                >
                  {units.map((u) => <option key={u}>{u}</option>)}
                </select>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-3 py-2.5 font-cormorant text-sm border focus:outline-none"
                  style={{ backgroundColor: "#f0e4cc", borderColor: "#c4a47a", color: "#2a1a0a" }}
                >
                  {regions.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>

              <p className="font-cormorant text-sm mb-4" style={{ color: "#8b6914" }}>
                Найдено записей: {filteredSoldiers.length}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSoldiers.map((soldier) => (
                <div
                  key={soldier.id}
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedSoldier(soldier)}
                >
                  <div className="border" style={{ backgroundColor: "#f0e4cc", borderColor: "#c4a47a" }}>
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img src={soldier.photo} alt={soldier.name} className="w-full h-full object-cover sepia-img" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,26,10,0.7) 0%, transparent 60%)" }} />
                      <div className="absolute bottom-2 left-3">
                        <span className="font-oswald text-xs tracking-wider px-2 py-0.5" style={{ backgroundColor: "rgba(42,26,10,0.8)", color: "#d4b896" }}>
                          {soldier.rank}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-cormorant text-lg font-semibold leading-tight mb-1" style={{ color: "#2a1a0a" }}>
                        {soldier.name}
                      </h3>
                      <p className="font-cormorant italic text-sm mb-3" style={{ color: "#8b6914" }}>
                        {soldier.years}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 text-xs font-cormorant" style={{ color: "#5c3d1e" }}>
                          <Icon name="Shield" size={11} />
                          {soldier.unit}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-cormorant" style={{ color: "#5c3d1e" }}>
                          <Icon name="MapPin" size={11} />
                          {soldier.region}
                        </span>
                      </div>
                    </div>
                    <div className="px-4 pb-3 border-t" style={{ borderColor: "#d4b896" }}>
                      <button className="mt-3 text-xs font-oswald tracking-wider" style={{ color: "#8b6914" }}>
                        ЧИТАТЬ БИОГРАФИЮ →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredSoldiers.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" size={32} className="mx-auto mb-3" style={{ color: "#c4a47a" }} />
                <p className="font-cormorant text-lg" style={{ color: "#8b6914" }}>По вашему запросу ничего не найдено</p>
              </div>
            )}
          </div>
        )}

        {/* ===== ГЕРОИ ===== */}
        {activeSection === "heroes" && (
          <div className="animate-fade-up">
            <h2 className="font-oswald text-2xl tracking-widest mb-1" style={{ color: "#5c3d1e" }}>ГЕРОИ ВОЙНЫ</h2>
            <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, #8b6914, transparent)" }} />

            <div className="mb-10 border-2" style={{ borderColor: "#8b6914", backgroundColor: "#f0e4cc" }}>
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden" style={{ minHeight: "300px" }}>
                  <img src={HERO_IMG} alt="Герой" className="w-full h-full object-cover sepia-img absolute inset-0" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 60%, rgba(240,228,204,0.9))" }} />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ color: "#8b1a1a", fontSize: "24px" }}>★</span>
                    <span className="font-oswald text-xs tracking-[0.3em]" style={{ color: "#8b6914" }}>ГЕРОЙ СОВЕТСКОГО СОЮЗА</span>
                  </div>
                  <h3 className="font-cormorant text-4xl font-bold mb-2" style={{ color: "#2a1a0a" }}>
                    Иванов Александр Петрович
                  </h3>
                  <p className="font-cormorant italic text-lg mb-4" style={{ color: "#8b6914" }}>1918 — 1943 · Старший сержант, 62-я армия</p>
                  <p className="font-cormorant text-base leading-relaxed mb-6" style={{ color: "#3d2510" }}>
                    Участник обороны Сталинграда. В решающий момент боя закрыл собой амбразуру вражеского дзота, обеспечив продвижение своего подразделения. Посмертно удостоен звания Героя Советского Союза.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Орден Красной Звезды", "Медаль «За отвагу»", "Герой СССР"].map((award) => (
                      <span key={award} className="px-3 py-1 font-oswald text-xs tracking-wider border-2" style={{ color: "#8b6914", borderColor: "#8b6914", borderStyle: "double" }}>
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-oswald text-sm tracking-widest mb-5" style={{ color: "#8b6914" }}>ВСЕ ОТМЕЧЕННЫЕ УЧАСТНИКИ</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {soldiers.map((s) => (
                <div key={s.id} className="text-center cursor-pointer group" onClick={() => setSelectedSoldier(s)}>
                  <div className="relative overflow-hidden mb-2" style={{ paddingTop: "130%", boxShadow: "inset 0 0 0 2px #c4a47a, inset 0 0 0 6px #f0e4cc, 0 4px 20px rgba(42,26,10,0.3)" }}>
                    <img src={s.photo} alt={s.name} className="absolute inset-0 w-full h-full object-cover sepia-img group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-cormorant text-xs font-semibold leading-tight" style={{ color: "#2a1a0a" }}>{s.name.split(" ")[0]}</p>
                  <p className="font-cormorant text-xs" style={{ color: "#8b6914" }}>{s.name.split(" ").slice(1).join(" ")}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== КАРТА БОЁВ ===== */}
        {activeSection === "map" && (
          <div className="animate-fade-up">
            <h2 className="font-oswald text-2xl tracking-widest mb-1" style={{ color: "#5c3d1e" }}>КАРТА БОЁВ И ХРОНОЛОГИЯ</h2>
            <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, #8b6914, transparent)" }} />

            <div className="md:flex gap-8">
              <div className="md:w-3/5 mb-8 md:mb-0">
                <div className="relative border-2 overflow-hidden" style={{ borderColor: "#8b6914" }}>
                  <img src={MAP_IMG} alt="Карта боёв" className="w-full" style={{ filter: "sepia(60%) contrast(0.85)" }} />
                  <div className="absolute inset-0" style={{ background: "rgba(240,228,204,0.05)" }} />
                  <div className="absolute top-3 left-3 px-3 py-1" style={{ backgroundColor: "rgba(42,26,10,0.85)" }}>
                    <span className="font-oswald text-xs tracking-widest" style={{ color: "#d4b896" }}>ВОСТОЧНЫЙ ФРОНТ 1941–1945</span>
                  </div>
                </div>
                <p className="font-cormorant italic text-sm mt-2 text-center" style={{ color: "#8b6914" }}>
                  Архивная карта военных операций. Источник: ЦАМО РФ
                </p>

                <div className="mt-8">
                  <h3 className="font-oswald text-sm tracking-widest mb-5" style={{ color: "#8b6914" }}>ГАЛЕРЕЯ АРХИВНЫХ ФОТОГРАФИЙ</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {gallery.map((item) => (
                      <div key={item.id} className="cursor-pointer group relative overflow-hidden" style={{ paddingTop: "75%" }} onClick={() => setGalleryPhoto(item)}>
                        <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover sepia-img group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2" style={{ background: "rgba(42,26,10,0.7)" }}>
                          <div>
                            <p className="font-cormorant text-xs font-semibold" style={{ color: "#f5ede0" }}>{item.title}</p>
                            <p className="font-cormorant text-xs italic" style={{ color: "#d4b896" }}>{item.year}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-2/5">
                <h3 className="font-oswald text-sm tracking-widest mb-6" style={{ color: "#8b6914" }}>ХРОНОЛОГИЯ СОБЫТИЙ</h3>
                <div className="relative">
                  <div className="absolute left-[52px] top-0 bottom-0 w-px" style={{ backgroundColor: "#c4a47a" }} />
                  {timeline.map((event, i) => (
                    <div key={i} className="flex gap-4 mb-6 relative">
                      <div className="flex-shrink-0 text-right" style={{ width: "44px" }}>
                        <span className="font-oswald text-xs font-bold block" style={{ color: "#8b1a1a" }}>{event.year}</span>
                        <span className="font-cormorant text-xs italic block" style={{ color: "#8b6914" }}>{event.month}</span>
                      </div>
                      <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1 relative z-10 border-2" style={{ backgroundColor: "#f0e4cc", borderColor: "#8b6914" }} />
                      <p className="font-cormorant text-sm leading-snug flex-1 -mt-0.5" style={{ color: "#3d2510" }}>
                        {event.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== ПИСЬМА ===== */}
        {activeSection === "letters" && (
          <div className="animate-fade-up">
            <h2 className="font-oswald text-2xl tracking-widest mb-1" style={{ color: "#5c3d1e" }}>ФРОНТОВЫЕ ПИСЬМА</h2>
            <div className="h-px mb-2" style={{ background: "linear-gradient(90deg, #8b6914, transparent)" }} />
            <p className="font-cormorant italic text-base mb-8" style={{ color: "#8b6914" }}>
              Живые голоса из прошлого — письма солдат своим близким
            </p>

            <div className="space-y-8">
              {letters.map((letter) => (
                <div
                  key={letter.id}
                  className="cursor-pointer border transition-transform hover:scale-[1.01]"
                  style={{ borderColor: "#c4a47a", background: "linear-gradient(180deg, #f7edd8 0%, #f0e4cc 100%)", boxShadow: "inset 0 0 30px rgba(139,105,20,0.1), 0 4px 24px rgba(42,26,10,0.15)" }}
                  onClick={() => setSelectedLetter(letter)}
                >
                  <div className="md:flex">
                    <div className="md:w-40 flex-shrink-0 relative overflow-hidden" style={{ minHeight: "160px" }}>
                      <img src={letter.photo} alt="Письмо" className="w-full h-full object-cover absolute inset-0 sepia-img" />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="font-oswald text-xs tracking-wider" style={{ color: "#8b6914" }}>ОТ:</span>
                          <span className="font-cormorant font-semibold ml-2" style={{ color: "#2a1a0a" }}>{letter.from}</span>
                          <span className="font-oswald text-xs tracking-wider ml-4" style={{ color: "#8b6914" }}>КОМУ:</span>
                          <span className="font-cormorant ml-2" style={{ color: "#2a1a0a" }}>{letter.to}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-cormorant italic text-sm" style={{ color: "#8b6914" }}>{letter.date}</p>
                          <p className="font-cormorant text-xs" style={{ color: "#a88450" }}>{letter.place}</p>
                        </div>
                      </div>
                      <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, #c4a47a, transparent)" }} />
                      <p className="font-cormorant italic text-base leading-relaxed line-clamp-3" style={{ color: "#3d2510" }}>
                        «{letter.text}»
                      </p>
                      <button className="mt-4 text-xs font-oswald tracking-wider" style={{ color: "#8b6914" }}>
                        ЧИТАТЬ ПОЛНОСТЬЮ →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center" style={{ backgroundColor: "#2a1a0a", borderTop: "3px double #8b6914" }}>
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-16" style={{ backgroundColor: "#8b6914" }} />
          <span style={{ color: "#8b6914", fontSize: "18px" }}>✦</span>
          <div className="h-px w-16" style={{ backgroundColor: "#8b6914" }} />
        </div>
        <p className="font-cormorant italic text-lg mb-1" style={{ color: "#d4b896" }}>
          Никто не забыт, ничто не забыто
        </p>
        <p className="font-oswald text-xs tracking-widest" style={{ color: "#8b6914" }}>
          КНИГА ПАМЯТИ 1941–1945
        </p>
      </footer>

      {/* Modal: Biography */}
      {selectedSoldier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(42,26,10,0.85)" }} onClick={() => setSelectedSoldier(null)}>
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "#f5ede0", border: "2px solid #8b6914" }} onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedSoldier.photo} alt={selectedSoldier.name} className="w-full h-64 object-cover sepia-img" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #f5ede0 0%, transparent 50%)" }} />
              <button onClick={() => setSelectedSoldier(null)} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "rgba(42,26,10,0.7)", color: "#f5ede0" }}>
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-8 -mt-8 relative">
              <span className="font-oswald text-xs tracking-widest px-2 py-0.5 mb-3 inline-block" style={{ backgroundColor: "#5c3d1e", color: "#f5ede0" }}>
                {selectedSoldier.rank}
              </span>
              <h2 className="font-cormorant text-3xl font-bold mb-1" style={{ color: "#2a1a0a" }}>{selectedSoldier.name}</h2>
              <p className="font-cormorant italic mb-4" style={{ color: "#8b6914" }}>{selectedSoldier.years}</p>
              <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, #8b6914, transparent)" }} />
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="font-oswald text-xs tracking-wider block mb-1" style={{ color: "#8b6914" }}>ВОИНСКАЯ ЧАСТЬ</span>
                  <span className="font-cormorant" style={{ color: "#2a1a0a" }}>{selectedSoldier.unit}</span>
                </div>
                <div>
                  <span className="font-oswald text-xs tracking-wider block mb-1" style={{ color: "#8b6914" }}>РЕГИОН</span>
                  <span className="font-cormorant" style={{ color: "#2a1a0a" }}>{selectedSoldier.region}</span>
                </div>
              </div>
              <p className="font-cormorant text-base leading-relaxed" style={{ color: "#3d2510" }}>{selectedSoldier.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Letter */}
      {selectedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(42,26,10,0.85)" }} onClick={() => setSelectedLetter(null)}>
          <div className="max-w-xl w-full" style={{ backgroundColor: "#f7edd8", border: "1px solid #c4a47a", boxShadow: "0 8px 40px rgba(42,26,10,0.4)" }} onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-oswald text-xs tracking-widest mb-1" style={{ color: "#8b6914" }}>ПОЛЕВАЯ ПОЧТА</p>
                  <p className="font-cormorant text-sm" style={{ color: "#5c3d1e" }}>{selectedLetter.place}, {selectedLetter.date}</p>
                </div>
                <button onClick={() => setSelectedLetter(null)} style={{ color: "#8b6914" }}>
                  <Icon name="X" size={18} />
                </button>
              </div>
              <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, #c4a47a, transparent)" }} />
              <div className="mb-4 flex gap-6 flex-wrap">
                <div>
                  <span className="font-oswald text-xs tracking-wider" style={{ color: "#8b6914" }}>ОТ: </span>
                  <span className="font-cormorant font-semibold" style={{ color: "#2a1a0a" }}>{selectedLetter.from}</span>
                </div>
                <div>
                  <span className="font-oswald text-xs tracking-wider" style={{ color: "#8b6914" }}>КОМУ: </span>
                  <span className="font-cormorant" style={{ color: "#2a1a0a" }}>{selectedLetter.to}</span>
                </div>
              </div>
              <p className="font-cormorant italic text-lg leading-relaxed" style={{ color: "#3d2510", lineHeight: "1.9" }}>
                {selectedLetter.text}
              </p>
              <div className="h-px mt-6" style={{ background: "linear-gradient(90deg, transparent, #c4a47a, transparent)" }} />
            </div>
          </div>
        </div>
      )}

      {/* Modal: Gallery Photo */}
      {galleryPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(42,26,10,0.9)" }} onClick={() => setGalleryPhoto(null)}>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={galleryPhoto.src} alt={galleryPhoto.title} className="w-full sepia-img" style={{ border: "4px solid #8b6914" }} />
              <button onClick={() => setGalleryPhoto(null)} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "rgba(42,26,10,0.8)", color: "#f5ede0" }}>
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="text-center mt-3">
              <p className="font-cormorant text-lg" style={{ color: "#f5ede0" }}>{galleryPhoto.title}</p>
              <p className="font-cormorant italic text-sm" style={{ color: "#d4b896" }}>{galleryPhoto.year} г.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}