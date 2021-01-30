import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/react/types-6-0";

import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../todo/Task";

export default {
    title: "Example/Task",
    component: Task,
    // args: {
    //     removeTaskCallBack : action("remove button"),
    //     changeTaskTitleCallBack : action("change title"),
    //     changeStatusCallBack :action("change status")
    // }
}as Meta;

const removeTaskCallBack = action("remove button");
const changeTaskTitleCallBack = action("change title");
const changeStatusCallBack = action("change status");

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

const bargs = {
    removeTask: removeTaskCallBack,
    changeTaskTitle: changeTaskTitleCallBack,
    changeStatus: changeStatusCallBack
};

export const TaskIsDoneExperement = Template.bind({});
TaskIsDoneExperement.args = {
    ...bargs,
    t: {id: "1",title: "JS", isDone: true},
    todolistId: "todolistId1"
};

export const TaskIsNotDoneExperement = Template.bind({});
TaskIsNotDoneExperement.args = {
     ...bargs,
    t: {id: "1",title: "JS", isDone: false},
    todolistId: "todolistId1"
};