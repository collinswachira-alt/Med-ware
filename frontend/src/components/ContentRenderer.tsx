import React, { useMemo } from 'react';
import { parseMarkdown, renderParsedMarkdown } from '../utils/markdownParser';

interface ContentRendererProps {
  content: string;
}

/**
 * ContentRenderer Component
 * 
 * Renders markdown content with support for:
 * - Headings (# ## ###)
 * - Paragraphs
 * - Lists (ordered and unordered)
 * - Bold, italic, inline code
 * - Links
 * - Images with captions
 * - Code blocks
 * - Blockquotes
 * - Horizontal rules
 * 
 * All markdown syntax is properly parsed and rendered without
 * displaying raw symbols to the end user.
 */
export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  // Parse markdown once and memoize to avoid re-parsing on every render
  const renderedContent = useMemo(() => {
    const blocks = parseMarkdown(content);
    return renderParsedMarkdown(blocks);
  }, [content]);

  return (
    <div className="prose prose-lg max-w-none space-y-4">
      {renderedContent}
    </div>
  );
};
