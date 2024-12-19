export default {
  name: 'coach',
  title: 'Coach',
  type: 'document',
  icon: () => '🏋️‍♂️',
  fields: [
    {
      name: 'name',
      title: 'Coach Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'string',
    },
  ],
}
