import React from "react"
import ContentLoader from "react-content-loader"

const CircleMobileMyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={343}
        height={537}
        viewBox="0 0 343 537"
        backgroundColor="#000000"
        foregroundColor="#171717"
        backgroundOpacity="0.5"
        {...props}
    >
        <rect x="0" y="0" rx="8" ry="8" width="343" height="537" />
    </ContentLoader>
)

export default CircleMobileMyLoader