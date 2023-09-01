import React from "react";
import ArticleCard from "../CardUI/ArticleCard";
import Link from "next/link";
const ArticleCollection = (props) => {
  return (
    <div className="bg-white p-4 sm:p-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.data?.map((item) => (
          <ArticleCard key={item.ArticleId} data={item} />
        ))}
      </div>
      <div className="text-center font-medium mt-6">
        <a
          href={props.viewMore}
          className="mx-auto  text-timesRed hover:underline"
        >
          View More Articles
        </a>
      </div>
    </div>
  );
};

export default ArticleCollection;
