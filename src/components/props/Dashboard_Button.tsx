import React from 'react'


interface CustomButtonProps {
    onClick: () => void;
    icon: any;
    title: string;
  }

const Dashboard_Button:React.FC<CustomButtonProps> = ({ onClick, icon: Icon, title }) => {
  return (
    <button onClick={onClick} className='duration-150 bg-indigo-50  hover:bg-indigo-100 active:bg-indigo-200   rounded-lg '>
<div className="px-4 min-h-[7rem] min-w-[8.8rem] flex items-start flex-col justify-between ">

    <div className='rounded-full bg-white shadow-sm mt-3 mb-4 w-[3.6em] h-[3.6rem] flex items-center justify-center'>
    <p className='text-[30px] text-[var(--background)]'>

    {Icon}
    </p>
      </div>
 

  
<h2 className='text-[14px] font-semibold text-gray-700 w-[100px] pb-2 text-left '>{title}</h2>
</div>
</button>
  )
}

export default Dashboard_Button