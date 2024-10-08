import ContentLayout from "../../layouts/ContentLayout";

const Contact = () => {
  return <div>Contact</div>;
};

Contact.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Contact;
