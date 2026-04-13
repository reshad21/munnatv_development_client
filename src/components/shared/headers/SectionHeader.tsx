const SectionHeader = ({
  slogan,
  title,
}: {
  slogan: string;
  title: string;
}) => {
  return (
    <header className="text-center mb-12 max-w-2xl mx-auto mt-20">
      <div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
          </div>
          <span className="text-teal-600 font-medium">{slogan}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>
    </header>
  );
};

export default SectionHeader;
