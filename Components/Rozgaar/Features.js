import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'


const Features = () => {
  const features = [
    {
      name: 'Freelancer Profile ',
      description: 'Highlight your skills and experience, show your portfolio, and set your ideal pay rate. Discuss work with client and share quote. ',
      icon: GlobeAltIcon,
    },
    {
      name: 'Freelance Jobs ',
      description:
        'Apply for jobs and projects, or access exclusive opportunities that come to you. New job listings gets posted everyday. ',
      icon: ScaleIcon,
    },
    {
      name: 'Get Hired ',
      description:
        'Communicate and share files with client with ease on Rozgaar Chat. Request a deposit and get ratings & review post work completion. ',
      icon: BoltIcon,
    },
    {
      name: 'Zero Commission ',
      description:
        'We do not charge any commission from your earnings. Get ready to give your best work once you get hired. Deliver high quality work.',
      icon: EnvelopeIcon,
    },
  ]

  return (
    <div className="overflow-hidden bg-zinc-50">
      <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:px-8 lg:py-10">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">The #1 Source of Freelance work</h2>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (

              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <a href='https://freelancer.rozgaarindia.com/' target={'_self'}>
                    <p className="mt-2 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  </a>
                </dt>
                <a href='https://freelancer.rozgaarindia.com/' target={'_self'}>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Features