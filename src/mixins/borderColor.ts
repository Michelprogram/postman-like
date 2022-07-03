import type IHistory from "@/interfaces/history";

export default {
  methods: {
    borderColor(history: IHistory): string {
      let border = "";
      const code = history.httpCode;

      if (code >= 100 && code <= 199) {
        border = "border-blue-700";
      } else if (code >= 200 && code <= 299) {
        border = "border-green-400";
      } else if (code >= 300 && code <= 399) {
        border = "border-rose-500";
      } else if (code >= 400 && code <= 499) {
        border = "border-red-500";
      } else {
        border = "border-orange-600";
      }

      return `mb-3 border-b-2 ${border}`;
    },
  },
};
