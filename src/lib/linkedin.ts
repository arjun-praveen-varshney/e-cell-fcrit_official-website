// LinkedIn Posts from Sanity CMS
import { client } from "@/sanity/lib/client";
import {
  recentLinkedinPostsQuery,
  linkedinPostsQuery,
  featuredLinkedinPostsQuery,
  linkedinPostsByCategoryQuery,
} from "@/sanity/lib/linkedinQueries";

export interface LinkedInPost {
  _id: string;
  title: string;
  slug: any;
  excerpt?: string;
  content: any; // Rich text content (Portable Text)
  publishedAt: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  tags?: string[];
  featuredImage?: any;
  linkedinUrl?: string;
  category: string;
}

// LinkedIn Posts Service using Sanity CMS
export class LinkedInService {
  private static instance: LinkedInService;

  private constructor() {}

  static getInstance(): LinkedInService {
    if (!LinkedInService.instance) {
      LinkedInService.instance = new LinkedInService();
    }
    return LinkedInService.instance;
  }

  async getCompanyPosts(limit: number = 6): Promise<LinkedInPost[]> {
    try {
      // Fetch LinkedIn posts from Sanity CMS
      const posts = await client.fetch(
        limit === 6 ? recentLinkedinPostsQuery : linkedinPostsQuery
      );

      return posts.map((post: any) => ({
        _id: post._id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        publishedAt: post.publishedAt,
        engagement: post.engagement || { likes: 0, comments: 0, shares: 0 },
        tags: post.tags || [],
        featuredImage: post.featuredImage,
        linkedinUrl:
          post.linkedinUrl ||
          "https://www.linkedin.com/company/fcrit-entrepreneurship-cell/posts/",
        category: post.category,
      }));
    } catch (error) {
      console.error("Error fetching LinkedIn posts from Sanity:", error);
      return [];
    }
  }

  async getFeaturedPosts(): Promise<LinkedInPost[]> {
    try {
      const posts = await client.fetch(featuredLinkedinPostsQuery);

      return posts.map((post: any) => ({
        _id: post._id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        publishedAt: post.publishedAt,
        engagement: post.engagement || { likes: 0, comments: 0, shares: 0 },
        tags: post.tags || [],
        featuredImage: post.featuredImage,
        linkedinUrl:
          post.linkedinUrl ||
          "https://www.linkedin.com/company/fcrit-entrepreneurship-cell/posts/",
        category: post.category,
      }));
    } catch (error) {
      console.error("Error fetching featured LinkedIn posts:", error);
      return [];
    }
  }

  async getPostsByCategory(category: string): Promise<LinkedInPost[]> {
    try {
      const posts = await client.fetch(linkedinPostsByCategoryQuery, {
        category,
      });

      return posts.map((post: any) => ({
        _id: post._id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        publishedAt: post.publishedAt,
        engagement: post.engagement || { likes: 0, comments: 0, shares: 0 },
        tags: post.tags || [],
        featuredImage: post.featuredImage,
        linkedinUrl:
          post.linkedinUrl ||
          "https://www.linkedin.com/company/fcrit-entrepreneurship-cell/posts/",
        category: post.category,
      }));
    } catch (error) {
      console.error("Error fetching LinkedIn posts by category:", error);
      return [];
    }
  }
}
