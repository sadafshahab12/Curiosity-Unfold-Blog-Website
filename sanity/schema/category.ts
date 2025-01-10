import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";
import ExternalLinkRenderer from "../../sanityComp/ExternalLink";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

export const categories = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "postCategory",
      title: "Post Category",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "heading" },
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Post Description",
    }),
    defineField({
      name: "categoryImage",
      type: "image",
      title: "Category Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "authorImage", 
      type: "image",
      title: "Author Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "releaseDate",
      type: "date",
      title: "Release Date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    }),
    defineField({
      name: "launchedAt",
      type: "datetime",
      title: "Launched At",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 1,
      },
    }),
    defineField({
      name: "blogContent",
      title: "Blog Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Highlight", value: "highlight", icon: () => "H" },
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Quote", value: "blockquote", icon: () => "Q" },
            ],
            
            annotations: [
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
                components: {
                  annotation: ExternalLinkRenderer,
                },
              },
            ],
          },
          
        },
        {
          title: "Image",
          type: "image",
          name : "image",
          options: {
            hotspot: true,
            sources: [unsplashAssetSource],
          },
        },
        
        
      ],
    }),
  ],
});
