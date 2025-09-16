"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import WhopIcon from "./WhopIcon"

export default function Hero() {
  const heroText = "Master Trading with Samu Trades"

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-8 lg:pt-16 lg:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 animate-fadeInUp">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-foreground">
                <span className="block xl:inline">{heroText}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:text-xl text-muted-foreground lg:mx-0">
                Join our free daily live trading sessions. Get real-time market insights, proven strategies, and a
                community built to help you win.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="https://whop.com/discover/globalgains" passHref>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <WhopIcon className="mr-2 h-5 w-5" />
                      Join Whop
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 animate-fadeInRight">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/trading-phones-mockup.png"
                  alt="Trading Community Mobile App - Live Trading Sessions and Discord Community"
                  width={500}
                  height={600}
                  className="max-w-full h-auto object-contain transition-transform duration-300 hover:scale-105 animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
