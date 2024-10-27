import TvIcon from "../assets/icons8-tv-48.png";
import AudioIcon from "../assets/icons8-headset-48.png";
import LaptopIcon from "../assets/icons8-laptop-48.png";
import MobileIcon from "../assets/icons8-smartphone-tablet-48.png";
import GamingIcon from "../assets/icons8-game-48.png";
import FanIcon from "../assets/icons8-fan-48.png";

export default function Categories() {
  const CATEGORIES = [
    { key: "tv", name: "TV", icon: TvIcon },
    { key: "audio", name: "Audio", icon: LaptopIcon },
    { key: "laptop", name: "Laptop", icon: AudioIcon },
    { key: "mobile", name: "Mobile", icon: MobileIcon },
    { key: "gaming", name: "Gaming", icon: GamingIcon },
    { key: "appliances", name: "Appliances", icon: FanIcon },
  ];

  return (
    <div className="grid grid-cols-6 w-full gap-4">
      {CATEGORIES.map((category) => (
        <div key={category.key} className="bg-indigo-50 rounded-lg p-3">
          <a
            href={`/category/${category.key}`}
            className="text-indigo-800 flex items-center gap-2"
          >
            <img className="size-8" src={category.icon} />
            <h4 className="text-center font-medium">{category.name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
