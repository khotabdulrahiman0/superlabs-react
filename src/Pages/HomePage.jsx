import React from 'react'
import HeroSection from '../Components/HeroSection'
import VideoInfoSection from '../Components/VideoInfoSection'
import HighlightBanner from '../Components/HighlightBanner'
import BusinessToolsSection from '../Components/BusinessToolsSection'
import SuccessStoriesSection from '../Components/SuccessStoriesSection'
import BusinessGrowthBanner from '../Components/BusinessGrowthBanner'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <VideoInfoSection/>
      <HighlightBanner/>
      <BusinessToolsSection/>
      <SuccessStoriesSection/>
      <BusinessGrowthBanner/>
    </>
  )
}

export default HomePage