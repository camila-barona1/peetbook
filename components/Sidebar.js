import { ShoppingBagIcon } from "@heroicons/react/outline";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow src={"/pet-package/veterinarian.png"} title="Amigos" />
      <SidebarRow src={"/pet-package/pet-care.png"} title="Grupos" />
      <SidebarRow src={"/pet-package/pet-shop.png"} title="Marketplace" />
      <SidebarRow src={"/pet-package/clapperboard.png"} title="Ver" />
      <SidebarRow src={"/pet-package/booking.png"} title="Eventos" />
      <SidebarRow src={"/pet-package/laika.png"} title="Memorias" />
      <SidebarRow Icon={ChevronDownIcon} title="Ver mas" />
    </div>
  );
}

export default Sidebar;
