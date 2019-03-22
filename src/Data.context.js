import React, {useState} from 'react';

export const DataContext = React.createContext();

export function DataContextProvider({children}) {
  const [data, setData] = useState([]);
  const [activeStage, setActiveStage] = useState(0);

  const loadData = async () => {
    const url = 'https://git.door43.org/klappy/translation_process/raw/branch/master/gl_translation_process.tsv'
    const response = await fetch(url);
    const tsv = await response.text();
    const _data = tsv.split('\n')
    .map(row =>
      row.split('\t').map(cell =>
        cell.replace(/<br>/gi, '\n')
      )
    ).filter(row => row[0].length > 0 && row.length > 1);
    setData(_data);
  };

  const getSectionTitle = ({sectionIndex}) => {
    return data[0][sectionIndex];
  };

  const getStageLabel = ({stageIndex}) => {
    return data[stageIndex][0];
  };

  const getStageContent = ({stageIndex}) => {
    return data[stageIndex];
  };

  const stageNext = () => {
    setActiveStage(prevActiveStage => prevActiveStage + 1);
  };

  const stageBack = () => {
    setActiveStage(prevActiveStage => prevActiveStage - 1);
  };

  const stageReset = () => {
    setActiveStage(0);
  };

  const value = {
    data,
    loadData,
    getStageLabel,
    getStageContent,
    activeStage,
    setActiveStage,
    stageNext,
    stageBack,
    stageReset,
    getSectionTitle,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
