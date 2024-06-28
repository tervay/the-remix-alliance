import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function MaybeComponent<T, E = Error>(props: {
  query: UseQueryResult<T, E>;
  renderComponent: (data: T) => JSX.Element;
  renderSkeleton: () => JSX.Element;
}) {
  if (props.query.data) {
    return props.renderComponent(props.query.data);
  }

  return props.renderSkeleton();
}

export function useMaybeComponent<T>(props: {
  query: UseQueryResult<T>;
  renderComponent: (data: T) => JSX.Element;
  renderSkeleton: () => JSX.Element;
}) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (props.query.data) {
      setShouldRender(true);
    }
  }, [props.query.data]);

  if (shouldRender && props.query.data) {
    return props.renderComponent(props.query.data);
  }
  return props.renderSkeleton();
}
