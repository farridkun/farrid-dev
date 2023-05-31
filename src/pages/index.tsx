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
    text: "Github",
    url: "https://links.farrid.dev/git"
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto py-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex tooltip tooltip-bottom" data-tip="Ahooy, Thank you for hover me!">
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
                  <a href={menu.url} target="_blank" className="cursor-pointer">
                    {menu.text}
                  </a>
                </li>
              ))}
              <li className="tooltip tooltip-left" data-tip="Creafted by me with GatsbyJS">
                <StaticImage
                  src="../images/logo-farrid-dev.png"
                  alt="Farrid-Dev Logo"
                  className="w-10 h-14"
                />
              </li>
            </ul>


          <div className="pt-10">
            <h3 className="text-2xl font-bold text-[#B49775] tooltip" data-tip="Ahooy, Nice to e-meet you!">Farrid Kuntoro</h3>
            <p
              className="text-6xl font-bold">
                Software <br/> Engineer Based <br /> in
                <span
                  className="text-[#B49775] tooltip tooltip-top ml-2"
                  data-tip="I'm based in Jakarta, Indonesia"
                >
                  Jakarta
                </span>
              </p>
            <p className="pt-4">
              To be a software engineer is so amazing. I can help everyone build a product app or integrate features,
              it such a happiness for me. So, let me to help you or hire me!
            </p>
            <div className="flex py-4">
              <label
                htmlFor="cv-modal"
                className="bg-[#544A4B] text-white font-semibold px-5 py-3 rounded-md cursor-pointer mr-6"
              >
                See My Cv
              </label>
              <label
                htmlFor="wn-modal"
                className="bg-[#B49775] text-white font-semibold px-5 py-3 rounded-md cursor-pointer"
              >
                Hire Me!
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-10">
        <div className="flex items-center">
          <h1
            className="text-7xl font-bold text-[#B49775] pr-2 tooltip tooltip-right"
            data-tip="I have almost 5 years experience as Software Engineer"
          >
            5
          </h1>
          <h3 className="text-2xl">Years <br /> Experience</h3>
        </div>
        <div className="flex items-center">
          <h1
            className="text-7xl font-bold text-[#B49775] pr-2 tooltip tooltip-right"
            data-tip="Based JS/TS Web Frameworks (ex: ReactJS/NextJS/Gatsby/VueJS), React Native (Android/iOS), NodeJS, Git, and Laravel are my main expertise"
          >
            8+
          </h1>
          <h3 className="text-2xl">Main <br /> Expertise</h3>
        </div>
        <div className="flex items-center">
          <h1
            className="text-7xl font-bold text-[#B49775] pr-2 tooltip tooltip-right"
            data-tip="I have 3 works experience in 3 different company as a engineer"
          >
            3
          </h1>
          <h3 className="text-2xl">Works <br /> Experience</h3>
        </div>
        <div className="flex items-center">
          <h1
            className="text-7xl font-bold text-[#B49775] pr-2 tooltip tooltip-left"
            data-tip="I have completed more than 10+ project based on my experience"
          >
            10+
          </h1>
          <h3 className="text-2xl">Completed <br /> Project</h3>
        </div>
      </div>

      {/* cv modal */}
      <input type="checkbox" id="cv-modal" className="modal-toggle" />
      <label htmlFor="cv-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex">
            <h3 className="font-bold text-lg mr-2">Redirect to outside</h3>
            <h3 className="font-bold text-lg text-[#B49775]">farrid.dev</h3>
          </div>
          <p className="py-4">
            This links will redirect you to my Linkedin Profile,
            or if you need contact me directly via mail just put your decision on button below.
          </p>
          <div className="modal-action">
            <label
              htmlFor="cv-modal"
              className="bg-[#544A4B] text-white font-semibold px-5 py-3 rounded-md cursor-pointer"
            >
              Dimiss ❌
            </label>
            <label
              htmlFor="cv-modal"
              className="bg-[#B49775] text-white font-semibold px-5 py-3 rounded-md cursor-pointer"
            >
              <a href="http://links.farrid.dev/cv" target="_blank">
                GO! ✅
              </a>
            </label>
          </div>
        </label>
      </label>

      {/* wn modal */}
      <input type="checkbox" id="wn-modal" className="modal-toggle" />
      <label htmlFor="wn-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex">
            <h3 className="font-bold text-lg mr-2">Redirect to outside</h3>
            <h3 className="font-bold text-lg text-[#B49775]">farrid.dev</h3>
          </div>
          <p className="py-4">
            This links will redirect you to my Linkedin Profile,
            or if you need contact me directly via mail just put your decision on button below.
          </p>
          <div className="modal-action">
            <label
              htmlFor="cv-modal"
              className="bg-[#544A4B] text-white font-semibold px-5 py-3 rounded-md cursor-pointer"
            >
              <a href="mailto:hi@farrid.dev" target="_blank">
                I need your mail 📨
              </a>
            </label>
            <label
              htmlFor="cv-modal"
              className="bg-[#B49775] text-white font-semibold px-5 py-3 rounded-md cursor-pointer"
            >
              <a href="http://links.farrid.dev/linkedin" target="_blank">
                Go to LinkedIn ✅
              </a>
            </label>
          </div>
        </label>
      </label>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Farrid Dev</title>
