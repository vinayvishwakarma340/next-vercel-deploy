// times id
// export const GA_TRACKING_ID = 'UA-71301443-1'


export const GA_TRACKING_ID_Old = "UA-71301443-1"


// times GA4 id
export const GA_TRACKING_ID = "GTM-MN56SBF"


export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}


export const pageviewOld = (url) => {
  window.gtag('config', GA_TRACKING_ID_Old, {
    page_path: url,

  })
}

export const event = ({ action, category, label, value }) => {

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}


export const pageSpeedEvent = ({ action, pageTitle, load_time }) => {

  window.gtag('event', action, {
    page_name: pageTitle,
    load_time: load_time,
  })
}