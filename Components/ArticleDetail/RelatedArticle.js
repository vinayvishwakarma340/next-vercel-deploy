import Image from "next/image";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const RelatedArticle = (props) => {
  const MinsToRead = (wordCount) => {
    if (wordCount < 200) {
      return <div>Less than one minute to read</div>;
    } else {
      var count = Math.ceil(Number(wordCount) / 200);
      return <div>{count} minutes to read</div>;
    }
  };

  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-4 text-xl font-bold  dark:text-white">
          Related Articles
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {props.recommendedArticlesdata &&
            props.recommendedArticlesdata?.slice(0, 4).map((item) => {
              return (
                <a
                  href={
                    "/articles/" +
                    useRemoveSpaceUrl(item.title) +
                    "/" +
                    item.ArticleId
                  }
                  className=""
                >
                  <div className="relative h-[120px] w-full">
                    <Image
                      src={"https://timesascent.com" + item.imagePath}
                      className="object-cover"
                      fill
                      quality={6}
                      alt={item.title}
                    />
                  </div>
                  <h2 className="my-2 text-base font-semibold leading-tight  dark:text-white">
                    <div className="line-clamp-2">{item.title}</div>
                  </h2>
                  <p className="mb-4  text-sm font-normal  line-clamp-3">
                    {item.shortDescription}
                  </p>
                  <div className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    {MinsToRead(item.content?.split(" ").length)}
                  </div>
                </a>
              );
            })}

          {/* <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Enterprise design tips</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 12 minutes
                        </a>
                    </article> */}
          {/* <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">We partnered with Google</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 8 minutes
                        </a>
                    </article> */}
          {/* <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Our first project with React</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 4 minutes
                        </a>
                    </article> */}
        </div>
      </div>
    </aside>
  );
};

export default RelatedArticle;
