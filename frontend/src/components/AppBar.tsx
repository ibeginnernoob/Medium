
import MediumIcon from '../assets/mediumIcon.svg'
import AccountDP from '../assets/logic.jpg'

function AppBar(){
    return (
        <div className='flex flex-row justify-between items-center px-8 py-2 lg:px-24 border-b-[1px] border-gray-200'>
            <img src={MediumIcon} alt="Medium Icon" className='w-12' />
            <div className='flex flex-row items-center'>
                <button className='bg-green-500 text-white text-xs px-2.5 py-1 rounded-xl mr-8 hover:opacity-80'>Publish</button>
                <div className='cursor-pointer mr-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
                        <g>
                            <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                        </g>
                    </svg>
                </div>
                <div className="cursor-pointer mr-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <img src={AccountDP} alt="Account DP" className='w-9 rounded-full cursor-pointer hover:opacity-80' />
            </div>
        </div>
    )
}

export default AppBar