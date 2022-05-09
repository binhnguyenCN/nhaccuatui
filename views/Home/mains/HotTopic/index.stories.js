import React from 'react';
import { hotTopic } from '../../../../api/mockApi';

import HotTopic from './index';

export default {
  title: 'Pages/Home/main/HotTopic',
  component: HotTopic,
  parameters: { topics: hotTopic },
};
export const Template = () => <HotTopic topics={hotTopic} />;
