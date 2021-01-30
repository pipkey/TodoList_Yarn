import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/react/types-6-0";
import {AddItemFormPropsType} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";

export default {
    title: "Example/EditableSpan",
    component: EditableSpan,
    // args: {
    //     value:{
    //         defaultValue: "HTML",
    //         description: "start value"
    //     },
    //     onChange: {
    //         description: "change value"
    //     }
    //
    // },
} as Meta;

const OnChangeCallback = action("change value");

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;
const bargs = {
    onChange: OnChangeCallback,
    value: action("value")
};
export const EditableSpanExperement = Template.bind({});
EditableSpanExperement.args = {
    ...bargs,
    value: "HTML"
};

