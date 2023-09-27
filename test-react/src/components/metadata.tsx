export default function Metadata(props: any) {

  return (
    <div>
      <p>URL: {props.props.url}</p>
      <p>Date: {props.props.date.getDate()}/{props.props.date.getMonth() + 1}/{props.props.date.getFullYear()}</p>
      <p>Time: {props.props.date.getHours()}:{props.props.date.getMinutes()}:{props.props.date.getSeconds()}</p>
      <p>Size: Height: {props.props.size.height} Width: {props.props.size.width}</p>
    </div>
  );
}
