import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ThreeZeroOne = () => {

    const router = useRouter();
    const { asPath } = router;
    const urlArray = asPath.split("invalidURL=");
    const invalidURL = urlArray[urlArray.length - 1];

    useEffect(() => {
        validateUrlFunc(invalidURL);
    }, []);

    const validateUrlFunc = (url) => {
        const redirectionUrl = getRedirectionUrl(url);
        if (redirectionUrl) {
            window.open(redirectionUrl, "_self");
        }
    };

    const saveInvalidUrl = (value) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            searchTerm: value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/InvalidUrlnsert`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success' && result.status_code == 200) {
                    window.open('/', "_self");
                }
            })
            .catch(error => console.log('error', error));
    }

    const getRedirectionUrl = (value) => {


        const url = value.toLowerCase();
        const containsNumber = /\d/.test(url);
        const numberMatches = url.match(/\d+/g);
        const numberLength = url.match(/\d/g)?.join('').length || 0;
        const number = numberMatches ? parseInt(numberMatches.join('')) : null;
        let result = "";
        let splitUrl = "";


        if (url.includes('/100bestcompanies/ceo-details-citius.html') || url.includes('marketplace') || url.includes('reportbug') || url.includes('script')) {
            return `latest-jobs`;
        }
        else if (url.includes('jobs-india/employers')) {
            splitUrl = url.split('/jobs-india/employers-');
            splitUrl = splitUrl[1].split('-jobs');
            result = `companies-jobs?filter=${splitUrl[0].toUpperCase()}`;
            return result;
        }
        else if (url.includes('ibptwmagazine')) {
            return `Great-Places-To-Work-2023`;
        }
        else if (url.includes('job-openings')) {
            splitUrl = url.split('/');
            if (url.includes('city')) {
                result = `jobs-in-${splitUrl[2]}`
            } else {
                result = `job-opening/${splitUrl[2]}/companies`
            }
            return result;
        }
        else if (url.includes('naukri/india-jobs-search')) {
            splitUrl = url.split("/");
            splitUrl = splitUrl[1].split('jobs-');
            result = `${splitUrl[1]}-jobs/categories`
            return result;
        }
        else if (url.includes('jobs-l/')) {
            splitUrl = url.replace('/jobs-l/', '').replace('%20', '-');
            splitUrl = splitUrl.split('-jobs');
            result = `jobs-in-${splitUrl[0]}`
            return result;
        }
        else if (url.includes('category')) {
            result = url.replace('category', 'categories');
            return result;
        }
        else if (url.includes('newcompanyprofile')) {
            splitUrl = url.split('newcompanyprofile');
            result = splitUrl[splitUrl.length - 1]
            return `NewCompanyProfile/${result}`
        }
        else if (url.includes('wednesday')) {
            return `wednesday-jobs`;
        }
        else if (url.includes('jobs-vacancy')) {
            return `latest-jobs`;
        }
        else if (url.includes('remote-work')) {
            return `freelancer`;
        }
        else if (url.includes('lucknow')) {
            return `jobs-in-lucknow`;
        }
        else if (url.includes("-jobs") && !url.includes("newcompanyprofile") && !containsNumber) {
            if (url.includes('city')) {
                return `jobs-in-${url.split("-jobs")[0].replace("/", "")}`;
            }
            else {
                return url.split("-jobs")[0] + "-jobs/designation";
            }
        }
        else if (containsNumber && numberLength > 4) {
            splitUrl = url.split("/");
            result = splitUrl[splitUrl.length - 1];
            if (url.includes('morejobslikethis')) {
                return `new-jobs/${result}/morejobslikethis/${number}`;
            } else {
                return `NewCompanyProfile/${number}`;
            }
        }
        else if (url.includes('article') || url.includes('feed') || url.includes('news') || url.includes('postarticle')) {
            return `articleslist/recommended-read`;
        }
        else if (url.includes('mentor')) {
            return `mentorship/mentorkart`;
        }
        else if (url.includes('career')) {
            return `articleslist/career-development`;
        }
        else if (url.includes('hotjobs')) {
            return `latest-jobs`;
        }
        else if (url.includes('hrzone')) {
            return `articleslist/voice-of-hr`;
        } else if (url.includes('jobalert')) {
            return `times-ascent-signin`;
        }
        else if (url.includes('jobs-c-')) {
            splitUrl = url.split("jobs-c-");
            splitUrl = splitUrl[splitUrl.length - 1].split("/");
            result = splitUrl[splitUrl.length - 1].replace('%20', "-");
            return `${result}/designation`;
        }
        else if (url.includes('jobsthisweek')) {
            return `jobsthisweek`;
        }

        else {
            if (router.asPath === "/three-zero-one") {
                return '/';
            } else {
                saveInvalidUrl(invalidURL);
            }
        }

        // Return null if no corresponding redirection URL is found
        // return "/";
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#f02f39"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )

}

// export async function getServerSideProps(context) {
//   // Your server-side logic
// }

export default ThreeZeroOne;
