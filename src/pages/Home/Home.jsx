import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CompanyJobs from "../../components/CompanyJobs/CompanyJobs";
import LetsDrink from "../../components/LetsDrink/LetsDrink";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        AOS.init({duration: "1000"})
    },[])

    const brandData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="container mx-auto mt-96 lg:mt-20 mb-8">
                    <h3 data-aos="fade-up" data-aos-duration="2000" className="text-4xl font-bold underline underline-offset-8 my-12 italic text-orange-600 lg:mt-8 lg:pt-14">Explore Our Brands</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            brandData.map(brand => <Link
                                key={brand._id}
                                to={`/brandDetails/${brand.brandName}`}>
                                <div className="card bg-orange-200 shadow-xl rounded-full">
                                    <figure><img data-aos="fade-up" data-aos-duration="2000" className="h-[350px] w-[350px] p-2 rounded-full" src={brand.brandPhoto} alt="Shoes" /></figure>
                                    <div className="card-body items-center text-center">
                                        <h2 data-aos="fade-down" data-aos-duration="2000" className="card-title">{brand.brandName}</h2>
                                    </div>
                                </div></Link>)
                        }
                    </div>
                </div>
            </div>
            <CompanyJobs></CompanyJobs>
            <LetsDrink></LetsDrink>
        </div>
    );
};

export default Home;
