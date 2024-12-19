export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: () => '🦶',
  fields: [
    {
      name: 'contact',
      type: 'reference',
      to: [{type: 'contact'}],
    },
  ],
}
