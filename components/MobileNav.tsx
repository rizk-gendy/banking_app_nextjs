'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants/index'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg'
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-white'>
                    <Link href='/' className=' flex cursor-pointer items-center gap-1 px-4'>
                        <Image
                            src='/icons/logo.svg'
                            width={34}
                            height={34}
                            alt='Horizon Logo'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold  text-black-1'>
                            Horizon
                        </h1>
                    </Link>

                    <div className='mobilenav-sheet'>
                        <SheetClose asChild >
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`)
                                    console.log(isActive)
                                    return (
                                        <SheetClose asChild>
                                            <Link className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })} href={link.route} key={link.label}>
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                    height={20}
                                                    width={20}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                />
                                                <p className={cn('text-16 text-black-2 font-semibold', { 'text-white': isActive })}>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )

                                })}
                            </nav>

                        </SheetClose>
                        <Footer type='mobile' user={user}/>

                    </div>

                </SheetContent>
                
            </Sheet>
        </section>
    )
}

export default MobileNav