import TvIcon from "../assets/icons8-tv-48.png";
import AudioIcon from "../assets/icons8-headset-48.png";
import LaptopIcon from "../assets/icons8-laptop-48.png";
import MobileIcon from "../assets/icons8-smartphone-tablet-48.png";
import GamingIcon from "../assets/icons8-game-48.png";
import FanIcon from "../assets/icons8-fan-48.png";

export default function Categories({ active, setActive }) {
  const CATEGORIES = [
    { key: "tv", name: "TV", icon: TvIcon },
    { key: "audio", name: "Audio", icon: LaptopIcon },
    { key: "laptop", name: "Laptop", icon: AudioIcon },
    { key: "mobile", name: "Mobile", icon: MobileIcon },
    { key: "gaming", name: "Gaming", icon: GamingIcon },
    { key: "appliances", name: "Appliances", icon: FanIcon },
  ];

  const classess = {
    true: "bg-indigo-100 text-indigo-700",
    false: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="grid grid-cols-6 w-full gap-4">
      {CATEGORIES.map((category) => (
        <button
          key={category.key}
          onClick={() => setActive(category.key)}
          className={
            "rounded-lg p-3 flex items-center gap-2 cursor-pointer " +
            classess[active === category.key]
          }
        >
          <img className="size-8" src={category.icon} />
          <h4 className="text-center font-medium">{category.name}</h4>
        </button>
      ))}
    </div>
  );
}
