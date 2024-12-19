export default {
  name: 'programContent',
  title: 'Program Content',
  type: 'document',
  icon: () => '📚',
  fields: [
    {
      name: 'name',
      title: 'Program Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
