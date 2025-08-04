import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-16 font-inter xl:w-[1400px]">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Artículo principal imagen" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 pt-7 lg:pt-10">
          <h2 className="text-[40px] font-extrabold sm:text-[58px] leading-none font-inter">
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className="flex-1 pt-4 lg:ml-6">
          <p className="text-[15px] mb-6 sm:text-[15px] text-dark-grayish-blue leading-6.5 lg:w-[340px] lg:pt-5 lg:leading-7">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red w-[185px] h-[48px] uppercase text-very-dark-blue font-bold hover:bg-very-dark-blue hover:text-off-white text-[14px] tracking-[0.3em] cursor-pointer">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
