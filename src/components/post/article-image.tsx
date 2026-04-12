interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ src, alt, caption }) => {
  return (
    <figure className="post-figure">
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default ArticleImage;
