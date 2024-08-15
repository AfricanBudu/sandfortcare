import { MdNotifications } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="flex w-full items-center justify-between pt-[60px]">
      <div className="">
        <h1 className="text-bname font-Semibold_Grotesk text-primary leading-none">Dashboard</h1>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="admin-dp" />
        <MdNotifications className="text-primary size-7" />
      </div>
    </div>
  )
}

export default TopBar;
