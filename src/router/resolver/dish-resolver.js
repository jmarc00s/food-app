import { http } from '../../plugins/axios';


export const dishResolver = async function(to, from, next){
    const response = await http('dishes');
    to.meta['dishes'] = response.data;
    next
}