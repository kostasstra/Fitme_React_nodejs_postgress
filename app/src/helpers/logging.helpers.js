const getCurrentTime = () => {
    let m = new Date();
    let date_string =
    m.getUTCFullYear() + "-" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + m.getUTCDate()).slice(-2) + "T" +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2) + ":" +
    ("0" + m.getUTCMilliseconds()).slice(-3);
    return date_string;
}

exports.log = (level, message) => {
    let date_string, log_str, formatted_message;
    log_levels = ["DB", "DEBUG", "ERROR", "FATAL","INFO", "WARNING"]

    if (! log_levels.includes(level.toUpperCase())) {
        level = "INFO";
    }

    if (level === "DB") {
        formatted_message = message.replace(/\n/g, " ").replace(/  +/g, ' ');
    } else {
        formatted_message = message;
    };

    date_string = getCurrentTime();

    log_str = date_string + " - [" + level + "] - " + formatted_message;
    console.log(log_str);
  };
