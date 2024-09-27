"use client";
import {
  Card,
  CardBody,
  Button,
  Avatar,
  CardHeader,
  Spacer,
  Chip,
  ScrollShadow,
  CardFooter,
} from "@nextui-org/react";
import {
  InfoCircleOutlined,
  ProjectOutlined,
  HourglassOutlined,
  ContactsOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";

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
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-start mt-[4rem]">
        <Card className="bg-transparent w-[600px] mt-6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny text-primary">Hi, my name is</p>
            <h4 className="font-bold text-default-500 text-4xl">
              <Typewriter
                words={["Gowri Shankar Badugu."]}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </h4>
            <div className="flex">
              <h4 className="font-bold text-2xl text-primary">
                Full Stack Developer!
              </h4>
            </div>
            <p className="text-default-500 mt-4">
              Crafting seamless experiences, flawless code, and pure
            </p>
            <p className="text-default-500">
              engagement - the essence of a developer!
            </p>
          </CardHeader>
          <CardBody className=""></CardBody>
        </Card>
        <ScrollShadow
          hideScrollBar
          className="flex flex-col text-justify py-8 h-[800px] w-[600px] mr-2 gap-10 overflow-auto"
        >
          <div>
            <p className="text-default-500">
              I am a seasoned{" "}
              <span className="text-primary">Full Stack Developer</span> with a
              diverse skill set spanning{" "}
              <span className="text-primary">back-end</span> development,{" "}
              <span className="text-primary">front-end</span> design, system
              architecture, and <span className="text-primary">deployment</span>
              . My journey began with a Master of Science in Data Science from
              Indiana University Bloomington, where I developed a strong
              analytical foundation and technical expertise. This, combined with
              a Bachelor's degree in Electronics and Communication Engineering
              from V.R. Siddhartha Engineering College, has equipped me with a
              deep understanding of both software and hardware, allowing me to
              create comprehensive and effective solutions.
            </p>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <p className="text-default-500">
              In my current role as a Full Stack Developer, I have successfully
              tackled a wide range of challenges, from designing scalable system
              architectures to optimizing back-end processes and enhancing
              front-end user experiences. I have led initiatives that increased
              system scalability by 80% through efficient API development and{" "}
              <span className="text-primary">microservices</span> integration,
              improved deployment processes using{" "}
              <span className="text-primary">Azure CI/CD</span> pipelines, and
              optimized database performance to ensure reliability and speed. My
              work also includes crafting intuitive and responsive front-end
              interfaces that significantly boost user engagement and
              satisfaction. Whether it's back-end optimization, front-end
              design, or system deployment, I am committed to delivering
              high-quality, impactful solutions across the full{" "}
              <span className="text-primary">
                Software Development Life Cycle
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col">
            <Card className="bg-transparent text-default-500 p-4 hover:bg-slate-900 hover:bg-opacity-60 group cursor-pointer">
              <CardBody className="p-0 text-sm">
                <div className="flex justify-between gap-10 w-full">
                  <p>06/2024 - Present</p>
                  <div className="flex flex-col gap-4">
                    <p className="group-hover:text-[#3EB489] transition-colors duration-200">
                      Software Engineer, Pringle Robotics Inc.
                    </p>
                    <p className="max-w-sm text-justify">
                      Product Owner of Pringle FMS, leading system design and
                      development through Agile methodology. Contributed to the
                      development of Pringle Auth for SSO, and collaborated with
                      cross-functional teams, including developers, UX
                      designers, and customers, to implement user-friendly and
                      accessible web applications.
                    </p>
                    <div className="flex gap-2">
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        System Design
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Back-End
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Front-End
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        DBMS
                      </Chip>
                    </div>
                    <div className="flex gap-2">
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        REST
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Deployment
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        GIT
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Testing
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Docker
                      </Chip>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-transparent text-default-500 p-4 hover:bg-slate-900 hover:bg-opacity-60 group cursor-pointer">
              <CardBody className="p-0 text-sm">
                <div className="flex justify-between gap-10 w-full">
                  <p>06/2024 - Present</p>
                  <div className="flex flex-col gap-4">
                    <p className="group-hover:text-[#3EB489] transition-colors duration-200">
                      Software Engineer, Pringle Robotics
                    </p>
                    <p className="max-w-sm text-justify">
                      Product Owner of Pringle FMS, leading system design and
                      development through Agile methodology. Contributed to the
                      development of Pringle Auth for SSO, and collaborated with
                      cross-functional teams, including developers, UX
                      designers, and customers, to implement user-friendly and
                      accessible web applications.
                    </p>
                    <div className="flex gap-2">
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        System Design
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Back-End
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Front-End
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        DBMS
                      </Chip>
                    </div>
                    <div className="flex gap-2">
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Deployment
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        GIT
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Testing
                      </Chip>
                      <Chip
                        className="text-tiny"
                        color="primary"
                        variant="flat"
                      >
                        Docker
                      </Chip>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}
