import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../../api/axios';

function ItemDetail() {
  console.log('render');
  const [item, setItem] = useState({});
  //
  const { item_id } = useParams();

  console.log(item_id);
  //

  useEffect(() => {
    getItem();
  }, []);
  //
  const getItem = () => {
    const url = `items/${item_id}`;
    axios.get(url).then((res) => {
      if (res.status === 200) {
        console.log(res.data.item);
        setItem(res.data.item);
      }
    });
  };

  // Get current posts

  //

  // Change page

  //

  return (
    <div className='container' style={{ marginTop: 100 }}>
      <div className='information_admin'>
        <table className='table table-bordered'>
          <thead>
            <tr className='tr-head'>
              <th scope='col'>Tên vật phẩm</th>
              <th scope='col'>Ảnh hiện vật</th>
              <th scope='col'>Nguồn gốc/xuất sứ</th>
              <th scope='col'>Ngày chỉnh sửa</th>
              <th scope='col'>Trạng thái bài đăng</th>
              <th scope='col'>Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemDetail;
