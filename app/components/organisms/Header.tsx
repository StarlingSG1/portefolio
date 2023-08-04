import { tabs } from "@/app/data/tabs";
import { ExperiencesIcon, PresentationIcon, ProjectsIcon, SunIcon } from "../atoms/icons"
import Image from "next/image";

interface Props {
    handleTabClick: (index: number) => void;
    tab: number;
}

export function Header({ handleTabClick, tab }: Props) {

    return (
        <header className='mb-8 w-full  bg-black'>
            <div className='flex items-center px-4 justify-between w-full'>
                <div className='w-full h-[56px] pt-4 pb-2 flex items-center gap-2'>
                    <Image width={32} height={32} className='rounded-full bg-black border border-gray-border' src="/profile-pic.png" alt="logo-jérémie-barrière" />
                    <h1 className='font-medium'>Jérémie Barrière</h1>
                </div>
                {/* <SunIcon /> */}
            </div>
            <div className='w-full h-12'>
                <ul className='h-full pl-4 flex gap-2'>
                    {tabs.map((item, index) => (
                        <li key={index} className={`h-full group relative`}>
                            {tab === index && <span className='w-full h-0.5 bg-orange absolute bottom-0 rounded-md '></span>}
                            <button onClick={() => handleTabClick(index)} className={`h-full flex items-center text-sm ${tab === index && "font-semibold"}`}>
                                <span className='text-white py-1 px-2 group-hover:bg-gray rounded-md flex items-center gap-2'>
                                    {item.icon}
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}