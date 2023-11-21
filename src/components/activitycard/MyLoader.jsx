import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={343}
        height={856}
        viewBox="0 0 343 856"
        backgroundColor="#000000"
        foregroundColor="#2e2e2e"
        {...props}
    >
        <rect x="14" y="29" rx="38" ry="38" width="316" height="799" />
    </ContentLoader>
)

export default MyLoader