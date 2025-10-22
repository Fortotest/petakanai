
"use client";

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/market-insights', label: 'Wawasan Pasar' },
    { href: '/#cek-strategi', label: 'Simulasi' },
    { href: '/about', label: 'About' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

  return (
    <header className="md:sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center">
          <Link className="flex items-center gap-x-1.5" href="/">
            <Image 
              src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/ee3935807a4b4acf1e4ed22754edc5e764e916ab/petakanai%20icon.png"
              alt="Petakan.ai logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="font-bold text-lg">Petakan.ai</span>
          </Link>
        </div>
        
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link className="flex items-center gap-x-1.5" href="/" onClick={() => setIsOpen(false)}>
                        <Image 
                          src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/ee3935807a4b4acf1e4ed22754edc5e764e916ab/petakanai%20icon.png"
                          alt="Petakan.ai logo"
                          width={28}
                          height={28}
                          className="h-7 w-7"
                        />
                        <span className="font-bold text-lg">Petakan.ai</span>
                      </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map(link => (
                        <SheetClose asChild key={link.href}>
                            <Link href={link.href} className={cn("text-lg font-medium transition-colors hover:text-primary", { 'text-primary': pathname === link.href || (link.href === '/#cek-strategi' && pathname === '/') } )}>{link.label}</Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
