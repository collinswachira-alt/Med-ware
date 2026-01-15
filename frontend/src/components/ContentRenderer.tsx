import React from 'react';

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  // Simple markdown-like parser for safe content rendering
  const parseContent = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside my-4 space-y-2">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed === '') {
        flushList();
        elements.push(<div key={`space-${idx}`} className="my-2" />);
      } else if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${idx}`} className="text-4xl font-bold text-gray-900 my-6 mt-8">
            {trimmed.substring(2)}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${idx}`} className="text-3xl font-bold text-gray-800 my-5 mt-6">
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${idx}`} className="text-2xl font-semibold text-gray-700 my-4 mt-5">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.substring(2));
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushList();
        elements.push(
          <p key={`bold-${idx}`} className="font-semibold text-gray-800 my-3">
            {trimmed.substring(2, trimmed.length - 2)}
          </p>
        );
      } else {
        flushList();
        elements.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed my-3">
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  const parseInlineMarkdown = (text: string): React.ReactNode => {
    // Parse bold, italic, and links
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold text
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.substring(0, boldMatch.index));
        }
        parts.push(
          <strong key={`bold-${key++}`} className="font-semibold">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
        continue;
      }

      // Links
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch && linkMatch.index !== undefined) {
        if (linkMatch.index > 0) {
          parts.push(remaining.substring(0, linkMatch.index));
        }
        parts.push(
          <a
            key={`link-${key++}`}
            href={linkMatch[2]}
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.substring(linkMatch.index + linkMatch[0].length);
        continue;
      }

      // No more matches
      if (remaining.length > 0) {
        parts.push(remaining);
      }
      break;
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="prose max-w-none">
      {parseContent(content)}
    </div>
  );
};
