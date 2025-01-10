// ExternalLinkRenderer.js
import React from "react";
import { LaunchIcon } from "@sanity/icons";
interface ExternalLinkRendererProps {
  value: {
    href: string;
  };
  renderDefault: (props: ExternalLinkRendererProps) => JSX.Element;
}
const ExternalLinkRenderer: React.FC<ExternalLinkRendererProps> = (props) => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <LaunchIcon />
    </a>
  </span>
);

export default ExternalLinkRenderer;
