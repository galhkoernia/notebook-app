import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const MotivasiPage = () => {
  const [prayer, setPrayer] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prayer) {
      const prayers = JSON.parse(
        localStorage.getItem("skripsiPrayers") || "[]"
      );
      prayers.push({
        name: name || "Anonymous",
        prayer,
        date: new Date().toISOString(),
      });
      localStorage.setItem("skripsiPrayers", JSON.stringify(prayers));
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Motivasi | Skripsi</title>
      </Head>

      {/* Header Section */}
      <header className="text-center py-12 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-yellow-500">
              Skripsi Penuh Berkah
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ilmu, niat, dan harapan dalam satu lembar yang mengubah hidup.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-yellow-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </header>

      {/* Main Quote Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-emerald-900 leading-relaxed">
            {
              "Skripsi ini bukan sekadar tugas akhir, tapi amal awal yang penuh doa."
            }
          </blockquote>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Reflection Cards */}
      <section className="py-12 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-emerald-800 mb-10 font-arabic">
            ﺍﻟﺘﻔﻜﺮ ﻓﻲ ﺍﻟﻨﻔﺲ (Refleksi Diri)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Niat Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">Niat</h3>
              </div>
              <blockquote className="text-gray-700 italic">
                {
                  "Aku menulis agar ilmunya bermanfaat meski aku sudah tidak ada."
                }
              </blockquote>
            </div>

            {/* Syukur Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">
                  Syukur
                </h3>
              </div>
              <blockquote className="text-gray-700 italic">
                {"Banyak air mata, tapi juga banyak syukur."}
              </blockquote>
            </div>

            {/* Tujuan Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">
                  Tujuan
                </h3>
              </div>
              <blockquote className="text-gray-700 italic">
                {
                  "Skripsi ini kupersembahkan untuk yang tak pernah lelah mendoakan."
                }
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900 mb-3">
              <span className="font-arabic mr-2">ﺩﻋﺎء</span> Kirim Doa
            </h2>
            <p className="text-gray-600">
              Kirimkan doa untuk diriku, untuk berjuang dengan ilmu dan hati.
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-8 bg-emerald-50 rounded-xl border border-emerald-200">
              <svg
                className="w-16 h-16 text-emerald-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Doa Terkirim!
              </h3>
              <p className="text-gray-600 mb-6">Terima kasih atas doanya.</p>
              <button
                onClick={() => router.push("/harapan")}
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all"
              >
                Lihat Halaman Harapan
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="prayer"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tulis doa kamu di sini...
                </label>
                <textarea
                  id="prayer"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Semoga Allah memudahkan setiap langkah dalam penyusunan skripsi ini..."
                  value={prayer}
                  onChange={(e) => setPrayer(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nama/Inisial (Opsional)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Nama kamu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300"
              >
                Kirim Doa
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-12 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-emerald-700 italic">
            {
              "Semoga setiap huruf yang kutulis, menjadi cahaya di kehidupan yang akan datang."
            }
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Binti Ainur R © {new Date().getFullYear()}
          </p>
        </div>
      </section>

      {/* Arabic Font Style */}
      <style jsx global>{`
        .font-arabic {
          font-family: "Amiri", "Traditional Arabic", serif;
        }
      `}</style>
    </div>
  );
};

export default MotivasiPage;
