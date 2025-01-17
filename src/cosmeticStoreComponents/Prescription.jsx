import pic from './images/prescriptionTwo.jpg';
import './css/Prescription.css';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Flex } from '@chakra-ui/react';
function PrescriptionPage() {

    function PrescriptionCard() {

        return (
            <article className="prescription-card">
                <img
                    src={pic}
                    alt='Product Prescription'
                    />
                <h4>
                    Anim sint Lorem excepteur commodo
                </h4>
                <p>Jan, { new Date().getFullYear() }</p>
            </article>
        )
    }

    return (
        <section className="prescription-page">
            <article className="prescription-text">
                <h1>Read What&apos;s New</h1>
                <p>
                    Sint consequat in ipsum irure adipisicing dolore culpa
                    incididunt. Veniam elit magna anim ipsum eiusmod eu
                </p>
                <Flex
                    justifyContent={'space-between'}
                    width={'366px'}
                    marginTop={'100px'}
                    alignItems={'center'}
                    >
                    <button className='explore-btn'>
                        Explore All
                    </button>
                    <Flex
                        className='arrow-btns'
                        width={'104px'}
                        height={'52px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        >
                        <button>
                            <MdArrowBack
                                size={'20'}
                                color='#459D7AFF'
                                />
                        </button>
                        <button>
                            <MdArrowForward
                                size={'20'}
                                color='#459D7AFF'
                                opacity={'0.4'}
                                />
                        </button>
                    </Flex>
                </Flex>
            </article>
            <PrescriptionCard/>
            <PrescriptionCard/>
        </section>
    )
}

export default PrescriptionPage