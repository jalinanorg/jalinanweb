import { useState, useEffect } from "react";
import maybankLogo from "./assets/maybank.svg";

const App = () => {
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0);

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

  const currentSite = sites[currentSiteIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSiteIndex((prevIndex) => (prevIndex + 1) % sites.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sites.length]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="relative z-10 min-h-screen bg-[#D1E4DD]/90">
        <div className="min-h-screen bg-[#D1E4DD]">
          <div className="relative z-10 flex flex-col items-center p-8 max-w-full">
            {/* Logo Section */}
            <div className="mb-4 mt-8 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-auto mb-2"
                viewBox="0 0 517.4 291.2"
              >
                <path
                  fill="#54be8d"
                  fillRule="evenodd"
                  d="m260.9 103.1-27.1-26.7c-27.8-28.7-55.3-57.1-99-49.4-6.2 1.1-12.6 2.9-17.4 4.5 12.9-17.7 33-30.1 56-31.4 23.9-1.3 44.2 6.2 61.1 23.2 5.7 5.7 17.2 17.2 26.1 26.2l27.1 26.7c27.8 28.7 55.3 57.1 99 49.4 6.2-1.1 12.6-2.9 17.4-4.5-12.9 17.7-33 30.1-56 31.4-23.9 1.3-44.2-6.2-61.1-23.2-5.6-5.7-17.1-17.2-26.1-26.2z"
                />
                <path d="M270.4 39.8c5.6-5.5 11.3-11 17-16.5C309.1 2.1 335.1-5 364 3.5c43.9 12.9 66.6 60.5 48.9 102.1-15.1 6.9-38.3 11.1-54.4 5.7 14.2-6.5 21.7-18.2 22.4-33.9.7-15.6-8.7-30-22.9-36.2-14.4-6.4-31.1-3.6-42.7 7.7l-18 17.7-26.9-26.8zm-19 72.7c-5.7 5.6-11.5 11.1-17.2 16.8-21.7 21.2-47.7 28.3-76.6 19.8C113.7 136.3 91 88.6 108.7 47c15.1-6.9 38.3-11.1 54.4-5.7-14.2 6.5-21.7 18.2-22.4 33.9-.7 15.6 8.7 30 22.9 36.2 14.4 6.4 31.1 3.6 42.7-7.7 6.2-6 12.4-12.1 18.5-18.3l26.6 27.1z" />
                <path d="M39.2 205.1h22.7v58.2c0 5.5-1.4 10.4-4.2 14.6-2.8 4.2-6.5 7.5-11.4 9.8-4.8 2.3-10.4 3.5-16.7 3.5-5.4 0-10.4-.9-14.9-2.8s-8.1-4.9-10.8-9c-2.7-4.1-4-9.4-4-15.9H23c.1 2.1.4 3.9 1.1 5.4.6 1.5 1.6 2.6 2.7 3.3 1.2.7 2.6 1.1 4.3 1.1 1.7 0 3.2-.4 4.3-1.1 1.2-.7 2.1-1.9 2.7-3.3.6-1.5.9-3.3 1-5.5v-58.3zM94.9 290H70l28-85h31.5l28 85h-24.9L114 228.4h-.7L94.9 290zm-4.6-33.5h46.8v17.3H90.3v-17.3zm75.5 33.5v-85h23.1v66.4h34.4V290h-57.5zm89.8-84.9v85h-23.1v-85h23.1zm84.4 0v85h-19.2l-30.7-44.6h-.5V290h-23.1v-85h19.6l30.2 44.5h.7V205h23zm33 84.9h-24.9l28-85h31.5l28 85h-24.9l-18.6-61.6h-.7L373 290zm-4.6-33.5h46.8v17.3h-46.8v-17.3zm149-51.4v85h-19.2l-30.7-44.6h-.5V290h-23.1v-85h19.6l30.2 44.5h.7V205h23z" />
              </svg>
            </div>
            <p className="text-xs font-bold mb-12 text-gray-600">
              PERTUBUHAN JALINAN MUSLIM MALAYSIA PPM-014-10-29082018
            </p>

            {/* Grid of Sites and Hadith */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto mb-16 overflow-x-hidden">
              {sites.map((site) => (
                <div
                  key={site.name}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col h-full text-center"
                >
                  <h2 className="text-lg mb-3">
                    <span className="font-medium">{site.prefix}</span>
                  </h2>
                  <p className="text-sm text-gray-600 flex-grow font-light">
                    {site.description}
                  </p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 -mx-6 -mb-6 px-6 py-3 bg-[#01C388] hover:bg-[#00b37a] transition-all flex items-center justify-center rounded-b-xl group"
                  >
                    <span className="text-white">Lawati {site.prefix}</span>
                    <svg
                      className="ml-2 h-4 w-4 text-white"
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
              <div className="col-span-1 md:col-span-2 mt-8 lg:col-span-3 relative bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-serif leading-none">
                      &quot;
                    </span>
                  </div>
                </div>
                <div className="px-8 py-10">
                  <div className="text-center relative">
                    <p className="text-[15px] text-gray-800 leading-relaxed font-light">
                      Jika mati seorang manusia itu akan terputuslah catatan
                      amalannya melainkan tiga perkara, sedekah jariah, ilmu
                      yang dimanfaatkan dan anak soleh yang mendoakan baginya
                      kebaikan.
                    </p>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 font-light">
                        Hadis riwayat Imam Muslim – 1631
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-12">
              <p>Sebarang pertanyaan sila emel ke</p>
              <span className="text-emerald-800">salam@jalinan.org</span>
              <div className="mt-4 flex flex-col items-center">
                <img src={maybankLogo} alt="Maybank" className="h-6 my-8" />
                <p className="text-gray-600 text-sm">
                  Nama Akaun:{" "}
                  <span className="font-medium">
                    Pertubuhan Jalinan Muslim Malaysia
                  </span>
                </p>
                <p className="text-gray-600 text-sm">
                  Nombor akaun:{" "}
                  <span className="font-medium">5622 6364 3287</span>
                </p>
              </div>
            </div>

            {/* Sliding Info Banner - Now at the very bottom */}
            <div
              className="fixed inset-x-0 bottom-0 bg-[#E1F9F2]"
              style={{ zIndex: 50 }}
            >
              <div className="flex items-center">
                {/* Info Tab with chevron shape - now stretches to left edge */}
                <div className="flex items-center min-w-0 flex-1">
                  <div className="relative flex-none flex items-center bg-[#00C388] text-white h-[40px] min-w-[80px] mr-3">
                    <div className="flex items-center gap-2 pl-4 pr-3">
                      <svg
                        className="w-[18px] h-[18px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="font-medium text-[13px] tracking-wide">
                        Info
                      </span>
                    </div>
                    {/* Chevron shape */}
                    <div
                      className="absolute -right-[16px] h-full w-[16px] bg-[#00C388]"
                      style={{
                        clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
                      }}
                    ></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] text-gray-600 truncate">
                      <span className="font-medium ml-3">
                        {currentSite.prefix}
                      </span>
                      {" — "}
                      {currentSite.description}
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex">
                  <button
                    onClick={() =>
                      setCurrentSiteIndex(
                        (prevIndex) =>
                          (prevIndex - 1 + sites.length) % sites.length
                      )
                    }
                    className="px-2 py-2 hover:bg-black/5 transition-colors"
                  >
                    <svg
                      className="w-[14px] h-[14px] text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSiteIndex(
                        (prevIndex) => (prevIndex + 1) % sites.length
                      )
                    }
                    className="px-2 py-2 hover:bg-black/5 transition-colors"
                  >
                    <svg
                      className="w-[14px] h-[14px] text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
