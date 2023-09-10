const menuBtn = document.getElementById('hamburger-menu')
const modal = document.querySelector('.modal-container')
const modalCloseBtn = document.querySelector('#modalCloseBtn')
const accordions = document.querySelectorAll('.accordion')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const infos = document.querySelectorAll('.info > div')
const infoDiv = document.querySelector('.second-section-third-div')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.style.display = 'block'
    } else {
        scrollToTopBtn.style.display = 'none'
    }
})

scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

menuBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    document.body.style.overflow = 'visible'
})

accordions.forEach(accordion => {
    accordion.querySelector('.accordion-header').addEventListener('click', () => {
        accordion.querySelector('.accordion-body').classList.toggle('showAccordionBody')
        accordion.querySelector('svg').classList.toggle('rotate')
    })
})

infos.forEach((info, index) => {
    info.addEventListener('click', () => {
        infos.forEach(info => info.classList.remove('active'))
        info.classList.add('active')
        infoDiv.innerHTML = displayInfos(index)
    })
})

function displayInfos(index){
    switch(index){
        case 0: return `
        <div class="second-svg">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <rect id="a" width="536" height="346" rx="8" />
        </defs>
        <g fill="none" fill-rule="evenodd">
            <mask id="b" fill="#fff">
                <use xlink:href="#a" />
            </mask>
            <use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#a" />
            <g mask="url(#b)">
                <path fill="#242A45" d="M-3.53.197h547v59h-547z" />
                <g transform="translate(22.47 14.197)" fill="#FFF">
                    <circle cx="16" cy="16" r="16" opacity=".245" />
                    <circle cx="477" cy="16" r="16" opacity=".104" />
                    <g transform="translate(47 6)">
                        <rect width="120" height="6" opacity=".75" rx="3" />
                        <rect width="64" height="6" y="14" opacity=".25" rx="3" />
                    </g>
                </g>
            </g>
            <g mask="url(#b)">
                <g transform="translate(57 93)">
                    <rect width="261" height="316" fill="#FFF" rx="8" />
                    <rect width="128" height="316" x="295" fill="#FFF" rx="8" />
                    <rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5"
                        rx="3" />
                </g>
            </g>
            <g transform="translate(88.47 115.197)">
                <circle cx="16" cy="26" r="16" fill="#F98E5D" />
                <rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3" />
                <rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3" />
                <rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3" />
            </g>
            <g transform="translate(88.47 181.197)">
                <circle cx="16" cy="16" r="16" fill="#6AC6D6" />
                <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3" />
                <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3" />
            </g>
            <g transform="translate(88.47 237.197)">
                <circle cx="16" cy="16" r="16" fill="#A47ED4" />
                <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3" />
                <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3" />
            </g>
            <g transform="translate(88.47 293.197)">
                <circle cx="16" cy="16" r="16" fill="#EC7878" />
                <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3" />
                <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3" />
            </g>
        </g>
    </svg>
</div>
<div>
    <h2>Bookmark in one click</h2>
    <p>
        Organize your bookmarks however you like. Our
        simple darg-and-drop interface gives you complete control
        over how you manage your favourite sites.
    </p>
    <button>More Info</button>
</div>
        `
        case 1: return `
        <div class="second-svg">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="478" height="416"><defs><rect id="a" width="350" height="346" rx="8"/><rect id="d" width="200" height="255" rx="8"/><filter id="c" width="117.5%" height="113.7%" x="-8.8%" y="-4.9%" filterUnits="objectBoundingBox"><feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"/></filter><filter id="e" width="139.5%" height="131%" x="-19.8%" y="-13.5%" filterUnits="objectBoundingBox"><feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><rect id="g" width="200" height="255" rx="8"/><filter id="f" width="117.5%" height="113.7%" x="-8.8%" y="-4.9%" filterUnits="objectBoundingBox"><feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"/></filter></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#a"/><g mask="url(#b)"><path fill="#242A45" d="M-3.53.197h547v59h-547z"/><g transform="translate(22.47 14.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g transform="translate(27 138)"><use fill="#000" filter="url(#c)" xlink:href="#d"/><use fill="#FFF" xlink:href="#d"/><g transform="translate(23 29)"><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/><g transform="translate(0 56)"><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(0 112)"><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(0 168)"><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></g><g filter="url(#e)" transform="translate(251 138)"><use fill="#000" filter="url(#f)" xlink:href="#g"/><use fill="#FFF" xlink:href="#g"/><g transform="translate(23 29)"><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/><g transform="translate(0 56)"><circle cx="16" cy="16" r="16" fill="#FA5959"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(0 112)"><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(0 168)"><circle cx="16" cy="16" r="16" fill="#5267DF"/><rect width="101.317" height="6" x="45.683" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="54.036" height="6" x="45.683" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></g><rect width="237" height="34" x="27" y="85" fill="#FFF" rx="8"/><g stroke="#5267DF" stroke-width="20" transform="translate(305 102)"><circle cx="67" cy="67" r="67" fill="#495DCF" fill-opacity=".2"/><path stroke-linecap="round" stroke-linejoin="round" d="M114 115l49 49"/></g></g></svg>
</div>
<div>
    <h2>Intelligent</h2>
    <p>
        Our powerful search feature will help you find saved
        sites in no time at all. No need to trawl through all of
        your bookmarks.
    </p>
    <button>More Info</button>
</div>
        `
        case 2: return `
        <div class="second-svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="440" height="380"><defs><rect id="a" width="350" height="346" rx="8"/><path id="c" d="M0 .048h349.781V296H0z"/><path id="e" d="M0 .048h157.825v219.844H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="#E8EAF6" fill-rule="nonzero" xlink:href="#a"/><g mask="url(#b)"><path fill="#242A45" d="M-3.53.197h547v59h-547z"/><g transform="translate(22.47 14.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><rect width="237" height="34" x="27" y="85" fill="#FFF" rx="8"/><rect width="237" height="34" x="27" y="133" fill="#FFF" rx="8"/><rect width="237" height="34" x="27" y="181" fill="#FFF" rx="8"/><rect width="237" height="34" x="27" y="229" fill="#FFF" rx="8"/><rect width="237" height="34" x="27" y="277" fill="#FFF" rx="8"/><g transform="matrix(-1 0 0 1 440 83)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path fill="#3A499E" d="M348.707 250.34c-.67 2.018-1.715 3.998-3.174 5.935-25.202 33.474-119.376 44.632-212.224 37.814-48.476-3.562-82.67-24.526-104.281-43.75a175.95 175.95 0 0 1-13.36-13.222c-4.669-5.145-8.313-10.86-10.91-16.895-7.647-17.778-6.174-38.316 5.123-55.161 9.577-14.276 22.722-24.824 29.513-36.543C52.326 106.2-16.043 49.782 28.448 14.138 44.152 1.554 77.608-1.35 114.11.602c44.428 2.378 93.365 11.955 120.284 20.045 55.712 16.737 90.58 40.98 98.539 68.256 7.958 27.276-13.311 39.618-31.88 65.654-17.495 24.526 58.553 62.997 47.654 95.783" mask="url(#d)"/><path fill="#306299" d="M254.549 90.872L237.564 88 235 103.799 256 110z"/><path fill="#FA9E89" d="M237 89.118S223.824 88.77 210 83l6.496 12.254L235.249 101 237 89.118z"/><g transform="translate(2 2)"><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><path fill="#FFF" d="M157.066 52.186C148.954 92.345 11.06 153.876 4.43 219.892c-7.118-17.752-5.747-38.258 4.77-55.078 8.914-14.255 21.15-24.787 27.471-36.489C48.71 106.043-14.934 49.707 26.481 14.117 41.1 1.552 72.242-1.348 106.221.602c10.344 2.364 58.164 15.331 50.845 51.584" mask="url(#f)" opacity=".152"/></g><path fill="#000" d="M351.82 243c.985 7.866-2.34 13.336-3.64 15.227-22.429 32.672-144.494 43.563-227.13 36.908-43.146-3.476-78.505-25.715-100.05-50.22L351.82 243z" opacity=".149"/><path fill="#000" d="M73.627 246.812s-10.077.61-9.922 3.66c.155 3.05 6.511 9.758 6.511 9.758l-9.509-3.405L32 255.732l3.1 2.669s23.127 1.067 24.16 1.88c1.034.813 14.264 10.776 16.537 11.182 2.274.407 146.688.225 146.688.225s14.858.589 17.339-3.986c2.48-4.574 11.472-4.27 13.953-.305 2.48 3.965 2.136 18.603 2.136 18.603s6.793-1.773 7.166-1.931C286.644 274.106 313 243 313 243l-239.373 3.812z" opacity=".128"/><path fill="#162F44" d="M43 207.695l14.45 49.163s2.056 2.444 3.55.18L51.286 207l-8.286.695zM23.134 206L16 239.138 19.397 243 29 206.954z"/><path fill="#F4F2F9" d="M235.493 217.082l6.025 34.2.999 5.669-2.192.322-.156.024-4.788.703s-15.971-39.344-17.33-48.787C216.69 199.77 243.196 162 243.196 162l28.768 2.448c.761 8.219-10.744 23.711-21.027 35.77-8.101 9.499-15.444 16.864-15.444 16.864"/><path fill="#E0DFEA" d="M235.88 215.535l6.877 39.767-2.146.321-.073.377-.08-.352c-.875-3.83-11.14-37.737-11.452-44.648-.333-7.326 14.027-30 14.027-30L251 198.714c-7.93 9.474-15.12 16.82-15.12 16.82"/><path fill="#6397D9" d="M274 166l-28.667-2.387L244 115.886S251 91 258.667 91c4.553 0 8.986 1.804 11.7 6.195 1.853 3.003 2.903 7.22 2.633 12.896-.61 12.777.73 48.907.967 55.022.02.577.033.887.033.887"/><path fill="#8BBFF7" d="M266.115 162.276l.538-56.818L260 91.938l7.763-.938 2.729 3.21c1.79 3.003 2.803 7.22 2.542 12.894-.589 12.774.737 49.782.966 55.896l-7.885-.724z"/><path fill="#306299" d="M266 107l-21.017 40-.546-17.991-.437-14.598L261.524 107z"/><path fill="#FFF" d="M212.329 270H83.67c-4.789 0-8.671-3.908-8.671-8.73V40.73c0-4.822 3.882-8.73 8.671-8.73H212.33c4.789 0 8.671 3.908 8.671 8.73v220.54c0 4.822-3.882 8.73-8.671 8.73"/><path fill="#E4DCF1" d="M213 63.29v88.42c0 1.818-1.456 3.29-3.253 3.29H86.253c-1.797 0-3.253-1.472-3.253-3.29V63.29c0-1.818 1.456-3.29 3.253-3.29h123.494c1.797 0 3.253 1.472 3.253 3.29"/><path fill="#8E2B43" d="M148.853 84l-1.552 1.183L144 99.554l.071 2.367 5.227.079c.355.005.713-.065 1.03-.25 1.495-.878 2.133-3.325 1.308-5.493-.444-1.166-1.581-3.23-1.713-4.142-.314-2.184-1.07-8.115-1.07-8.115"/><path fill="#4EC9B4" d="M176 158l-54.224-.208-1.795-.006s-6.487-30.649 4.016-42.461c2.558-2.874 5.883-4.993 9.506-6.37 11.273-4.297 25.453-1.455 28.493 7.966C166.012 129.372 176 158 176 158"/><path fill="#FA9E89" d="M133.84 109.489s2.215 6.026 7.103 7.294c4.888 1.269 10.489-3.224 10.03-8.457 0 0-4.684-.687-5.447-2.96-.928-2.76-.306-2.854-.306-2.854s1.833-3.49 2.444-6.026c.611-2.537-.305-12.37-4.582-13.32-2.705-.602-7.027.317-10.082 4.757 0 0 1.528 8.563 3.666 12.686 2.139 4.123 3.208 6.026-2.826 8.88"/><path fill="#F4F2F9" d="M209.833 33.013L77 219.239v42.244c0 4.704 3.7 8.517 8.263 8.517h120.164c5.287 0 9.573-4.418 9.573-9.869V36.827c0-2.929-2.33-3.956-5.167-3.814" opacity=".184"/><path fill="#4EC9B4" d="M170 139.442L176.982 109 188 110.816 177.316 155z"/><path fill="#FA9E89" d="M179.2 108.137l.6-3.106s-1.8-1.184-1.5-2.959c.3-1.775-.3-5.917-.3-5.917s.957-.647 1.575.518c.44.829 1.125 2.737 1.125 2.737s2.296-6.166 2.826-7.79c.225-.691.452-1.767.975-1.603.275.086.175.715.128 1.33-.14 1.844-.928 4.784-.928 4.784l.4.234 1.663-5.276c.073-.256.193-.644.462-.665.238-.02.475.11.475.702 0 1.184-1.275 6.077-1.275 6.077l.319.219 1.935-4.278c.133-.323.613-.295.695.044.065.268.046.65-.173 1.192-.6 1.48-1.2 3.846-1.2 3.846l.15.173 1.05-2.17c.188-.347.649-.57.783-.2.188.518-1.458 4.97-1.458 5.267 0 .296-1.126 4.326-2.326 4.622-1.2.296-1.275 3.082-1.275 3.082l-4.726-.863z"/><path fill="#FFDEDD" d="M109.649 181H87.35c-1.298 0-2.351-1.072-2.351-2.394v-3.212c0-1.322 1.053-2.394 2.351-2.394h22.298c1.298 0 2.351 1.072 2.351 2.394v3.212c0 1.322-1.053 2.394-2.351 2.394m32 0H119.35c-1.298 0-2.351-1.072-2.351-2.394v-3.212c0-1.322 1.053-2.394 2.351-2.394h22.298c1.298 0 2.351 1.072 2.351 2.394v3.212c0 1.322-1.053 2.394-2.351 2.394m34 0H153.35c-1.298 0-2.351-1.072-2.351-2.394v-3.212c0-1.322 1.053-2.394 2.351-2.394h22.297c1.299 0 2.352 1.072 2.352 2.394v3.212c0 1.322-1.053 2.394-2.352 2.394m32 0h-22.297c-1.298 0-2.351-1.072-2.351-2.394v-3.212c0-1.322 1.053-2.394 2.351-2.394h22.298c1.298 0 2.351 1.072 2.351 2.394v3.212c0 1.322-1.053 2.394-2.351 2.394"/><path fill="#F4F2F9" d="M205.453 200H87.547C86.14 200 85 198.92 85 197.59v-3.18c0-1.33 1.14-2.41 2.547-2.41h117.906c1.407 0 2.547 1.08 2.547 2.41v3.18c0 1.33-1.14 2.41-2.547 2.41M87.547 216C86.14 216 85 214.92 85 213.59v-3.18c0-1.33 1.14-2.41 2.547-2.41h117.906c1.407 0 2.547 1.08 2.547 2.41v3.18c0 1.33-1.14 2.41-2.547 2.41H87.547zm117.906 16H87.547C86.14 232 85 230.92 85 229.59v-3.18c0-1.33 1.14-2.41 2.547-2.41h117.906c1.407 0 2.547 1.08 2.547 2.41v3.18c0 1.33-1.14 2.41-2.547 2.41m0 13H87.547C86.14 245 85 243.92 85 242.59v-3.18c0-1.33 1.14-2.41 2.547-2.41h117.906c1.407 0 2.547 1.08 2.547 2.41v3.18c0 1.33-1.14 2.41-2.547 2.41"/><path fill="#FC516B" d="M130.778 80.321s6.3-8.848 18.19-3.725c11.888 5.122-1.017 13.504-1.017 13.504s-.254-3.26-2.134-4.191l.153 2.897-6.656 1.165-1.067-2.794-.686 3.182-3.353 1.241s2.743 9.624 4.344 11.021c0 0 .686 2.25.457 2.716-.228.466-10.364 3.027-11.66.699-1.296-2.328 1.372-5.588 2.21-7.761.838-2.173-1.524-13.711 1.22-17.954"/><path fill="#E4DCF1" d="M101.648 56H84.352C83.053 56 82 54.657 82 53s1.053-3 2.352-3h17.296c1.299 0 2.352 1.343 2.352 3s-1.053 3-2.352 3"/><path fill="#44AD99" d="M128 128s2.664 19.286 5.71 27h16.06s2.648-8.138-10.047-10.8C130.893 142.349 128 128 128 128m31.611-5s3.26 10 2.648 13c-.61 3-3.259 5.2-3.259 7.2s1.63 9.6 1.63 9.6l9.37.2s-1.556-.266-5.093-3.05c-5.398-4.25-.764-13.625-1.91-18.95-.6-2.794-3.386-8-3.386-8M170 138.772s.213 8.383 1.915 7.093c1.702-1.29.638-13.757 2.127-18.056 1.49-4.3 5.958-18.057 5.958-18.057l-3.83-.752-6.17 29.772z"/><path fill="#FA9E89" d="M195.377 100.475s1.576.692 3.5 3.046c.636.78 4.03 2.021 4.833 2.988 11.645 14.02 27.196 24.841 37.163 20.533C253.603 121.54 256 116.424 256 116.424l-8.414-11.362s-9.663 14.759-17.434 10.739c-7.772-4.02-23.092-14.557-23.092-14.557l-.406-6.464s-.895-.24-1.324.995c-.43 1.236-.45 2.304-.45 2.304l-6.049-7.024s-1.162-.36-.808.769c.354 1.13 2.491 4.368 2.491 4.368s.22.616-.243.335c-.54-.327-4.766-5.092-4.766-5.092s-.973-.064-.576.866c.307.717 2.865 4.09 3.73 5.354.258.376-.282.235-.282.235l-3.496-2.97c-.473-.319-.963-.213-.87.368.075.46 1.027 1.519 1.593 1.939 1.414 1.046 2.4 2.952 2.4 2.952l-3.044-1.1s-.595.528.417 1.396M267 63.49l-3.85 28.32L250.504 94s.64-.668 1.372-1.56c.748-.907 1.59-2.05 1.963-2.966.85-2.104.856-4.066.856-4.066s-5.608.633-6.477-2.595c-.872-3.232 1.143-18.284 1.143-18.284S251.864 55.07 267 63.49"/><path fill="#261F27" d="M256.387 63.812s-6.236 4.71-12.219.698c0 0 3.792-.35 4.972-2.268 0 0-2.36.61-5.14-3.314 0 0 4.887.698 6.572-.785 1.686-1.483 10.28-3.838 15.42-.262 5.141 3.576 5.057 6.193 5.057 6.193s3.033 1.133 2.95 2.878c-.085 1.744-7.5 16.048-7.5 16.048l-1.601-6.367s1.264.378 2.022-2.587c.758-2.966-2.528-1.687-2.865-1.076-.337.61-2.528-4.187-2.528-4.187l.337-2.79s1.096-3.577-5.477-2.18"/><path fill="#FFF" d="M268.214 196.384c-3.591 14.487 3.05 72.409 3.05 72.409L264.766 270c-26.16-60.015-20.176-109-20.176-109l29.41 2.414s-.075-1.224-.106-.934c-.338 3.008-2.408 20.689-5.68 33.904"/><path fill="#6397D9" d="M235.73 254.076l-7.553 5.859s-2.975-.359-3.548 1.016c-.572 1.375-.629 2.93-.629 2.93l7.896.119L245 258.799 242.94 253l-7.21 1.076zm29.82 17.264s-2.672 4.322-5.365 7.852c-.905 1.186-3.117 1.701-3.978 4.595-.74 2.49.74 4.213.74 4.213s4.965-.894 8.419-3.957c3.453-3.064 8.634-8.937 8.634-8.937L272.582 270l-7.031 1.34z"/><path fill="#224A7D" d="M66 199c0 3.866-12.984 7-29 7s-29-3.134-29-7 12.984-7 29-7 29 3.134 29 7"/><path fill="#6397D9" d="M66 198c0 3.866-12.984 7-29 7s-29-3.134-29-7 12.984-7 29-7 29 3.134 29 7"/><path fill="#162F44" d="M45 194c0 1.657-5.373 3-12 3s-12-1.343-12-3 5.373-3 12-3 12 1.343 12 3m-37 3v3.986s.07 2.464 5 4.014l-1.179-4.318S8.358 199.187 8 197"/><path fill="#8CC5F2" d="M65.994 197v4.085s.39 2.043-4.994 3.915l1.652-4.766s2.86-1.277 3.342-3.234"/><path fill="#FC516B" d="M47 184.038l-1.968 7.69c-.488 1.914-2.423 3.272-4.653 3.272h-4.233c-1.585 0-3.025-.685-3.9-1.772a4.02 4.02 0 0 1-.692-1.278l-1.706-5.313L29 184l18 .038z"/><path fill="#9B293F" d="M47 183c0 .552-4.03 1-9 1s-9-.448-9-1 4.03-1 9-1 9 .448 9 1"/><path fill="#F995A9" d="M34.594 193.657c.354.137.688.253 1 .343l-2.11-.324a4.41 4.41 0 0 1-.657-1.35l-1.616-5.608c-.081-.27-.211-.7-.211-.718 0 0 4.215 1.242 8 .818-1.231.164-4.31.412-6.168.32a.724.724 0 0 0-.764.815c.234 1.657.905 5.074 2.526 5.704"/><path fill="#51A595" d="M39 180.901l-.679 3.087-.494.012s-.028-3.099-3.674-5c-3.65-1.9-3.127-9-3.127-9l.003.009c.088.183 1.488 3.1 2.549 3.29 1.094.202 1.773 1.95 1.773 1.95s.522.75 1.147.6c.626-.15 1.251 1.5 1.251 1.5l.207 1.752 1.044 1.8z"/><path fill="#4EC9B4" d="M34.007 186.987s-.7-23.436 11.6-29.987c0 0 3.501 1.352-.6 6.967-4.1 5.615-.799 9.67-2.6 11.127-1.8 1.455-4.4 2.391-4 4.263.4 1.872-.1 3.744-.9 3.952-.8.207-2.6 1.312-2.88 3.691l-.62-.013z"/><path fill="#41877A" d="M34 182.8l-.04 1.188-.538.012s-.03-3.099-3.994-5c-3.968-1.9-3.4-9-3.4-9l.004.009.336 1.068c0 6.45 3.723 7.787 5.212 8.648 1.489.861 2.42 3.075 2.42 3.075"/><path fill="#306299" d="M253.815 94.105s10.552.172 11.494-1.105l.691 1.898s-8.36 4.557-14 2.624l1.815-3.417z"/><path fill="#8CC5F2" d="M239 107.916L251.588 122s16.822-15.082 16.404-19.81c-.417-4.727-6.58-14.515-16.034-5.523C242.76 105.415 239 107.916 239 107.916"/><path fill="#F4F2F9" d="M271.435 269.654l-2.566.346s-12.026-42.47-8.07-73.847c1.189-9.434 5.344-33.153 5.344-33.153l7.857.737c-.318 3.023-2.357 19.855-5.426 33.137-3.367 14.562 2.86 72.78 2.86 72.78"/><path fill="#E6846F" d="M257.747 92.558c-1.488.324-2.299.427-2.747.442.698-.966 1.484-2.182 1.832-3.158.793-2.241.799-4.33.799-4.33s2.971-.782 3.277-.413c.304.368 0 6.77-3.161 7.459"/><path fill="#CEC3E2" d="M112 96c0 10.492-8.048 19-17.973 19-4.156 0-7.981-1.491-11.027-3.996V80.996C86.046 78.49 89.87 77 94.027 77 103.952 77 112 85.508 112 96"/><path fill="#C3B8D8" d="M112 96.5c0 10.216-7.493 18.5-16.734 18.5-3.87 0-7.43-1.452-10.266-3.89V81.89C87.835 79.453 91.397 78 95.266 78 104.507 78 112 86.284 112 96.5"/><path fill="#44AD99" d="M138 113.096s-1.985-1.104-2.298-1.305c-.314-.199-4.39.902-9.826 6.516-5.433 5.614-.73 10.324-3.028 13.33-2.301 3.008-.107 9.323 1.044 13.635 1.15 4.31 0 9.722 0 9.722l-.06.006-1.821-.006s-6.584-28.868 4.075-39.995c2.596-2.706 5.97-4.703 9.647-5.999l2.267 4.096z"/></g></g></svg></div>
<div>
    <h2>Share your Bookmarks</h2>
    <p>
        Easily share your bookmarks and collections with others. 
        Create a shareable link that 
        you can send at the click of a button.
    </p>
    <button>More Info</button>
</div>
        `
    }
}