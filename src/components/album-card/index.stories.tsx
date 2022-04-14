import { Meta, Story } from '@storybook/react';

import { AlbumCard, AlbumCardProps } from '.';

const meta: Meta = {
  component: AlbumCard,
  title: 'Components/AlbumCard',
  argTypes: {
    albumName: {
        description: "Name of album",
    },
    albumLink: {
        description: "Uri to album details",
    },
    albumArt: {
        description: "Uri to album art",
    },
    artistName: {
        description: "Name of artist",
    },
    artistLink: {
        description: "Uri to artist details"
    }
  }
};

export default meta;

const Template: Story<AlbumCardProps> = args => <AlbumCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  albumName: "INVU",
  albumLink: "",
  albumArt: "https://74.110.145.233/coverArt.view?id=64112&auth=103378171",
  artistName: "Taeyeon",
  artistLink: ""
};