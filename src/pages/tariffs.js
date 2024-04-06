import logo from '../static/logo.png';
import okay from '../static/okay.png';
import not from '../static/not.png';

export default function Tariff(){
    return(
        <div>
            <div className='flex justify-center items-center py-8 px-auto'>
                <div className='flex mx-auto items-center w-1/3 justify-center'><div className=''><img src={logo} className="w-14" /></div>
                <div className='ms-2'><p className='font-logo'>AMPLE</p></div></div>
                <div className='flex items-center font-body w-1/3 justify-between'>
                    <div className=''><a href='/main'>Главная</a></div>
                    <div className='ms-8 '><a href='/'>Карта</a></div>
                    <div className='ms-8 text-green-500'><a href=''>Тарифы</a></div>
                    <div className='ms-8'><a href=''>Личный кабинет</a></div>
                </div>
                <div className='w-1/3 ps-40'><a href="/reg"><button as='a' className="font-bold inline-flex bg-black hover:bg-black  text-xs px-8 py-4 rounded-full text-white">
                    Авторизация
                </button></a></div>
            </div>
            <div className='w-3/4 mx-auto'>
                <div className='mt-10'><p className='font-body font-bold text-4xl'>Тарифы</p></div>
                <div className='flex'>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}