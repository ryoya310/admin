import * as Modules from "../app/modules";

const Index = () => {
  return (
    <Modules.RequireAuth>
      <h1>Index</h1>
    </Modules.RequireAuth>
  );
}
export default Index