import ImageWithText from "./ImageWithText";
import Stomac from '../img/img_01.jpg';
import QuestionMark from '../img/landing.jpg';
import Fruite from '../img/fruit.png';
import Vegitable from '../img/vegitable.png';
import BlueImage from '../img/img_03.png';
import FruiteBowl from '../img/fruite-bowl.png';
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const MiddleContainer = ({className}) => {
    return(
        <div className={`${className}`}>
            <ImageWithText 
                imageSrc={Stomac} 
                imgWidth="80"  
                className="drop-shadow-lg border-8 mx-2 border-white bg-[#fef8ec] bg-white justify-center rounded-full align-item-center flex-col w-[220px] h-[220px]" 
            >
                <Heading>Gut Health</Heading>
            </ImageWithText>
           
            <ImageWithText 
                imageSrc={QuestionMark} 
                imgWidth="40" 
                className="drop-shadow-lg border-8 mx-2 border-white bg-white justify-center rounded-full align-item-center flex-col w-[200px] h-[200px]" 
            >
                <Heading>What is Dysbiosis?</Heading>
            </ImageWithText>

            <ImageWithText
                className="drop-shadow-lg border-[12px] mx-2 border-white bg-[#f0fbf3] justify-center rounded-full align-item-center flex-col w-[300px] h-[300px]" 
            >
                <Heading className='text-[#1ca249]'>Trillions of<br /> Microoganisms</Heading>
                <Paragraph>The human gut hosts trillion<br /> of microorganisms, including<br /> bacteria, viruses, fungi, and<br /> other microbes.</Paragraph>
            </ImageWithText>

            <ImageWithText 
                imgWidth="40" 
                backgroundImage={Fruite}
                className={`drop-shadow-lg border-8 bg-cover border-white mx-2 justify-center rounded-full align-item-center flex-col w-[220px] h-[220px]`} 
            />

            <ImageWithText 
                backgroundImage={Vegitable}
                className={`drop-shadow-lg border-0 bg-cover border-white mx-2 justify-center rounded-full align-item-center flex-col w-[100px] h-[100px]`} 
            />

            <ImageWithText
                className="drop-shadow-lg border-8 border-white top-0 mx-2 bg-[#f9e8f7] relative top-[-80px] justify-center rounded-full align-item-center flex-col w-[250px] h-[250px]" 
            >
                <Paragraph className="px-5 font-bold">The gut microbiome is vital for developing and regulating the immune system, preventing overreactions to harmless substance.</Paragraph>
            </ImageWithText>

            <ImageWithText 
                imgWidth="40" 
                backgroundImage={BlueImage}
                className={`drop-shadow-lg bg-contain border-8 border-white mx-2 justify-center rounded-full align-item-center flex-col w-[200px] h-[200px]`} 
            />

            <ImageWithText 
                backgroundImage={Vegitable}
                className={`drop-shadow-lg border-0 bg-cover border-white mx-2 justify-center rounded-full align-item-center flex-col w-[100px] h-[100px]`} 
            />
            <ImageWithText 
                backgroundImage={FruiteBowl}
                className={`drop-shadow-lg border-[12px] bg-cover border-white mx-2 justify-center rounded-full align-item-center flex-col w-[300px] h-[300px]`} 
            />
            <ImageWithText
                className="drop-shadow-lg border-0 border-white relative left-[15px] top-0 mx-2 bg-[#f3f1fc] position-relative justify-center rounded-full align-item-center flex-col w-[250px] h-[250px]" 
            >
                <Paragraph className="px-5 font-bold">The microbiome can affect how drugs are metabolized and their efficacy in treating diseases</Paragraph>
            </ImageWithText>

            <ImageWithText
                className="drop-shadow-lg border-0  relative left-[25px] top-[-130px] mx-2 border-white bg-[#f0fbf3] justify-center rounded-full align-item-center flex-col w-[300px] h-[300px]" 
            >
                <Heading className='text-[#1ca249]'>Gut-Brain <br /> Connection</Heading>
                <Paragraph>The microbiome influences brain health through the gut-brain axis, affecting mood and behavior.</Paragraph>
            </ImageWithText>
        </div>
    )
}
export default MiddleContainer;