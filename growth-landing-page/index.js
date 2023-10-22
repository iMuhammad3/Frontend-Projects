
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

function App(){
    return (
        <>
            <Header />
            <Hero />
        </>
    )
}

const utilities = {
    classNames: {
        clickables: "px-4 py-2 rounded-md cursor-pointer",
        sections: "py-6 px-10",
    },
    colors: {
        lightGrey: "light-grey"
    }
}

const hamburgerMenu = (<svg className="" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)

// HEADER 
function Header(){
    const [isNavShown, setIsNavShown] = React.useState(false)
    console.log(isNavShown)
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
        <header className={`${utilities.classNames.sections} flex items-center justify-between`}>
            <H1 content="Growth" />
            <ul className={
                    `flex flex-col gap-2 items-center absolute inset-0 bg-white
                    md:relative md:flex md:flex-row md:bg-transparent
                    ${!isNavShown && "hidden"} 
                    `}>
                <Button content="&times;" classes="text-xl md:hidden" handleClick={() => setIsNavShown(prev => !prev)}/>
                {navigationItems.map((item, i) => <Li key={i} content={item} />)}
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
    const sectionClasses = utilities.classNames.sections
    function Title(){
        return (
            <section className={sectionClasses}>
                <div className="flex flex-col w-full gap-6 text-center md:text-start md:max-w-lg">
                    <H1 content="A powerful solution to grow your startup. Fast!" size="text-4xl" />
                    <p>Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool.</p>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <Button content="Get Started" bgColor="blue-500" classes="text-white" />
                        <Button content="Book a demo" bgColor={utilities.colors.lightGrey} />
                    </div>
                </div>
            </section> 
        )
    }
    function Images(){
        return (
            <section className={`${sectionClasses} md:-mt-48 grid grid-cols-2 gap-2 md:grid-cols-[auto_auto_auto] md:items-end`}>
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

function Li({content}){
    return (
        <li className={utilities.classNames.clickables + " hover:bg-blue-100"}>
            {content}
        </li>
    )
}
function Button({content, bgColor="transparent", classes, handleClick}){
    return (
        <button 
        className={`hover:scale-[.99] bg-${bgColor} ${utilities.classNames.clickables} ${classes}`} 
        onClick={handleClick}>
            {content}
        </button>
    )
}
function H1({size="text-2xl", content}){
    return <h1 className={`${size} font-bold`}>{content}</h1>
}
function Image({src, classes}){
    return <img className={classes + " border rounded"} src={src} alt="" />
}