import { createContext, useState, useContext } from "react";
import { initialData } from "utils/initialData";

//TODO: Nie jestem pewien czy to dobrze otypowałem

const ProjectsContext = createContext<ProjectContextProviderType | null>(null);

export const ProjectsProvider: React.FC = (props) => {
  const value = useProjectsProvider();

  return (
    <ProjectsContext.Provider
      {...props}
      value={value}
    ></ProjectsContext.Provider>
  );
};

const useProjectsProvider = () => {
  const [projects, setProjects] = useState(initialData);

  return { projects, setProjects };
};

type ProjectContextProviderType = ReturnType<typeof useProjectsProvider>;

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error("useProjectsContext must be used inside ProjectsProvider");
  }

  return context;
};
