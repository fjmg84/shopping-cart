function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute p-10 bb-transparente rounded-full shadow-xl shadow-black"></div>
      <div className="absolute p-10 bg-transparent border-8 rounded-full border-l-violet-200 border-t-violet-300 border-r-violet-400 border-b-violet-500 animate-spin "></div>
    </div>
  );
}

export default Loading;
