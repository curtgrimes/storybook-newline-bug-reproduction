import type { Meta, StoryObj } from "@storybook/vue3";

import MyTextarea from "./MyTextarea.vue";

const meta = {
  title: "Example/MyTextarea",
  component: MyTextarea,
  args: {
    modelValue: "",
  },
  render: (args) => ({
    components: {
      MyTextarea,
    },
    setup: () => ({
      args,
    }),
    template: `
      <div>
        <MyTextarea v-bind="args" v-model="args.modelValue" />
        <br/>
        The value is: {{ args.modelValue }}
      </div>
    `,
  }),
  tags: ["autodocs"],
} satisfies Meta<typeof MyTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "My Textarea Test",
  },
};
