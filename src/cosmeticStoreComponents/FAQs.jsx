import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot}
from '@chakra-ui/react';
import { MdArrowForward, MdArrowDownward } from 'react-icons/md';
import './css/FAQs.css';

function FAQs() {

    const FAQs = [
        {
            value: 'a',
            title: 'Nisi nisi magna nostrud non consequat conse ?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                 reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                  reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
        {
            value: 'b',
            title: 'Nostrud eiusmod exercitation duis  ?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
        {
            value: 'c',
            title: 'Fugiat pariatur minim eiusmod aute adipisicing aliqua occaecat ?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
        {
            value: 'd',
            title: 'Aliquip irure mollit deserunt ipsum sit sunt veniam?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
        {
            value: 'e',
            title: 'Nostrud eiusmod exercitation duis  ?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
        {
            value: 'f',
            title: 'Nostrud eiusmod exercitation duis  ?',
            text:
                'Ullamco enim ut culpa irure non qui est duis et aute proident\
                reprehenderit tempor mollit. Aliquip excepteur nisi culpa\
                reprehenderit adipisicing aliquip excepteur nulla minim.'
        },
    ]

    return (
        <article className="faqs-article">
            <h1>FAQs</h1>
            <AccordionRoot collapsible defaultValue={["b"]} className='faqs' >
                {FAQs.map((faq, index) => (
                    <AccordionItem allowMultiple key={index} value={faq.value} className='faq'>
                        <AccordionItemTrigger cursor={'pointer'}>{faq.title}</AccordionItemTrigger>
                        <AccordionItemContent>{faq.text}</AccordionItemContent>
                    </AccordionItem>
                ))}
            </AccordionRoot>
        </article>
    )
}

export default FAQs;