import axios from 'axios';

const KEY= 'AIzaSyCMRdATzfv1SEIUKzh6DeQ4N-Q6U13TnVQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});