import landingImage from '../assets/landing-removebg.png';
import appDownloadImage from '../assets/appDownload-removebg.png';
function HomePage() {
    return (
        <div className={'flex flex-col gap-12'} >
            <div className={'md:px-32 bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16'}
            >
                <h1 className={'text-5xl font-bold  tracking-tight text-orange-600'}>
                    Tuck into a takeway today
                </h1>
                <span className={'text-xl'}>Food is just a click away!</span>
            </div>
                <div className={'grid md:grid-cols-2 gap-5'}  >
                    <img src={landingImage} alt={'mobile'}/>
                    <div className={'flex flex-col items-center justify-center gap-4 text-center'}>
                        <span className={'font-bold text-3xl tracking-tighter '}>
                            Order takeway even faster!
                        </span>
                        <span>
                            Get our app, it's the fastest way to order food on the go
                        </span>
                        <img src={appDownloadImage} alt={'download'}/>
                    </div>
                </div>
            </div>
    )
}

export default HomePage
