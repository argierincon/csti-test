const fillIcon = (color: string) => {
  switch (color) {
    case "white":
      return "white";

    case "grey":
      return "#A0AEC0";

    case "red":
      return "#E03137";

    case "green":
      return "#00A19B";

    case "blue":
      return "#2F78EE";

    default:
      return "#111827";
  }
};

const sizeIcon = (size: string) => {
  switch (size) {
    case "xSmall":
      return "16px";

    case "small":
      return "18px";

    case "large":
      return "30px";

    default:
      return "24px";
  }
};

export { fillIcon, sizeIcon };
