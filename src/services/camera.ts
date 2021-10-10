import { API_URL } from "./constant";

export const cameraServices = {
  uploadFile: {
    method: "POST",
    url: `${API_URL}/boothservice/v1/001d498f55401/files`,
  },
  frames: {
    url: `${API_URL}/boothservice/v1/001d498f55401/frames`,
  },
};
