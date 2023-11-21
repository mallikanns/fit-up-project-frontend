import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={721}
        height={324}
        viewBox="0 0 721 324"
        backgroundColor="#000000"
        foregroundColor="#171717"
        backgroundOpacity="0.5"
        {...props}
    >
        <rect x="0" y="0" rx="8" ry="8" width="721" height="324" />
    </ContentLoader>
)

export default MyLoader