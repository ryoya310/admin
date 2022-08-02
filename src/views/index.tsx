import * as Modules from "../common/modules";

const Index = () => {

  const list = Modules.useAppSelector(Modules.state.login.views);
  console.log(list)

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