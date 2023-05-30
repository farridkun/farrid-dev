import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const menuBar = [
  {
    text: "Home",
    url: "#"
  },
  {
    text: "Works",
    url: "#"
  },
  {
    text: "Blog",
    url: "#"
  },
  {
    text: "Links",
    url: "#"
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto py-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex">
          <StaticImage
            src="../images/hero-banner-farrid-dev.png" 
            alt="Farrid-Dev Hero Banner"
            className="h-full w-10/12"
          />
        </div>
        <div className="py-4">
          <ul className="flex justify-between items-center">
            {menuBar.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>
                  {menu.text}
                </a>
              </li>
            ))}
            <li className="">
              <StaticImage
                src="../images/logo-farrid-dev.png"
                alt="Farrid-Dev Logo"
                className="w-10 h-14"
              />
            </li>
          </ul>


          <div className="py-24">
            <h3 className="text-2xl font-bold text-[#B49775]">Farrid Kuntoro</h3>
            <h1 className="text-6xl font-bold">Software <br/> Engineer Based <br /> in Jakarta</h1>
            <p className="pt-4">
              To be a software engineer is so amazing. I can help everyone build a product app or integrate features,
              it such a happiness for me. So, let me to help you or hire me!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-10">
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-[#B49775] pr-2">5</h1>
          <h3 className="text-2xl">Years <br /> Experience</h3>
        </div>
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-[#B49775] pr-2">10+</h1>
          <h3 className="text-2xl">Project <br /> Based</h3>
        </div>
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-[#B49775] pr-2">5</h1>
          <h3 className="text-2xl">Works <br /> Experience</h3>
        </div>
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-[#B49775] pr-2">10+</h1>
          <h3 className="text-2xl">Completed <br /> Project</h3>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Farrid Dev</title>
