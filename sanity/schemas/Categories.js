export default {
    name: 'Categories',
    type: 'document',
    title: 'Categories',
    fields: [
        {
            name: 'category_name',
            type: 'string',
            title: 'Category Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'type',
            type: 'string',
            title: 'Veg Or Non-Veg',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image Of The Category',
            validation: (Rule) => Rule.required(),
        },
        // {
        //     name: 'foods',
        //     type: 'array',
        //     title: 'Foods',
        //     // of: [{type: "reference", to: [{type: "foods"}] }]
        // },

]
}