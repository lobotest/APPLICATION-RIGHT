import Link from "next/link"
import { Twitter, Instagram, TicketIcon as TikTok, Youtube } from "lucide-react"

const traders = [
  {
    name: "GLOTrades",
    socials: [
      {
        name: "X (Twitter)",
        icon: Twitter,
        href: "https://x.com/imglotrades", // updated Twitter handle from imglotradesx to imglotrades
        username: "@imglotrades", // updated username from @imglotradesx to @imglotrades
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/glotradess",
        username: "@glotradess",
      },
      {
        name: "TikTok",
        icon: TikTok,
        href: "https://www.tiktok.com/@glotradess",
        username: "@glotradess",
      },
      {
        name: "YouTube",
        icon: Youtube,
        href: "https://www.youtube.com/@glotrades",
        username: "@glotrades",
      },
    ],
  },
  {
    name: "SamuTrades",
    socials: [
      {
        name: "X (Twitter)",
        icon: Twitter,
        href: "https://x.com/samuelsantrichx",
        username: "@samuelsantrichx",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/fxsamu_",
        username: "@fxsamu_",
      },
      {
        name: "TikTok",
        icon: TikTok,
        href: "https://www.tiktok.com/@iamsamutradess",
        username: "@iamsamutradess",
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traders.map((trader, index) => (
            <div
              key={trader.name}
              className={`space-y-4 ${trader.name === "SamuTrades" ? "order-first md:order-none" : ""}`}
            >
              <h3 className="text-lg font-semibold text-foreground">{trader.name}</h3>
              <div className="flex flex-col space-y-4">
                {trader.socials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span>{social.name}</span>
                    <span className="text-sm text-muted-foreground">{social.username}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Global Gains, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
