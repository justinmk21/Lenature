
import './css/OurStory.css';
import NavButton from './NavButton';
import { MdPlayArrow } from 'react-icons/md';
import { Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function OurStory() {

    const navToStory = useNavigate();
    const handleNavToStory = ()=>{
        navToStory('/stories');
    }

    return (
        <section className="story-section">
            <h1>Our Story</h1><NavButton onClick={handleNavToStory}/>
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