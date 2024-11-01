
const SectionTitle = ({heading}) => {
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#008080] text-center py-4">----{heading}----</h1>
            <div className="bg-black w-[150px] h-[3px] m-auto mb-10"></div>
        </div>
    );
};

export default SectionTitle;