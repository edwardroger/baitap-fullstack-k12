import React from 'react'
import { Layout, Col, Row, Menu } from "antd";
import styles from "./Header.module.scss";
const { Header: AntHeader } = Layout;
import classNames from "classnames";

export interface HeaderProps {
    menu: any;
}
const cx = classNames.bind(styles);
const Header = ({ menu }: HeaderProps) => {
    return (
        <AntHeader className={styles.HeaderLayout}>
            <Row justify="space-between">
                <Col span={12}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        items={menu.mainMenu}
                        className={styles.MenuHeaderLayout}
                    />
                </Col>
                <Col span={12} className={cx(styles.WarpMenuRight)}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        className={styles.MenuHeaderLayoutRight}
                        items={menu.userMenu}
                    />
                </Col>
            </Row>
        </AntHeader>
    );
};

export default Header