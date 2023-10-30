// React code goes here
function App() {
        
    return (
    <Wrapper />
    )
    }
    
    function Wrapper(){
    return (
    <div class="bg-white text-[#181028] p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-lg">
    
        <img class="w-44" src="https://icodethis.com/long-light.png" />
    
        <p class="text-lg">Welcome to the <b>FREE</b> editor!</p>
        <p class="flex gap-2 font-medium text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="3"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
    
            Use your creativity to bring REACT projects to life! 😎
        </p>
        <p class="text-sm border-t pt-6">This example uses TailwindCSS by adding the CDN in the head tag.</p>
    </div>
    )
    }
    
    