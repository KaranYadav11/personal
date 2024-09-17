function SectionHeader({ title, eyebrow, description }) {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-gray-300 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
}

export default SectionHeader;
