import "../../pages/post/post.scss";

interface PostMeta {
  title: string;
  subtitle: string;
  meta: string[];
  introNote?: {
    label: string;
    body: string;
  };
}

interface PostTemplateProps {
  post: PostMeta;
  children: React.ReactNode;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ post, children }) => {
  return (
    <article className="post-page">
      <header className="post-hero">
        <h1>{post.title}</h1>
        <p className="post-subtitle">{post.subtitle}</p>

        <div className="post-meta">
          {post.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>

      <section className="post-layout">
        {post.introNote ? (
          <div className="post-intro-notes">
            <div className="post-note">
              <p className="note-label">{post.introNote.label}</p>
              <p>{post.introNote.body}</p>
            </div>
          </div>
        ) : null}

        <div className="post-content">{children}</div>
      </section>
    </article>
  );
};

export default PostTemplate;
export type { PostMeta };
