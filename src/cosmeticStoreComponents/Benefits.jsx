import BenefitsImg from './images/BenefitsImg.jpg';
import './css/Benefits.css';

function Benefits() {

    return (
        <article className="benefits">
            <div>
                <h1>Benefits</h1>
                <p>
                    Consectetur excepteur elit ullamco incididunt voluptate tempor
                    exercitation. Lorem commodo ullamco quis velit officia aute
                    laboris elit sit exercitation ut esse pariatur occaecat quis
                </p>
                <h5>Laboris consequat ad </h5>
                <p>
                    Consectetur excepteur elit ullamco incididunt voluptate tempor
                    exercitation. Lorem commodo ullamco quis velit officia aute
                    laboris elit sit exercitation ut esse pariatur
                </p>
                <h5>Duis duis do labore pariatur </h5>
                <p>
                    Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo
                    voluptate. Lorem id qui laborum aute voluptate
                </p>
                <h5>Deserunt ex </h5>
                <p>
                    Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis
                    Lorem adipisicing et minim velit quis
                </p>
            </div>
            <div>
                <img
                    className='benefits-img'
                    src={BenefitsImg}
                    alt="Benefits"
                    />
            </div>
        </article>
    )
}

export default Benefits