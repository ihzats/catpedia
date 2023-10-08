import React from 'react'

export default function About() {
  return (
    <div className="container pt-36">
      <div className="flex flex-wrap md:pt-12 md:pb-12 lg:pt-12 ">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="mt-1 block text-4xl font-bold lg:text-5xl text-primary font-poppinsy">What is CatPedia?
          </h1>
          <div className="w-full md:w-1/3 md:mx-12 lg:w-1/2 h-1 mt-1 mx-auto rounded-full bg-primary"></div>
        </div>
        <div className="w-full mt-8 lg:mt-0  self-center px-4 lg:w-1/2 ">
          <p className="mb-10 font-medium leading-relaxed text-slate-500">
            Catpedia is a highly valuable website for cat enthusiasts and pet owners alike. With a primary focus on making information about various cat breeds easily accessible, Catpedia provides quick and informative access to detailed descriptions of physical characteristics, personalities, and special care needs for each cat breed. Not only that, but the website also offers care guides, the latest news from the world of cats, and a community space for users to share their experiences and knowledge. With Catpedia, cat owners can better care for their pets, while cat lovers can expand their knowledge about various cat breeds from around the world.</p>
        </div>
      </div>

    </div>
  )
}
