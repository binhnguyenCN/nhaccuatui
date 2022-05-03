import React from 'react';

import Footer from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {},
};

const Template = (args) => <Footer {...args} />;

export const Temp = Template.bind({});
Temp.args = { title: 'Hello' };
