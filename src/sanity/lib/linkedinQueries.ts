import { groq } from "next-sanity";

// Query to get all LinkedIn posts
export const linkedinPostsQuery = groq`
  *[_type == "linkedinPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    engagement,
    tags,
    featuredImage,
    linkedinUrl,
    featured,
    category
  }
`;

// Query to get featured LinkedIn posts
export const featuredLinkedinPostsQuery = groq`
  *[_type == "linkedinPost" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    engagement,
    tags,
    featuredImage,
    linkedinUrl,
    category
  }
`;

// Query to get recent LinkedIn posts (last 6)
export const recentLinkedinPostsQuery = groq`
  *[_type == "linkedinPost"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    engagement,
    tags,
    featuredImage,
    linkedinUrl,
    category
  }
`;

// Query to get LinkedIn posts by category
export const linkedinPostsByCategoryQuery = groq`
  *[_type == "linkedinPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    engagement,
    tags,
    featuredImage,
    linkedinUrl,
    category
  }
`;

// Query to get single LinkedIn post by slug
export const linkedinPostBySlugQuery = groq`
  *[_type == "linkedinPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    engagement,
    tags,
    featuredImage,
    linkedinUrl,
    category
  }
`;
