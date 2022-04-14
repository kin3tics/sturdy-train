import { Meta, Story } from '@storybook/react';

import { ArtistCard, ArtistCardProps } from '.';

const meta: Meta = {
  component: ArtistCard,
  title: 'Components/ArtistCard',
  argTypes: {
    artistName: {
        description: "Name of artist",
    },
    artistLink: {
        description: "Uri to artist details"
    },
    artistArt: {
      description: "Uri to artist art",
    },
  }
};

export default meta;

const Template: Story<ArtistCardProps> = args => <ArtistCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  artistName: "Taeyeon",
  artistLink: "",
  artistArt: "https://74.110.145.233/coverArt.view?id=64112&auth=103378171",
};