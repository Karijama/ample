import logo from '../static/logo.png';
import traktor from '../static/traktor.png';
import {useJsApiLoader, GoogleMap} from "@react-google-maps/api"

const center = {lat: 61.536700, lng: 129.182598}
function App(){
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAsqUSyzfxiS1xVw5SS_YfNTSnIzIIDbEk'
    })
    if(!isLoaded){
        return <logo/>
    }
}

export default function Main(){
    return(
        <div>
            <div className='flex justify-center items-center py-8 px-auto'>
                <div className='flex mx-auto items-center w-1/3 justify-center'><div className=''><img src={logo} className="w-14" /></div>
                <div className='ms-2'><p className='font-logo'>AMPLE</p></div></div>
                <div className='flex items-center font-body w-1/3 justify-between'>
                    <div className='text-green-500'><a href='/main'>Главная</a></div>
                    <div className='ms-8 '><a href='/'>Карта</a></div>
                    <div className='ms-8'><a href='/tariff'>Тарифы</a></div>
                    <div className='ms-8'><a href=''>Личный кабинет</a></div>
                </div>
                <div className='w-1/3 ps-40'><a href="/login"><button as='a' className="font-bold inline-flex bg-black hover:bg-black  text-xs px-8 py-4 rounded-full text-white">
                    Авторизация
                </button></a></div>
            </div>
            <div className='flex mt-10 w-3/4 mx-auto'>
                <div className='w-4/12'>
                    <p className='text-6xl font-body font-bold'>Мониторинг <br/> урожайности <br/> сельхозугодий</p>
                    <p className='mt-5 font-body text-gray-100'>Наши датчики помогут вам отслеживать количество <br/> урожайности сельскохозяйственных угодий</p>
                </div>
                <div className='w-5/12 ml-auto'>
                    <img src={traktor} />
                </div>
            </div>
            <div className='py-20 w-3/4 mx-auto'>
                <div className=''><p className='text-6xl font-body font-bold'>Принцип работы</p></div>
                <div className='flex'>
                    <div>
                        <GoogleMap center={center} zoom={15} mapContainerClassName='w-2/3 h-96'></GoogleMap>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}