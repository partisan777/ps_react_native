import axios from "axios";
import { IUseFetchProductData } from "./useFetchProductDataProps";


export const useFetchProductData = async ({ url, setLoading, setProduct, setError }: IUseFetchProductData) => {
    setLoading(true);
    try {
      const response = await axios.get(url)
      setProduct(response.data);
    } catch (error) {
        setError(true);
      if (axios.isAxiosError(error)) {
        console.log('Axios Error:', error);
      } else {
        console.log('Неизвестная ошибка:', error);
      }
    } finally {
      setLoading(false);
    };
  };