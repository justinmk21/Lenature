import { MdPlayArrow } from 'react-icons/md';
import { Flex } from "@chakra-ui/react"
import './css/HowTo.css';
function HowTo() {

    return (
        <article
            className='how-to-section'
            >
            <h1>How to use</h1>
            <div className="how-to-video">
                <Flex
                    className='video-btn'
                    alignItems={'center'}
                    right={'492px'}
                    bottom={'279px'}
                    >
                    Watch Video
                    <MdPlayArrow size={'20'} color='white'/>
                </Flex>
            </div>
        </article>
    )
}

export default HowTo