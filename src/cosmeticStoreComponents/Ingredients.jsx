/* eslint-disable react/prop-types */
import Acid from './images/HydroAcid.png';
import Green from './images/GreenTea.png';
import Olive from './images/OliveOil.jpg';
import './css/Ingredients.css';
import { Flex } from '@chakra-ui/react';

function Ingredients() {

    function Review({ title, description, img }) {

        return (
            <div
                className='ingredient'
                >
                <img
                    className='ingredient-img'
                    src={img}
                    alt="ingredient image"
                    />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        )
    }

    return (
        <article
            className='ingredient-article'
            >
            <h1>Ingredients</h1>
            <Flex
                justifyContent={'space-between'}
                marginTop={'24px'}
                >
                <Review
                    img={Acid}
                    title={'Hydraulic Acid'}
                    description={
                        'Elit do sit excepteur duis labore nisi sit anim\
                        adipisicing duis incididunt sit anim sint est exercitation\
                        aute consectetur irure'
                    }
                    />
                <Review
                    img={Green}
                    title={'Green Tea'}
                    description={
                        'Tempor adipisicing aute pariatur magna enim Lorem voluptate\
                        incididunt culpa ex veniam sunt occaecat tempor '
                    }
                    />
                <Review
                    img={Olive}
                    title={'Olive Oil'}
                    description={
                        'Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua\
                        duis Lorem adipisicing et minim velit quis '
                    }
                    />
            </Flex>
            <Flex
                justifyContent={'center'}
                >
                <button className='list-button'>See Full List</button>
            </Flex>
        </article>
    )
}

export default Ingredients;