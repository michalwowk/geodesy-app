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
  { id: "11", title: "Take out the garbage" },
  { id: "12", title: "Walk out the dog" },
  { id: "13", title: "Do the shopping list" },
  { id: "14", title: "Cook a breakfast" },
  { id: "21", title: "Watch my favorite show" },
  { id: "22", title: "Charge my phone" },
  { id: "23", title: "Cook dinner" },
  { id: "24", title: "Play some video games" },
];

export const BoardData = [
  {
    id: "column-1",
    title: "To do",
    projects: [
      { id: "11", title: "Take out the garbage" },
      { id: "12", title: "Walk out the dog" },
      { id: "13", title: "Do the shopping list" },
      { id: "14", title: "Cook a breakfast" },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    projects: [
      { id: "21", title: "Watch my favorite show" },
      { id: "22", title: "Charge my phone" },
      { id: "23", title: "Cook dinner" },
      { id: "24", title: "Play some video games" },
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
