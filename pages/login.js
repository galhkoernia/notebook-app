// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      localStorage.setItem("skripsiUser", JSON.stringify({ name, age }));
      router.push("/motivasi");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/background.png"
          alt="Background Masjid"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/30 to-black/70"></div>
      </div>

      {/* Islamic Decorations */}
      <div className="absolute top-6 right-6 text-white/50 text-4xl">﷽</div>
      <div className="absolute bottom-6 left-6 text-white/30 text-2xl rotate-12">
        ✿
      </div>

      <Head>
        <title>Login | Motivasi</title>
      </Head>

      {/* Header with Logo */}
      <header className="w-full pt-10 flex justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center shadow-lg border border-yellow-400/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Skripsi Berkah</h1>
          <p className="font-arabic text-yellow-300 text-sm">
            الرسالة المباركة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md flex-1 flex flex-col items-center justify-center px-6">
        {/* Quote Section */}
        <div className="text-center mb-8">
          <p className="font-arabic text-3xl text-yellow-300 mb-2">
            بِسْمِ اللَّهِ
          </p>
          <blockquote className="text-white italic text-lg md:text-xl leading-relaxed">
            {"Niat yang tulus adalah awal dari segala pencapaian."}
          </blockquote>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl"
        >
          <div className="space-y-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-yellow-300 mb-2"
              >
                Nama Anda
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="Binti Ainur Rohmah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan nama Anda"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Age Input */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-yellow-300 mb-2"
              >
                Usia Anda
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="22"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan usia"
                  min="17"
                  max="50"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-emerald-900 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Lanjutkan Perjalanan</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full pb-8 text-center text-sm text-white/70">
        <p className="font-arabic text-yellow-300 mb-1">
          تَوْفِيقُنَا مِنَ اللَّهِ
        </p>
        <p>© {new Date().getFullYear()} Motivasi Skripsi Islami</p>
        <p className="font-arabic mt-1 text-yellow-300/80">
          وَفَّقَنَا اللَّهُ وَإِيَّاكُمْ
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
