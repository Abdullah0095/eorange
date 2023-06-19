import natural from '../../../assets/image/natural.jpg';
import accessories from '../../../assets/image/accessories.jpg'
import artificial from '../../../assets/image/artificial.jpg';

const Categories = () => {
    return <>
        <section className="py-5 mx-5">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Categories</h2>
                <p className="py-2 text-xl text-gray-700">Find what you are looking for</p>
            </div>
            <div>
                <div className="hero bg-green-200 mt-20">
                    <div className="hero-content px-5 flex-col lg:flex-row">

                        <div>
                            <img src={natural} alt="natural-image" 
                            className='w-[300px] h-[400px] rounded-md mx-10 -mt-24' />
                            <h3 className='text-center py-3 text-xl font-semibold'>Natural Plant</h3>
                        </div>
                        <div className='mt-5'> 
                            <img src={accessories} alt="natural-image"
                             className='w-[300px] h-[400px] rounded-md mx-10 ' />
                            <h3 className='text-center py-3 text-xl font-semibold'>Plant accessories</h3>
                        </div>
                        <div>
                            <img src={artificial} alt="natural-image" 
                             className='w-[300px] h-[400px] rounded-md mx-10 -mt-24'/>
                            <h3 className='text-center py-3 text-xl font-semibold'>Artificial Plant</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Categories;