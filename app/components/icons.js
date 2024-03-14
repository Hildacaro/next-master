const Icons = (icon) => {
  switch (icon) {
    case "Clear":
      return "icons/clear-day.svg";
    case "Thunderstorm":
      return "icons/thunderstorm-rain.svg";
    case "Drizzle":
      return "icons/drizzle.svg";
    case "Fog":
      return "icons/fog.svg";
    case "Haze":
      return "icons/haze.svg";
    case "Rain":
      return "icons/rain.svg";
    case "Smoke":
      return "icons/smoke.svg";
    case "Snow":
      return "icons/snow.svg";
    case "Clouds":
        return "icons/fog.svg";
    default:
      return "icons/clear-day.svg";
  }
};

export default Icons;
