import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const HarapanPage = () => {
  const [prayers, setPrayers] = useState([]);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("skripsiPrayers");
      const parsed = stored ? JSON.parse(stored) : [];
      setPrayers(parsed);
    } catch (error) {
      console.error("Error parsing stored prayers:", error);
      setPrayers([]);
    }
  }, []);

  const filteredPrayers =
    filter === "all"
      ? prayers
      : prayers.filter((p) => p.name && p.name !== "Anonymous");

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Taman Harapan | Skripsi</title>
      </Head>

      {/* Header */}
      <header className="text-center py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-3">
            <span className="flex items-center justify-center">
              <svg
                className="w-10 h-10 mr-3 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Taman Harapan
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tempat di mana setiap harapan ditanam dengan doa dan niat baik.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-yellow-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </header>

      {/* Filter */}
      <div className="px-4 max-w-2xl mx-auto mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "all"
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Semua Doa
          </button>
          <button
            onClick={() => setFilter("named")}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "named"
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Dengan Nama
          </button>
        </div>
      </div>

      {/* Prayer List */}
      <section className="py-8 px-4 bg-emerald-50 min-h-[50vh]">
        {filteredPrayers.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {prayers.length === 0
                ? "Belum ada doa yang ditanam."
                : "Tidak ada doa dengan nama."}
            </h3>
            <p className="text-gray-600 mb-6">
              {prayers.length === 0
                ? "Kirim satu di halaman motivasi."
                : "Coba tampilkan semua doa."}
            </p>
            <button
              onClick={() => router.push("/motivasi")}
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all"
            >
              {prayers.length === 0 ? "Kirim Doa" : "Kembali ke Motivasi"}
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-6">
            {filteredPrayers.map((prayer, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 text-yellow-400 opacity-20">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  {prayer?.prayer && (
                    <p className="text-gray-700 mb-4">
                      <span className="font-arabic text-emerald-600 mr-1">
                        &ldquo;
                      </span>
                      {prayer.prayer}
                      <span className="font-arabic text-emerald-600 ml-1">
                        &rdquo;
                      </span>
                    </p>
                  )}

                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 border-t border-emerald-50 pt-3">
                    {prayer?.name && (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Dari: {prayer.name}</span>
                      </div>
                    )}
                    {prayer?.date && (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          {new Date(prayer.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Special Message */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg italic text-emerald-800">
            Jika harapanmu belum terwujud, mungkin sedang ditanam dan disiram
            diam-diam. Teruskan langkahmu.
          </p>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-8 px-4 bg-emerald-50">
        <div className="max-w-xs mx-auto flex flex-col space-y-4">
          <button
            onClick={() => router.push("/motivasi")}
            className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300"
          >
            Kirim Doa Lagi
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full py-3 px-6 bg-white text-emerald-700 font-semibold rounded-lg border border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
      </section>

      {/* Style */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .font-arabic {
          font-family: "Amiri", "Traditional Arabic", serif;
        }
      `}</style>
    </div>
  );
};

export default HarapanPage;
