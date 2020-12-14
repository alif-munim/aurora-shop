import React from 'react';
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to Aurora Shop",
    description: "Internationally sourced, affordably priced",
    keywords: "Aurora, PPE, personal protective equipment, equipment, tools"
}

export default Meta
