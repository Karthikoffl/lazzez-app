export default {
    name: 'Foods',
    type: 'document',
    title: 'Foods',
    fields: [
        {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'price',
        type: 'number',
        title: 'Price',
    },
    {
        name: 'category_name',
        type: 'crossDatasetReference',
        title: 'Category',
        dataset: 'category_name',
        // validation: (Rule) => Rule.required(),
        to: [
            { 
                type: 'category_name',
                preview: {
                    select: {
                      title: 'name',
                      media: 'image',
                    },
                  },
            }],
    },
    {
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: (Rule) => Rule.min(1).max(5).error("Please enter a number between 1 to 5"),
    },
    {
        name: 'short_description',
        type: 'string',
        title: 'Short Description',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image Of The Food',
        validation: (Rule) => Rule.required(),
    },
]
}