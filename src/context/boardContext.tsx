import { createContext, useState, useContext } from "react";
import { BoardData } from "utils/initialData";

const BoardContext = createContext<BoardContextProviderType | null>(null);

export const BoardProvider: React.FC = (props) => {
  const value = useBoardProvider();

  return (
    <BoardContext.Provider {...props} value={value}></BoardContext.Provider>
  );
};

const useBoardProvider = () => {
  const [boardData, setBoardData] = useState(BoardData);

  return { boardData, setBoardData };
};

type BoardContextProviderType = ReturnType<typeof useBoardProvider>;

export const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoardContext must be used inside BoardProvider");
  }

  return context;
};
