import React, { Key, useEffect, useState } from 'react';
import styles from "./Input.module.scss";
import { Input as InputAntd, Select, } from "antd";
import classNames from "classnames";

export type InputProps = {
    shapRound?: boolean;
    [key: string]: any;
}
const cx = classNames.bind(styles);
const { Option } = Select;
const Input = (InputProps: InputProps) => {
    //define constants 
    const [props, setProps] = useState(InputProps);
    const addon = (type: string, key: string) => {
        return props.defaultAddon && props.defaultAddon[type][key]
            ? props.defaultAddon[type][key]
            : type;
    };
    const defaultVal =
        props.addonAfter &&
            props.addonAfter.length > 0 &&
            props.addonBefore &&
            props.addonBefore.length > 0
            ? {
                value: undefined,
                [addon("addonAfter", "key")]: addon("addonAfter", "value")
                    ? addon("addonAfter", "value")
                    : undefined,
                [addon("addonBefore", "key")]: addon("addonBefore", "value")
                    ? addon("addonBefore", "value")
                    : undefined,
            }
            : props.addonAfter && props.addonAfter.length > 0
                ? {
                    value: undefined,
                    [addon("addonAfter", "key")]: addon("addonAfter", "value")
                        ? addon("addonAfter", "value")
                        : undefined,
                }
                : props.addonBefore && props.addonBefore.length > 0
                    ? {
                        value: undefined,
                        [addon("addonBefore", "key")]: addon("addonBefore", "value")
                            ? addon("addonBefore", "value")
                            : undefined,
                    }
                    : "";
    const [input, setInput] = useState<any>(
        props.defaultValue ? props.defaultValue : defaultVal
    );
    //function to create

    //function to handle actions
    const setForm = (key: string, value: any) => {
        props.onChange && props.onChange({ ...input, [key]: value });
        return setInput((oldValues: any) => ({
            ...oldValues,
            [key]: value,
        }));
    };

    const handleChangeAfter = (type: string, value: string) => {
        setForm(addon(type, "key"), value);
    };

    const handleChangeInput = (e: any) => {
        if (
            (props.addonAfter && props.addonAfter.length > 0) ||
            (props.addonBefore && props.addonBefore.length > 0)
        ) {
            setForm("value", e.target.value);
        } else {
            setInput(e.target.value);
            props.onChange && props.onChange(e.target.value);
        }
    };

    //function to hook
    useEffect(() => {
        setProps(InputProps);
    }, [InputProps]);

    useEffect(() => {
        setInput(props.value ? props.value : defaultVal);
    }, [props.value]);
    //function to render
    const renderSelectAfter = (type: string, option?: any) => {
        return option && option.length > 0 ? (
            <Select
                onChange={(e) => {
                    handleChangeAfter(type, e);
                }}
                className={cx(type == "before" && styles.before)}
                defaultValue={
                    input[
                    props.defaultAddon && props.defaultAddon[type]?.key
                        ? props.defaultAddon[type].key
                        : type
                    ]
                }
            >
                {option.map((item: any, key: Key) => {
                    return (
                        <Option value={item.value} key={key}>
                            {item.label}
                        </Option>
                    );
                })}
            </Select>
        ) : (
            props.option
        );
    };
    //main render
    return (
        <InputAntd {...props}
            addonBefore={renderSelectAfter("addonBefore", props.addonBefore)}
            addonAfter={renderSelectAfter("addonAfter", props.addonAfter)}
            className={cx(
                (props.shapeRound == undefined || props.shapeRound) && styles.shapeRound,
                (props.shapeRound == undefined || props.shapeRound) &&
                !props.prefix &&
                !props.suffix &&
                styles.shapeRoundPrefix,
                props.className
            )}
            // allowClear={true}
            onChange={handleChangeInput}
            value={
                (props.addonAfter && props.addonAfter.length > 0) ||
                    (props.addonBefore && props.addonBefore.length > 0)
                    ? input.value
                    : input
            }
            defaultValue={
                (props.addonAfter && props.addonAfter.length > 0) ||
                    (props.addonBefore && props.addonBefore.length > 0)
                    ? input.value
                    : input
            } />
    )
}

export default Input 