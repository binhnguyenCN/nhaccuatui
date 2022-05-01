import React from 'react';

import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {},
};

const Template = (args) => <Header {...args} />;

export const Hello = Template.bind({});
Hello.args = { title: 'Hello' };
