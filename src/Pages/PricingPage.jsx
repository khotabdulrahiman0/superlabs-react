import React from 'react'
import PricingPlans from '../Components/PricingPlan'
import BusinessGrowthBanner from '../Components/BusinessGrowthBanner'

const PricingPage = () => {
  return (
    <>
        <section className="w-full flex flex-col items-center justify-center py-16">
    <h2 className="text-3xl md:text-2xl font-bold text-center text-gray-900 mb-4" style={{ fontFamily: "inherit" }}>
      Reach millions of B2B buyers globally
    </h2>
    <p className="text-xl md:text-2xl text-center text-gray-800 font-normal" style={{ fontFamily: "inherit" }}>
      Choose an 1mdm.com seller plan to launch your new business growth
    </p>
  </section>
  <PricingPlans/>
  <BusinessGrowthBanner/>
    </>
  )
}

export default PricingPage