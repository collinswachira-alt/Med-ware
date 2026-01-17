/**
 * Markdown Content Loader
 * Fetches markdown files from the public services directory
 */

export interface ServiceMetadata {
  title: string;
  slug: string;
  summary: string;
  featuredImage: string;
}

/**
 * Load markdown content from a file
 */
export async function loadMarkdownContent(slug: string): Promise<string> {
  try {
    const response = await fetch(`/services/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load service: ${slug}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown for ${slug}:`, error);
    return '';
  }
}

/**
 * Extract first heading from markdown content
 */
export function extractTitleFromMarkdown(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled Service';
}

/**
 * Extract summary (first paragraph after first heading)
 */
export function extractSummaryFromMarkdown(markdown: string): string {
  const lines = markdown.split('\n');
  let afterHeading = false;
  
  for (const line of lines) {
    if (line.trim().startsWith('#')) {
      afterHeading = true;
      continue;
    }
    if (afterHeading && line.trim() && !line.trim().startsWith('#')) {
      // Remove markdown formatting
      return line
        .trim()
        .replace(/[*_`\[\]()]/g, '') // Remove markdown chars
        .substring(0, 150) + '...'; // First 150 chars
    }
  }
  
  return 'Comprehensive healthcare service at Mimosa Cottage Hospital';
}
