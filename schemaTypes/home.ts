export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: () => '🏠',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [{type: 'program'}],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contact',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    },
  ],
}
