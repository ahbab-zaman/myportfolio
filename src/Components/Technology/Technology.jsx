const Technology = ({technology}) => {
    return (
        <div className="w-12 h-12 rounded-full p-3 bg-[#e2eff95e]  cursor-pointer hover:bg-[#e2eff9f9] hover:transition-all hover:duration-300 hover:border hover:border-black">
           <img className="mr-3" src={technology} alt="technology icon" />
        </div>
    );
};

export default Technology;