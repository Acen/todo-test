import axios from 'axios';
/**
 * Submits our HTTP requests do send/receive things on the server side.
 */
export class History{
    static get() {
        return axios.get('allhistory');
    };
}

export class Items{
    static get() {
        return axios.get('todo');
    }
    static create(data) {
        return axios.post('todo', data);
    }
    static edit(item_id, data){
        return axios.patch('todo/' + item_id, data);
    }
    static delete(item_id){
        return axios.delete('todo/' + item_id)
    }
    static clear(){
        return axios.delete('todo');
    }

}