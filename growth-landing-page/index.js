
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)


function App(){
    return (
        <>
            <Header />
            <Hero />
            <VideoSection />
            <hr className={utilities.colors.lightGrey} />
            <TestimonialSection />
            <PricingSection />
            <FAQSection />
        </>
    )
}

const utilities = {
    classNames: {
        clickables: "px-4 py-2 rounded-md cursor-pointer",
        bigSections: "p-16",
        smallSections: "px-16 py-6",
    },
    colors: {
        lightGrey: "bg-light-grey",
        dark: "bg-dark",
        blue500: "bg-blue-500",
    }
}


// HEADER 
function Header(){
    const hamburgerMenu = (<svg className="" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)
    const [isNavShown, setIsNavShown] = React.useState(false)
    const navigationItems = [
        "Features",
        "About us",
        "Blog",
    ]
    const {lightGrey} = utilities.colors

    function showNav(){
        setIsNavShown(prev => !prev)
    }
    return (
        <header className={`${utilities.classNames.smallSections} flex items-center justify-between py-6`}>
            <H1 content="Growth" />
            <ul className={
                    `flex flex-col gap-2 items-center absolute inset-0 bg-white
                    md:relative md:flex md:flex-row md:bg-transparent
                    ${isNavShown ? "" : "hidden"} 
                    `}>
                <Button content="&times;" classes="text-xl md:hidden" handleClick={() => setIsNavShown(prev => !prev)}/>
                {navigationItems.map((item, i) => <Li key={i} content={item} clickable={true} />)}
                <Button content="Login" bgColor={lightGrey} />
            </ul>
            <Button 
                content={hamburgerMenu} 
                bgColor={lightGrey} 
                classes="py-2 md:hidden"
                handleClick={showNav} 
            />
        </header>
    )
}

// HERO
function Hero(){
    const padding = utilities.classNames.smallSections
    const {colors} = utilities
    function Title(){
        return (
            <section className={padding}>
                <div className="flex flex-col w-full gap-6 text-center md:text-start md:max-w-lg">
                    <H1 content="A powerful solution to grow your startup. Fast!" size="text-4xl" />
                    <p>Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool.</p>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <Button content="Get Started" bgColor={colors.blue500} />
                        <Button content="Book a demo" bgColor={colors.lightGrey} />
                    </div>
                </div>
            </section> 
        )
    }
    function Images(){
        return (
            <section className={`${padding} py-6 md:-mt-48 grid grid-cols-2 gap-2 md:grid-cols-[auto_auto_auto] md:items-end`}>
                <Image src="https://growthweb.netlify.app/img/Img-1.png" classes="col-span-2 md:col-span-1" />
                <Image src="https://growthweb.netlify.app/img/img-2.gif" />
                <Image src="https://growthweb.netlify.app/img/Group%202647.png" classes="h-96" />
            </section>
        )
    }
    return (
        <main>
            <Title />
            <Images />
        </main>
    )
}

function VideoSection(){
    const {colors, classNames} = utilities
    return (
        <section className={`${colors.dark} ${classNames.bigSections} text-white flex flex-col gap-4 text-center md:items-center`}>
            <H1 content="See how it works and get started in less than 2 minutes" classes="max-w-md self-center" />
            <i>TODO: add video</i>
            <Button content="Get Started" bgColor={colors.blue500} />
        </section>
    )
}

function TestimonialSection(){
    const {colors, classNames} = utilities
    const Testimonials = [
        {
            testimonial: "Our business has seen a significant increase in productivity since we started using the Growth app.",
            user: "Katherine Smith",
            company: "Capodopera",
        },
        {
            testimonial: "As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place.",
            user: "Jonathan Lee",
            company: "Red Bolt",
        },
        {
            testimonial: "The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It's a game changer for us.",
            user: "David Wilson",
            company: "Slide",
        },
    ]
    return (
        <section className={`${colors.dark} ${classNames.bigSections} + " text-white flex flex-col gap-8`}>
            <H1 
            content="Don't just take our word for it, see the success stories from businesses just like yours."
            classes="md:w-1/2"
            />
            <ul className="flex flex-col items-start gap-4 md:flex-row">
                {
                    Testimonials.map(t => {
                        const content = (
                        <>
                            <q>{t.testimonial}</q>
                            <div className="flex flex-col">
                                <b>{t.user}</b>
                                <small>{t.company}</small>
                            </div>
                        </>
                        )
                        return <Li content={content} classes="bg-white text-black rounded-lg p-6 max-w-[406px] flex flex-col gap-6" />
                    })
                }
            </ul>
        </section>
    )
}

function PricingSection(){
    const Prices = [
        {
            name: "Simple",
            price: "Free",
            free: true,
            benefits: [
                "Real-time monitoring",
                "Track key performance indicators",
                "Schedule appointments",
                "Organize, delegate and keep track of tasks",
            ],
        },
        {
            name: "Premium",
            price: "$49",
            free: false,
            benefits: [
                "Data-driven decisions",
                "Data visualisation",
                "Schedule appointments",
                "Store and organise contact information",
                "Teal-time communication tools for messaging and video conferencing",
            ],
        },
    ]

    function Card({name, price, free, benefits}){
        const {lightGrey, dark} = utilities.colors
        return (
            <div className={
                `${free ? `${lightGrey} ` : `${dark} text-white fill-white`} 
                w-[340px] p-8 rounded-xl flex flex-col gap-5`
                }>
                <h2 className="text-2xl">{name}</h2>
                <p>
                    Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.
                </p>
                <div className="flex items-end gap-2">
                    <h2 className="text-2xl leading-5">{price}</h2>
                    <small>{free ? "* No credit card required" : <sub>/month</sub>}</small>
                </div>
                <hr />
                <ul className="flex flex-col gap-5">
                    {!free && <p>Everything from the free plan plus:</p>}
                    {benefits.map((b, i) => {
                        return (
                                <Li key={i} content={
                                    <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    <span className="w-full leading-4">{b}</span>
                                    </>
                                } classes="flex gap-3" />
                                )
                    })}
                </ul>
                <Button content="Get Started" bgColor={utilities.colors.blue500} />
            </div>
        )
    }

    return (
        <section className={`${utilities.classNames.bigSections} flex flex-col items-center gap-6`}>
            <div className="text-center">
                <H1 content="Pricing" classes="mb-4" />
                <p>Start free and scale while you grow. No hidden fees. Unlimited users for free.</p>
            </div>
            <div className="flex flex-col gap-6 items-center md:flex-row">
                {Prices.map(price => {
                    return <Card name={price.name} price={price.price} free={price.free} benefits={price.benefits}  />
                })}
            </div>
            <div className="text-center flex flex-col gap-2">
                <p>All prices are in USD and charged per month with applicable taxes added at checkout.</p>
                <a>View features</a>
            </div>
        </section>
    )
}

function FAQSection(){
    function Nav(){
        const [activeBtn, setActiveBtn] = React.useState(true)
        return (
            <nav className={`${utilities.colors.lightGrey} rounded-md p-1`}>
                <Button content="All" bgColor={utilities.colors.blue500} />
                <Button content="Getting started" />
                <Button content="Pricing" />
            </nav>
        )
    }
    function AccordionWrapper(){
        const FAQs = [
            {
                question: "How does the contact management feature help me keep track of clients and partners?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
            {
                question: "Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
            {
                question: "How does the task management feature help me delegate tasks to my team and track progress?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
            {
                question: "Can I collaborate with my team in real-time using all tools?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
            {
                question: "Is the app available on all devices?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
            {
                question: "How does the app help me stay compliant when working with freelancers and contractors?",
                answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
            },
        ]
        function Accordion({question, answer}){
            const [active, setActive] = React.useState(false)

            function showBody(){
                setActive(prev => !prev)
            }

            return (
                <div className="border-b-2">
                    <header onClick={showBody} className="flex items-start justify-between gap-6 py-4 cursor-pointer">
                        <h3 className="w-96 md:w-[550px]">{question}</h3>
                        <span className={`text-2xl transition ${active && 'rotate-45'}`}>+</span>
                    </header>
                    {active && <div className="pb-4 px-2 w-96 text-sm text-gray-700 md:w-[550px]">{answer}</div>}
                </div>
            )
        }

        return (
            <ul>
                {FAQs.map((faq, i) => <Accordion active={true} question={faq.question} answer={faq.answer} />)}
            </ul>
        )
    }
    return (
        <section className={utilities.classNames.smallSections + ` flex flex-col items-center gap-5`}>
            <H1 content="Frequently asked questions" />
            <Nav />
            <AccordionWrapper />
        </section>
    )
}

function Li({content, clickable = false, classes = ""}){
    return (
        <li className={(clickable ? `${utilities.classNames.clickables} hover:bg-blue-100 ` : '') + classes}>
            {content}
        </li>
    )
}
function Button({content, bgColor="bg-transparent", classes, handleClick}){
    return (
        <button 
        className={`hover:scale-[.99] hover:opacity-95 ${bgColor === "bg-blue-500" && " bg-blue-500 text-white"} ${utilities.classNames.clickables} ${classes}`} 
        onClick={handleClick}>
            {content}
        </button>
    )
}
function H1({size="text-3xl", content, classes=""}){
    return <h1 className={`${size} font-bold ${classes}`}>{content}</h1>
}
function Image({src, classes}){
    return <img className={classes + " border rounded"} src={src} alt="" />
}