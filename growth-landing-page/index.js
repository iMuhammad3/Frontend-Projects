
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

function App(){
    return (
        <Header />
    )
}

function Header(){
    const navigationItems = [
        "Features",
        "About us",
        "Blog",
    ]
    return (
        <header className="py-4 px-10 flex justify-between">
            <h1>Growth</h1>
            <ul className="flex items-center gap-2">
                {navigationItems.map(item => <Li content={item} />)}
                <Button content="Login" bgColor="light-grey" />
            </ul>
        </header>
    )
}

function Li({content}){
    return <li className="px-3 py-1 rounded">{content}</li>
}
function Button({content, bgColor}){
    return <button className={`bg-${bgColor} px-3 py-1 rounded`}>{content}</button>
}