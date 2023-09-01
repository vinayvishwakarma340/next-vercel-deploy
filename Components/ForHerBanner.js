const ForHerBanner = () => {
  const urls = [
    "https://www.youtube.com/embed/Pw6ahMKvJHo",
    "https://www.youtube.com/embed/r0O6tbVcsog",
    "https://www.youtube.com/embed/qMex0i8uaF0",
    "https://www.youtube.com/embed/vPlrNOe1EeE",
    "https://www.youtube.com/embed/fLSSMinQLWA",
    "https://www.youtube.com/embed/68YpHm1_qQk",
  ];

  const randomHandler = (arr) => {
    return arr[Math.floor(Math.random() * 6)];
  };

  return (
    <main className="container py-8 md:py-16 ">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">#Back2Work</span>
              <span className="block text-indigo-600">online business</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative mx-auto w-[400px]  h-[300px] shadow-lg lg:max-w-md">
            <iframe
              className="w-full h-[300px] overflow-hidden rounded-lg"
              src={randomHandler(urls)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForHerBanner;
