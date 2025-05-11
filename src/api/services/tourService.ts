import type { Tour, ToursResponse } from "../../types";
import ApiClient from "../client";

const apiClient = ApiClient.getAxios();

export const getTours = async (): Promise<ToursResponse> => {
  const response = await apiClient.get<ToursResponse>("/tours");
  return response.data;
};

export const getTourById = async (id: string): Promise<Tour> => {
  const response = await apiClient.get<Tour>(`/tours/${id}`);
  return response.data;
};

export const createTour = async (tourData: Omit<Tour, "id">): Promise<Tour> => {
  const response = await apiClient.post<Tour>("/tours", tourData);
  return response.data;
};

export const updateTour = async (tour: Tour): Promise<Tour> => {
  const response = await apiClient.put<Tour>(`/tours/${tour.id}`, tour);
  return response.data;
};

export const deleteTour = async (id: string): Promise<void> => {
  await apiClient.delete(`/tours/${id}`);
};
