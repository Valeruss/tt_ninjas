import { $host } from './index';

export const getAll = async () => {
    const { data } = await $host.get('api/superhero');
    return data;
}