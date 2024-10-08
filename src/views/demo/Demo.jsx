import ContentLayout from "../../layouts/ContentLayout";

const Demo = () => {
  return <div>demo</div>;
};

Demo.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Demo;
