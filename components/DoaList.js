// components/DoaList.js
const DoaList = ({ doaList }) => {
  if (!doaList.length) {
    return <p className="text-center text-gray-500">Belum ada doa terkirim.</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {doaList.map((doa, index) => (
        <div
          key={index}
          className="p-4 bg-white border border-green-200 rounded shadow-sm"
        >
          <p className="text-lg text-gray-800 italic">{"{doa.isi}"}</p>
          <p className="text-sm text-right text-gray-500 mt-2">
            🗓 {doa.tanggal}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DoaList;
