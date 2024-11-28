import React from 'react'
import CurrentNews from './Current News'
import NewsSection from './Category'
export default function News() {
  return (
    <>
      <div className="bg-background text-foreground px-6 md:flex md:flex-col md:items-center">
      <NewsSection/>
        <CurrentNews />
      </div>
    </>
  )
}
