import React, { useEffect, useState } from 'react'
import { axiosInstanceSpring } from '../../api/axios'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../redux/userSlice'
import HistoryItem from './HistoryItem'
import useAxiosPrivateSpring from '../../hooks/useAxiosPrivateSpring'


const History = () => {

  const axiosPrivateSpring = useAxiosPrivateSpring()
  const [history, setHistory] = useState<Entities.ISession[]>()
  const userData = useSelector(selectUserData)
  const userId = userData?._id


  const fetchHistory = async () => {
    try {
      const { data } = await axiosPrivateSpring.get(`/api/sessions/users/${userId}`)
      // const { data } = await axiosInstanceSpring.get(`/api/sessions/users/${userId}`)
      setHistory(data.reverse())
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(()=>{
    fetchHistory()
  },[])

  return (
    <div className='w-1/4 bg-zinc-50 relative max-h-[100dvh] overflow-scroll hidden md:flex  rounded-3xl py-6 px-4'>
        <div className='flex flex-col gap-3'>
            <div className='font-semibold'>History</div>
            <div className='flex flex-col gap-2 '>
              {
                history?.map((session:Entities.ISession, index:number)=>(
                  <div key={index}>
                    <HistoryItem sessionId={session.sessionId} title={
                      session.conversation?.length? session.conversation[0].text.substring(0,20) : `Chat ${history.length - index}`
                    } />
                  </div>
                ))
              }
            </div>
        </div>
      
    </div>
  )
}

export default History
