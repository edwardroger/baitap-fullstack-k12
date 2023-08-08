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
    const [prop, setProp] = useState(LayoutProps);
    const [topMenu, setTopMenu] = useState({
        mainMenu: [
            {
                label: "My Site",
                key: "mysite",
            },
            {
                label: "Explode",
                key: "explode",
            },
            {
                label: "Help",
                key: "help",
            },
        ],

    });
    return (
        <AntLayout className={styles.Layout}>
            <Header menu={topMenu} />
            <Content>{prop.children}</Content>
        </AntLayout>
    )
}

export default Layout