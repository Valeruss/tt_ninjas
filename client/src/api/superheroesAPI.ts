import { $host } from './index';

export const getAll = async (limit: number, page: number) => {
    const { data } = await $host.get('api/superhero', { params: {
        limit, page
    }});
    return data;
};

export const create = async (superhero: object) => {
    const { data } = await $host.post('api/superhero', superhero);
    return data;
}

export const remove = async (_id: any) => {
    const { data } = await $host.delete('api/superhero', { params: {
        _id
    } });
    return data;
};
