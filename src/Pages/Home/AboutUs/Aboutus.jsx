import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {
    const aboutUsDatas = [
        {
            id: '1',
            pic: "faEnvelope",
            title: "Large Assortment",
            description: "we offer many different types of products with fewer variations in each category"
        },
        {
            id: '2',
            title: "Fast & Free Shipping",
            pic: "faEnvelope",
            description: "4-days or less delivery time, free shipping and an expedited delivery option"
        },
        {
            id: '3',
            title: "24/7 Support",
            pic: "faEnvelope",
            description: "answers to any business related inquiry 24/7 and in real-time."
        }
    ]
    return <>
        <section className="bg-gray-200 mx-5">
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="text-xl py-2">Order now and appreciate the beauty of nature</p>
            </div>

            <div className="hero ">
                <div className="hero-content text-center flex-col lg:flex-row">
                    {
                        aboutUsDatas.map(data => <AboutUsDetail key={data.id} data={data}></AboutUsDetail>)

                    }
                </div>
            </div>
        </section>
    </>
}

const AboutUsDetail = ({ data }) => {
    const { title, description, pic } = data;
    return <>
        <div className="px-10">
            <FontAwesomeIcon icon={faEnvelope} />
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="py-2">{description}</p>


        </div>
    </>
}


export default AboutUs;
