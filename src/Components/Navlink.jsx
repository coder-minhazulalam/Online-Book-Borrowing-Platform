'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={isActive ? 'text-white border-b-2  border-solid border-[#ebbd34] font-bold' : 'text-white'}
    >
      {children}
    </Link>
  )
}