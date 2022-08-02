import * as Modules from "../common/modules";

const Index = () => {

  const views = Modules.useAppSelector(Modules.state.member.views);
  console.log(views.request)

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