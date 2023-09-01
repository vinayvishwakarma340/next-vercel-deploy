export default function Example(props) {
  return (
    <>
      <div>
        <main className="py-10">
          {/* Page header */}
          <div className="mx-auto max-w-full px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-full lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-24 w-24 rounded-full"
                    src={props.mopdetail.data.ProfilePhoto}
                    alt=""
                  />
                  <span
                    className="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {props.mopdetail.data.Name}
                </h1>
                <p className="text-sm font-semibold text-gray-500">
                  {props.mopdetail.data.OrganizationName}
                </p>
                <div className=""> {props.mopdetail.data.Designation}</div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid      max-w-full ">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div
                      className="mt-2 text-sm text-gray-900"
                      dangerouslySetInnerHTML={{
                        __html: props.mopdetail.data.OtherInfo,
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
