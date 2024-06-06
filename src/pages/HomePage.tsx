import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage=()=>{
    return(
        <div className="flex flex-col gap-12 items-center">
            <div className="bg-white rounded-1g shadow-md py-8 flex-col gap-5 text-center -mt-16 w-3/4s">
                 <h1 className="text-5xl font-bold tracking-tight text-orange-600 ">
                    Tuck into a takeway  today
                 </h1>
                <span className="text-xl">Food is just one click away!</span> 
            </div>
            <div className="grid md:grid-cols-2 gap-5 items-center">
        <img src={landingImage}/>
        <div className=" flex flex-col items-center justify-centre gap-4 text-centre">
            <span className="font-vold text-3xl tracking-tighter">
                Order takeaway even faster
            </span>
            <span>
                Download the StackEats App for fatser ordering and personalished recommendations
            </span>
            <img src={appDownloadImage}/>
        </div>
    </div>
        </div>
    );
}
export default HomePage