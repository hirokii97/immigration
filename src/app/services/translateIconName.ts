import { faDisplay, faWifi } from "@fortawesome/free-solid-svg-icons";

export const translateIconName = (tagName: string) => {
  switch (tagName) {
    case "wifi":
      return faWifi;
    case "display":
      return faDisplay;
  }
};
