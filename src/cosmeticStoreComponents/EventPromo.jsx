import './css/EventPromo.css';

function EventPromo() {

    return (
        <section className="event-promotion-section">
            <article className="event-promotion">
                <h1>Event Promotion</h1>
                <div
                    className='event-promotion-img'
                    >
                    <div
                        className='evn-promo-image'
                        >
                        <h4 className='event-promotion-header'>
                            Relaxing & Pampering
                        </h4>
                        <p>Pariatur ad nisi ex tempor ea</p>
                        <button className='event-promotion-button'>
                            Explore
                        </button>
                    </div>
                    <div
                        className='evn-promo-img'
                        >
                        <h4 className='event-promotion-header'>
                            Smooth & Bright Skin
                        </h4>
                        <p>Pariatur ad nisi ex tempor ea</p>
                        <button className='event-promotion-button'>
                            Explore
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default EventPromo