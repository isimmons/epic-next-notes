'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '~/utils/misc';

type Props = {
  href: string;
  classes: string;
  children: React.ReactNode;
};

export default function NavLink({ href, classes, children }: Props) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} className={cn(classes, isActive ? 'bg-accent' : '')}>
      {children}
    </Link>
  );
}
