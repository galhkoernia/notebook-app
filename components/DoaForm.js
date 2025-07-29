// components/DoaForm.js
import { useState } from "react";

const DoaForm = ({ onAddDoa }) => {
  const [isi, setIsi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isi.trim()) return;

    const doaBaru = {
      isi,
      tanggal: new Date().toLocaleDateString("id-ID"),
    };

    onAddDoa(doaBaru);
    setIsi("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
        placeholder="Tulis harapan atau doamu di sini..."
        className="w-full p-3 border border-green-300 rounded-lg"
        rows="4"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Kirim Doa
      </button>
    </form>
  );
};

export default DoaForm;
