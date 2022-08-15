import InputText from "../../components/atoms/input_text";

type Props = {
  items?: any
}

const Edit = ({ items }: Props) => {

  return <>
    <form className="views-editor">

      <input type="hidden" name="ArticleID" value={items.ArticleID} />
      <input type="hidden" name="Created" value={items.Created} />
      <InputText
        name="Caption"
        label="記事タイトル"
        value={items.Caption}
      />
      <InputText
        name="Priority"
        label="表示順"
        value={items.Priority}
      />
    </form>
  </>;
}
export default Edit