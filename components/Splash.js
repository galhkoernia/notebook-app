import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <>
      <Head>
        <title>Skripsi | Bismillah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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

        {/* Dekorasi Islami */}
        <div className="absolute top-6 right-6 text-white/50 text-4xl">﷽</div>
        <div className="absolute bottom-6 left-6 text-white/30 text-2xl rotate-12">
          ✿
        </div>

        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex-1 flex flex-col items-center justify-center px-4 md:px-10 py-10 text-center"
        >
          {/* Kaligrafi Salam */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-arabic text-4xl mb-4 text-yellow-300"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.div>

          {/* Logo/Icon Section */}
          <div className="mt-4 mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-emerald-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">
              Menulis untuk Mengabadi, Meneliti untuk Memahami
            </h1>
            <p className="text-lg text-yellow-300 mt-1 font-arabic">
              الرِّسَالَةُ الْمُبَارَكَةُ
            </p>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-xl"
          >
            <blockquote className="text-3xl md:text-4xl leading-relaxed mb-4 font-arabic text-yellow-300">
              فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
            </blockquote>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-2 text-white">
              {"Sesungguhnya bersama kesulitan ada kemudahan."}
            </blockquote>
            <cite className="text-yellow-300 block mt-4">
              QS. Al-Insyirah: 6
            </cite>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10"
          >
            <Link href="/login" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-emerald-900 font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center mx-auto"
              >
                <span className="flex items-center">
                  <span className="font-arabic mr-2">ابدأ الرحلة</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full mb-6 text-sm text-gray-300 flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <p className="font-arabic text-yellow-400 mb-1">
              تَوْفِيقُنَا مِنَ اللَّهِ
            </p>
            <p className="text-white/80">
              © {new Date().getFullYear()} Binti Ainur R
            </p>
            <p className="font-arabic mt-1 text-yellow-300/80">
              وَفَّقَنَا اللَّهُ وَإِيَّاكُمْ
            </p>
          </div>
        </motion.footer>
      </div>

      {/* CSS untuk font Arabic */}
      <style jsx global>{`
        .font-arabic {
          font-family: "Amiri", "Traditional Arabic", serif;
        }
      `}</style>
    </>
  );
};

export default Splash;
