import React from 'react';

/**
 * Advanced Markdown Parser
 * Supports:
 * - Headings (# ## ###)
 * - Paragraphs
 * - Lists (unordered and ordered)
 * - Bold and italic text
 * - Links
 * - Images with alt text
 * - Code blocks
 * - Horizontal rules
 */

export interface ParsedBlock {
  type:
    | 'heading'
    | 'paragraph'
    | 'list'
    | 'image'
    | 'code'
    | 'rule'
    | 'quote';
  level?: number; // For headings
  content?: React.ReactNode;
  items?: React.ReactNode[]; // For lists
  ordered?: boolean; // For lists
  src?: string; // For images
  alt?: string; // For images
  language?: string; // For code blocks
  code?: string; // For code blocks
}

/**
 * Parse inline markdown (bold, italic, links, etc.)
 */
function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold text **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.substring(0, boldMatch.index));
      }
      parts.push(
        React.createElement('strong', { key: `bold-${key++}`, className: 'font-bold' },
          parseInlineMarkdown(boldMatch[1])
        )
      );
      remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
      continue;
    }

    // Italic text *text* or _text_
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)|_([^_]+)_/);
    if (italicMatch && italicMatch.index !== undefined) {
      if (italicMatch.index > 0) {
        parts.push(remaining.substring(0, italicMatch.index));
      }
      const italicText = italicMatch[1] || italicMatch[2];
      parts.push(
        React.createElement('em', { key: `italic-${key++}`, className: 'italic' },
          parseInlineMarkdown(italicText)
        )
      );
      remaining = remaining.substring(italicMatch.index + italicMatch[0].length);
      continue;
    }

    // Links [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
    if (linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.substring(0, linkMatch.index));
      }
      parts.push(
        React.createElement('a', {
          key: `link-${key++}`,
          href: linkMatch[2],
          className: 'text-blue-600 hover:text-blue-800 underline',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
          linkMatch[1]
        )
      );
      remaining = remaining.substring(linkMatch.index + linkMatch[0].length);
      continue;
    }

    // Code `code`
    const codeMatch = remaining.match(/`([^`]+)`/);
    if (codeMatch && codeMatch.index !== undefined) {
      if (codeMatch.index > 0) {
        parts.push(remaining.substring(0, codeMatch.index));
      }
      parts.push(
        React.createElement('code', { key: `code-${key++}`, className: 'bg-gray-200 px-2 py-1 rounded font-mono text-sm' },
          codeMatch[1]
        )
      );
      remaining = remaining.substring(codeMatch.index + codeMatch[0].length);
      continue;
    }

    // No match, add remaining text
    parts.push(remaining);
    break;
  }

  return parts.length === 1 ? parts[0] : parts;
}

/**
 * Parse markdown text into structured blocks
 */
export function parseMarkdown(markdown: string): ParsedBlock[] {
  const lines = markdown.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        content: parseInlineMarkdown(headingMatch[2]),
      });
      i++;
      continue;
    }

    // Horizontal rule
    if (line.match(/^([-_*])\s*\1\s*\1/)) {
      blocks.push({ type: 'rule' });
      i++;
      continue;
    }

    // Block quotes
    if (line.startsWith('>')) {
      let quoteContent = line.substring(1).trim();
      i++;
      while (i < lines.length && lines[i].startsWith('>')) {
        quoteContent += ' ' + lines[i].substring(1).trim();
        i++;
      }
      blocks.push({
        type: 'quote',
        content: parseInlineMarkdown(quoteContent),
      });
      continue;
    }

    // Code blocks
    if (line.startsWith('```')) {
      const language = line.substring(3).trim() || 'plaintext';
      let code = '';
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code += (code ? '\n' : '') + lines[i];
        i++;
      }
      i++; // Skip closing ```
      blocks.push({
        type: 'code',
        language,
        code,
      });
      continue;
    }

    // Images
    const imageMatch = line.match(/^!\[(.+?)\]\((.+?)\)$/);
    if (imageMatch) {
      blocks.push({
        type: 'image',
        alt: imageMatch[1],
        src: imageMatch[2],
      });
      i++;
      continue;
    }

    // Lists
    if (line.match(/^[-*+]\s+/) || line.match(/^\d+\.\s+/)) {
      const ordered = line.match(/^\d+\.\s+/) !== null;
      const items: React.ReactNode[] = [];

      while (i < lines.length && lines[i].match(/^[-*+]\s+|^\d+\.\s+/)) {
        const match = lines[i].match(/^[-*+]\s+(.+)$|^\d+\.\s+(.+)$/);
        if (match) {
          items.push(parseInlineMarkdown(match[1] || match[2]));
        }
        i++;
      }

      blocks.push({
        type: 'list',
        ordered,
        items,
      });
      continue;
    }

    // Paragraphs
    let paragraph = line;
    i++;
    while (i < lines.length) {
      const nextLine = lines[i];
      if (
        nextLine === '' ||
        nextLine.match(/^#{1,6}\s/) ||
        nextLine.match(/^[-*+]\s/) ||
        nextLine.match(/^\d+\.\s/) ||
        nextLine.startsWith('```') ||
        nextLine.startsWith('!')
      ) {
        break;
      }
      paragraph += ' ' + nextLine;
      i++;
    }
    blocks.push({
      type: 'paragraph',
      content: parseInlineMarkdown(paragraph),
    });
  }

  return blocks;
}

/**
 * Render parsed markdown blocks to React components
 */
export function renderParsedMarkdown(blocks: ParsedBlock[]): React.ReactNode[] {
  return blocks.map((block, index) => {
    const key = `block-${index}`;

    switch (block.type) {
      case 'heading': {
        const headingClasses = {
          1: 'text-4xl font-bold text-gray-900 my-6 mt-8',
          2: 'text-3xl font-bold text-gray-800 my-5 mt-6',
          3: 'text-2xl font-semibold text-gray-700 my-4 mt-5',
          4: 'text-xl font-semibold text-gray-700 my-3 mt-4',
          5: 'text-lg font-semibold text-gray-600 my-2 mt-3',
          6: 'text-base font-semibold text-gray-600 my-2 mt-2',
        };
        const HeadingTag = `h${block.level}` as const;
        return React.createElement(
          HeadingTag as string,
          { key, className: headingClasses[block.level as keyof typeof headingClasses] },
          block.content
        );
      }

      case 'paragraph':
        return React.createElement(
          'p',
          { key, className: 'text-gray-700 leading-relaxed my-4' },
          block.content
        );

      case 'list': {
        if (block.ordered) {
          return React.createElement(
            'ol',
            { key, className: 'list-decimal list-inside my-4 space-y-2 ml-4' },
            block.items?.map((item, idx) =>
              React.createElement('li', { key: idx, className: 'text-gray-700' }, item)
            )
          );
        } else {
          return React.createElement(
            'ul',
            { key, className: 'list-disc list-inside my-4 space-y-2 ml-4' },
            block.items?.map((item, idx) =>
              React.createElement('li', { key: idx, className: 'text-gray-700' }, item)
            )
          );
        }
      }

      case 'image':
        return React.createElement(
          'figure',
          { key, className: 'my-6' },
          React.createElement('img', {
            src: block.src,
            alt: block.alt,
            className: 'w-full rounded-lg shadow-md max-h-96 object-cover',
          }),
          block.alt ?
            React.createElement(
              'figcaption',
              { className: 'text-sm text-gray-600 mt-2 text-center italic' },
              block.alt
            ) : null
        );

      case 'code':
        return React.createElement(
          'pre',
          { key, className: 'bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto' },
          React.createElement('code', { className: `language-${block.language}` }, block.code)
        );

      case 'rule':
        return React.createElement('hr', { key, className: 'my-6 border-gray-300' });

      case 'quote':
        return React.createElement(
          'blockquote',
          {
            key,
            className: 'border-l-4 border-blue-600 pl-4 py-2 my-4 text-gray-700 italic bg-blue-50',
          },
          block.content
        );

      default:
        return null;
    }
  });
}