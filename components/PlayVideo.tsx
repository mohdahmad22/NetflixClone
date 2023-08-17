
import { videos } from "@/constants"

const PlayVideo = () => {
    
  return (
    <div className="relative z-0">
    <video
        autoPlay
        className="relative w-full"
        src={videos[1].sources}
        />
        <div className="text-white absolute bottom-40 left-20">
        <h1 className="font-bold text-[32px]">{videos[1].title}</h1>
        <p className="text-sm w-80">{videos[1].description}</p>
        <button className="bg-white mr-4 mt-10 text-black px-4 rounded-md py-1">Play</button>
        <button className="bg-black opacity-70 text-white px-5 rounded-md py-1">More Info</button>
        </div>
    </div>
  )
}

export default PlayVideo