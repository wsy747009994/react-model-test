export default {
    namespace: 'cesiumViewer',
    state: {
        viewer: {},
    },
    effects: {
        *queryInit({ payload }: any, { call, put, select}: any) {
            // yield call(getApiSqlInfo, payload);
            console.log(7777, payload)
            yield put({
                type : 'alterViewer',
                payload : payload
            })
        }
    },
    reducers: {
        alterViewer(state: any, { payload }: any) {
            console.log(6666,payload)
            return {
                ...state,
                viewer: payload
            }
        }
    }
}