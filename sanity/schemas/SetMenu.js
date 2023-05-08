export default {
    name: 'featuredRows',
    type: 'document',
    title: 'Featured Rows',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Featured Rows",
            validation: (Rule) => Rule.required(),
        },
    ]
}