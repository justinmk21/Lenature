import './css/InstagramPage.css';
import pic1 from './images/instaPic1.jpg';
import pic2 from './images/instaPic2.jpg';
import pic3 from './images/instaPic3.jpg';
import pic4 from './images/instaPic4.jpg';
import pic5 from './images/instaPic5.jpg';
import pic6 from './images/instaPic6.jpg';
import pic7 from './images/instaPic7.jpg';
import pic8 from './images/instaPic8.jpg';
import pic9 from './images/instaPic9.jpg';
import pic10 from './images/instaPic10.jpg';
import pic11 from './images/instaPic11.jpg';
import pic12 from './images/instaPic12.jpg';
function InstagramPage() {

    const Instagram = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12]

    return (
        <section className="instagram-page">
            <h1>Instagram</h1>
            <p>@yourinstagram_offical</p>
            <article className='instagram-posts'>
                {Instagram.map((picture) => (
                    <img
                        className='instagram-photo'
                        key={picture}
                        src={picture}
                        alt='instagram photos'
                        />
                ))}
            </article>
        </section>
    )
}

export default InstagramPage