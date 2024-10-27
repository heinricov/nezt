import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ProjectType = "Mobile App" | "Desktop App" | "Website";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    description:
      "A feature-rich mobile app for online shopping with personalized recommendations.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Mobile App"
  },
  {
    id: 2,
    title: "Task Management Desktop App",
    description:
      "A powerful desktop application for managing tasks and improving productivity.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Desktop App"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my skills and projects.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Website"
  }
];

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Badge variant="secondary">{project.type}</Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
