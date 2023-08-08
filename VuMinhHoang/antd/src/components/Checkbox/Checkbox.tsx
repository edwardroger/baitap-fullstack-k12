import React, { useState, useEffect, useRef, Key, ReactNode } from "react";
import { Checkbox as CheckboxAntd, Row, Col, Input, Divider } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import styles from "./Checkbox.module.scss";
import classNames from "classnames";

export type CheckboxProps = {
  title?: ReactNode;
  type?: "horizontal" | "vertical"; // default horizontal
  defaultValue?: any[];
  value?: any[];
  onChangeOptions?: (list: any[], option: any, remove?: boolean) => void;
  className?: string;
  [key: string]: any;
};

const initValueCheckBox = (checkbox: any, defaultValue?: any) => {
  var check: any = [];
  defaultValue &&
    defaultValue.map((item: any) => {
      check.push(
        checkbox.find(
          (key: any) =>
            (item.value ? item.value : item.label ? item.label : item) ==
            (key.value ? key.value : key.label ? key.label : key)
        )
      );
    });
  return check;
};

const Checkbox = (CheckboxProps: CheckboxProps) => {
  const cx = classNames.bind(styles);
  //define constants
  const [props, setProps] = useState(CheckboxProps);
  const [checkbox, setCheckbox] = useState<any>(props.options);
  const [checkList, setCheckList] = useState(
    initValueCheckBox(checkbox, props.defaultValue)
  );
  //function to create

  //function to handle actions
  const onChange = (checkedValues: CheckboxValueType[], option: any) => {
    props.onChange &&
      props.onChange(
        checkedValues
          ? [...checkList, option]
          : checkList.filter((element: any) => element != option)
      );

    checkedValues
      ? setCheckList([...checkList, option])
      : setCheckList(checkList.filter((element: any) => element != option));
  };
  //function to hook
  useEffect(() => {
    setProps(CheckboxProps);
  }, [CheckboxProps]);
  useEffect(() => {
    setCheckbox(props.options);
    setCheckList(
      initValueCheckBox(
        props.options,
        props.value ? props.value : props.defaultValue
      )
    );
  }, [props.options]);

  useEffect(() => {
    setCheckList(initValueCheckBox(checkbox, props.value));
  }, [props.value]);
  //function to render
  const renderCheckbox = (option?: any) => {
    return (
      <Row
        className={cx([
          props.type && styles[props.type],
          props.className && props.className,
        ])}
      >
        {option &&
          option.length > 0 &&
          option.map((item: any, key: Key) => {
            return (
              <Row
                key={key}
                justify="space-between"
                className={styles.WarpCheckbox}
              >
                <Col className={cx(styles.CheckboxCol)}>
                  <CheckboxAntd
                    onChange={(value: any) => {
                      onChange(value.target.checked, item);
                    }}
                    checked={
                      checkList &&
                      checkList.length > 0 &&
                      checkList.find((el: any) => el == item)
                        ? true
                        : false
                    }
                    disabled={item.disabled}
                  >
                    <span className={cx(styles.Check)}>
                      {item.label ? item.label : item.value ? item.value : item}
                    </span>
                  </CheckboxAntd>
                </Col>
              </Row>
            );
          })}
      </Row>
    );
  };

  //main render
  return <Col className={cx(styles.Checkbox)}>{renderCheckbox(checkbox)}</Col>;
};

export default Checkbox;
