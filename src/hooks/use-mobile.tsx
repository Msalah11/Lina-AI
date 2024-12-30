import * as React from "react"

const MOBILE_WIDTH_THRESHOLD = 768

export function useIsMobile() {
  const [isMobileView, setIsMobileView] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query to check if the viewport is smaller than the threshold
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_WIDTH_THRESHOLD - 1}px)`)

    // Function to handle media query changes and update the state
    const handleMediaQueryChange = () => {
      setIsMobileView(window.innerWidth < MOBILE_WIDTH_THRESHOLD)
    }

    // Attach the event listener to detect changes in viewport size
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Initialize the state based on the current viewport size
    setIsMobileView(window.innerWidth < MOBILE_WIDTH_THRESHOLD)

    // Clean up the event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }, [])

  // Return the boolean value indicating whether the viewport is mobile-sized or not
  return isMobileView ?? false
}
