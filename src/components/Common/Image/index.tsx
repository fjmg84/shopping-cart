interface PropImage {
  src?: string;
  alt: string;
  className?: string;
}

function Image({ src, alt, className }: PropImage) {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
}

export default Image;
