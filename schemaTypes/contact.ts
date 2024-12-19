export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: () => '📞',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'string',
    },
    {
      name: 'map',
      title: 'Map',
      type: 'string',
    },
  ],
}
