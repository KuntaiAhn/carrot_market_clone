export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-5">
        {['Kuntai', 'Eunchan', 'Eunbi'].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div />
            <div className="size-8 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className=" size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
