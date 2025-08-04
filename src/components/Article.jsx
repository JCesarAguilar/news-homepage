export const Article = ({ img, number, title, text }) => {
  return (
    <article className="flex h-[162px] md:w-[343px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <img src={img} alt="Imagen" />
      </div>
      <div className="pl-6">
        <p className="text-soft-red text-3xl mb-[8px] font-bold">{number}</p>
        <h2 className="font-bold mb-[2px] hover:text-soft-red cursor-pointer text-[18px] text-very-dark-blue">
          {title}
        </h2>
        <p className="text-dark-grayish-blue text-[15px] leading-7 lg:w-[225px]">
          {text}
        </p>
      </div>
    </article>
  );
};
