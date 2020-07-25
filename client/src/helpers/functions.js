export default {
  trim(str, length, withDot = true) {
    if (!str) return "";
    if (str.length <= length) return str;

    return `${str.substr(0, length)}${withDot ? "..." : ""}`;
  },

  toCamelCase(key, value) {
    if (value && typeof value === "object") {
      for (var k in value) {
        if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
          value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
          delete value[k];
        }
      }
    }
    return value;
  },

  isValidGUID(guid) {
    var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return pattern.test(guid);
  },

  delay: (ms) => new Promise((res) => setTimeout(res, ms)),

  stringToHslColor(str, s = 50, l = 60) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  },

  bringToTop(arr, key, value) {
    return arr.sort(function(x, y) {
      return x[key] == value ? -1 : y[key] == value ? 1 : 0;
    });
  },
};
