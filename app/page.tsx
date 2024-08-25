import { Card, CardBody, Button, Avatar } from "@nextui-org/react";
import {
  InfoCircleOutlined,
  ProjectOutlined,
  HourglassOutlined,
  ContactsOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

export default function Home() {
  const buttonClasses =
    "text-white rounded-none data-[hover=true]:bg-gradient-to-t from-primary/30 to-[#000000] data-[hover=true]:border-b border-primary";

  const iconStyle = { fontSize: "14px", color: "#3EB489" };

  const buttons = [
    { label: "About", icon: <InfoCircleOutlined style={iconStyle} /> },
    { label: "Projects", icon: <ProjectOutlined style={iconStyle} /> },
    { label: "Experience", icon: <HourglassOutlined style={iconStyle} /> },
    { label: "Contact", icon: <ContactsOutlined style={iconStyle} /> },
    { label: "Resume", icon: <DownloadOutlined style={iconStyle} /> },
  ];

  return (
    <Card radius="none" shadow="none" className="bg-black">
      <CardBody>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Avatar name="BG" color="primary" />
            <p className="text-white mt-2">Gowri Shankar Badugu</p>
          </div>
          <div className="flex">
            {buttons.map((button) => (
              <Button
                key={button.label}
                variant="light"
                className={buttonClasses}
                startContent={button.icon}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
