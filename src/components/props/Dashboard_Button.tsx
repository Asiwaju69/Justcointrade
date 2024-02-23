import React from 'react'


interface CustomButtonProps {
    onClick: () => void;
    icon: any;
    title: string;
  }

const Dashboard_Button:React.FC<CustomButtonProps> = ({ onClick, icon: Icon, title }) => {
  return (
    <button onClick={onClick} className='hover:bg-[#e0e0e044] hover:border-gray-200 text-[#5D636A]  rounded-lg bg-[#f8f8f9c4]'>
<div className="py-3 px-6 min-h-[8rem] flex items-start flex-col justify-between ">

    <div className='rounded-full shadow-sm  w-[3.6em] bg-white h-[3.6rem] flex items-center justify-center'>
    <p className='text-[38px]'>

    {Icon}
    </p>
      </div>
 

  
<h2 className='text-[15px] max-lg:text-[14px] text-gray-700 pt-6 text-left '>{title}</h2>
</div>
</button>
  )
}

export default Dashboard_Button