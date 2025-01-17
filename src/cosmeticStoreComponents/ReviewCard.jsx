/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import './css/ReviewCard.css';
import { MdPerson, MdStar } from 'react-icons/md';

function ReviewCard({ name, date, review }) {

    return (
        <article className='review-card'>
            <Flex>
                <MdPerson size={'44'}/>
                <div>
                    <Flex>
                    <p className='reviewer-name'>{name}</p>
                    <p className='reviewer-date'>{date}</p>
                    </Flex>
                    <Flex
                        marginRight={'12px'}
                        >
                        <MdStar color='#FFC970FF' size={'20'}/>
                        <MdStar color='#FFC970FF' size={'20'}/>
                        <MdStar color='#FFC970FF' size={'20'}/>
                        <MdStar color='gray' size={'20'}/>
                        <MdStar color='gray' size={'20'}/>
                    </Flex>
                </div>
            </Flex>
            <p>{review}</p>
        </article>
    )
}

export default ReviewCard;