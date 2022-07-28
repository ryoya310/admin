import * as Modules from "../app/modules";
import { useEffect } from "react";

export default function LogOut() {

  const dispatch = Modules.useAppDispatch();
  useEffect(() => {
    dispatch(Modules.state.login.setAuth({result: false}))
  });

  return (
    <div>
      <p>ログインアウトしました。</p>
    </div>
  );
}