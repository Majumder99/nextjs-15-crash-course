import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <div>{login}</div>;
  }
  return (
    <>
      <div>
        <div>{children}</div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex-1">{notifications}</div>
        </div>
      </div>
    </>
  );
}
