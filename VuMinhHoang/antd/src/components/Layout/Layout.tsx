import { Layout as AntLayout } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Header from "./Header";
export interface LayoutProps {
    children: ReactNode;
}
const { Content } = AntLayout;

const Layout = (LayoutProps: LayoutProps) => {
    //define constants
    return (
        <div>Layout</div>
    )
}

export default Layout