export default function Hornedbeast(props) {
  return (
    <>
      <h2 key={props.id}>{props.title}</h2>
      <img
        key={props.id}
        src={props.image_url}
        alt={props.keyword}
        title={props.title}
      />
      <p key={props.id}>{props.description}</p>
    </>
  );
}
