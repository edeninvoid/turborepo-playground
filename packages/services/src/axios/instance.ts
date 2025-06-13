import axios, {AxiosInstance} from "axios";

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
	const instance = axios.create({
		baseURL,
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	instance.interceptors.request.use(
		(config) => {
			const token = '';
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			console.error('API Error:', error);
			return Promise.reject(error);
		}
	);

	return instance;
};
