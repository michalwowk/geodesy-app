import { ProjectProps } from "componets/Task";

export const BoardColumnsData = [
  {
    id: "column-1",
    title: "To do",
    projectsOrder: ["11", "12", "13", "14"],
  },
  {
    id: "column-2",
    title: "In progress",
    projectsOrder: ["21", "22", "23", "24"],
  },
];

export const Projects = [
  { id: "11", content: "Take out the garbage" },
  { id: "12", content: "Walk out the dog" },
  { id: "13", content: "Do the shopping list" },
  { id: "14", content: "Cook a breakfast" },
  { id: "21", content: "Watch my favorite show" },
  { id: "22", content: "Charge my phone" },
  { id: "23", content: "Cook dinner" },
  { id: "24", content: "Play some video games" },
];

export const BoardData = [
  {
    id: "column-1",
    title: "To do",
    projects: [
      { id: "11", content: "Take out the garbage" },
      { id: "12", content: "Walk out the dog" },
      { id: "13", content: "Do the shopping list" },
      { id: "14", content: "Cook a breakfast" },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    projects: [
      { id: "21", content: "Watch my favorite show" },
      { id: "22", content: "Charge my phone" },
      { id: "23", content: "Cook dinner" },
      { id: "24", content: "Play some video games" },
    ],
  },
];
//TODO: Obgadać to z Kubą czy własnie o taki coś mu chodziło gdy mówił o DTO oraz DO. Z tego co czytałem zazwyczaj ma to sens przy pracy
//      z danymi z API, tutaj póki co zakładam, że to jest moje API.

// Miejsce tych funckji jest przypadkowe, zastanówmy się razem gdzi to powinno się znajdować. Moim zdaniem może być to BoardDataContext lub
// folder API i plik Mappers
const findProjectById = (id: string) => {
  return Projects.find((project) => project.id === id);
};

export const mapColumnsDataToBoardData = () => {
  const mappedBoardData = BoardColumnsData.map(
    ({ id, title, projectsOrder }) => {
      const projects = projectsOrder.map((projectId) =>
        findProjectById(projectId)
      );
      const newColumns = {
        id,
        title,
        projects,
      };

      return newColumns;
    }
  );

  return mappedBoardData;
};
