export default {
  name: 'page_block',
  title: 'Page Block',
  type: 'document',
  icon: () => '🧱',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'image_on_right',
      title: 'Image on Right',
      type: 'boolean',
    },
  ],
}
