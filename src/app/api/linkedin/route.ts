import { NextRequest, NextResponse } from "next/server";
import { LinkedInService } from "@/lib/linkedin";

export async function GET() {
  try {
    const linkedInService = LinkedInService.getInstance();
    const posts = await linkedInService.getCompanyPosts();

    return NextResponse.json({
      success: true,
      posts,
      message: `Retrieved ${posts.length} LinkedIn posts from Sanity CMS`,
    });
  } catch (error) {
    console.error("LinkedIn API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch LinkedIn posts",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const linkedInService = LinkedInService.getInstance();
    const featuredPosts = await linkedInService.getFeaturedPosts();

    return NextResponse.json({
      success: true,
      featuredPosts,
      message: `Retrieved ${featuredPosts.length} featured LinkedIn posts`,
    });
  } catch (error) {
    console.error("LinkedIn featured posts error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch featured LinkedIn posts",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
