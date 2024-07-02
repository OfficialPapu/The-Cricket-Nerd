import React from 'react'
import CurrentEvents from './Current Events'
import CurrentNews from './Current News'
export default function News() {
  return (
    <>
      <div className="bg-background text-foreground px-6 md:flex md:flex-col md:items-center">
        <CurrentEvents />
        <CurrentNews />
      </div>
    </>
  )
}
