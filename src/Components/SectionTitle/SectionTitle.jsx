

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-500 mb-2 italic">~~ {subHeading} ~~</p>
            <p className="text-4xl uppercase border-y-4 py-3">{heading}</p>
        </div>
    );
};

export default SectionTitle;