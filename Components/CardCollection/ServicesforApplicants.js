
import ServicesApplicants from "../CardUI/ServicesApplicants";

const ServicesforApplicants = (props) => {
  return (
    <div>
      <div className=" flow-root bg-white">
      <div className="border-b border-slate-100 pb-2 text-lg font-bold">Services for Applicants</div>
        <ul role="list" className="mt-3">
          {props.data?.map((item, index) => (
            <div className="py-2">
              <ServicesApplicants key={index} data={item} />
            </div>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default ServicesforApplicants;
