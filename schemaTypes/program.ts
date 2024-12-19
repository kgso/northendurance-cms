export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: () => '📚',
  fields: [
    {
      name: 'name',
      title: 'Program Name',
      type: 'string',
    },
    {
      name: 'programs',
      title: 'Content Pieces',
      type: 'array',
      of: [{type: 'programContent'}],
    },
  ],
}
