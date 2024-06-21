const ShareTitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 my-8">
      <p className="text-yellow-700 mb-2">--- {subheading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default ShareTitle;
