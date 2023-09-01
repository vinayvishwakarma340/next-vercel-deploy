import Image from "next/image";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const ArticleSmallCard = ({ data }) => {
  return (
    <article
      className="relative isolate flex gap-4 lg:flex-row border-b border-dashed lg:last:border-0 pb-2"
    >
      <div className="relative w-20 h-20 shrink-0">
        <Image
          src={`https://timesascent.com${data.imagePath}`}
          alt="image"
          fill
          priority={true}

          quality={75}
          className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="md:flex items-center gap-x-4 text-xs">
          <div className="font-semibold">{data.author}</div>
          <div className="flex gap-4 justify-between items-center">
            <time dateTime={data.updatedDate} className="text-gray-500">
              {data.updatedDate}
            </time>
            <a
              href={`/articles/${useRemoveSpaceUrl(data.title)}/${data.ArticleId
                }`}
              className="relative z-10 rounded-full bg-purple-50 px-3 py-1 font-medium text-timesPurple hover:bg-gray-100"
            >
              {data.category}
            </a>
          </div>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="text-sm md:text-base font-semibold leading-6 group-hover:text-gray-600 line-clamp-3">
            <a
              href={`/articles/${useRemoveSpaceUrl(data.title)}/${data.ArticleId
                }`}
            >
              <span className="absolute inset-0" />
              {data.title}
            </a>
          </h3>
          {/* <p className="text-sm leading-tight line-clamp-2">
            {data.shortDescription}
          </p> */}
        </div>
        {/* <div className="mt-2 flex border-t border-gray-900/5 pt-2">
            <div className="relative flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={`/articles/${useRemoveSpaceUrl(data.title)}/${
                  data.ArticleId
                }`}>
                    <span className="absolute inset-0" />
                    {data.author}
                  </a>
                </p>
              </div>
            </div>
          </div> */}
      </div>
    </article>
  );
};

export default ArticleSmallCard;
