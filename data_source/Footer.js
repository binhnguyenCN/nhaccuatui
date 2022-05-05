import { MailFilled, PhoneFilled, ProfileFilled } from '@ant-design/icons';
import React from 'react';

const FooterData = {
  contact: [
    {
      content:
        'Tầng 19, Tòa nhà The 678 Tower, Số 67 đường Hoàng Văn Thái, phường Tân Phú, quận 7, TP HCM.',
      title: 'address',
      link: 'https://goo.gl/maps/QLUWVMBJvYZuY7nx7',
      icon: <ProfileFilled />,
    },
    {
      content: 'support@nct.vn',
      title: 'email',
      link: 'mailto:support@nct.vn',
      icon: <MailFilled />,
    },
    {
      content: '(028) 3868 7979',
      title: 'phone',
      link: 'tel:02838687979',
      icon: <PhoneFilled />,
    },
  ],
  copyright: {
    content: '© NCT Corp. All rights reserved',
    title: 'copyright',
  },
};

export default FooterData;
