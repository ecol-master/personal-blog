import "./blog.scss";
import { Link } from "react-router";

interface PostPreviewProps {
  title: string;
  link: string;
  summary: string;
  tags: Array<string>;
}

const PostPreview: React.FC<PostPreviewProps> = ({ title, link, summary, tags }) => {
  return (
    <>
      <div className="post-preview-content">
        <h2 className="post-title">
          <Link to={link}>{title}</Link>
        </h2>
        <div className="post-preview-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
        <p>{summary}</p>
      </div>
    </>
  );
};

const Blog: React.FC = () => {
  return (
    <>
      <div className="blog-description">
        <p>I wrote these posts with love ❤️ and with purpose to share my knowledge with World.</p>
      </div>

      <ul>
        <li>
          <PostPreview
            title="Vara eth"
            link="/blog/vara-eth"
            summary="How Vara.eth scale Ethereum and what is the puspose."
            tags={["blockchain", "ethereum", "gear"]}
          />
          <PostPreview
            title="Dynamic Hedging"
            link="/blog/dynamic-hedging"
            summary="Nasim Taleb's book about hedging strategies"
            tags={["finance", "hedging"]}
          />
        </li>
      </ul>
    </>
  );
};

export default Blog;
