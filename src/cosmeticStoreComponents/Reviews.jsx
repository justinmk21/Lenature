import { Flex, VStack } from "@chakra-ui/react";
import { MdStar, MdEdit } from 'react-icons/md';
import './css/Review.css';
import ReviewCard from "./ReviewCard";

function Reviews() {

    const Ratings = [
        { num: 5, star: '#FFC970FF' , percentageColor: '60%' , percentage: '40%', perScore: '60%' },
        { num: 4, star: '#FFC970FF' , percentageColor: '25%' , percentage: '25%', perScore: '25%' },
        { num: 3, star: '#FFC970FF' , percentageColor: '10%' , percentage: '10%', perScore: '10%' },
        { num: 2, star: '#FFC970FF', percentageColor: '5%' , percentage: '5%', perScore: '5%' },
        { num: 1, star: 'gray', percentageColor: '0%' , percentage: '0%', perScore: '0%' }
    ]

    return (
        <article
            className="review-container"
            >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                >
                <h1>Reviews</h1>
                <button
                    className="edit-button"
                    >
                    <Flex
                        alignItems={'center'}
                        >
                        <MdEdit size={'16'}/>
                        <p style={{ marginLeft: '8px' }} >Write a review</p>
                    </Flex>
                </button>
            </Flex>
            <article className="reviews-and-ratings">
                <VStack
                    className="review-stack"
                    >
                    <Flex
                        alignItems={'center'}
                        >
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize:'40px', marginRight: '16px',
                            }}>
                            4.0
                        </p>
                        <MdStar color='#FFC970FF' size={'24'}/>
                        <MdStar color='#FFC970FF' size={'24'}/>
                        <MdStar color='#FFC970FF' size={'24'}/>
                        <MdStar color='#FFC970FF' size={'24'}/>
                        <MdStar color='gray' size={'24'}/>
                        <p style={{ margin: '0 16px' }}>368</p>
                        <p>Reviews</p>
                    </Flex>
                    {Ratings.map((rating, index) => (
                        <Flex
                            key={index}
                            className="review-rating"
                            alignItems={'center'}
                            >
                            <p>{rating.num}</p>
                            <MdStar color={rating.star} size={'24'}/>
                            <span
                                style={{
                                    background: `linear-gradient(to right, #FFC970FF ${rating.percentageColor} ,#DEE1E6FF ${rating.percentage})`,
                                }}>
                            </span>
                            <p>{rating.perScore}</p>
                        </Flex>
                    ))}
                </VStack>
                <VStack>
                    <ReviewCard
                        name={'Kgomotso Mkhawane'}
                        date={'1day ago'}
                        review={
                            'Commodo consequat quis nisi dolor laboris in aute occaecat\
                            quis consequat culpa consectetur aliqua. Laborum cupidatat\
                            id reprehenderit non cillum irure sunt commodo.'
                        }
                        />
                    <ReviewCard
                        name={'Green William'}
                        date={'6day ago'}
                        review={
                            'Consectetur tempor nulla veniam duis nostrud non. Non qui \
                            minim Lorem adipisicing qui veniam commodo non irure aute \
                            elit incididunt qui excepteur officia sunt.'
                        }
                        />
                    <ReviewCard
                        name={'James Rower'}
                        date={'3day ago'}
                        review={
                            'Ullamco enim ut culpa irure non qui est duis et aute\
                            proident reprehenderit tempor mollit. Aliquip excepteur\
                            nisi culpa reprehenderit adipisicing aliquip excepteur \
                            nulla minim.'
                        }
                        />
                </VStack>
            </article>
        </article>
    )
}

export default Reviews;