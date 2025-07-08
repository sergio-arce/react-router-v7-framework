export const NoContacSelected = () => {

  return (
    <div className="flex flex-col items-center text-gray-600 bg-background p-8">
      <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#e0e7ef"/>
        <path d="M8 10a4 4 0 1 1 8 0c0 2-2 3-4 3s-4-1-4-3zm4 7a5 5 0 0 0 5-5h-2a3 3 0 0 1-6 0H7a5 5 0 0 0 5 5z" fill="#94a3b8"/>
      </svg>
      <h2 className="mt-6 mb-2 font-semibold text-2xl">
        Selecciona un cliente
      </h2>
      <p className="text-slate-500 text-base text-left max-w-xs">
        Por favor, selecciona un cliente de la lista para comenzar a chatear.
      </p>
    </div>
  )
}