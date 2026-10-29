import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Profile = () => {
  const { backendUrl, token, navigate, logout } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      if (!token) return;
      const response = await axios.get(backendUrl + '/api/user/profile', { headers: { token } });
      if (response.data.success) {
        setUserData(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [token]);

  return (
    <div className='border-t pt-14 max-w-xl mx-auto px-4'>
      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>

      {userData ? (
        <div className='bg-slate-50 border border-gray-200 p-8 rounded-lg shadow-sm flex flex-col gap-5'>
          <div className='flex items-center gap-4 border-b pb-4'>
            <div className='w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-bold rounded-full'>
              {userData.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className='text-xl font-medium text-gray-800'>{userData.name}</p>
              <p className='text-sm text-gray-500'>{userData.email}</p>
            </div>
          </div>

          <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <p><strong>Account Status:</strong> <span className='text-green-600 font-medium'>Active</span></p>
            <p><strong>Role:</strong> Customer</p>
          </div>

          <div className='flex gap-4 mt-4'>
            <button onClick={() => navigate('/orders')} className='bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition-all cursor-pointer'>
              My Orders
            </button>
            <button onClick={logout} className='border border-red-500 text-red-500 px-5 py-2 text-sm rounded hover:bg-red-50 transition-all cursor-pointer'>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center py-10'>
          <p className='text-gray-500 mb-4'>Please login to view your profile.</p>
          <button onClick={() => navigate('/login')} className='bg-black text-white px-6 py-2 text-sm rounded cursor-pointer'>Login Now</button>
        </div>
      )}
    </div>
  )
}

export default Profile