interface Props {
  html: string;
}

export function BlogProse({ html }: Props) {
  return (
    <div
      className="blog-prose mx-auto max-w-3xl text-fg-muted"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
