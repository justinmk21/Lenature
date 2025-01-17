
import './css/OurStory.css';
import NavButton from './NavButton';
import { MdPlayArrow } from 'react-icons/md';
import { Flex } from "@chakra-ui/react"

function OurStory() {

    return (
        <section className="story-section">
            <h1>Our Story</h1><NavButton/>
            <article className='story-image'>
                <Flex
                    className='video-btn'
                    alignItems={'center'}
                    >
                    Watch Video
                    <MdPlayArrow size={'20'} color='white'/>
                </Flex>
            </article>
        </section>
    )
}

export default OurStory