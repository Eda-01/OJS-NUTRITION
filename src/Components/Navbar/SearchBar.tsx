export const SearchBar = () => (
  <div className="grow max-w-2xl flex">
    <input 
      type="text" 
      placeholder="Aradığınız ürünü yazınız" 
      className="w-full border-2 border-gray-300 px-4 py-2 outline-none focus:border-gray-500 text-sm"
    />
    <button className="bg-gray-500 text-white px-6 py-2 font-bold hover:bg-gray-600 transition-colors text-sm">
      ARA
    </button>
  </div>
);