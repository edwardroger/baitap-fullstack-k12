import React, { useState, useEffect, ReactNode } from 'react'
import { Layout as AntLayout } from 'antd'
import styles from "./Layout.module.scss";

const { Content } = AntLayout;

export interface LayoutProps {
    children: ReactNode
}
const Layout = (LayoutProps: LayoutProps) => {
    //define constants
    const [props, setProps] = useState(LayoutProps)
    //function to create

    //function to handle action

    //function to hook

    //function to render
    return (
        <div>Layout</div>
    )
}

export default Layout