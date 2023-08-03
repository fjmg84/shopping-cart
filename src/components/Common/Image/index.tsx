interface PropImage {
  src?: string;
  alt: string;
  className?: string;
}

function Image({ src, alt, className }: PropImage) {
  return (
    <picture className={className}>
      <img src={src} alt={alt} />
    </picture>
  );
}

export default Image;
