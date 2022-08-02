import * as Modules from "../common/modules";

const Index = () => {

  const views = Modules.useAppSelector(Modules.state.member.views);
  console.log(views)
  console.log(views.request)

  return (
    <Modules.RequireAuth>
      <div
        className="Index views-wrapper"
      >
        <h2>Index</h2>
        <div>
          LoginID: {views.request.LoginID}
        </div>
        <div>
          Message: {views.message}
        </div>
        <div>
          名前: {views.view.MemberName}
        </div>
      </div>
    </Modules.RequireAuth>
  );
}
export default Index