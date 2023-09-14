import Image from "next/image";
import useRemoveSpaceUrl from "../../Components/CustomHook/useRemoveSpaceUrl";
const ArticleNew = (props) => {
  return (
    <div className=" bg-white ">
      <div className="md:grid md:grid-cols-5 md:gap-6  ">
        <div className="col-span-2 sm:pr-4 sm:border-r-2 border-gray-100 mb-2">
          <div className="flex flex-col overflow-hidden rounded-lg ">
            <a
              href={`/articles/${useRemoveSpaceUrl(props.data[0].title)}/${props.data[0].ArticleId
                }`}
            >
              <div className="flex-shrink-0">
                <div className={"h-48 top-0 w-full  relative"}>
                  <Image
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    src={`https://timess3spore.s3.amazonaws.com/ndata${props.data[0].imagePath}`}
                    fill
                    alt={props.data[0].title}
                    sizes="(max-width: 400px) 100vw"
                    priority={props.priority}
                  // placeholder="blur"
                  // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white md:px-4 pb-2 pt-2">
                <div className="flex-1">
                  <div className="mt-1 block ">
                    <p className="text-sm text-gray-500">
                      <time>{props.data[0].updatedDate}</time>
                    </p>
                    <p className="text-base font-bold text-gray-900 line-clamp-2">
                      {props.data[0].title}
                    </p>

                    <p className="mt-1 text-sm  line-clamp-3">
                      {props.data[0].shortDescription}
                    </p>
                  </div>
                </div>
                <div className="sm:mt-1 mt-2 hidden sm:inline">
                  <div className="text-sm  text-timesPurple hover:underline cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-3 grid gap-x-4 sm:gap-y-2  lg:grid-cols-2 ">
          {props.data.slice(1).map((item) => (
            <div key={item.ArticleId}>
              <a
                href={`/articles/${useRemoveSpaceUrl(item.title)}/${item.ArticleId
                  }`}
                className="hidden  sm:block"
              >
                <p className="text-sm text-gray-500">
                  <time>{item.updatedDate}</time>
                </p>

                <p className=" mt-1 text-base font-semibold  line-clamp-1">
                  {item.title}
                </p>

                <p className="mt-1 text-sm  line-clamp-3">
                  {item.shortDescription}
                </p>

                <div className="mt-1 ">
                  <div className="text-sm  text-timesPurple hover:underline cursor-pointer ">
                    Read More
                  </div>
                </div>
              </a>
              <a
                href={`/articles/${useRemoveSpaceUrl(item.title)}/${item.ArticleId
                  }`}
                className="py-2   sm:hidden  border-t    border-gray-200  w-full flex items-start  justify-between"
              >
                <div className="w-[65%] flex flex-col justify-between h-full  relative ">
                  <h2 className="text-base font-semibold  line-clamp-3 ">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    <time>{item.updatedDate}</time>
                  </p>
                </div>
                <div className="w-[30%] h-full">
                  <div className={" w-full h-[70px] relative"}>
                    <Image
                      priority={props.priority}
                      style={{ objectFit: "cover" }}
                      src={`https://timess3spore.s3.amazonaws.com/ndata${item.imagePath}`}
                      fill
                      sizes="(max-width: 200px) 100vw"
                      quality={15}
                      alt={item.title || "article"}
                    // placeholder="blur"
                    // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ArticleNew;
