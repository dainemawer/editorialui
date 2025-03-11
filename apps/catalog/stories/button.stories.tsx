import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Card
      {...props}
    >
      Im a card
    </Card>
  ),
  name: "Card",
  args: {
    title: "Card",
    href: "https://example.com",
  },
};
