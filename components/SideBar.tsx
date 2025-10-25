'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ITEMS, sidebarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer';

const SideBar = ({ user }: SiderbarProps) => {

    const pathName = usePathname()
    console.log(pathName)
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
                    <Image
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon Logo'
                        className="size-[24x] max-xl:size-14"
                    />
                    <h1 className='sidebar-logo'>
                        Horizon
                    </h1>
                </Link>
                {sidebarLinks.map((link) => {
                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`)
                    console.log(isActive)
                    return (
                        <Link className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} href={link.route} key={link.label}>
                            <div className='relative size-6'>
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />
                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isActive })}>
                                {link.label}
                            </p>
                        </Link>
                    )

                })}
                USER DATA
            </nav>
            <Footer type='desktop' user={user} />
        </section>
    )
}

export default SideBar 