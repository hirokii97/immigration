export const translateTagName = (tagName: string) => {
  switch (tagName) {
    case "wifi":
      return "Wi-Fi";
    case "display":
      return "ディスプレイ";
    default:
      return "";
  }
};
