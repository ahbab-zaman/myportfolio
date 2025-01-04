const TitleSection = ({title, subTitle}) => {
    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="text-4xl text-[#132238] font-bold uppercase mb-2">{title}</h2>
            <h1 className="text-[#87909D] w-[45%]">{subTitle}</h1>
        </div>
    );
};

export default TitleSection;