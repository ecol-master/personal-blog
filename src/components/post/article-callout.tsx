interface ArticleCalloutProps {
  label: string;
  children: React.ReactNode;
}

const ArticleCallout: React.FC<ArticleCalloutProps> = ({ label, children }) => {
  return (
    <div className="post-callout">
      <p className="note-label">{label}</p>
      <p>{children}</p>
    </div>
  );
};

export default ArticleCallout;
