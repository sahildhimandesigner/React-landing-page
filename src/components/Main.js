import React from 'react'
import Heading from './Heading';
import Paragraph from './Paragraph'
import MiddleContainer from './MiddleContiner';
import Listing from './ListingCom';
import ImageWithText from './ImageWithText';
import BurgerImg from '../img/burger-image.jpg';

const Main = () => {
    return(
        <>
           <Heading tag="h1" className='mt-4 mb-5' fontSize="text-3xl">Why Is Gut Microbiome So<br /> Important?</Heading> 
           <Paragraph fontSize="base" color="gray-700" withBreak={false} className="mt-4 mb-5">
            Explore how your microbiome affects your well-being with our personalized gut<br />
            health assessment. Take the first step towardd a healtheir life today!
           </Paragraph>
           <MiddleContainer className='flex flex-wrap mt-[100px] container mx-auto' />

           <Heading tag="h1" className='mt-[150px] mb-5' fontSize="text-3xl">What are the Symptoms and  Conditions?</Heading> 
           <Paragraph fontSize="base" color="gray-700" withBreak={false} className="mt-4 mb-5">
            Explore how your microbiome affects your well-being with our personalized gut<br />
            health assessment. Take the first step towardd a healtheir life today!
           </Paragraph>

           <section className='mx-auto flex relative w-[1024px] mt-[50px]'>
                <div className='drop-shadow-lg rounded-md bg-white w-[50%] absolute z-10 top-[40px] left-0 p-5'>
                    <Listing />
                </div>
                <div className='drop-shadow-lg rounded-md bg-white w-[70%] absolute p-5 right-0'>
                    <div className='flex flex-col items-end'>
                        <div className='flex justify-end flex-col items-end'>
                            <ImageWithText imageSrc={BurgerImg} className="rounded-lg" />
                        </div>

                        <div className='flex flex-col w-[70%] relative mt-4 left-[45px]'>
                            <Heading className="text-start">Common symptoms include-</Heading>
                            <ul className='text-start mx-2'>
                                <li>Bloating,</li>
                                <li>Gas,</li>
                                <li>Frequent Diarrhea Or</li>
                                <li>Constipation, And</li>
                                <li>Abdominal Pain,</li>
                            </ul>
                            <button className='btn btn-primary w-[150px] bg-[#1eaa90] text-white rounded-full px-6 mt-5 py-3'>Know More</button>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Main;