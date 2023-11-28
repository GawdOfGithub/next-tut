
import React from 'react'
import { Sidebar} from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}
const SidebarForBigDevices = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="font-extrabold min-h-screen max-w-[300px] flex flex-col gap-5 absolute bg-black text-white">
      {Sidebar.map((item, index) => (
        <div key={index}>
          {index==0 && <div className='mt-8'></div>}
          <Link
            className={`text-2xl dark:hover:text-green-500 hover:text-red-500 ${pathname === item.name ? "bg-red-300" : ""}`}
            href={item.link}
          >
            {item.name}
          </Link>
          {index < Sidebar.length - 1 && <div className="border-b border-blue-500 mb-5 min-w-full"></div>}
        </div>
      ))}
    </div>
  );
};
export default SidebarForBigDevices