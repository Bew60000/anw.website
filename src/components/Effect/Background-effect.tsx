type Props = {
  children?: React.ReactNode;
};

export default function BackgroundEffect({ children }: Props) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-3xl" />
      <div className="absolute top-1/4 left-3/4 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-30 blur-2xl" />
      <div className="absolute top-3/4 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500 to-red-500 opacity-20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-600 to-red-500 opacity-25 blur-2xl" />

      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animation: `twinkle ${Math.random() * 5 + 2}s ease-in-out infinite`,
          }}
        />
      ))}

      {children}
    </div>
  );
}
