import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const brandData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="bg-gradient-to-r from-orange-100 to-amber-500 rounded-lg">
                <div className="container mx-auto lg:mt-20">
                    <h3 className="text-4xl font-bold underline underline-offset-8 my-12 italic text-orange-600">Explore Our Brands</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            brandData.map(brand => <div key={brand._id} className="card  bg-base-100 shadow-xl image-full">
                                <figure><img src={brand.brandPhoto} alt="Shoes" /></figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{brand.brandName}</h2>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;