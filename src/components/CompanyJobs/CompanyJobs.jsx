const CompanyJobs = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-5xl text-center font-bold italic my-6 underline underline-offset-8">Our Jobs</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:m-16 lg:mr-0 p-4 bg-base-300 rounded-l-xl space-y-2 lg:space-y-12">
                    <h2 className="text-3xl font-semibold">DeWe-Drinks Company Jobs</h2>
                    <p className="text-xl italic">We seek employees that embrace change, champion diversity and push for progress. Your skills and experience will help us navigate the ever-changing global landscape and guide us into the next chapter and beyond. </p>
                    <button className="btn hover:bg-black bg-gray-500 font-extrabold text-black hover:text-white w-full rounded-full mt-2">Explore</button>
                </div>
                <div>
                    <img className="rounded-lg" src='https://i.ibb.co/By2f96P/company-Job.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default CompanyJobs;