import './css/Promotions.css';
import { useEffect } from 'react';
import promoImg1 from './images/promo1.jpg';
import promoImg2 from './images/promo2.jpg';

function Promotions() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <section className='promotion-page'>
            <h1>Promotions</h1>
            <article className="promotion-article-1">
                <img
                    className='promo-article-image'
                    src={promoImg1}
                    alt='promotion image'
                    />
                <div
                    className='promo-article-details'
                    style={{ marginRight: '64px' }}>
                    <p>Promotion title</p>
                    <p>
                        Et ipsum irure amet cupidatat mollit exercitation
                        consequat duis aliquip. Reprehenderit Lorem veniam
                        pariatur esse pariatur in aute tempor au
                    </p>
                    <p>*Velit deserunt elit proident velit anim adipisicing</p>
                    <button className='promo-button'>Shop now</button>
                </div>
            </article>
            <article className="promotion-article-1">
                <div
                    className='promo-article-details'
                    style={{ marginLeft: '64px' }}>
                    <p>Promotion title</p>
                    <p>
                        Et ipsum irure amet cupidatat mollit exercitation
                        consequat duis aliquip. Reprehenderit Lorem veniam
                        pariatur esse pariatur in aute tempor au
                    </p>
                    <p>*Velit deserunt elit proident velit anim adipisicing</p>
                    <button className='promo-button'>Shop now</button>
                </div>
                <img
                    className='promo-article-2-image'
                    src={promoImg2}
                    alt='promotion image'
                    />
            </article>
            <article className='promo-article-img'>
                <h1>Gift for you</h1>
                <p>
                    Enim officia magna ut esse aliquip irure consectetur
                    dolor dolor commodo et. Cupid
                </p>
                <button className='promo-button'>Shop now</button>
            </article>
        </section>
    )
}

export default Promotions