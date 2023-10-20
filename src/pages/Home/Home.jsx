import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CompanyJobs from "../../components/CompanyJobs/CompanyJobs";
import LetsDrink from "../../components/LetsDrink/LetsDrink";

const Home = () => {

    const brandData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="container mx-auto mt-80 lg:mt-20 mb-8">
                    <h3 className="text-4xl font-bold underline underline-offset-8 my-12 italic text-orange-600">Explore Our Brands</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            brandData.map(brand => <Link
                                key={brand._id}
                                to={`/brandDetails/${brand.brandName}`}>
                                <div className="card bg-orange-200 shadow-xl rounded-full">
                                    <figure><img className="h-[350px] w-[350px] p-2 rounded-full" src={brand.brandPhoto} alt="Shoes" /></figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{brand.brandName}</h2>
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
