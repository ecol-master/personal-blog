import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/wrapper/layout.tsx";
import Home from "./pages/home/home.tsx";
import Blog from "./pages/blog/blog.tsx";
import Contacts from "./pages/contacts/contacts.tsx";
import VaraEthPost, { post as varaEthPost } from "./posts/mdx/vara-eth.mdx";
import PostTemplate from "./components/post/post-template.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/blog/vara-eth"
          element={
            <PostTemplate post={varaEthPost}>
              <VaraEthPost />
            </PostTemplate>
          }
        />
      </Routes>
    </Layout>
  </BrowserRouter>
);
