import * as Modules from "../common/modules";

const Index = () => {

  return (
    <Modules.RequireAuth>
      <div
        className="Index views-wrapper"
      >
        <h2>Index</h2>
      </div>
    </Modules.RequireAuth>
  );
}
export default Index