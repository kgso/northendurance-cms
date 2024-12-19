export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'page_block'}],
    },
  ],
}
