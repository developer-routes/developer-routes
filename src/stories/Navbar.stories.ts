import { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/navbar/navbar";

const meta = {
    title : "Example/Navbar",
    component : Navbar,
    tags:['autodocs'],
    parameters:{
        layout:"centered"
    }
}satisfies Meta<typeof Navbar>

export default meta;
type Story = StoryObj<typeof meta>

export const Name:Story = {
    args : {
        title :"Iwin"
    }
}