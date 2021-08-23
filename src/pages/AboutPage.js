import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Nicholas Coursel-Stoll. I'm a Junior at Ball State University studying education and computer science, and currently seeking a software engineering internship for the summer of 2022.</p>

                <p>I was drawn to technology by two things: a desire to create interesting products and build a more well-connected world. I hope to combine my background in education with technical skills to achieve these goals, and am dedicated to work with companies that are trying make the world a better, more equitable place.</p>

                <p>My primary programming language is JavaScript (though I have recently started working with Python for a class I'm taking). I have been working a lot with Node.js and React lately. I also have experience styling with HTML/CSS and the Bootstrap framework.</p>

                <p>Outside of school and personal programming projects, you can usually find me hanging out around town working on my debut novel or writing an article for one of my SaaS clients. Most of my freelance experience is with Salesforce consultancy firms. If interested, feel free to head over to my contact page and get in touch. I/'d love to talk.</p>
            </Content>
        </div>
    )
}

export default AboutPage;