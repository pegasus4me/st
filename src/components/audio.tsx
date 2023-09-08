const Audio = ({name} : {name: string}) => {
  return (
    <div className="flex items-center">
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <p className="text-[#888888] font-light text-xs">{name}</p>
    </div>
  );
};

export default Audio;
