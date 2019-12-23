
import request from '@/utils/request';
import requestFetch from '@/utils/requestFetch';



export function readUnitList(data: any){
    return request({ 
        url: 'api/homePageUnit/readUnitList', 
        method: 'POST',
        data: {
            params: data,
        }
    })
}


export function readUnitListFetch(data: any){
    return requestFetch('api/homePageUnit/readUnitList', { 
        method: 'POST',
        data: {
            params: data,
        }
    })
}

export function mockData() {
    return request({ 
        url: '/postdata', 
        method: 'POST',
    })
}

export function mockDataFetch() {
    return requestFetch('/postdata1', { 
        method: 'POST',
    })
}