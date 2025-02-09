import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useTheme } from "./hooks/useTheme";
import maybankLogo from "./assets/maybank.svg";

const AppContent = () => {
  const { isDark, toggleTheme } = useTheme();

  const sites = [
    {
      name: "quran.my",
      domain: ".my",
      prefix: "Quran",
      url: "https://quran.my",
      description:
        "Platform Al-Quran digital Malaysia dengan terjemahan Bahasa Melayu dan tafsir lengkap. Baca, dengar, dan pelajari Al-Quran secara online.",
      metaDescription:
        "Baca Al-Quran digital dengan terjemahan Bahasa Melayu & tafsir. Platform pembelajaran Al-Quran online percuma untuk Muslim di Malaysia.",
      keywords: [
        "al quran digital",
        "terjemahan al quran",
        "tafsir quran",
        "baca quran online",
        "quran bahasa melayu",
      ],
      category: "Islamic Education",
      language: "ms-MY",
      features: [
        "Terjemahan Bahasa Melayu",
        "Tafsir Lengkap",
        "Audio Quran",
        "Bookmark Ayat",
        "Mode Gelap",
      ],
    },
    {
      name: "masjid.org.my",
      domain: ".org.my",
      prefix: "Masjid",
      url: "https://masjid.org.my",
      description:
        "Aplikasi waktu solat TV untuk masjid & surau di seluruh Malaysia. Jadual waktu solat tepat, azan automatik, dan info masjid terkini.",
      metaDescription:
        "Aplikasi waktu solat rasmi untuk masjid Malaysia. Dapatkan jadual solat tepat, azan automatik & info masjid terkini untuk Android.",
      keywords: [
        "waktu solat",
        "jadual solat",
        "aplikasi masjid",
        "azan malaysia",
        "info masjid",
      ],
      category: "Islamic Prayer Times",
      language: "ms-MY",
      features: [
        "Waktu Solat Tepat",
        "Azan Automatik",
        "Info Masjid",
        "Kompas Kiblat",
        "Notifikasi Solat",
      ],
    },
    {
      name: "kitabhadis.com",
      domain: ".com",
      prefix: "KitabHadis",
      url: "https://kitabhadis.com",
      description:
        "Koleksi 9 hadis lengkap dengan terjemahan Bahasa Melayu & 15 bahasa lain. Sumber rujukan hadis dipercayai untuk umat Islam.",
      metaDescription:
        "Portal hadis sahih dalam Bahasa Melayu dengan terjemahan & penjelasan. Koleksi lengkap dari Bukhari, Muslim & kitab hadis muktabar.",
      keywords: [
        "hadis sahih",
        "terjemahan hadis",
        "kitab hadis",
        "hadis melayu",
        "penjelasan hadis",
      ],
      category: "Islamic Reference",
      language: "ms-MY",
      features: [
        "Hadis Sahih",
        "Terjemahan Melayu",
        "Penjelasan Ulama",
        "Carian Hadis",
        "Kategori Hadis",
      ],
    },
    {
      name: "kitabselawat.com",
      domain: ".com",
      prefix: "KitabSelawat",
      url: "https://kitabselawat.com",
      description:
        "Koleksi lengkap selawat, zikir & doa pilihan beserta kelebihan dan fadilat. Panduan bacaan yang sahih untuk amalan harian Muslim.",
      metaDescription:
        "Koleksi selawat, zikir & doa pilihan dengan kelebihan. Portal rujukan amalan harian Muslim dengan panduan bacaan yang sahih.",
      keywords: [
        "selawat nabi",
        "zikir harian",
        "doa pilihan",
        "amalan muslim",
        "fadilat selawat",
      ],
      category: "Islamic Prayers",
      language: "ms-MY",
      features: [
        "Selawat Pilihan",
        "Zikir Harian",
        "Doa Mustajab",
        "Audio Bacaan",
        "Fadilat Amalan",
      ],
    },
    {
      name: "bacalah.org",
      domain: ".org",
      prefix: "Bacalah",
      url: "https://bacalah.org",
      description:
        "Portal Islam komprehensif dengan Al-Quran online, panduan solat, terjemahan hadis, dan rujukan Islam. Sumber ilmu Islam lengkap dalam Bahasa Melayu.",
      metaDescription:
        "Portal Islam lengkap dengan Al-Quran online, panduan solat & terjemahan hadis. Sumber rujukan Islam terpercaya dalam Bahasa Melayu.",
      keywords: [
        "portal islam",
        "quran online",
        "panduan solat",
        "rujukan islam",
        "ilmu islam",
      ],
      category: "Islamic Portal",
      language: "ms-MY",
      features: [
        "Quran Online",
        "Panduan Solat",
        "Hadis Terjemahan",
        "Artikel Islam",
        "Forum Diskusi",
      ],
    },
    {
      name: "waktu-solat.com",
      domain: ".com",
      prefix: "Waktu-Solat",
      url: "https://waktu-solat.com",
      description:
        "Jadual waktu solat untuk seluruh Malaysia. Waktu Subuh, Zohor, Asar, Maghrib & Isyak mengikut zon kawasan JAKIM.",
      metaDescription:
        "Jadual waktu solat rasmi Malaysia mengikut zon JAKIM. Waktu solat tepat untuk Subuh, Zohor, Asar, Maghrib & Isyak di seluruh Malaysia.",
      keywords: [
        "waktu solat",
        "jadual solat",
        "waktu sembahyang",
        "zon solat",
        "waktu imsak",
      ],
      category: "Prayer Times",
      language: "ms-MY",
      features: [
        "Waktu Solat Rasmi",
        "Zon JAKIM",
        "Kalendar Hijrah",
        "Waktu Imsak",
        "Kiblat Compass",
      ],
    },
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden w-full min-h-screen">
      <div className="relative z-10 min-h-screen bg-[var(--color-bg-primary)]/90 dark:bg-[var(--color-bg-primary)]/95 transition-colors duration-200">
        <div className="min-h-screen bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-200">
          <div className="flex relative z-10 flex-col items-center p-8 max-w-full">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="fixed top-4 right-4 p-0 m-0 bg-transparent border-0 appearance-none focus:outline-none"
              style={{ background: "none" }}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[var(--color-icon)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[var(--color-text-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Logo Section */}
            <div className="flex flex-col items-center mt-8 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 w-48 h-auto"
                viewBox="0 0 517.4 291.2"
              >
                <path
                  fill="#54be8d"
                  fillRule="evenodd"
                  d="m260.9 103.1-27.1-26.7c-27.8-28.7-55.3-57.1-99-49.4-6.2 1.1-12.6 2.9-17.4 4.5 12.9-17.7 33-30.1 56-31.4 23.9-1.3 44.2 6.2 61.1 23.2 5.7 5.7 17.2 17.2 26.1 26.2l27.1 26.7c27.8 28.7 55.3 57.1 99 49.4 6.2-1.1 12.6-2.9 17.4-4.5-12.9 17.7-33 30.1-56 31.4-23.9 1.3-44.2-6.2-61.1-23.2-5.6-5.7-17.1-17.2-26.1-26.2z"
                />
                <path
                  fill="var(--color-logo-text)"
                  d="M270.4 39.8c5.6-5.5 11.3-11 17-16.5C309.1 2.1 335.1-5 364 3.5c43.9 12.9 66.6 60.5 48.9 102.1-15.1 6.9-38.3 11.1-54.4 5.7 14.2-6.5 21.7-18.2 22.4-33.9.7-15.6-8.7-30-22.9-36.2-14.4-6.4-31.1-3.6-42.7 7.7l-18 17.7-26.9-26.8zm-19 72.7c-5.7 5.6-11.5 11.1-17.2 16.8-21.7 21.2-47.7 28.3-76.6 19.8C113.7 136.3 91 88.6 108.7 47c15.1-6.9 38.3-11.1 54.4-5.7-14.2 6.5-21.7 18.2-22.4 33.9-.7 15.6 8.7 30 22.9 36.2 14.4 6.4 31.1 3.6 42.7-7.7 6.2-6 12.4-12.1 18.5-18.3l26.6 27.1z"
                />
                <path
                  fill="var(--color-logo-text)"
                  d="M39.2 205.1h22.7v58.2c0 5.5-1.4 10.4-4.2 14.6-2.8 4.2-6.5 7.5-11.4 9.8-4.8 2.3-10.4 3.5-16.7 3.5-5.4 0-10.4-.9-14.9-2.8s-8.1-4.9-10.8-9c-2.7-4.1-4-9.4-4-15.9H23c.1 2.1.4 3.9 1.1 5.4.6 1.5 1.6 2.6 2.7 3.3 1.2.7 2.6 1.1 4.3 1.1 1.7 0 3.2-.4 4.3-1.1 1.2-.7 2.1-1.9 2.7-3.3.6-1.5.9-3.3 1-5.5v-58.3zM94.9 290H70l28-85h31.5l28 85h-24.9L114 228.4h-.7L94.9 290zm-4.6-33.5h46.8v17.3H90.3v-17.3zm75.5 33.5v-85h23.1v66.4h34.4V290h-57.5zm89.8-84.9v85h-23.1v-85h23.1zm84.4 0v85h-19.2l-30.7-44.6h-.5V290h-23.1v-85h19.6l30.2 44.5h.7V205h23zm33 84.9h-24.9l28-85h31.5l28 85h-24.9l-18.6-61.6h-.7L373 290zm-4.6-33.5h46.8v17.3h-46.8v-17.3zm149-51.4v85h-19.2l-30.7-44.6h-.5V290h-23.1v-85h19.6l30.2 44.5h.7V205h23z"
                />
              </svg>
            </div>
            <div className="mb-8 text-sm text-center text-[var(--color-text-primary)]">
              <div className="font-bold">
                PERTUBUHAN JALINAN MUSLIM MALAYSIA
              </div>
              <div className="text-xs">PPM-014-10-29082018</div>
            </div>

            {/* Grid of Sites and Hadith */}
            <div className="grid overflow-x-hidden grid-cols-1 gap-6 mx-auto mb-16 w-full max-w-screen-lg md:grid-cols-2 lg:grid-cols-3">
              {sites.map((site) => (
                <div
                  key={site.name}
                  className="flex flex-col p-6 h-full text-center rounded-xl shadow-sm transition-all bg-[var(--color-bg-card)] hover:shadow-md hover:-translate-y-0.5"
                >
                  <h2 className="mb-3 text-lg">
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {site.prefix}
                    </span>
                    <span className="text-[var(--color-accent)]">
                      {site.domain}
                    </span>
                  </h2>
                  <p className="flex-grow text-sm font-light leading-relaxed text-[var(--color-text-secondary)]">
                    {site.description}
                  </p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 -mx-6 -mb-6 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all flex items-center justify-center rounded-b-xl group"
                  >
                    <span className="text-white">Lawati {site.prefix}</span>
                    <svg
                      className="ml-2 w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}

              {/* Hadith Quote */}
              <div className="relative col-span-1 mt-8 rounded-3xl shadow-lg backdrop-blur-sm md:col-span-2 lg:col-span-3 bg-[var(--color-bg-card)]/80 dark:bg-[var(--color-bg-card)]/80">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex justify-center items-center w-8 h-8 bg-[var(--color-accent)] rounded-full">
                    <span className="pt-4 font-serif text-3xl leading-none text-white">
                      &quot;
                    </span>
                  </div>
                </div>
                <div className="px-8 py-10">
                  <div className="relative text-center">
                    <p className="text-[15px] text-[var(--color-text-primary)] leading-relaxed font-light">
                      Jika mati seorang manusia itu akan terputuslah catatan
                      amalannya melainkan tiga perkara, sedekah jariah, ilmu
                      yang dimanfaatkan dan anak soleh yang mendoakan baginya
                      kebaikan.
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-light text-[var(--color-text-secondary)]">
                        Hadis riwayat Imam Muslim – 1631
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Misi & Visi */}
              <div className="grid col-span-1 gap-6 mt-8 md:col-span-2 lg:col-span-3 md:grid-cols-2">
                {/* Misi */}
                <div className="relative rounded-3xl backdrop-blur-sm bg-[var(--color-bg-card)]/80 dark:bg-[var(--color-bg-card)]/80">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center items-center w-8 h-8 bg-[var(--color-accent)] rounded-full">
                      <span className="text-lg font-medium leading-none text-white">
                        M
                      </span>
                    </div>
                  </div>
                  <div className="px-8 py-10">
                    <div className="text-center">
                      <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">
                        MISI
                      </h3>
                      <p className="text-[15px] text-[var(--color-text-primary)] leading-relaxed font-light">
                        Mendigitalkan kandungan dari naskhah ke skrin,
                        memastikan setiap insan dapat belajar, memahami, dan
                        menghayati ilmu tanpa batas – selagi ada daya, selagi
                        ada cahaya.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visi */}
                <div className="relative rounded-3xl backdrop-blur-sm bg-[var(--color-bg-card)]/80 dark:bg-[var(--color-bg-card)]/80">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center items-center w-8 h-8 bg-[var(--color-accent)] rounded-full">
                      <span className="text-lg font-medium leading-none text-white">
                        V
                      </span>
                    </div>
                  </div>
                  <div className="px-8 py-10">
                    <div className="text-center">
                      <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">
                        VISI
                      </h3>
                      <p className="text-[15px] text-[var(--color-text-primary)] leading-relaxed font-light">
                        Merevolusikan akses kepada ilmu Islam dengan
                        menjadikannya sebahagian daripada kehidupan moden, di
                        mana teknologi bukan lagi sekadar alat, tetapi ruang
                        tanpa batas yang membawa ilmu ke setiap jiwa, setiap
                        masa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-12 text-center">
              <p>Sebarang pertanyaan sila emel ke</p>
              <span className="text-[var(--color-accent)]">
                salam@jalinan.org
              </span>
              <p className="my-4 text-xs">Tulis emel dengan baik & jelas.</p>
              <div className="flex flex-col items-center mt-4">
                <img
                  src={maybankLogo}
                  alt="Maybank"
                  className="my-8 h-6 maybank-logo"
                />
                <p className="text-sm text-[var(--color-text-primary)] dark:text-gray-400">
                  Nama Akaun:{" "}
                  <span className="font-medium">
                    Pertubuhan Jalinan Muslim Malaysia
                  </span>
                </p>
                <p className="text-sm text-[var(--color-text-primary)] dark:text-gray-400">
                  Nombor akaun:{" "}
                  <span className="font-medium">5622 6364 3287</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
