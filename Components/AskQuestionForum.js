const AskQuestionForum = (props) => {
  return (
    <section aria-labelledby="item-heading" className="bg-white">
      <div className=" mx-auto   ">
        <dl className=" grid grid-cols-1  md:grid-cols-2  gap-6">
          {props.data.map((item) => (
            <div key={item.KeyIndex}>
              <dt className="text-base font-semibold">{item.Question}</dt>
              <dd className="mt-1 text-sm  line-clamp-6">
                {item.answers[0]?.Answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AskQuestionForum;
