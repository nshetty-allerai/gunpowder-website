import { createClient } from 'contentful';

// Create a Contentful client
const client = createClient({
  space: process.env.SPACE_ID, // Replace with your Contentful Space ID
  accessToken: process.env.ACCESS_TOKEN, // Replace with your Contentful Access Token
});

export async function fetchEntryBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'blog', // Replace with your Content Type ID
      'fields.slug': slug, // Filter by the slug field
      limit: 1, // Optional: Limit the result to 1 entry
    });

    if (response.items.length > 0) {
      return response.items[0];
    } else {
      console.log(`No entry found with slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching entry:', error);
    throw error;
  }
}


export function formatContentfulData(data) {
    if (!data || !data?.fields) {
      throw new Error("Invalid data structure");
    }
  
    const formattedData = {
      id: data?.sys?.id || null,
      title: data?.fields?.title || "",
      description: data?.fields?.description || "",
      author: data?.fields.authour || "",
      publishDate: data?.fields?.publishDate || "",
      type: data?.fields?.type || "",
      slug: data?.fields?.slug || "",
      shortDescription: data?.fields?.shortDescription || "",
      imageUrl: data?.fields?.image?.fields?.file?.url
        ? `https:${data?.fields?.image?.fields?.file?.url}`
        : null, // Handle cases where the image is missing
    };
  
    return formattedData;
  }

// Usage
// fetchEntryBySlug('your-desired-slug').then((entry) => {
//   if (entry) {
//     console.log('Fetched Entry:', entry);
//   }
// });
