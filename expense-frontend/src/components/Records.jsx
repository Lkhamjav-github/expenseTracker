import React from 'react'
import { Eye } from './icons/Eye'
import { Right } from './icons/Right'
export const Records = () => {
    return (
        <div className='bg-[#F3F4F6] flex justify-center  flex-col'>
            <div className='py-8 px-[120px] flex gap-6 lg:w-[1440px]'>
                <div className='bg-white rounded-xl py-4 px-4 gap-6 flex flex-col'>
                    <h1>Records</h1>
                    <button className='flex justify-center items-center bg-blue rounded-xl text-white gap-1 w-[250px]  '>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10C18 10.1658 17.9342 10.3247 17.8169 10.4419C17.6997 10.5592 17.5408 10.625 17.375 10.625H11.125V16.875C11.125 17.0408 11.0592 17.1997 10.9419 17.3169C10.8247 17.4342 10.6658 17.5 10.5 17.5C10.3342 17.5 10.1753 17.4342 10.0581 17.3169C9.94085 17.1997 9.875 17.0408 9.875 16.875V10.625H3.625C3.45924 10.625 3.30027 10.5592 3.18306 10.4419C3.06585 10.3247 3 10.1658 3 10C3 9.83424 3.06585 9.67527 3.18306 9.55806C3.30027 9.44085 3.45924 9.375 3.625 9.375H9.875V3.125C9.875 2.95924 9.94085 2.80027 10.0581 2.68306C10.1753 2.56585 10.3342 2.5 10.5 2.5C10.6658 2.5 10.8247 2.56585 10.9419 2.68306C11.0592 2.80027 11.125 2.95924 11.125 3.125V9.375H17.375C17.5408 9.375 17.6997 9.44085 17.8169 9.55806C17.9342 9.67527 18 9.83424 18 10Z" fill="white" />
                        </svg>
                        <label htmlFor="">Add</label>
                    </button>
                    <input type="text" placeholder='Search' />
                    <div>
                        <h2 className='pb-4'>Types</h2>
                        <form className='flex gap-2 flex-col'  >
                            <div className="form-control">
                                <label className=" pointer gap-2 flex justify-start items-center">
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="All" />
                                    <span className="label-text">All</span>
                                </label>
                            </div>
                            <div className="">
                                <label className=" pointer gap-2 flex justify-start items-center">
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="Income" />
                                    <span className="label-text">Income</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className=" pointer gap-2 flex justify-start items-center">
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="Expense" />
                                    <span className="label-text">Expense</span>
                                </label>
                            </div>

                        </form>
                    </div>
                    <div>
                        <div className='flex justify-between pb-4'>
                            <h2>Category</h2>
                            <h2>Clear</h2>
                        </div>
                        <div className='flex items-center'>
                            <Eye />
                            <h3>Food & Drinks</h3>
                            <Right />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
