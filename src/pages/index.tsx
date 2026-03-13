import Sidebar from "../components/sideBar";
import MainRoutes from "../routes/mainRoutes";
import { defaultLinks } from "../utils/constant";

export default function Pages() {
  return (
    <div className="flex w-full h-auto gap-4 p-2 lg:h-screen md:p-4">
      <Sidebar link={defaultLinks} /> {/* Sidebar stays fixed width */}
      <div className="flex-1 h-full p-4 bg-[#F7F7F7] rounded-xl overflow-hidden">
        <MainRoutes />
      </div>
    </div>
  );
}
