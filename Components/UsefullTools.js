import Image from "next/image";

const items = [
  {
    name: "Salary Calculator",
    href: "/salary-cal",
    imageSrc: "/useFullToolIcon/salary.webp",
    description:
      "Detailed salary break-up for Tax, P.F & gratuity and get assistance in calculating the take-home annual salary, take-home monthly salary, total annual deductions, total monthly deductions, etc.",
  },
  {
    name: "EMI Calculator",
    href: "/emicalculator",
    imageSrc: "/useFullToolIcon/tax.webp",
    description:
      "Calculate  monthly EMI on your loans.  Determine the EMI before even taking a loan.  Manage your monthly overall finance perfectly & calculate EMIs that perfectly fits your monthly budget.",
  },
  {
    name: "Loan Calculator",
    href: "/loancalculator",
    imageSrc: "/useFullToolIcon/calendar.webp",
    description:
      "Calculate interest rates paid to lenders,  personal loans, auto loans,  mortgages, and others. Estimate/calculate the total interest paid on the loan.",
  },
];

const UsefullTools = () => {
  return (
    <div className="mx-auto bg-white ">
      <div className="max-w-3xl">
        <h2 className="text-xl font-bold text-gray-900  ">Useful Tools</h2>
        {/* <p className="mt-4 text-sm ">
          At the beginning at least, but then we realized we could make a lot
          more money if we kinda stopped caring about that. Our new strategy is
          to write a bunch of things that look really good in the headlines,
          then clarify in the small print but hope people don't actually read
          it.
        </p> */}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
        {items.map((item, index) => (
          <a
            key={index}
            className="sm:flex lg:block  p-2 cursor-pointer transition duration-100 scale-100 hover:scale-105 "
            href={item.href}
          >
            <div className="sm:flex-shrink-0">
              <div className="h-[50px] w-[50px] relative text-left">
                <Image
                  style={{ objectFit: "contain" }}
                  src={item.imageSrc}
                  fill
                  sizes="(max-width: 50px) 100vw"
                  alt="usefull tool image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 className="text-sm font-medium ">{item.name}</h3>
              <p className="mt-2 text-sm line-clamp-4">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UsefullTools;
