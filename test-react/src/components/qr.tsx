import Metadata from "./metadata";
import { useState, useEffect } from "react";

export default function Qr(props: any) {
  const [date, setDate] = useState<Date | null>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [flagTextButton, setFlagTextButton] = useState<boolean>(true);
  const [textButton, setTextButton] = useState("View request details");

  const height = 250;
  const width = 250;
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=[URL-${props.props}]&size=${height}x${width}`;

  useEffect(() => {
    setDate(new Date());
  }, []);

  const propsToMetadata = {
    url,
    date,
    size: { height, width },
  };

  const applicationDetails = () => {
    setFlag(!flag);
    setFlagTextButton(!flagTextButton);
    setTextButton(
      flagTextButton ? "Hide request details" : "View request details"
    );
  };
  return (
    <div>
      <img src={url} />
      <button onClick={applicationDetails}>{textButton}</button>
      {flag && <Metadata props={propsToMetadata} />}
    </div>
  );
}