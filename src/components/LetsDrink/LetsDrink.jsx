import { AiOutlineStar, AiOutlineArrowRight, AiOutlineShopping} from 'react-icons/ai';
import { CiLocationOn} from 'react-icons/ci';
const LetsDrink = () => {
    return (
        <div className="bg-[#c05535] w-full h-[650px]">
            <h1 className="text-5xl font-bold text-white text-center lg:pt-40">Let Us Drink</h1>
            <div className='flex flex-col lg:flex-row justify-around mt-16 lg:mt-28'>
                <div className='text-white'>
                    <AiOutlineStar className='text-5xl ml-14'></AiOutlineStar>
                    <h1 className="text-4xl flex items-center gap-8">Drinks.com <AiOutlineArrowRight></AiOutlineArrowRight></h1>
                    <p className='text-lg'>Drinks straight to your door</p>
                </div>
                <div className='text-white border-x-8 lg:border-x-4 lg:px-36'>
                    <AiOutlineShopping  className='text-5xl ml-14'></AiOutlineShopping>
                    <h1 className="text-4xl flex items-center gap-8">Pantryshop.com <AiOutlineArrowRight></AiOutlineArrowRight></h1>
                    <p className='text-lg'>Stock up on your faves</p>
                </div>
                <div className='text-white'>
                    <CiLocationOn className='text-5xl ml-14'></CiLocationOn>
                    <h1 className="text-4xl flex items-center gap-8">DeWe-Drinks Partners<AiOutlineArrowRight></AiOutlineArrowRight></h1>
                    <p className='text-lg'>Only the best for our partners</p>
                </div>
            </div>
        </div>
    );
};

export default LetsDrink;