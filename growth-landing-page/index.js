
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

function App(){
    return (
        <Header />
    )
}

const utilities = {
    classNames: {
        clickables: "px-3 py-1 rounded cursor-pointer hover:bg-blue-50"
    },
    colors: {
        lightGrey: "light-grey"
    }
}

const hamburgerMenu = (<svg className="" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)

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
        <header className="py-4 px-10 flex items-center justify-between">
            <h1 className="font-bold text-xl">Growth</h1>
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

function Hero(){
    return (
        <></>
    )
}

function Li({content}){
    return (
        <li className={utilities.classNames.clickables}>
            {content}
        </li>
    )
}
function Button({content, bgColor="transparent", classes, handleClick}){
    return (
        <button 
        className={`bg-${bgColor} ${utilities.classNames.clickables} ${classes}`} 
        onClick={handleClick}>
            {content}
        </button>
    )
}
