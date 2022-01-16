function timeConversion(s) {
  if (s.includes("AM")) {
    const trimmedTime = s.substring(2, s.length - 2);
    const hours = s.substring(0, 2);
    if (hours === "12") {
      const militaryHours = parseInt(hours) - 12 + "0";
      return `${militaryHours}${trimmedTime}`;
    } else {
      return `${hours}${trimmedTime}`;
    }
  } else {
    const trimmedTime = s.substring(2, s.length - 2);
    const hours = s.substring(0, 2);
    if (hours === "12") {
      return `${hours}${trimmedTime}`;
    } else {
      const militaryHours = (parseInt(hours) + 12).toString();
      return `${militaryHours}${trimmedTime}`;
    }
  }
}

timeConversion("12:45:54PM");

//if 12 am, -12. if 12 pm + 12
