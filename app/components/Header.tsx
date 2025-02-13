"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-zUp2yd30LcwDnT0QcRka0XtjVsov8O.svg"
                alt="Global Gains Logo"
                width={32}
                height={32}
                className="h-8 w-auto sm:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="ml-2 text-xl font-bold transition-colors duration-300 group-hover:text-green-400">
                Global Gains
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link
              href="/inner-circle"
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              Inner Circle
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition-transform duration-300 hover:scale-110"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/inner-circle"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
            >
              Inner Circle
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

