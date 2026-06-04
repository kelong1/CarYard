import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchCarsApi = createApi({
  reducerPath: "Cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/productcars",
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user?.token) {
        headers.set("authorization", `Bearer ${user.token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchCars: builder.query({
      providesTags: ["cars"],
      query: () => {
        return {
          method: "GET",
          url: "/",
        };
      },
    }),
    addCar: builder.mutation({
      invalidatesTags: ["cars"],
      query: (formData) => {
        return {
          method: "POST",
          url: "/createProductCar",
          body: formData,
        };
      },
    }),

    updateCar: builder.mutation({
      invalidatesTags: ["cars"],
      query: ({ id, formData }) => {
        return {
          method: "PUT",
          url: `/${id}`,
          body: formData,
        };
      },
    }),
    removeCar: builder.mutation({
      invalidatesTags: ["cars"],
      query: (car) => {
        return {
          method: "DELETE",
          url: `/${car._id}`,
        };
      },
    }),
  }),
});

export const {
  useFetchCarsQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useRemoveCarMutation,
} = fetchCarsApi;
export default fetchCarsApi;
