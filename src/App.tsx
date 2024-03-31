import "./App.css";
import { ITabListProps, TabList } from "./components/tab-list";

const App = () => {
  const tabs: ITabListProps["listConfig"] = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "aboutMe",
      title: "About Me",
    },
    {
      id: "ontactMe",
      title: "Contact Me",
    },
  ];
  return (
    <>
      <TabList listConfig={tabs} />
    </>
  );
};

export { App };
