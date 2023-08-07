import styles from "./InputNumber.module.scss";
import React, { Key, useEffect, useState } from "react";
import classNames from "classnames";
import { InputNumber as InputNumberAntd, Select } from "antd";

const cx = classNames.bind(styles);
const { Option } = Select;
type InputNumberProps = {
    shapeRound?: boolean;
    [key: string]: any;
};
const InputNumber = (InputNumberProps: InputNumberProps) => {
    const [prop, setProp] = useState(InputNumberProps);
    const addon = (type: string, key: string) => {
        return prop.defaultAddon && prop.defaultAddon[type][key]
            ? prop.defaultAddon[type][key]
            : type;
    };
    const defaultVal =
        prop.addonAfter &&
            prop.addonAfter.length > 0 &&
            prop.addonBefore &&
            prop.addonBefore.length > 0
            ? {
                value: undefined,
                [addon("addonAfter", "key")]: addon("addonAfter", "value")
                    ? addon("addonAfter", "value")
                    : undefined,
                [addon("addonBefore", "key")]: addon("addonBefore", "value")
                    ? addon("addonBefore", "value")
                    : undefined,
            }
            : prop.addonAfter && prop.addonAfter.length > 0
                ? {
                    value: undefined,
                    [addon("addonAfter", "key")]: addon("addonAfter", "value")
                        ? addon("addonAfter", "value")
                        : undefined,
                }
                : prop.addonBefore && prop.addonBefore.length > 0
                    ? {
                        value: undefined,
                        [addon("addonBefore", "key")]: addon("addonBefore", "value")
                            ? addon("addonBefore", "value")
                            : undefined,
                    }
                    : "";

    const [inputNumber, setInputNumber] = useState<any>(
        prop.defaultValue ? prop.defaultValue : defaultVal
    );

    const setForm = (key: string, value: any) => {
        prop.onChange && prop.onChange({ ...inputNumber, [key]: value });
        return setInputNumber((oldValues: any) => ({
            ...oldValues,
            [key]: value,
        }));
    };

    // handle change addonAfter
    const handleChangeAfter = (type: string, value: string) => {
        setForm(addon(type, "key"), value);
    };

    //handle Change inputNumber
    const handleChangeInputNumber = (value: number | null) => {
        if (
            (prop.addonAfter && prop.addonAfter.length > 0) ||
            (prop.addonBefore && prop.addonBefore.length > 0)
        ) {
            setForm("value", value);
        } else {
            setInputNumber(value);
            prop.onChange && prop.onChange(value);
        }
    };

    useEffect(() => {
        setProp(InputNumberProps);
    }, [InputNumberProps]);

    useEffect(() => {
        setInputNumber(prop.value ? prop.value : defaultVal);
    }, [prop.value]);

    //render addonAfter
    const renderSelectAfter = (type: string, option?: any) => {
        return option && option.length > 0 ? (
            <Select
                onChange={(value: any) => {
                    handleChangeAfter(type, value);
                }}
                defaultValue={
                    inputNumber[
                    prop.defaultAddon && prop.defaultAddon[type]?.key
                        ? prop.defaultAddon[type].key
                        : type
                    ]
                }
                value={
                    inputNumber[
                    prop.defaultAddon && prop.defaultAddon[type]?.key
                        ? prop.defaultAddon[type].key
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
            prop.option
        );
    }; 

    //main render
    return (
        <InputNumberAntd
            {...prop}
            addonBefore={renderSelectAfter("addonBefore", prop.addonBefore)}
            addonAfter={renderSelectAfter("addonAfter", prop.addonAfter)}
            className={[
                styles.InputNumber,
                (prop.shapeRound == undefined || prop.shapeRound) && styles.shapeRound,
                (prop.shapeRound == undefined || prop.shapeRound) &&
                !prop.prefix &&
                !prop.suffix &&
                styles.shapeRoundPrefix,
                prop.className,
            ].join(" ")}
            onChange={handleChangeInputNumber}
            value={
                (prop.addonAfter && prop.addonAfter.length > 0) ||
                    (prop.addonBefore && prop.addonBefore.length > 0)
                    ? inputNumber.value
                    : inputNumber
            }
            defaultValue={
                (prop.addonAfter && prop.addonAfter.length > 0) ||
                    (prop.addonBefore && prop.addonBefore.length > 0)
                    ? inputNumber.value
                    : inputNumber
            }
        />
    );
}

export default InputNumber