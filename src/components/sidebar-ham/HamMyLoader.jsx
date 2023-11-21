import React from "react"
import ContentLoader from "react-content-loader"

const HamMyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={222}
        height={72}
        viewBox="0 0 222 72"
        backgroundColor="#000000"
        foregroundColor="#171717"
        backgroundOpacity="0.5"
        {...props}
    >
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <rect x="122" y="13" rx="9" ry="9" width="84" height="47" />
        <circle cx="87" cy="38" r="13" />
        <rect x="24" y="28" rx="4" ry="4" width="29" height="22" />
    </ContentLoader>
)

export default HamMyLoader