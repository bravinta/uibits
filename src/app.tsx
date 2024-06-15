import { Avatar, Button } from "./components";

export const App = () => {
  return (
    <div className="bg-neutral-950 h-dvh">
      <Avatar fallback="test" className="" />
      <Button >Primario</Button>
      <Button variant="secondary">Secondario</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" size="icon">❤️</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};
