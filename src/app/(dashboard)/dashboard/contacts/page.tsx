import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { TQuery } from "@/types/query.type";
import { getContacts } from "@/services/contacts";
import ContactTable from "./_components/ContactTable";

const ContactManagement = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { searchParams } = props;
  const page = await searchParams;
  const pageNumber = page.page ? parseInt(page.page) : 1;
  const query: TQuery[] = [
    {
      key: "page",
      value: pageNumber.toString(),
    },
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];
  const allContacts = await getContacts(query);

  console.log("All Contacts:", allContacts);

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Contact Management"
        slogan="Manage your contacts here"
      />

      <div>
        <ContactTable contacts={allContacts} />
      </div>
    </DashboardContainer>
  );
};

export default ContactManagement;
