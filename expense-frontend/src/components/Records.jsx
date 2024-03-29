import React, { useContext, useState } from 'react'
import { Eye } from './icons/Eye'
import { Right } from './icons/Right'
import { Category } from './Category'
import { Plus } from './icons/Plus'


export const Records = (props) => {

    const [add, setAdd] = useState('added')

    const [toggle, setToggle] = useState('Expense');
    const toggleButton = (type) => {
        console.log("type", type);
        setToggle(type)
    };

    const Add = () => {
        if (add === '') {
            setAdd('added')
        }
        else {
            setAdd('')
        }
    }
    console.log(add)
    const [expense, setExpense] = useState('');
    const [income, setIncome] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [payee, setPayee] = useState('');
    const [note, setNote] = useState('');
    console.log(category)
    const addRecords = async () => {
        try {
            await fetch('http://localhost:8080', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    amount,
                    category,
                    date,
                    time,
                    payee,
                    note,
                    type
                })
            });
        } catch (error) {
            alert(error);
        }

    };
    return (
        <div className='bg-[#F3F4F6] flex justify-center items-center  flex-col '>
            <div className={`py-8 px-[120px] flex gap-6 lg:w-[1440px]`}>
                <div className='bg-white rounded-xl py-4 px-4 gap-6 flex flex-col'>
                    <h1>Records</h1>
                    <button onClick={Add} className='flex justify-center items-center bg-blue rounded-xl text-white gap-1 w-[250px]  '>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10C18 10.1658 17.9342 10.3247 17.8169 10.4419C17.6997 10.5592 17.5408 10.625 17.375 10.625H11.125V16.875C11.125 17.0408 11.0592 17.1997 10.9419 17.3169C10.8247 17.4342 10.6658 17.5 10.5 17.5C10.3342 17.5 10.1753 17.4342 10.0581 17.3169C9.94085 17.1997 9.875 17.0408 9.875 16.875V10.625H3.625C3.45924 10.625 3.30027 10.5592 3.18306 10.4419C3.06585 10.3247 3 10.1658 3 10C3 9.83424 3.06585 9.67527 3.18306 9.55806C3.30027 9.44085 3.45924 9.375 3.625 9.375H9.875V3.125C9.875 2.95924 9.94085 2.80027 10.0581 2.68306C10.1753 2.56585 10.3342 2.5 10.5 2.5C10.6658 2.5 10.8247 2.56585 10.9419 2.68306C11.0592 2.80027 11.125 2.95924 11.125 3.125V9.375H17.375C17.5408 9.375 17.6997 9.44085 17.8169 9.55806C17.9342 9.67527 18 9.83424 18 10Z" fill="white" />
                        </svg>
                        <label htmlFor="">Add</label>
                    </button>
                    <input className='border-[#A3A3A3] border-[1px] rounded-lg py-1 px-4 text-[#a3a3a3]' type="text" placeholder='Search' />
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
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between pb-4'>
                            <h2>Category</h2>
                            <h2>Clear</h2>
                        </div>
                        <Category value="Food & Drinks" />
                        <Category value="Shopping" />
                        <Category value="Housing" />
                        <Category value="Transformation" />
                        <Category value="Vehicle" />
                        <Category value="Life & Entertainment" />
                        <Category value="Communication, PC" />
                        <Category value="Finanical expenses" />
                        <Category value="Investment" />
                        <Category value="Income" />
                        <Category value="Others" />
                        <div className='flex items-center gap-2 pt-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="#0166FF" />
                            </svg>
                            <h4>Add Category</h4>
                        </div>
                    </div>
                    <div>
                        <h2>Amount Range</h2>
                        <div className='flex  gap-4  pt-4 pb-4'>
                            <input type="text" placeholder="0" className="input input-bordered input-md w-[114.5px] max-w-xs" />
                            <input type="text" placeholder="1000" className="input input-bordered input-md w-[114.5px] max-w-xs" />
                        </div>
                        <svg width="245" height="48" viewBox="0 0 245 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10L237 10" stroke="#0166FF" stroke-width="4" />
                            <rect width="20" height="20" rx="10" fill="#0166FF" />
                            <circle cx="10" cy="10" r="6" fill="white" />
                            <path d="M13.5859 34.4062V36.1406C13.5859 37.0729 13.5026 37.8594 13.3359 38.5C13.1693 39.1406 12.9297 39.6562 12.6172 40.0469C12.3047 40.4375 11.9271 40.7214 11.4844 40.8984C11.0469 41.0703 10.5521 41.1562 10 41.1562C9.5625 41.1562 9.15885 41.1016 8.78906 40.9922C8.41927 40.8828 8.08594 40.7083 7.78906 40.4688C7.4974 40.224 7.2474 39.9062 7.03906 39.5156C6.83073 39.125 6.67188 38.651 6.5625 38.0938C6.45312 37.5365 6.39844 36.8854 6.39844 36.1406V34.4062C6.39844 33.474 6.48177 32.6927 6.64844 32.0625C6.82031 31.4323 7.0625 30.9271 7.375 30.5469C7.6875 30.1615 8.0625 29.8854 8.5 29.7188C8.94271 29.5521 9.4375 29.4688 9.98438 29.4688C10.4271 29.4688 10.8333 29.5234 11.2031 29.6328C11.5781 29.737 11.9115 29.9062 12.2031 30.1406C12.4948 30.3698 12.7422 30.6771 12.9453 31.0625C13.1536 31.4427 13.3125 31.9089 13.4219 32.4609C13.5312 33.013 13.5859 33.6615 13.5859 34.4062ZM12.1328 36.375V34.1641C12.1328 33.6536 12.1016 33.2057 12.0391 32.8203C11.9818 32.4297 11.8958 32.0964 11.7812 31.8203C11.6667 31.5443 11.5208 31.3203 11.3438 31.1484C11.1719 30.9766 10.9714 30.8516 10.7422 30.7734C10.5182 30.6901 10.2656 30.6484 9.98438 30.6484C9.64062 30.6484 9.33594 30.7135 9.07031 30.8438C8.80469 30.9688 8.58073 31.1693 8.39844 31.4453C8.22135 31.7214 8.08594 32.0833 7.99219 32.5312C7.89844 32.9792 7.85156 33.5234 7.85156 34.1641V36.375C7.85156 36.8854 7.88021 37.3359 7.9375 37.7266C8 38.1172 8.09115 38.4557 8.21094 38.7422C8.33073 39.0234 8.47656 39.2552 8.64844 39.4375C8.82031 39.6198 9.01823 39.7552 9.24219 39.8438C9.47135 39.9271 9.72396 39.9688 10 39.9688C10.3542 39.9688 10.6641 39.901 10.9297 39.7656C11.1953 39.6302 11.4167 39.4193 11.5938 39.1328C11.776 38.8411 11.9115 38.4688 12 38.0156C12.0885 37.5573 12.1328 37.0104 12.1328 36.375Z" fill="black" />
                            <rect x="217" width="20" height="20" rx="10" fill="#0166FF" />
                            <circle cx="227" cy="10" r="6" fill="white" />
                            <path d="M214.695 29.5625V41H213.25V31.3672L210.336 32.4297V31.125L214.469 29.5625H214.695ZM226.086 34.4062V36.1406C226.086 37.0729 226.003 37.8594 225.836 38.5C225.669 39.1406 225.43 39.6562 225.117 40.0469C224.805 40.4375 224.427 40.7214 223.984 40.8984C223.547 41.0703 223.052 41.1562 222.5 41.1562C222.062 41.1562 221.659 41.1016 221.289 40.9922C220.919 40.8828 220.586 40.7083 220.289 40.4688C219.997 40.224 219.747 39.9062 219.539 39.5156C219.331 39.125 219.172 38.651 219.062 38.0938C218.953 37.5365 218.898 36.8854 218.898 36.1406V34.4062C218.898 33.474 218.982 32.6927 219.148 32.0625C219.32 31.4323 219.562 30.9271 219.875 30.5469C220.188 30.1615 220.562 29.8854 221 29.7188C221.443 29.5521 221.938 29.4688 222.484 29.4688C222.927 29.4688 223.333 29.5234 223.703 29.6328C224.078 29.737 224.411 29.9062 224.703 30.1406C224.995 30.3698 225.242 30.6771 225.445 31.0625C225.654 31.4427 225.812 31.9089 225.922 32.4609C226.031 33.013 226.086 33.6615 226.086 34.4062ZM224.633 36.375V34.1641C224.633 33.6536 224.602 33.2057 224.539 32.8203C224.482 32.4297 224.396 32.0964 224.281 31.8203C224.167 31.5443 224.021 31.3203 223.844 31.1484C223.672 30.9766 223.471 30.8516 223.242 30.7734C223.018 30.6901 222.766 30.6484 222.484 30.6484C222.141 30.6484 221.836 30.7135 221.57 30.8438C221.305 30.9688 221.081 31.1693 220.898 31.4453C220.721 31.7214 220.586 32.0833 220.492 32.5312C220.398 32.9792 220.352 33.5234 220.352 34.1641V36.375C220.352 36.8854 220.38 37.3359 220.438 37.7266C220.5 38.1172 220.591 38.4557 220.711 38.7422C220.831 39.0234 220.977 39.2552 221.148 39.4375C221.32 39.6198 221.518 39.7552 221.742 39.8438C221.971 39.9271 222.224 39.9688 222.5 39.9688C222.854 39.9688 223.164 39.901 223.43 39.7656C223.695 39.6302 223.917 39.4193 224.094 39.1328C224.276 38.8411 224.411 38.4688 224.5 38.0156C224.589 37.5573 224.633 37.0104 224.633 36.375ZM235.086 34.4062V36.1406C235.086 37.0729 235.003 37.8594 234.836 38.5C234.669 39.1406 234.43 39.6562 234.117 40.0469C233.805 40.4375 233.427 40.7214 232.984 40.8984C232.547 41.0703 232.052 41.1562 231.5 41.1562C231.062 41.1562 230.659 41.1016 230.289 40.9922C229.919 40.8828 229.586 40.7083 229.289 40.4688C228.997 40.224 228.747 39.9062 228.539 39.5156C228.331 39.125 228.172 38.651 228.062 38.0938C227.953 37.5365 227.898 36.8854 227.898 36.1406V34.4062C227.898 33.474 227.982 32.6927 228.148 32.0625C228.32 31.4323 228.562 30.9271 228.875 30.5469C229.188 30.1615 229.562 29.8854 230 29.7188C230.443 29.5521 230.938 29.4688 231.484 29.4688C231.927 29.4688 232.333 29.5234 232.703 29.6328C233.078 29.737 233.411 29.9062 233.703 30.1406C233.995 30.3698 234.242 30.6771 234.445 31.0625C234.654 31.4427 234.812 31.9089 234.922 32.4609C235.031 33.013 235.086 33.6615 235.086 34.4062ZM233.633 36.375V34.1641C233.633 33.6536 233.602 33.2057 233.539 32.8203C233.482 32.4297 233.396 32.0964 233.281 31.8203C233.167 31.5443 233.021 31.3203 232.844 31.1484C232.672 30.9766 232.471 30.8516 232.242 30.7734C232.018 30.6901 231.766 30.6484 231.484 30.6484C231.141 30.6484 230.836 30.7135 230.57 30.8438C230.305 30.9688 230.081 31.1693 229.898 31.4453C229.721 31.7214 229.586 32.0833 229.492 32.5312C229.398 32.9792 229.352 33.5234 229.352 34.1641V36.375C229.352 36.8854 229.38 37.3359 229.438 37.7266C229.5 38.1172 229.591 38.4557 229.711 38.7422C229.831 39.0234 229.977 39.2552 230.148 39.4375C230.32 39.6198 230.518 39.7552 230.742 39.8438C230.971 39.9271 231.224 39.9688 231.5 39.9688C231.854 39.9688 232.164 39.901 232.43 39.7656C232.695 39.6302 232.917 39.4193 233.094 39.1328C233.276 38.8411 233.411 38.4688 233.5 38.0156C233.589 37.5573 233.633 37.0104 233.633 36.375ZM244.086 34.4062V36.1406C244.086 37.0729 244.003 37.8594 243.836 38.5C243.669 39.1406 243.43 39.6562 243.117 40.0469C242.805 40.4375 242.427 40.7214 241.984 40.8984C241.547 41.0703 241.052 41.1562 240.5 41.1562C240.062 41.1562 239.659 41.1016 239.289 40.9922C238.919 40.8828 238.586 40.7083 238.289 40.4688C237.997 40.224 237.747 39.9062 237.539 39.5156C237.331 39.125 237.172 38.651 237.062 38.0938C236.953 37.5365 236.898 36.8854 236.898 36.1406V34.4062C236.898 33.474 236.982 32.6927 237.148 32.0625C237.32 31.4323 237.562 30.9271 237.875 30.5469C238.188 30.1615 238.562 29.8854 239 29.7188C239.443 29.5521 239.938 29.4688 240.484 29.4688C240.927 29.4688 241.333 29.5234 241.703 29.6328C242.078 29.737 242.411 29.9062 242.703 30.1406C242.995 30.3698 243.242 30.6771 243.445 31.0625C243.654 31.4427 243.812 31.9089 243.922 32.4609C244.031 33.013 244.086 33.6615 244.086 34.4062ZM242.633 36.375V34.1641C242.633 33.6536 242.602 33.2057 242.539 32.8203C242.482 32.4297 242.396 32.0964 242.281 31.8203C242.167 31.5443 242.021 31.3203 241.844 31.1484C241.672 30.9766 241.471 30.8516 241.242 30.7734C241.018 30.6901 240.766 30.6484 240.484 30.6484C240.141 30.6484 239.836 30.7135 239.57 30.8438C239.305 30.9688 239.081 31.1693 238.898 31.4453C238.721 31.7214 238.586 32.0833 238.492 32.5312C238.398 32.9792 238.352 33.5234 238.352 34.1641V36.375C238.352 36.8854 238.38 37.3359 238.438 37.7266C238.5 38.1172 238.591 38.4557 238.711 38.7422C238.831 39.0234 238.977 39.2552 239.148 39.4375C239.32 39.6198 239.518 39.7552 239.742 39.8438C239.971 39.9271 240.224 39.9688 240.5 39.9688C240.854 39.9688 241.164 39.901 241.43 39.7656C241.695 39.6302 241.917 39.4193 242.094 39.1328C242.276 38.8411 242.411 38.4688 242.5 38.0156C242.589 37.5573 242.633 37.0104 242.633 36.375Z" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between pb-4'>
                        <div className='flex items-center gap-4'>
                            <button className='rounded-lg p-[15px] bg-[#E5E7EB]'>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79062 0.230169C6.07772 0.528748 6.06841 1.00353 5.76983 1.29063L1.83208 5L5.76983 8.70938C6.06841 8.99647 6.07772 9.47125 5.79062 9.76983C5.50353 10.0684 5.02875 10.0777 4.73017 9.79063L0.230167 5.54063C0.0831082 5.39922 -1.18115e-06 5.20401 -1.17223e-06 5C-1.16331e-06 4.79599 0.0831082 4.60078 0.230167 4.45938L4.73017 0.209376C5.02875 -0.077719 5.50353 -0.0684095 5.79062 0.230169Z" fill="#0F172A" />
                                </svg>

                            </button>
                            <h1>Last 30 Days</h1>
                            <button className='rounded-lg p-[15px] bg-[#E5E7EB]'>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.209376 9.76983C-0.0777189 9.47125 -0.0684094 8.99647 0.230169 8.70937L4.16792 5L0.230169 1.29062C-0.0684099 1.00353 -0.0777193 0.528747 0.209376 0.230167C0.496471 -0.0684109 0.971253 -0.0777207 1.26983 0.209374L5.76983 4.45937C5.91689 4.60078 6 4.79599 6 5C6 5.20401 5.91689 5.39922 5.76983 5.54062L1.26983 9.79062C0.971254 10.0777 0.496471 10.0684 0.209376 9.76983Z" fill="#0F172A" />
                                </svg>

                            </button>
                        </div>
                        <button className='flex items-center p-4 bg-white rounded-lg gap-8 '>
                            <h4> Newest first</h4>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#1F2937" />
                            </svg>
                        </button>
                    </div>
                    <div className='bg-white rounded-lg px-6 py-3 lg:w-[894px] flex justify-between items-center'>
                        <div className="form-control">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input type="checkbox" className="checkbox" />
                                <span className="label-text">Select all</span>
                            </label>
                        </div>
                        <h2 className='text-[#94A3B8] text-base font-semibold'>- 35,500$</h2>
                    </div>
                    <div>
                        <h1 className='pb-3'>Today</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='bg-white rounded-lg py-3 px-6 flex justify-between items-center' >
                                <div className='flex gap-4'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#0166FF" />
                                        <path d="M27.5 19.0272V26.2499C27.5 26.5814 27.3683 26.8994 27.1339 27.1338C26.8995 27.3682 26.5815 27.4999 26.25 27.4999H23.125C22.7935 27.4999 22.4755 27.3682 22.2411 27.1338C22.0067 26.8994 21.875 26.5814 21.875 26.2499V23.1249C21.875 22.9591 21.8092 22.8002 21.6919 22.6829C21.5747 22.5657 21.4158 22.4999 21.25 22.4999H18.75C18.5842 22.4999 18.4253 22.5657 18.3081 22.6829C18.1908 22.8002 18.125 22.9591 18.125 23.1249V26.2499C18.125 26.5814 17.9933 26.8994 17.7589 27.1338C17.5245 27.3682 17.2065 27.4999 16.875 27.4999H13.75C13.4185 27.4999 13.1005 27.3682 12.8661 27.1338C12.6317 26.8994 12.5 26.5814 12.5 26.2499V19.0272C12.5 18.8542 12.5359 18.6831 12.6054 18.5247C12.6749 18.3663 12.7766 18.224 12.9039 18.1069L19.1539 12.21L19.1625 12.2015C19.3926 11.9922 19.6925 11.8762 20.0035 11.8762C20.3146 11.8762 20.6144 11.9922 20.8445 12.2015C20.8472 12.2045 20.8501 12.2074 20.8531 12.21L27.1031 18.1069C27.2292 18.2246 27.3295 18.3672 27.3978 18.5256C27.4661 18.6839 27.5009 18.8548 27.5 19.0272Z" fill="white" />
                                    </svg>
                                    <div>
                                        <span>Lending & Rating</span>
                                        <p className='text-[#6B7280]'>14:00</p>
                                    </div>
                                </div>
                                <h2 className='text-[#23E01F] text-base font-semibold'>- 35,500$</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${add === 'added' ? 'hidden' : 'absolute'} top-0 bg-black/50 w-[100%] h-[1080px] flex items-center justify-center `}>
                <div className={`w-[792px] border-solid border-2 rounded-xl bg-white `}>
                    <div className='flex justify-between py-5 px-6'>
                        <h1 className='font-semibold text-xl '>Add Record</h1>
                        <svg onClick={Add} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="#0F172A" />
                        </svg>
                    </div>
                    <hr />
                    <div className='flex'>
                        <div className='flex py-5 px-6 flex-col'>
                            <div className='flex justify-center items-center bg-[#F3F4F6] rounded-[20px] mb-5'>
                                <button onClick={() => toggleButton('Expense')} className={`py-2 px-[55px] ${toggle === 'Expense' ? 'bg-blue text-white' : 'bg-[#F3F4F6] text-black'} rounded-[20px] `}>Expense</button>
                                <button onClick={() => toggleButton('Income')} className={`py-2 px-[55px] ${toggle === 'Income' ? 'bg-[#16A34A] text-white' : 'bg-[#F3F4F6] text-black'} rounded-[20px]`}>Income</button>
                            </div>
                            <label className='rounded-xl border-[1px] bg-[#F3F4F6] border-[#D1D5DB] py-3 pl-4 ' htmlFor="" >
                                <h1>Amount</h1>
                                <input value={amount} onChange={e => setAmount(e.target.value)} className='bg-[#F3F4F6]' type="text" placeholder='$  000.00' />
                            </label>
                            <h2 className='mt-[22px]'>Category</h2>
                            <select value={category} onChange={e => setCategory(e.target.value)} className="select select-bordered w-full  bg-[#F3F4F6]">
                                <option disabled selected>Find a choose category </option>
                                <option className='flex justify-center items-center'>
                                    Add category
                                </option>
                                <option value={'home'}>Home</option>
                                <option value={'Gift'}>Gift</option>
                                <option value={'Food'}>Food</option>
                                <option value={'Drink'}>Drink</option>
                                <option value={'Taxi'}>Taxi</option>
                                <option value={'Shopping'}>Shopping</option>
                                <option value={'home'}>Home</option>
                                <option value={'home'}>Home</option>
                            </select>
                            <div className='flex gap-[12px] mb-8 mt-[22px]'>
                                <div>
                                    <h2 className='w-[168px]'>Date</h2>
                                    <select value={date} onChange={e => setDate(e.target.value)} className="select select-bordered w-full  bg-[#F3F4F6]">
                                        <option className='text-[#94A3B8]' disabled selected>Oct 30, 2023</option>
                                        <option value="date">date</option>
                                    </select>
                                </div>
                                <div>
                                    <h2 className='w-[168px]'>Time</h2>
                                    <select value={time} onChange={e => setTime(e.target.value)} className="select select-bordered w-full bg-[#F3F4F6]">
                                        <option className='text-[#94A3B8]' disabled selected>4:15 PM</option>
                                        <option value="date">date</option>
                                    </select>
                                </div>
                            </div>
                            <button onClick={addRecords} className={`rounded-[20px] py-2 text-white  ${toggle === 'Expense' ? ' bg-blue' : 'bg-[#16A34A]'}`}> Add Record</button>
                        </div>
                        <div>
                            <h2>Payee </h2>
                            <select value={payee} onChange={e => setPayee(e.target.value)} className="select select-bordered w-[348px] bg-[#F3F4F6]">
                                <option className='text-[#94A3B8]' disabled selected>Write here</option>
                                <option>MNT</option>
                                <option>USD</option>

                            </select>
                            <h2>Note</h2>
                            <input value={note} onChange={e => setNote(e.target.value)} className='bg-[#F3F4F6] border-2 rounded-lg py-3 px-4 w-[348px] pb-[240px]' type="text" placeholder='Write here' />
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}
