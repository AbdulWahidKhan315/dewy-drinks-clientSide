import banner from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <img className="lg:h-[800px] w-full" src={banner} alt="" />
            <h2 className=" text-2xl lg:text-5xl font-bold absolute top-4 lg:top-24 text-orange-600 left-10 lg:left-96">... Create more Happiness ... with our drinks ...</h2>
            <div className='bg-gradient-to-r from-orange-500 to-amber-400 absolute lg:-bottom-36 lg:right-24 lg:rounded-lg p-6 md:w-full lg:w-[500px]'>
                <h1 className='text-xl lg:text-4xl font-bold text-white'>Crafting brands and cohoces people love</h1>
                <p className='text-xl max-w-2xl text-center text-white border border-indigo-800 rounded-lg p-4 mt-6'>We are committed to offering people more fo the drinks they want across a range of categories and in a variety of size.</p>
                <button className='btn rounded-full font-bold px-10 mt-4'>Explore Our Brands</button>
            </div>
        </div>
    );
};

export default Banner;