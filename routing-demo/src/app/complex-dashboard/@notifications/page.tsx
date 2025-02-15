import Card from "@/components/card";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <Card>
      <h1>Notifications</h1>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
