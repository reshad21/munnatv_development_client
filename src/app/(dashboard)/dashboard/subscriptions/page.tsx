import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { TQuery } from "@/types/query.type";
import SubscriptionTable from "./_components/SubscriptionTable";
import { getSubscribers } from "@/services/subscription";
import ExportSubscriber from "./_components/ExportSubscriber";

const SubscriptionManagement = async (props: {
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
  const allSubscriptions = await getSubscribers(query);

  console.log("All Subscriptions:", allSubscriptions);

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Subscription Management"
        slogan="Manage your subscriptions here"
      />
      <div className="flex justify-end mb-4">
        <ExportSubscriber />
      </div>
      <div>
        <SubscriptionTable subscriptions={allSubscriptions.data} />
      </div>
    </DashboardContainer>
  );
};

export default SubscriptionManagement;
