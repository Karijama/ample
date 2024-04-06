import logo from '../static/logo.png';
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
function Home() {
    return(
        <div>
            <div className='flex justify-center items-center py-8 px-auto'>
                <div className='flex mx-auto items-center w-1/3 justify-center'><div className=''><img src={logo} className="w-14" /></div>
                <div className='ms-2'><p className='font-logo'>AMPLE</p></div></div>
                <div className='flex items-center font-body w-1/3 justify-between'>
                    <div className=''><a href='/main'>Главная</a></div>
                    <div className='ms-8 text-green-500'><a href='/'>Карта</a></div>
                    <div className='ms-8'><a href='/tariff'>Тарифы</a></div>
                    <div className='ms-8'><a href=''>Личный кабинет</a></div>
                </div>
                <div className='w-1/3 ps-40'><a href="/reg"><button as='a' className="font-bold inline-flex bg-black hover:bg-black  text-xs px-8 py-4 rounded-full text-white">
                    Авторизация
                </button></a></div>
            </div>
            <div className='font-body text-4xl font-bold w-1/3 text-center mt-10'><p className=''>Карта</p></div>
            <div className='flex w-4/5 mx-auto mt-10'>
                <GoogleMap center={center} zoom={15} mapContainerClassName='w-2/3 h-96'>
                </GoogleMap>
                <div className='w-1/4 ms-10 rounded-lg border'>
                    <div className='bg-green-500 text-center h-1/5 rounded-t-lg'><p>Поле ЯНИИСХ</p></div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='font-body font-bold w-1/3 text-center text-4xl mt-10'><p>Анализ</p></div>
            <div className='mt-10 flex w-4/5 mx-auto'>
                <GoogleMap center={center} zoom={15} mapContainerClassName='w-1/3 h-96'>
                </GoogleMap>
                <GoogleMap center={center} zoom={15} mapContainerClassName='w-1/3 h-96'>
                </GoogleMap>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Home;