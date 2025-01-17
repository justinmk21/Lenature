/* eslint-disable react/prop-types */
import { MdEmail } from 'react-icons/md';
import { LuFacebook, LuYoutube, LuTwitter, LuLinkedin } from 'react-icons/lu'
import './css/FooterSection.css';
import { Flex } from '@chakra-ui/react';
function Footer() {

    function Table({ heading, links }) {
        return (
            <table
                className='table-column'
                >
                <thead>
                    <tr>
                        <th className='table-header'>
                            {heading}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, index) => (
                        <tr key={index} style={{ margin: '18px 0', fontSize: '18px', color: '#DEE1E6FF' }} >
                            <td><a href={link.url}>{link.label}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const linksData = [
        { url: '/', label: 'Home' },
        { url: '/', label: 'Shop' },
        { url: '/', label: 'Our Story' },
        { url: '/', label: 'Blog' },
    ];

    const HelpLinks = [
        { url: '/', label: 'Shipping & Returns' },
        { url: '/', label: 'Track Order' },
        { url: '/', label: 'FAQs' }
    ];

    const Contact = [
        { url: '', label: 'Phone:' },
        { url: '', label: '(+1) 123 456 7893' },
        { url: '', label: 'Email:' },
        { url: '', label: 'name@email.com' }
    ]

    return (
        <footer className="footer">
            <article
                className='article-1'
                >
                <div
                    style={{ display: 'flex', flexDirection: 'column' }}
                    >
                    <Table heading={'About'} links={linksData}/>
                    <select className="lan-btn">
                        <option
                            className='lan-btn-content'
                            >
                            English
                        </option>
                        <option>Sepedi</option>
                    </select>
                </div>
                <div>
                    <Table heading={'Help'} links={HelpLinks} />
                </div>
                <div>
                    <Table heading={'Contact'} links={Contact} />
                </div>
            </article>
            <article
                className='article-2'
                >
                <h4>Receive new Promotions</h4>
                <p>
                    Duis ea tempor commodo amet reprehende
                </p>
                <div
                    className='subscribe'
                    >
                    <div>
                        <MdEmail size={'20'} color='white'/>
                        <input
                            placeholder='Enter your email'
                        />
                    </div>
                    <button>Subscribe</button>
                </div>
                <Flex
                    alignItems={'center'}
                    gap={'4'}
                    margin={'32px 0'}
                    >
                    <LuTwitter color='#2EBAE8FF' size={'24'}/>
                    <LuFacebook color='#2E6FE8FF' size={'24'}/>
                    <LuLinkedin color='#7797E4FF' size={'24'}/>
                    <LuYoutube color='#E82E2EFF' size={'24'}/>
                </Flex>
                <p>{new Date().getFullYear()} Brand, Inc. Privacy Terms Sitemap</p>
            </article>
        </footer>
    )
}

export default Footer