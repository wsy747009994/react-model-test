import React from 'react';
import styles from './index.css';
// import fetch from 'dva/fetch';

import { formatMessage } from 'umi-plugin-locale';
import { mockData, mockDataFetch } from '@/api/api';

// const mapStateToProps = (state: { [x: string]: any; }) => {
// 	const cardList = state[namespace]
// 	return {
// 	  cardList 
// 	}
// }

// const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: { viewer: any; }; }) => void) => {
// 	return {
// 		onDidMount : (viewer: any) =>{
//             console.log(8888,viewer)
// 			dispatch({
//                 type: `cesiumViewer/queryInit`,
//                 payload: viewer,
// 			})
// 		}
// 	}
// }


export default function() {
  const mockClick = () => {
    // fetch('/api/1', {
    //   credentials: 'include', 
    //   headers: { 
    //       'Accept': 'application/json, text/plain, */*' 
    //   } ,
    //   method: 'post',
    //   mode: 'cors'
    // })
    // .then((response: any) => {
    //   console.log(123,response)
    //   // response.json().then(function(data){      //将response进行json格式化
    //   //   console.log(data);                        //打印
    //   // }); 
    // })
    mockData().then(res => {
      if(res) {
        console.log('正确',res)
      }
    })
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          {/* <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a> */}
          <div onClick={mockClick}>11111</div>
        </li>
      </ul>
    </div>
  );
}

// export default connect(({ products }) => ({
//   products,
// }))(Products);

// export default connect(mapStateToProps,mapDispatchToProps)(BasicLayout)
