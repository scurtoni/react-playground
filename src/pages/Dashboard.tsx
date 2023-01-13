import React from "react";

interface DashBoardProps {
  title?: string;
}

const DashboardPage = ({title}: DashBoardProps) => {
  return <div>This is my dashboard!! {title}</div>;
};

export default DashboardPage;
