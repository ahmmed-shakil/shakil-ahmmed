import ContentLayout from "../../layouts/ContentLayout";

const Blogs = () => {
  return <div>Blogs</div>;
};

Blogs.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Blogs;
