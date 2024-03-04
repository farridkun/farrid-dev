import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WorksPage: React.FC<PageProps> = () => {
  const works = [
    {
      title: "Lilla - PT Social Bella Indonesia",
      description: "Developing Lilla, a beauty e-commerce platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Pegadaian Poin - PT Pegadaian (Persero)",
      description: "Developing Pegadaian Poin, a loyalty program platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Pegadaian Digital - PT Pegadaian (Persero)",
      description: "Developing Pegadaian Digital, a digital lending platform, from scratch. I'm responsible for the front-end. I'm also responsible for the mobile application development using React Native.",
      image:<StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Toyota Digital Twin - PT TMMIN",
      description: "Developing Toyota Digital Twin, a digital twin platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Aruna Visual - PT Aruna Media",
      description: "Developing Aruna Visual, a digital marketing platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "CMS - Tujuh Tera Indonesia - PT Tujuh Tera Indonesia",
      description: "Dveloping CMS, a content management system, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Orange Yoga",
      description: "A yoga platform that I developed from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "SIAPIK TAMPAN - DPRD Kota Cimahi",
      description: "Developing SIAPIK TAMPAN, a public service platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "POS - Groovy Sunday",
      description: "POS system for Groovy Sunday, a coffee shop in Bandung. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Cloud Storage - Nitip Euy",
      description: "Building a cloud storage platform from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Rumah Pokok - CV Rumah Sukses Kuningan",
      description: "Developing Rumah Pokok, a property platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Photobooth Aruna App - PT Aruna Media",
      description: "Photobooth Aruna App is a photo booth application that I developed from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Kita Untuk Indonesia - PT Tujuh Tera Indonesia",
      description: "Making a website for Kita Untuk Indonesia, a social movement. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "SMM - PT Aruna Media",
      description: "Creating a social media management platform for PT Aruna Media. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
    {
      title: "Tinpet - Tinder for Pet",
      description: "Developing Tinpet, a pet dating platform, from scratch. I'm responsible for the front-end and back-end development. I'm also responsible for the deployment process and the CI/CD pipeline. I'm also responsible for the development of the mobile application using React Native.",
      image: <StaticImage src="../images/logo-farrid-dev.png" alt="Work 1" className="mb-2 rounded" />
    },
  ]

  return (
    <main className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Works Experiences</h1>
        <p className="mb-4">
            Here are some of the projects I've worked on as a freelancers & as employees.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {works.map((work, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            {work.image}
            <h2 className="text-xl font-bold mb-2">{work.title}</h2>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default WorksPage

export const Head: HeadFC = () => <title>Works - Farrid Dev</title>